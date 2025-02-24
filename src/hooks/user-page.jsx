"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { LogOut, CreditCard, Trash2 } from "lucide-react"

export default function UserPage({
  subscribed = false,
  mySchools = [],
  handleLogOut,
  handleManageSubscription,
  removeSchoolHandler
}) {
  return (
    (<div className="container mx-auto px-4 py-8">
      <div
        className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">My Account</h1>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={handleLogOut}
            className="flex items-center gap-2">
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
                    className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg line-clamp-2">{school.schoolName}</h3>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    variant="destructive"
                    onClick={() => removeSchoolHandler(school)}
                    className="w-full flex items-center gap-2">
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
    </div>)
  );
}

