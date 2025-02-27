'use client'

import { useParams } from 'next/navigation';
import { schoolsSampleData } from '@/app/components/schoolsList';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"
import { Building2, GraduationCap, Mail, MapPin, Phone } from 'lucide-react'
//import EnquireButton from '@/app/components/enquireButton';
import { Separator } from "@/components/ui/separator";
//import SchoolMap from '@/app/components/schoolMap';
import 'leaflet/dist/leaflet.css';
import { useSchoolCompare } from '@/app/schoolCompareContext';
import SchoolsToCompare from '@/app/SchoolsToCompare/page';
import SimpleFeedbackForm from '@/app/components/schoolFeedbackForm';
import { createClient } from '@supabase/supabase-js';
//import SchoolMap from "@/app/components/schoolMap";
import dynamic from 'next/dynamic';

const SchoolMap = dynamic(() => import('@/app/components/schoolMap'), { ssr: false });

console.log("these are the schools: ", schoolsSampleData);
//need a way to retrieve id form url

export default function societyPage()  {
    
    const { societyId } = useParams();
    const numberSocietyId = Number(societyId);
    const selectedSchoolArray = schoolsSampleData.filter(school => school.documentId === numberSocietyId);
    console.log("This is the selected school:", selectedSchoolArray);
    
    if (typeof window !== "undefined") {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    }

    const selectedSchool = selectedSchoolArray[0];

    const { schoolImage, schoolEmail, siblingDiscount, schoolPhoneNumber, latitude, forceScheme, established, schoolDescription, longitude, feesScheme, Bursaries, scholarships, schoolLocation, schoolName, enquireUrl, totalSchoolFees } = selectedSchool;
    console.log("scholarships on schoolPage is:", scholarships);

    console.log("fees scheme is:", feesScheme);

    console.log("societyId type:", typeof societyId);  // Should be string or number
console.log("documentId type:", typeof schoolsSampleData[0].documentId);  // Should be string or number

console.log("latitude, longitude are:", latitude, longitude);

//need to format totalSchoolFees;

function formatToGBP(number) {
    return new Intl.NumberFormat('en-GB').format(number);
  }

  let formattedTotalSchoolFees;

  console.log("totalSchoolFees are:", totalSchoolFees);
  if (Array.isArray(totalSchoolFees)) {

    formattedTotalSchoolFees = totalSchoolFees.map(fee => formatToGBP(fee));
  }
  else {
    formattedTotalSchoolFees = formatToGBP(totalSchoolFees);
  }
  /*= formatToGBP(totalSchoolFees[0]);*/
  console.log("formattedSchoolFees are:", formattedTotalSchoolFees);

  const feePaymemtScheme = true; //just creating local fake version, whilst testing
  const feePaymemtSchemeDetailFiller = "just some filler stuff";

  let feePaymemtSchemeDetail;

  if (feesScheme) {
    feePaymemtSchemeDetail = feesScheme;
  } else {
    feePaymemtSchemeDetail = feePaymemtSchemeDetailFiller;
  }

  console.log("feepaymentschemedetails is:", feePaymemtSchemeDetail);

  //const siblingDiscount = true;
  //const siblingDiscountDetail = "filler stuff"

//could add a feature that shows ranking, with a slider for non-logged in viewer to add a rating
//onChange, it would send rating to be added to school.rating array of ratings
//every time school is loaded on this page, rating would be calculated by combined rating total divided by number of ratings
//using the array. then display that (and coudl diusplay it inly if there is a minimum number of ratings)
    
/*
<p>placeholder for individual society page: {societyId}</p>
          <p>Your selected School is: {selectedSchool.schoolName}</p>
          <button>Enquire</button>
*/
const [isSubmitting, setIsSubmitting] = useState(false)
const [ scholarshipSavings, setScholarshipSavings ] = useState(null);
const [ addButton, setAddButton ] = useState(true);
const [ removeButton, setRemoveButton ] = useState(false);

console.log("scholarship.percentageOfFees is:", scholarships?.percentageOfFees?.length);
console.log(scholarships?.percentageOfFees);

console.log("forceScheme is:", forceScheme);

const { schoolsToCompare, setSchoolsToCompare } = useSchoolCompare();

function addSchoolCompareHandler() {

  console.log("schoolsToCompare is:", schoolsToCompare);
  console.log("selectedSchool is:", selectedSchool);

  if (schoolsToCompare === undefined || !schoolsToCompare.some((school) => school.documentId === selectedSchool.documentId)) {

  setSchoolsToCompare((prev) => [...prev, selectedSchool]);
  setAddButton(false);
  setRemoveButton(true);
  }
}

function removeSchoolCompareHandler() {
  console.log("schoolsToCompare is:", schoolsToCompare);
  console.log("selectedSchool is:", selectedSchool);


  setSchoolsToCompare(prev => prev.filter(school => school.documentId !== selectedSchool.documentId));
  setRemoveButton(false);
  setAddButton(true);
}


  const handleEnquirySubmit = async (e) => {
    /*e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)*/
  }


  console.log("bursaries length is:", Bursaries.percentageOfFees)

  /*useEffect(() => {
    if (
      Array.isArray(scholarships.percentageOfFees) &&
      scholarships.percentageOfFees.length === 2 &&
      scholarships.percentageOfFees.every((value) => typeof value === 'number')
    ) {
      const firstNumber = (totalSchoolFees / 100) * scholarships.percentageOfFees[0];
      const secondNumber = (totalSchoolFees / 100) * scholarships.percentageOfFees[1];
      setScholarshipSavings([firstNumber, secondNumber]);
    } else if (typeof scholarships.percentageOfFees === 'number') {
      const totalNumber = (totalSchoolFees / 100) * scholarships.percentageOfFees;
      setScholarshipSavings(totalNumber);
    } else if (typeof scholarships.percentageOfFees === 'string') {
      setScholarshipSavings(scholarships.percentageOfFees);
    }
  }, [scholarships.percentageOfFees, totalSchoolFees]);

  
useEffect(() => {
    console.log("scholarshipSavings is:", scholarshipSavings)
},[scholarshipSavings])*/


  //let latitude;
  //let longitude;

  const schoolData = {
    latitude: 52.48159562701197, //52.48159562701197, -0.4688750335594431
    longitude: -0.4688750335594431,
    name: "Example School",
  };

  async function saveSchoolHandler() {
    if (typeof window !== "undefined") {
    const userData = localStorage.getItem('userTPSL');
    if (userData) {
      //add school to user's school array, with their uid.
      const user = JSON.parse(userData); // Parse the stored user data
      const userId = user.id;
      console.log("userId in save school function is:", userId);
      console.log("selected school to save is:", selectedSchool);

      if (!userId || !selectedSchool) {
        console.error("User ID or selected school is missing.");
        return;
      }

      const { data: profile, error: fetchError } = await supabase
      .from('profiles')
      .select('schools')
      .eq('id', userId)
      .maybeSingle();

      console.log("Fetched profile data:", profile);

  if (fetchError) {
    console.error("Error fetching schools:", fetchError);
    return;
  }

  
  // 🟢 Step 2: Ensure 'schools' is an array (if NULL, make it an empty array)
  const currentSchools = profile.schools ?? []; // Use nullish coalescing to avoid `null`

  console.log("Current schools before update:", currentSchools);

  const schoolAlreadySaved = currentSchools.some(school => school.documentId === selectedSchool.documentId)
  console.log("schoolAlreadySaved is:", schoolAlreadySaved);
  if (schoolAlreadySaved) {
    alert("school already saved");
    return 
  }

  const updatedSchools = [...currentSchools, selectedSchool];

  console.log("Updated schools:", updatedSchools);

      
      const { data, error } = await supabase
      .from('profiles')
      .update({
        schools: updatedSchools })
      .eq("id", userId)
      .select()
        
    } else {
      alert("You need to be a member to use this feature!")
    }
   }
  }


  //const EnquireButton = ({ enquireUrl }) => <Button className="w-full mt-4">Contact School</Button>
  const EnquireButton = ({ enquireUrl }) => (
    <Button 
      className="w-full mt-4" 
      onClick={() => window.open(enquireUrl, "_blank")}
    >
      Contact School
    </Button>
  );


  return (
    <div className="min-h-screen bg-gray-50/50 pb-12">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden bg-gray-900 lg:h-[400px]">
        <img
          src={schoolImage}
          alt={schoolName}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white lg:text-6xl">{schoolName}</h1>
            <Badge variant="secondary" className="mt-4 text-lg">
              {established}
            </Badge>
          </div>
        </div>
      </div>
      

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* School Information */}
          <div className="lg:col-span-2">
          <Card>
        <CardContent className="p-6">
        <div id="school-details" className="flex flex-col lg:flex-row gap-6">
            {/* School Details */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold">About {schoolName}</h2>
              <p className="mt-4 text-gray-600">{schoolDescription}</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  {schoolLocation}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-5 w-5" />
                 {schoolPhoneNumber}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-5 w-5" />
                  {schoolEmail}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="flex-1">
              
                <SchoolMap
                  latitude={latitude || 52.48159562701197}
                  longitude={longitude || -0.4688750335594431}
                  schoolName={schoolName}
                />
             
            </div>
            </div>
        </CardContent>
      </Card>


            {/* Bursaries & Scholarships */}
              {/*<Card className="mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    <h2 className="text-2xl font-bold">Bursaries & Scholarships</h2>
                  </div>
                  <div className="mt-6 grid gap-6 sm:flex sm:flex-row sm:gap-8">
      
      {scholarships.scholarshipsAvailable && (
        <div className="w-full sm:w-1/2">
          <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md">
            <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md">
              <h3 className="font-semibold">Scholarships Information</h3>
              <p className="mt-2 text-sm text-gray-600">{scholarships.scholarshipsDetail}</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md mt-6">
              <h3 className="font-semibold">Scholarships Value</h3>
              <p className="mt-2 text-sm text-gray-600">  {Array.isArray(scholarships.percentageOfFees) &&
  scholarships.percentageOfFees.length === 2 &&
  scholarships.percentageOfFees.every((value) => typeof value === 'number')
    ? `from ${scholarships.percentageOfFees[0]}% to ${scholarships.percentageOfFees[1]}%`
    : typeof scholarships.percentageOfFees === 'number'
    ? `${scholarships.percentageOfFees}%`
    : typeof scholarships.percentageOfFees === 'string'
    ? scholarships.percentageOfFees
    : 'N/A'}</p>
            </div>
          </div>
        </div>
      )}

     
      {Bursaries.BursariesAvailable && (
        <div className="w-full sm:w-1/2">
          <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md">
            <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md">
              <h3 className="font-semibold">Bursary Information</h3>
              <p className="mt-2 text-sm text-gray-600">{Bursaries.BursariesDetail}</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md mt-6">
              <h3 className="font-semibold">Bursary Value</h3>
              <p className="mt-2 text-sm text-gray-600">{Array.isArray(Bursaries.percentageOfFees) &&
                        Bursaries.percentageOfFees.length === 2
                          ? `${(
                              ((Bursaries.percentageOfFees[0])
                            ).toLocaleString())} - ${(
                              ((Bursaries.percentageOfFees[1])
                            ).toLocaleString())}%`
                          : typeof Bursaries.percentageOfFees === "number"
                          ? `${
                              (((Bursaries.percentageOfFees)
                            ).toLocaleString())}%`
                          : Bursaries.percentageOfFees}</p>
            </div>
          </div>
        </div>
      )}
    </div>
                </CardContent>
              </Card>
          </div>*/}

          <Card className="mt-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Financial Support</h2>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  {scholarships.scholarshipsAvailable && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Scholarships</h3>
                      <Separator />
                      <p className="text-gray-600">{scholarships.scholarshipsDetail}</p>
                      <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                        <p className="text-sm text-gray-600">Value:</p>
                        <p className="text-2xl font-bold text-primary">
                          {Array.isArray(scholarships.percentageOfFees) &&
                          scholarships.percentageOfFees.length === 2
                            ? `${scholarships.percentageOfFees[0]}% - ${scholarships.percentageOfFees[1]}%`
                            : typeof scholarships.percentageOfFees === "number"
                            ? `${scholarships.percentageOfFees}%`
                            : `${scholarships.percentageOfFees}`}
                        </p>
                      </div>
                    </div>
                  )}

                  {Bursaries.BursariesAvailable && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Bursaries</h3>
                      <Separator />
                      <p className="text-gray-600">{Bursaries.BursariesDetail}</p>
                      <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                        <p className="text-sm text-gray-600">Value:</p>
                        <p className="text-2xl font-bold text-primary">
                        {Array.isArray(Bursaries.percentageOfFees) &&
                        Bursaries.percentageOfFees.length === 2
                          ? `${(
                              ((Bursaries.percentageOfFees[0])
                            ).toLocaleString())}% - ${(
                              ((Bursaries.percentageOfFees[1])
                            ).toLocaleString())}%`
                          : typeof Bursaries.percentageOfFees === "number"
                          ? `${
                              (((Bursaries.percentageOfFees)
                            ).toLocaleString())}%`
                          : `${Bursaries.percentageOfFees}`}
                        </p>
                      </div>
                    </div>
                  )}

                   {feesScheme?.feesSchemeAvailability && (
              
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Fee Payment Scheme</h3>
                  <Separator />
                
                  <p className="mt-2 text-gray-600">{feesScheme.feesSchemeDetails}</p>
                </div>
               
             
            )}
             {siblingDiscount?.siblingsDiscountAvailable && (
              
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Sibling Discount Scheme</h3>
                  <Separator />
                  <p className="mt-2 text-gray-600">{siblingDiscountDetail}</p>
                </div>
                
            )}

            {forceScheme?.forceSchemeAvailable && (
              
                
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Armed Forces scheme</h3>
                <Separator />
                {forceScheme?.forcesSchemeDescription.map((sentence) => (
                  <p className="mt-2 text-gray-600">{sentence}</p>
                ))}
                { forceScheme.percentageOfFees && (
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-gray-600">Value:</p>
                  <p className="text-2xl font-bold text-primary">
                  {Array.isArray(forceScheme?.percentageOfFees) &&
                    forceScheme.percentageOfFees.length === 2
                      ? `${(
                          ((forceScheme?.percentageOfFees[0])
                        ).toLocaleString())}% - ${(
                          ((forceScheme?.percentageOfFees[1])
                        ).toLocaleString())}%`
                      : typeof forceScheme?.percentageOfFees === "number"
                      ? `${
                          (((forceScheme?.percentageOfFees)
                        ).toLocaleString())}%`
                      : forceScheme?.percentageOfFees}
                    </p>
                    </div>
                )}
              </div>
              
          )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enquiry Form */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Building2 className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Enquire Now</h2>
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <EnquireButton enquireUrl={enquireUrl} />
                  </SheetTrigger>
                </Sheet>
                </div>
                {(addButton || removeButton) && <Separator className="my-4" />}

{addButton && (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Compare Now</h2>
    <Button onClick={addSchoolCompareHandler} variant="outline" className="w-full">
      Add School
    </Button>
  </div>
)}

{removeButton && (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Compare Now</h2>
    <Button onClick={removeSchoolCompareHandler} variant="outline" className="w-full">
      Remove School
    </Button>
  </div>
)}
              </CardContent>
            </Card>

            <Card className="sticky top-8 mt-6">
              <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                    Fees and Potential Savings
                  </h2>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="font-semibold">Annual School Fees</h3>
                    <p className="mt-2 text-2xl font-bold text-primary">
                      {Array.isArray(formattedTotalSchoolFees) && formattedTotalSchoolFees.length === 2 
                      ? `from £${formattedTotalSchoolFees[0]} to £${formattedTotalSchoolFees[1]}` 
                      : !Array.isArray(formattedTotalSchoolFees) && `£${formattedTotalSchoolFees}`}
                      
                    </p>
                  </div>

                  
                  {scholarships.scholarshipsAvailable && (
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="font-semibold">Potential Annual Scholarship Savings</h3>
                      <p className="mt-2 text-xl font-semibold text-green-600">
                        {Array.isArray(scholarships.percentageOfFees) &&
                        scholarships.percentageOfFees.length === 2
                          ? `£${(
                              ((totalSchoolFees[0] / 100 * scholarships.percentageOfFees[0])
                            ).toLocaleString())} - £${(
                              ((totalSchoolFees[1] / 100 * scholarships.percentageOfFees[1])
                            ).toLocaleString())}`
                          : typeof scholarships.percentageOfFees === "number"
                          ? `£${(
                              (((totalSchoolFees / 100) * scholarships.percentageOfFees)
                            ).toLocaleString())}`
                          : scholarships.percentageOfFees}
                      </p>
                    </div>
                  )}

                  

                {Bursaries.BursariesAvailable && (
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="font-semibold">Potential Annual Bursary Savings</h3>
                      <p className="mt-2 text-xl font-semibold text-green-600">
                      {Array.isArray(Bursaries.percentageOfFees) &&
                        Bursaries.percentageOfFees.length === 2
                          ? `£${(
                              ((totalSchoolFees[0] / 100 * Bursaries.percentageOfFees[0])
                            ).toLocaleString())} - £${(
                              ((totalSchoolFees[1] / 100 * Bursaries.percentageOfFees[1])
                            ).toLocaleString())}`
                          : typeof Bursaries.percentageOfFees === "number"
                          ? `£${(
                              (((totalSchoolFees / 100) * Bursaries.percentageOfFees)
                            ).toLocaleString())}`
                          : Bursaries.percentageOfFees}
                      </p>
                    </div>
                  )}

                  {forceScheme?.scholarshipsAvailable && (
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="font-semibold">Potential Armed Forces Savings</h3>
                      <p className="mt-2 text-xl font-semibold text-green-600">
                        {Array.isArray(forceScheme?.percentageOfFees) &&
                        forceScheme?.percentageOfFees.length === 2
                          ? `From £${(
                              ((totalSchoolFees / 100 * forceScheme?.percentageOfFees[0])
                            ).toLocaleString())} - £${(
                              ((totalSchoolFees / 100 * forceScheme.percentageOfFees[1])
                            ).toLocaleString())}`
                          : typeof forceScheme?.percentageOfFees === "number"
                          ? `From £${(
                              (((totalSchoolFees / 100) * forceScheme?.percentageOfFees)
                            ).toLocaleString())}`
                          : `From ${forceScheme?.percentageOfFees}`}
                      </p>
                    </div>
                  )}
                  <SimpleFeedbackForm schoolName={schoolName} />
                  <Button onClick={saveSchoolHandler}>save school</Button>

                </div>
              </CardContent>
            </Card>


            

          </div>
        </div>
      </main>
    </div>
  )

   
}