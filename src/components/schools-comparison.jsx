"use client";
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Mail, Phone, MapPin, Bookmark, X, ChevronDown, ExternalLink } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function SchoolsComparison({
  schoolsToCompare,
  clearSchoolsHandler,
  clearSchoolHandler,
  saveSchoolHandler
}) {
  return (
    (<div className="space-y-4">
      <div className="flex justify-end">
        <Button
          variant="destructive"
          onClick={clearSchoolsHandler}
          className="flex items-center gap-2">
          <X className="h-4 w-4" />
          Clear All Schools
        </Button>
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th
                  className="sticky left-0 bg-background px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                  School Details
                </th>
                {schoolsToCompare.map((school) => (
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
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    {school.established}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Type</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    {school.coeducation}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Stages</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    {school.stages.join(", ")}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">School Type</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    {school.schoolType.join(", ")}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Students</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    {school.studentNumbers}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Fees (per year)</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    £{school.totalSchoolFees[0].toLocaleString()} - £{school.totalSchoolFees[1].toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Scholarships</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    <Collapsible>
                      <div className="flex items-center gap-2">
                        <span>
                          {school.scholarships.scholarshipsAvailable ? (
                            <>
                              Available
                              {school.scholarships.percentageOfFees !== 0 && (
                                <span className="text-muted-foreground">
                                  {" "}
                                  (up to {school.scholarships.percentageOfFees})
                                </span>
                              )}
                            </>
                          ) : (
                            "Not available"
                          )}
                        </span>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="mt-2 space-y-2">
                        {school.scholarships.scholarshipsDetail.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground whitespace-normal">
                            {detail}
                          </p>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Bursaries</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    <Collapsible>
                      <div className="flex items-center gap-2">
                        <span>
                          {school.Bursaries.BursariesAvailable ? (
                            <>
                              Available
                              {Array.isArray(school.Bursaries.percentageOfFees) && (
                                <span className="text-muted-foreground">
                                  {" "}
                                  ({school.Bursaries.percentageOfFees[0]}-{school.Bursaries.percentageOfFees[1]}%)
                                </span>
                              )}
                            </>
                          ) : (
                            "Not available"
                          )}
                        </span>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="mt-2 space-y-2">
                        {school.Bursaries.BursariesDetail.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground whitespace-normal">
                            {detail}
                          </p>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Description</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    <div className="max-w-md space-y-2">
                      {school.schoolDescription.map((para, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground whitespace-normal">
                          {para}
                        </p>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Actions</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => saveSchoolHandler(school)}
                        className="flex items-center gap-2">
                        <Bookmark className="h-4 w-4" />
                        Save School
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => clearSchoolHandler(school)}
                        className="flex items-center gap-2">
                        <X className="h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Contact</td>
                {schoolsToCompare.map((school) => (
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
                      <Button asChild variant="secondary" size="sm">
                        <a
                          href={school.enquireUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Enquire
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
      </ScrollArea>
    </div>)
  );
}

