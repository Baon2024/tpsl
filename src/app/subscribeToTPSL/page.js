"use client"


export default function SubscribeToTPSL() {



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
          const sessionUrl = session.session.url;
          console.log("sessionUrl you're abiout to be redirect to is:", sessionUrl);
          window.location.href = sessionUrl; // Redirect to Stripe Checkout
        
    }


    return (
        <>
        <p>you need to subscribe to Thepublicschoollist for access</p>
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