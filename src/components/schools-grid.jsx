"use client"

import * as React from "react"
import { Mail, Phone, MapPin, ExternalLink, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const schools = [
  {
    schoolName: "Bedford School",
    schoolDescription: [
      "Bedford School is a prestigious independent boarding and day school for boys, located in Bedford, England. Founded in 1552, it has a long history of academic excellence, character development, and leadership preparation.",
      "Beyond academics, Bedford School offers outstanding opportunities in sports, music, drama, and a wide range of extracurricular activities.",
    ],
    studentNumbers: 1070,
    faithSchool: "Church of England",
    schoolEmail: "admissions@bedfordschool.org.uk",
    schoolPhoneNumber: "+44 (0)1234 362 216",
    schoolLocation: "Bedford, Bedfordshire, East Midlands",
    stages: ["primary", "secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "boys",
    totalSchoolFees: [18942, 29229],
    established: 1552,
    ranking: 10,
    scholarships: {
      available: true,
      percentageOfFees: "???",
    },
    bursaries: {
      available: true,
      percentageOfFees: [0, 100],
    },
  },
  {
    schoolName: "Stowe School",
    schoolDescription: [
      "Stowe School is a prestigious independent co-educational boarding and day school located in Buckinghamshire, England. Founded in 1923, it is known for its academic ambition and stunning historic setting.",
      "Beyond academics, Stowe offers exceptional opportunities in sports, music, drama, and a wide range of extracurricular activities.",
    ],
    studentNumbers: 905,
    faithSchool: "Church of England",
    schoolEmail: "enquiries@stowe.co.uk",
    schoolPhoneNumber: "+44 (0)1280 818 000",
    schoolLocation: "Stowe, Buckinghamshire, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "Co-Educational",
    totalSchoolFees: [32448, 53238],
    established: 1923,
    ranking: 13,
    scholarships: {
      available: true,
      percentageOfFees: 5,
    },
    bursaries: {
      available: true,
      percentageOfFees: "???",
    },
  },
  {
    schoolName: "Oundle School",
    schoolDescription: [
      "Oundle School is a prestigious independent co-educational boarding and day school located in Northamptonshire, England. Founded in 1556, it is known for its academic excellence and strong traditions.",
      "Beyond academics, Oundle provides exceptional opportunities in sports, music, drama, and a wide range of extracurricular activities.",
    ],
    studentNumbers: 1120,
    faithSchool: "Church of England",
    schoolEmail: "admissions@oundleschool.org.uk",
    schoolPhoneNumber: "+44 (0)1832 277 125",
    schoolLocation: "Oundle, Northamptonshire, East Midlands",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "Co-Educational",
    totalSchoolFees: [28692, 37710],
    established: 1556,
    ranking: 14,
    scholarships: {
      available: true,
      percentageOfFees: 0,
    },
    bursaries: {
      available: true,
      percentageOfFees: [10, 100],
    },
  },
]

export function SchoolsGrid() {
  const [filter, setFilter] = React.useState("")

  const filteredSchools = schools.filter((school) => school.schoolName.toLowerCase().includes(filter.toLowerCase()))

  return (
    (<div className="w-full">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search schools..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="pl-9" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredSchools.map((school) => (
          <Card key={school.schoolName} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {school.schoolName}
                <span className="text-sm font-normal text-muted-foreground">Est. {school.established}</span>
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {school.schoolLocation}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Type</span>
                  <span className="text-sm">{school.coeducation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Stages</span>
                  <span className="text-sm">{school.stages.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Students</span>
                  <span className="text-sm">{school.studentNumbers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Fees (per year)</span>
                  <span className="text-sm">
                    £{school.totalSchoolFees[0].toLocaleString()} - £{school.totalSchoolFees[1].toLocaleString()}
                  </span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Financial Support</h4>
                <div className="space-y-1">
                  {school.scholarships.available && (
                    <div className="text-sm">
                      ✓ Scholarships available
                      {school.scholarships.percentageOfFees !== 0 && (
                        <span className="text-muted-foreground"> (up to {school.scholarships.percentageOfFees}%)</span>
                      )}
                    </div>
                  )}
                  {school.bursaries.available && (
                    <div className="text-sm">
                      ✓ Bursaries available
                      {Array.isArray(school.bursaries.percentageOfFees) && (
                        <span className="text-muted-foreground">
                          {" "}
                          ({school.bursaries.percentageOfFees[0]}-{school.bursaries.percentageOfFees[1]}%)
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-full">
                    Show Description
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                  {school.schoolDescription.map((para, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {para}
                    </p>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild variant="outline" className="flex-1">
                <a href={`mailto:${school.schoolEmail}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={`tel:${school.schoolPhoneNumber}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call
                </a>
              </Button>
              <Button asChild variant="secondary" className="flex-1">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>)
  );
}

