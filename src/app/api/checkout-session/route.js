import { NextResponse } from 'next/server';

console.log('Stripe Mode:', process.env.STRIPE_MODE); // Debug log
console.log('Stripe API Key:', STRIPE_SECRET_KEY); // Debug log

// Ensure that the API key exists
if (!STRIPE_SECRET_KEY) {
  throw new Error('Stripe API key is missing! Please check your environment variables.');
}



const STRIPE_SECRET_KEY = process.env.STRIPE_MODE === 'live' ? process.env.STRIPE_SECRET_KEY_LIVE : process.env.STRIPE_SECRET_KEY_TEST 

const stripe = require('stripe')(STRIPE_SECRET_KEY);







export async function POST(req, res) {

    console.log("req.body is:", req.body);
    const { lookup_key, email, userId } = await req.json(); // Get lookup key from the frontend
    console.log("lookup_key in backend is:", lookup_key);
    console.log("email in backend is:", email);
    console.log("userId in backend is:", userId);

    const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

const successPage = `${BASE_URL}/successPage`;
const cancelPage = `${BASE_URL}/cancelPage`;
const userPage = `${BASE_URL}/userPage`;
  

    /*const successPage = `http://localhost:3000/successPage`;
    const cancelPage = `http://localhost:3000/cancelPage`;
    //const userPage = `http://localhost:3000/userPage`;
    const userPage = 'https://tpsl-i72sq7dpf-joejoeboyes2013-gmailcoms-projects.vercel.app/userPage';*/

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
        success_url: `${userPage}/?success=true&session_id={CHECKOUT_SESSION_ID}`,//add page for this
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