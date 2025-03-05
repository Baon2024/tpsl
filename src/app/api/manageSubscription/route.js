import { NextResponse } from 'next/server';

const STRIPE_SECRET_KEY = process.env.STRIPE_MODE === 'live' ? process.env.STRIPE_SECRET_KEY_LIVE : process.env.STRIPE_SECRET_KEY_TEST 

const stripe = require(STRIPE_SECRET_KEY);




//const stripe = require('stripe')('sk_test_51QNlAaG7WeMIf1DGWcfnC8nYS9rHZVfB55lhSFZ0fNFWjsbkjIpsPYAaeQmK2GyOOJL8FI32LlW926jtwyq4nsuV000FAqeymS');



export async function POST(req, res) {

    try {

    const { sessionId } = await req.json();
    console.log("sessionId in backend is:", sessionId);
      
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
    console.log("checkoutSession in manageSubscription endpoint is:", checkoutSession);

    // This is the url to which the customer will be redirected when they're done
    // managing their billing with the portal.
    const returnUrl = 'http://localhost:3000/userPage';
  
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: checkoutSession.customer,
      return_url: returnUrl,
    });
    
      //res.redirect(303, session.url);
      return NextResponse.json({ portalSession: portalSession });
      //what do i need to change for nextJS??
    
   
  }
  catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: error.message });
  }
}