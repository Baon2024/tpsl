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
import { useState } from "react"
import { Building2, GraduationCap, Mail, MapPin, Phone } from 'lucide-react'
import EnquireButton from '@/app/components/enquireButton';


console.log("these are the schools: ", schoolsSampleData);
//need a way to retrieve id form url

export default function societyPage()  {
    
    const { societyId } = useParams();
    const numberSocietyId = Number(societyId);
    const selectedSchoolArray = schoolsSampleData.filter(school => school.documentId === numberSocietyId);
    console.log("This is the selected school:", selectedSchoolArray);

    

    const selectedSchool = selectedSchoolArray[0];

    const { schoolImage, Bursaries, scholarships, schoolLocation, schoolName, enquireUrl } = selectedSchool;
    console.log("scholarships on schoolPage is:", scholarships);

    console.log("societyId type:", typeof societyId);  // Should be string or number
console.log("documentId type:", typeof schoolsSampleData[0].documentId);  // Should be string or number

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

  const handleEnquirySubmit = async (e) => {
    /*e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)*/
  }

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
                <h2 className="text-2xl font-bold">About Our School</h2>
                <p className="mt-4 text-gray-600">empty right now</p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    N/A
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
              </CardContent>
            </Card>

            {/* Bursaries & Scholarships */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    <h2 className="text-2xl font-bold">Bursaries & Scholarships</h2>
                  </div>
                  {scholarships.scholarshipsAvailable && (
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    
                      <div
                       
                        className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md"
                      >
                        <h3 className="font-semibold">Scholarships Information</h3>
                        <p className="mt-2 text-sm text-gray-600">{scholarships.scholarshipsDetail}</p>
                      </div>
                    
                  </div>
                  )}
                  {Bursaries.BursariesAvailable && (
                     <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    
                     <div
                      
                       className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md"
                     >
                       <h3 className="font-semibold">Bursary Information</h3>
                       <p className="mt-2 text-sm text-gray-600">{Bursaries.BursariesDetail}</p>
                     </div>
                   
                 </div>
                  )}
                </CardContent>
              </Card>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-1">
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
          </div>
        </div>
      </main>
    </div>
  )

   
}