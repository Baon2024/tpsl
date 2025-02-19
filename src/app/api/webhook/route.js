

console.log("Loaded env variables:", process.env);  // Log all environment variables
import { Resend } from "resend";

console.log("Resend API Key:", process.env.RESEND_API_KEY);
const resend = new Resend('re_YpWnbT4L_PQ8CEmJHfX1qQirn1bHf4MpK');
console.log("resend is:", resend);


import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { ConsoleSqlOutlined } from "@ant-design/icons";
//import { buffer } from "micro"; // ✅ Required for raw body parsing

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)


const stripe = require('stripe')('sk_test_51QNlAaG7WeMIf1DGWcfnC8nYS9rHZVfB55lhSFZ0fNFWjsbkjIpsPYAaeQmK2GyOOJL8FI32LlW926jtwyq4nsuV000FAqeymS');
//const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY); // Use service role for admin writes
const stripeWebhookSecret = 'whsec_d841e887e13b7130ce9da8227aafc1a2c38c9289b03f48f955943ed25a67adc6'; 


// ✅ Disable automatic body parsing in Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};



// ✅ Utility function to convert stream to buffer
async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}


export async function POST(req) {
  try {
    
    console.log("🔔 Webhook received!");

    // ✅ Get raw body as a buffer (fixes "ReadableStream is locked" error)
    const rawBody = await req.arrayBuffer();
    const sig = req.headers.get("stripe-signature");

    // ✅ Verify the webhook signature
    const event = stripe.webhooks.constructEvent(Buffer.from(rawBody), sig, stripeWebhookSecret);

    console.log("✅ Stripe event:", event.type, "and here's the event:", event);
    

    // Process successful checkout
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("session in webhookd backend is:", session);

      const userId = session.metadata.userId; // Ensure you have this in Stripe metadata
      const email = session.metadata.email;

      console.log("userId and email in wbehook are:", userId, email);

      //send email to confirm subscription - use react email for nice UI, and send with resend
      if (email === 'joejoeboyes2013@gmail.com') { //change to any email, once you have resend sub up

        const invoiceId = session.invoice;
        const invoice = await stripe.invoices.retrieve(invoiceId);
        console.log("Invoice details:", invoice);

        const hostedInvoiceUrl = invoice.hosted_invoice_url
        const invoicePdf = invoice.invoice_pdf

        const message = `You have been subscribed to thePublicSchoolList. You can view your invoice here: ${hostedInvoiceUrl}, an download your invoice as a pdf: ${invoicePdf}`;
        const subject = "Subscription purchased!";

        console.log("Message:", message, "Subject:", subject);

        

    // Send email using Resend
    const emailResponse = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",  // Your email or domain
        to: ["joejoeboyes2013@gmail.com"],  // Recipient email
        subject: subject,
        text: message, // Send plain text message
        html: `<p>${message}</p>`, // Send HTML message (optional)
    });

    console.log("Email sent successfully:", emailResponse);

      

      }

      //okay now add supabase update of suer's profile table row, so they have subscription
      const { data, error } = await supabase
      .from('profiles')
      .update({
        subscribed: true})
      .eq("id", userId)
      .select()

      console.log("data returned from supabse update of user in backend:", { data, error });
      
     


    }

    return NextResponse.json({ received: true }, { status: 200 }); // ✅ Sends a response
  } catch (error) {
    console.error("❌ Error in webhook:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}