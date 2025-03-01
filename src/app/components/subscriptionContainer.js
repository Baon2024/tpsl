'use client'
import PricingCard from "./pricingCard"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Check, X } from "lucide-react"
import { createClient } from "@supabase/supabase-js"
//import { Check } from "lucide-react"
//import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Router } from "lucide-react"
import { useRouter } from "next/dist/client/components/navigation"

const plans = [
    {
      name: "Starter",
      monthlyPrice: 15,
      annualPrice: 150,
      features: ["Up to 10,000 data points per month", "Email support", "Community forum access", "Cancel anytime"],
      color: "emerald",
    },
    {
      name: "Pro",
      monthlyPrice: 40,
      annualPrice: 400,
      featured: true,
      features: [
        "Advanced analytics dashboard",
        "Customizable reports and charts",
        "Real-time data tracking",
        "Integration with third-party tools",
        "Everything in Starter Plan",
      ],
      color: "purple",
    },
    {
      name: "Premium",
      monthlyPrice: 120,
      annualPrice: 1200,
      features: [
        "Unlimited data storage",
        "Customizable dashboards",
        "Advanced data segmentation",
        "Real-time data processing",
        "AI-powered insights and recommendations",
        "Everything in Pro Plan",
      ],
      color: "pink",
    },
  ]
  
  const colorClasses = {
    emerald: {
      gradient: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      text: "text-emerald-400",
      button: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    },
    purple: {
      gradient: "bg-gradient-to-br from-purple-400 to-purple-600",
      text: "text-purple-400",
      button: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    pink: {
      gradient: "bg-gradient-to-br from-pink-400 to-pink-600",
      text: "text-pink-400",
      button: "bg-gradient-to-r from-pink-400 to-pink-600",
    },
  }

  function checkWhetherSubscribedHandler() {
    const userProfile = JSON.parse(localStorage.getItem('userTPSLProfile'));
    return userProfile?.subscribed === true; //if userprofile.subscribed is true, then it returns truthy, making disabled true
}

async function subscribeButtonHandler() {

  const user = JSON.parse(localStorage.getItem('userTPSL'));
  const userProfile = JSON.parse(localStorage.getItem('userTPSLProfile'));
  console.log("user in subscribeToTPSL is:", user);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey)

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



export default function PricingPage(setSubscriptionModalBox, subscriptionModalBox) {

  const router = useRouter();

  function handleCloseModal() {
    
    setSubscriptionModalBox(false);
  }

  function getStartedHandler() {
    setSubscriptionModalBox(false);
  }

  function signUpHandler() {
    console.log("now redirevtcing to logInSignUp page...");
    router.push('/logInSignUp');
  }
  


  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white z-[1000] rounded-t-xl shadow-2xl">
      <div className="relative p-4 pb-6">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 p-1 z-10"
          onClick={handleCloseModal}
        >
          <X size={20} />
        </button>

        <div className="flex gap-4 pt-4">
          {/* Free Tier */}
          <Card className="flex-1">
            <CardHeader className="space-y-1 p-4">
              <CardTitle className="text-xl">Basic Access</CardTitle>
              <CardDescription>For new users exploring the platform</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">Free</div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Access up to 10 schools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Compare selected schools</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full" variant="outline" onClick={getStartedHandler}>
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Signed Up Tier */}
          <Card className="flex-1 border-primary">
            <CardHeader className="space-y-1 p-4">
              <CardTitle className="text-xl">Standard Access</CardTitle>
              <CardDescription>For registered users</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">Free</div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Access up to 25 schools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Save favorite schools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Enhanced search features</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full" onClick={signUpHandler}>Sign Up</Button>
            </CardFooter>
          </Card>

          {/* Premium Tier */}
          <Card className="flex-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-2 py-0.5 bg-primary text-primary-foreground text-xs">
              Best Value
            </div>
            <CardHeader className="space-y-1 p-4">
              <CardTitle className="text-xl">Premium Access</CardTitle>
              <CardDescription>For unlimited access</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div>
                <span className="text-2xl font-bold text-green-600">£9.99</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Unlimited school access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Save favorite schools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Advanced search features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Premium support</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <button
                disabled={checkWhetherSubscribedHandler()}
                onClick={subscribeButtonHandler}
                className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-colors
                  ${
                    checkWhetherSubscribedHandler()
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
              >
                Subscribe
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
      
}
