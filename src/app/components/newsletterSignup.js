import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

export default function NewsletterSignup() {

  const [ email, setEmail ] = useState('');
  const [ successBox, setSuccessBox ] = useState(false);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

  async function subscribeEmailHandler() {
    console.log("value of email is:", email);

    if (email) {
      setSuccessBox(false);
      
     const { data, error } = await supabase
    .from("email CRM")
    .insert([{ email: email }]);
    //.select();

  if (error) {
    console.error("Error subscribing:", error.message);
  } else {
    console.log("Successfully subscribed:", data);
    setEmail('');
    //alert("successfully subscribed to mail list!");
    setSuccessBox(true);
  }
        
    }
  }



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-[400px] space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-[32px] font-semibold tracking-tight">Subscribe to Updates</h1>
          <p className="text-[14px] text-[#666666]">Get notified about new features and updates</p>
        </div>

        {/* Email Form */}
        <div className="space-y-4">
          <div className="relative">
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="h-[42px] border-gray-200" required />
          </div>
          <Button type="submit" onClick={subscribeEmailHandler} className="w-full h-[42px] bg-black text-white hover:bg-black/90">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe with Email
          </Button>
        </div>

        {/* Footer Links */}
        <div className="text-center">
          <p className="text-[13px] text-[#666666]">
            By subscribing, you agree to our{" "}
            <Link href="#" className="text-[#0070F3] hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#0070F3] hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
        {successBox && (
          <div><p>Successfully signed up!</p></div>
          )}
      </div>
    </div>
  )
}