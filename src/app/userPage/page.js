'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
//import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { LogOut, CreditCard, Trash2 } from "lucide-react"


export default function SubscribeToTPSL() {

    const router = useRouter();
    const [ mySchools, setMySchools ] = useState([]);
    const [ subscribed, setSubscribed ] = useState(null);
    const [ triggerReload, setTriggerReload ] = useState();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    function handleLogOut() {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('jwtTPSL');
          localStorage.removeItem('userTPSL');
          localStorage.removeItem('userTPSLProfile');
          //setUser(null); - might need to use this if you filter this down as a prop thrhough oayout
          router.push("/");
        }
      }
    useEffect(() => {
      console.log("the user's schools are:", mySchools);
      console.log("user's subscribed is:", subscribed);
    },[setMySchools, mySchools, setSubscribed, subscribed]);

    async function handleManageSubscription() {

      const userProfile = JSON.parse(localStorage.getItem('userTPSLProfile'))
      const sessionId = userProfile.sessionId;
      console.log("sessionId in frontend is:", sessionId);

      const res = await fetch("/api/manageSubscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionId }),
      });
    
      
      const jsonedResponse = await res.json();
      console.log("data returned to frontend for manage subscription is:", jsonedResponse);

      const url = jsonedResponse.portalSession.url;
      console.log("url to be redirect to is:", url);
      window.location.href = url;

    }

    async function removeSchoolHandler(school) {
      const userData = localStorage.getItem('userTPSL');
      if (userData) {
        //add school to user's school array, with their uid.
        const user = JSON.parse(userData); // Parse the stored user data
        const userId = user.id;
        console.log("userId in save school function is:", userId);
        console.log("selected school to save is:", school);
  
        if (!userId || !school) {
          console.error("User ID or selected school is missing.");
          return;
        }
  
        const { data: profile, error: fetchError } = await supabase
        .from('profiles')
        .select('schools')
        .eq('id', userId)
        .maybeSingle();
  
        console.log("Fetched profile data:", profile);

        setTriggerReload();
  
    if (fetchError) {
      console.error("Error fetching schools:", fetchError);
      return;
    }
  
    
    // 🟢 Step 2: Ensure 'schools' is an array (if NULL, make it an empty array)
    const currentSchools = profile.schools ?? []; // Use nullish coalescing to avoid `null`
  
    console.log("Current schools before update:", currentSchools);
  
    /*const schoolAlreadySaved = currentSchools.some(school => school.documentId === selectedSchool.documentId)
    console.log("schoolAlreadySaved is:", schoolAlreadySaved);
    if (schoolAlreadySaved) {
      alert("school already saved");
      return 
    }*/
  
    const updatedSchools = currentSchools.filter(sch => sch.documentId !== school.documentId);
  
    console.log("Updated schools:", updatedSchools);
  
        
        const { data, error } = await supabase
        .from('profiles')
        .update({
          schools: updatedSchools })
        .eq("id", userId)
        .select()

        setMySchools(updatedSchools);
          
      } else {
        alert("You need to be a member to use this feature!")
      }
    }

    useEffect(() => {

      

      async function getUserSchools() {
        const userData = localStorage.getItem('userTPSL');
      const user = JSON.parse(userData); // Parse the stored user data
      const userId = user.id;
      console.log("userId in save school function is:", userId);
      //console.log("selected school to save is:", selectedSchool);

      const userProfile = JSON.parse(localStorage.getItem('userTPSLProfile'));
      console.log("Retrieved profile:", userProfile);
      console.log("and scholls would be:", userProfile?.schools);
      //setMySchools(userProfile.schools);
      setSubscribed(userProfile?.subscribed)

      if (!userId) {
        console.error("User ID or selected school is missing.");
        return;
      }

      const { data: mySchools, error: fetchError } = await supabase
      .from('profiles')
      .select('schools')
      .eq('id', userId)
      .maybeSingle();

      console.log("Fetched user's schools data:", mySchools.schools);
      setMySchools(mySchools.schools);
      setTriggerReload();
    }

      getUserSchools();
    },[])



    useEffect(() => {
      console.log("page reloading...")
    },[triggerReload])

    return (
        <>
        {/*<p>This is the userPage</p>
        <button onClick={handleLogOut}>log out</button>
        {subscribed && (
        <Button onClick={handleManageSubscription}>Manage my subscription</Button>
        )}
        <h1>My Saved Schools</h1>
        { mySchools && mySchools.map((school, index) => (
          <div key={index}>
            <p>{school.schoolName}</p>
            <Button onClick={(e) => removeSchoolHandler(school)}>remove school</Button>
          </div>
        ))}*/}
        <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">My Account</h1>
        <div className="flex gap-4">
          <Button variant="outline" onClick={handleLogOut} className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Log out
          </Button>
          {subscribed && (
            <Button onClick={handleManageSubscription} className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Manage Subscription
            </Button>
          )}
        </div>
      </div>

      <Separator className="my-6" />

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">My Saved Schools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mySchools &&
            mySchools.map((school) => (
              <Card key={school.documentId} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={school.schoolImage || "/placeholder.svg"}
                    alt={school.schoolName}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg line-clamp-2">{school.schoolName}</h3>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    variant="destructive"
                    onClick={() => removeSchoolHandler(school)}
                    className="w-full flex items-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove School
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>

        {mySchools?.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">You haven&apos;t saved any schools yet.</div>
        )}
      </div>
    </div>
        </>
    )
}