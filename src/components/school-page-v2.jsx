import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

export default function SchoolPage({
  schoolName,
  schoolImage,
  schoolLocation,
  scholarships,
  Bursaries,
  totalSchoolFees = 0,
  feePaymemtScheme,
  feePaymemtSchemeDetail
}) {
  const formattedTotalSchoolFees = totalSchoolFees?.toLocaleString() || '0'

  return (
    (<div className="min-h-screen bg-white">
      {/* Minimal Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <img src={schoolImage} alt={schoolName} className="h-full w-full object-cover" />
        </div>
        <div
          className="relative z-20 h-full flex flex-col justify-end p-8 max-w-7xl mx-auto">
          <Badge variant="outline" className="w-fit mb-4 text-white border-white">
            Est. 1875
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            {schoolName}
          </h1>
        </div>
      </div>
      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-30">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="backdrop-blur-xl bg-white/90">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">About Our School</h2>
                  <p className="text-gray-600 text-lg">
                    A prestigious institution committed to academic excellence and personal growth.
                  </p>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Location</h3>
                        <p className="text-sm text-gray-600">{schoolLocation}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Contact</h3>
                        <p className="text-sm text-gray-600">N/A</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-sm text-gray-600">N/A</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
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
                          {`${Bursaries.percentageOfFees}%`}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Content */}
          <div className="space-y-6">
            <Card className="backdrop-blur-xl bg-white/90">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Fees Overview</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600">Total School Fees</p>
                    <p className="text-3xl font-bold text-primary">£{formattedTotalSchoolFees}</p>
                  </div>

                  {scholarships.scholarshipsAvailable && (
                    <div>
                      <p className="text-sm text-gray-600">Potential Scholarship Savings</p>
                      <p className="text-2xl font-semibold text-green-600">
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
                    <div>
                      <p className="text-sm text-gray-600">Potential Bursary Savings</p>
                      <p className="text-2xl font-semibold text-green-600">
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
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Payment Options</h3>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600">{feePaymemtSchemeDetail}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>)
  );
}

