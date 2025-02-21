"use client"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

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

export function SchoolsComparison() {
  return (
    (<ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr>
              <th
                className="sticky left-0 bg-background px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                School Details
              </th>
              {schools.map((school) => (
                <th key={school.schoolName} className="px-6 py-3 text-left">
                  <div className="space-y-1">
                    <div className="text-lg font-semibold">{school.schoolName}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {school.schoolLocation}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Established</td>
              {schools.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  {school.established}
                </td>
              ))}
            </tr>
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Type</td>
              {schools.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  {school.coeducation}
                </td>
              ))}
            </tr>
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Stages</td>
              {schools.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  {school.stages.join(", ")}
                </td>
              ))}
            </tr>
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">School Type</td>
              {schools.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  {school.schoolType.join(", ")}
                </td>
              ))}
            </tr>
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Students</td>
              {schools.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  {school.studentNumbers}
                </td>
              ))}
            </tr>
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Fees (per year)</td>
              {schools.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  £{school.totalSchoolFees[0].toLocaleString()} - £{school.totalSchoolFees[1].toLocaleString()}
                </td>
              ))}
            </tr>
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Scholarships</td>
              {schools.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  {school.scholarships.available ? (
                    <span>
                      Available
                      {school.scholarships.percentageOfFees !== 0 && (
                        <span className="text-muted-foreground"> (up to {school.scholarships.percentageOfFees}%)</span>
                      )}
                    </span>
                  ) : (
                    "Not available"
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Bursaries</td>
              {schools.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  {school.bursaries.available ? (
                    <span>
                      Available
                      {Array.isArray(school.bursaries.percentageOfFees) && (
                        <span className="text-muted-foreground">
                          {" "}
                          ({school.bursaries.percentageOfFees[0]}-{school.bursaries.percentageOfFees[1]}%)
                        </span>
                      )}
                    </span>
                  ) : (
                    "Not available"
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Description</td>
              {schools.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  <div className="max-w-md space-y-2">
                    {school.schoolDescription.map((para, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Contact</td>
              {schools.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a href={`mailto:${school.schoolEmail}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={`tel:${school.schoolPhoneNumber}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </a>
                    </Button>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>)
  );
}

