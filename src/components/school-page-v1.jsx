import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';

export default function SchoolPage({
  schoolName,
  schoolImage,
  schoolLocation,
  scholarships,
  Bursaries,
  enquireUrl,

  // Add default value
  totalSchoolFees = 0,

  feePaymemtScheme,
  feePaymemtSchemeDetail
}) {
  const formattedTotalSchoolFees = totalSchoolFees?.toLocaleString() || '0'

  return (
    (<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[400px] lg:h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${schoolImage})`,
            transform: "translateZ(0)",
          }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1
            className="text-center text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-7xl">
            {schoolName}
          </h1>
          <Badge
            variant="secondary"
            className="mt-6 border-2 px-4 py-2 text-lg font-medium">
            Est. 1875
          </Badge>
        </div>
      </div>
      {/* Main Content with Tabs */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - School Info & Financial Aid */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="about">About School</TabsTrigger>
                <TabsTrigger value="financial">Financial Aid</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold">About Our School</h2>
                    <p className="mt-4 text-gray-600">
                      A prestigious institution committed to academic excellence and
                      personal growth.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-3">
                      <div className="rounded-lg bg-primary/5 p-4">
                        <div className="flex items-center gap-2 text-primary">
                          <MapPin className="h-5 w-5" />
                          <h3 className="font-semibold">Location</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          {schoolLocation}
                        </p>
                      </div>

                      <div className="rounded-lg bg-primary/5 p-4">
                        <div className="flex items-center gap-2 text-primary">
                          <Phone className="h-5 w-5" />
                          <h3 className="font-semibold">Contact</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">N/A</p>
                      </div>

                      <div className="rounded-lg bg-primary/5 p-4">
                        <div className="flex items-center gap-2 text-primary">
                          <Mail className="h-5 w-5" />
                          <h3 className="font-semibold">Email</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">N/A</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="financial" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold">
                        Bursaries & Scholarships
                      </h2>
                    </div>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      {scholarships.scholarshipsAvailable && (
                        <div className="space-y-4">
                          <div className="rounded-lg bg-primary/5 p-4">
                            <h3 className="font-semibold">
                              Scholarships Information
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                              {scholarships.scholarshipsDetail}
                            </p>
                          </div>
                          <div className="rounded-lg bg-primary/5 p-4">
                            <h3 className="font-semibold">Scholarships Value</h3>
                            <p className="mt-2 text-sm text-gray-600">
                              {Array.isArray(scholarships.percentageOfFees) &&
                              scholarships.percentageOfFees.length === 2
                                ? `${scholarships.percentageOfFees[0]}% to ${scholarships.percentageOfFees[1]}%`
                                : typeof scholarships.percentageOfFees === "number"
                                ? `${scholarships.percentageOfFees}%`
                                : scholarships.percentageOfFees}
                            </p>
                          </div>
                        </div>
                      )}

                      {Bursaries.BursariesAvailable && (
                        <div className="space-y-4">
                          <div className="rounded-lg bg-primary/5 p-4">
                            <h3 className="font-semibold">Bursary Information</h3>
                            <p className="mt-2 text-sm text-gray-600">
                              {Bursaries.BursariesDetail}
                            </p>
                          </div>
                          <div className="rounded-lg bg-primary/5 p-4">
                            <h3 className="font-semibold">Bursary Value</h3>
                            <p className="mt-2 text-sm text-gray-600">
                              {`${Bursaries.percentageOfFees}%`}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Enquiry & Fees */}
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">
                    Fees and Potential Savings
                  </h2>
                  <div className="rounded-lg bg-primary/5 p-4">
                    <h3 className="font-semibold">Total School Fees</h3>
                    <p className="mt-2 text-2xl font-bold text-primary">
                      £{formattedTotalSchoolFees}
                    </p>
                  </div>

                  {scholarships.scholarshipsAvailable && (
                    <div className="rounded-lg bg-primary/5 p-4">
                      <h3 className="font-semibold">Potential Scholarship Savings</h3>
                      <p className="mt-2 text-xl font-semibold text-green-600">
                        {Array.isArray(scholarships.percentageOfFees) &&
                        scholarships.percentageOfFees.length === 2
                          ? `£${(
                              ((totalSchoolFees || 0) * scholarships.percentageOfFees[0]) /
                              100
                            ).toLocaleString()} - £${(
                              ((totalSchoolFees || 0) * scholarships.percentageOfFees[1]) /
                              100
                            ).toLocaleString()}`
                          : typeof scholarships.percentageOfFees === "number"
                          ? `£${(
                              ((totalSchoolFees || 0) * scholarships.percentageOfFees) /
                              100
                            ).toLocaleString()}`
                          : scholarships.percentageOfFees}
                      </p>
                    </div>
                  )}

                  {Bursaries.BursariesAvailable && (
                    <div className="rounded-lg bg-primary/5 p-4">
                      <h3 className="font-semibold">Potential Bursary Savings</h3>
                      <p className="mt-2 text-xl font-semibold text-green-600">
                        £
                        {(
                          ((totalSchoolFees || 0) * Bursaries.percentageOfFees) /
                          100
                        ).toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {feePaymemtScheme && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Fee Payment Scheme</h3>
                  <p className="mt-2 text-gray-600">{feePaymemtSchemeDetail}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>)
  );
}

