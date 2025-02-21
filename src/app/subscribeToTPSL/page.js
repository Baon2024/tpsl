"use client"
import { createClient } from "@supabase/supabase-js"


export default function SubscribeToTPSL() {

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    



    function checkWhetherSubscribedHandler() {
        const userProfile = JSON.parse(localStorage.getItem('userTPSLProfile'));
        return userProfile.subscribed === true; //if userprofile.subscribed is true, then it returns truthy, making disabled true
    }


    async function subscribeButtonHandler() {

        const user = JSON.parse(localStorage.getItem('userTPSL'));
        const userProfile = JSON.parse(localStorage.getItem('userTPSLProfile'));
        console.log("user in subscribeToTPSL is:", user);

        if (userProfile.subscribed === true) {
            return alert("already subscribed!");
        } 

        const email = user.email;
        const userId = user.id;

        console.log("userId and email are:", userId, email);

        //need email and userId

        //do you need to send user's id to backend?
        //what else do you need to send??

        //need to send PRICE_lookup_KEY to backend i think??
        const lookup_key = "monthly_subscription";

        const res = await fetch("/api/checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lookup_key: lookup_key, email: email, userId: userId }),
          });
        
          
          const session = await res.json();
          console.log("session returned to frontend is:", session);

          //store sessionId in user's profile databvase, so can be rteueved for managing sub
          const sessionId = session.session.id;

           
      const { data, error } = await supabase
      .from('profiles')
      .update({
        sessionId: sessionId })
      .eq("id", userId)
      .select()

      console.log("sessionId save function:", { data, error});

          const sessionUrl = session.session.url;
          console.log("sessionUrl you're abiout to be redirect to is:", sessionUrl);
          window.location.href = sessionUrl; // Redirect to Stripe Checkout
        
    }


    return (
        <>
        <p>you need to subscribe to Thepublicschoollist for access</p>
        <h2>no account - up to 10 schools</h2>
        <h2>signed-up but not subscribed - up to 25 schools, save schools</h2>
        <h2>sign-up and subscribed - unlimited access, and everything from previous tier</h2>
        <button disabled={checkWhetherSubscribedHandler()} onClick={subscribeButtonHandler} style={{
                    backgroundColor: checkWhetherSubscribedHandler() ? "#ccc" : "#007bff",
                    color: checkWhetherSubscribedHandler() ? "#666" : "#fff",
                    cursor: checkWhetherSubscribedHandler() ? "not-allowed" : "pointer",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    fontSize: "16px",
                }}>subscribe</button>
        </>
    )
}



//need to redirect to logIn/SignUp, if the user isn't a member/logged-in.