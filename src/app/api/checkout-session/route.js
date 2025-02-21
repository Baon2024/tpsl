import { NextResponse } from 'next/server';

const stripe = require('stripe')('sk_test_51QNlAaG7WeMIf1DGWcfnC8nYS9rHZVfB55lhSFZ0fNFWjsbkjIpsPYAaeQmK2GyOOJL8FI32LlW926jtwyq4nsuV000FAqeymS');







export async function POST(req, res) {

    console.log("req.body is:", req.body);
    const { lookup_key, email, userId } = await req.json(); // Get lookup key from the frontend
    console.log("lookup_key in backend is:", lookup_key);
    console.log("email in backend is:", email);
    console.log("userId in backend is:", userId);
  

    const successPage = `http://localhost:3000/successPage`;
    const cancelPage = `http://localhost:3000/cancelPage`;

    try {

    const prices = await stripe.prices.list({
        lookup_keys: [lookup_key],
        expand: ['data.product'],
      });
      const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'auto',
        line_items: [
          {
            price: prices.data[0].id,
            // For metered billing, do not pass quantity
            quantity: 1,
    
          },
        ],
        mode: 'subscription',
        customer_email: email, // Ensures user gets receipts and invoices
        metadata: { userId, email }, // ✅ Stores user data for webhook processing
        success_url: `${successPage}/?success=true&session_id={CHECKOUT_SESSION_ID}`,//add page for this
        cancel_url: `${cancelPage}?canceled=true`,//add page for this
      });

      console.log("sessionId about to be returned is:", session);


      

    
      //res.redirect(303, session.url);
      return NextResponse.json({ session: session });
      //what do i need to change for nextJS??
    
   
  }
  catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: error.message });
  }
}