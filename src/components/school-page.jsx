'use client'

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

// This would typically come from your API or CMS
const schoolData = {
  name: "St. Margaret's Academy",
  description: "A leading independent school committed to academic excellence and character development.",
  address: "123 Education Lane, Academic City, AC1 2DE",
  phone: "+44 (0)20 1234 5678",
  email: "admissions@stmargarets.edu",
  bursaries: [
    {
      name: "Academic Excellence Bursary",
      description: "Up to 100% of tuition fees for outstanding academic achievement",
    },
    {
      name: "Music Scholarship",
      description: "50% reduction in fees for exceptional musical talent",
    },
  ],
  image: "/placeholder.svg?height=400&width=600",
}

export default function SchoolPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleEnquirySubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    (<div className="min-h-screen bg-gray-50/50 pb-12">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden bg-gray-900 lg:h-[400px]">
        <img
          src={schoolData.image}
          alt={schoolData.name}
          className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white lg:text-6xl">{schoolData.name}</h1>
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
                <p className="mt-4 text-gray-600">{schoolData.description}</p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    {schoolData.address}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-5 w-5" />
                    {schoolData.phone}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="h-5 w-5" />
                    {schoolData.email}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bursaries & Scholarships */}
            {schoolData.bursaries && schoolData.bursaries.length > 0 && (
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    <h2 className="text-2xl font-bold">Bursaries & Scholarships</h2>
                  </div>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {schoolData.bursaries.map((bursary, index) => (
                      <div
                        key={index}
                        className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md">
                        <h3 className="font-semibold">{bursary.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">{bursary.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
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
                    <Button className="mt-4 w-full">Make an Enquiry</Button>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-lg">
                    <SheetHeader>
                      <SheetTitle>School Enquiry</SheetTitle>
                      <SheetDescription>
                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                      </SheetDescription>
                    </SheetHeader>
                    <form onSubmit={handleEnquirySubmit} className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input id="name" placeholder="Enter your full name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your enquiry"
                          className="min-h-[100px]"
                          required />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Enquiry"}
                      </Button>
                    </form>
                  </SheetContent>
                </Sheet>
                <p className="mt-4 text-center text-sm text-gray-600">
                  We usually respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>)
  );
}

