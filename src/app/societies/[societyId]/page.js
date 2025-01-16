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
import EnquireButton from '@/app/components/enquireButton';
import { Separator } from "@/components/ui/separator";
import SchoolMap from '@/app/components/schoolMap';
import 'leaflet/dist/leaflet.css';


console.log("these are the schools: ", schoolsSampleData);
//need a way to retrieve id form url

export default function societyPage()  {
    
    const { societyId } = useParams();
    const numberSocietyId = Number(societyId);
    const selectedSchoolArray = schoolsSampleData.filter(school => school.documentId === numberSocietyId);
    console.log("This is the selected school:", selectedSchoolArray);

    

    const selectedSchool = selectedSchoolArray[0];

    const { schoolImage, Bursaries, scholarships, schoolLocation, schoolName, enquireUrl, totalSchoolFees } = selectedSchool;
    console.log("scholarships on schoolPage is:", scholarships);

    console.log("societyId type:", typeof societyId);  // Should be string or number
console.log("documentId type:", typeof schoolsSampleData[0].documentId);  // Should be string or number

//need to format totalSchoolFees;

function formatToGBP(number) {
    return new Intl.NumberFormat('en-GB').format(number);
  }

  const formattedTotalSchoolFees = formatToGBP(totalSchoolFees);

  const feePaymemtScheme = true; //just creating local fake version, whilst testing
  const feePaymemtSchemeDetail = "just some filler stuff";

  const siblingDiscount = true;
  const siblingDiscountDetail = "filler stuff"

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

console.log("scholarship.percentageOfFees is:", scholarships.percentageOfFees.length);
console.log(scholarships.percentageOfFees[0], scholarships.percentageOfFees[1]);


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


  let latitude;
  let longitude;

  const schoolData = {
    latitude: 52.48159562701197, //52.48159562701197, -0.4688750335594431
    longitude: -0.4688750335594431,
    name: "Example School",
  };

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
              Est. 1875
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
              <h2 className="text-2xl font-bold">About Our School</h2>
              <p className="mt-4 text-gray-600">empty right now</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  {schoolLocation}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-5 w-5" />
                  N/A
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-5 w-5" />
                  N/A
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="flex-1">
              
                <SchoolMap
                  latitude={schoolData.latitude}
                  longitude={schoolData.longitude}
                  schoolName={schoolData.name}
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
                        <p className="text-sm text-gray-600">Value range:</p>
                        <p className="text-2xl font-bold text-primary">
                          {Array.isArray(scholarships.percentageOfFees) &&
                          scholarships.percentageOfFees.length === 2
                            ? `${scholarships.percentageOfFees[0]}% - ${scholarships.percentageOfFees[1]}%`
                            : typeof scholarships.percentageOfFees === "number"
                            ? `${scholarships.percentageOfFees}%`
                            : scholarships.percentageOfFees}
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
                        <p className="text-sm text-gray-600">Maximum value:</p>
                        <p className="text-2xl font-bold text-primary">
                        {Array.isArray(Bursaries.percentageOfFees) &&
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
                          : Bursaries.percentageOfFees}
                        </p>
                      </div>
                    </div>
                  )}

                   {feePaymemtScheme && (
              
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Fee Payment Scheme</h3>
                  <Separator />
                  <p className="mt-2 text-gray-600">{feePaymemtSchemeDetail}</p>
                </div>
               
             
            )}
             {siblingDiscount && (
              
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Sibling Discount Scheme</h3>
                  <Separator />
                  <p className="mt-2 text-gray-600">{siblingDiscountDetail}</p>
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
                <div className="flex items-center gap-2">
                  <Building2 className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Enquire Now</h2>
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <EnquireButton enquireUrl={enquireUrl} />
                  </SheetTrigger>
                </Sheet>
              </CardContent>
            </Card>

            <Card className="sticky top-8 mt-6">
              <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                    Fees and Potential Savings
                  </h2>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="font-semibold">Total School Fees</h3>
                    <p className="mt-2 text-2xl font-bold text-primary">
                      {`from £${formattedTotalSchoolFees}`}
                    </p>
                  </div>

                  
                  {scholarships.scholarshipsAvailable && (
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="font-semibold">Potential Scholarship Savings</h3>
                      <p className="mt-2 text-xl font-semibold text-green-600">
                        {Array.isArray(scholarships.percentageOfFees) &&
                        scholarships.percentageOfFees.length === 2
                          ? `£${(
                              ((totalSchoolFees / 100 * scholarships.percentageOfFees[0])
                            ).toLocaleString())} - £${(
                              ((totalSchoolFees / 100 * scholarships.percentageOfFees[1])
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
                      <h3 className="font-semibold">Potential Bursary Savings</h3>
                      <p className="mt-2 text-xl font-semibold text-green-600">
                      {Array.isArray(Bursaries.percentageOfFees) &&
                        Bursaries.percentageOfFees.length === 2
                          ? `£${(
                              ((totalSchoolFees / 100 * Bursaries.percentageOfFees[0])
                            ).toLocaleString())} - £${(
                              ((totalSchoolFees / 100 * Bursaries.percentageOfFees[1])
                            ).toLocaleString())}`
                          : typeof Bursaries.percentageOfFees === "number"
                          ? `£${(
                              (((totalSchoolFees / 100) * Bursaries.percentageOfFees)
                            ).toLocaleString())}`
                          : Bursaries.percentageOfFees}
                      </p>
                    </div>
                  )}

                </div>
              </CardContent>
            </Card>


            

          </div>
        </div>
      </main>
    </div>
  )

   
}