"use client";
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ClassicDesign from "./designs/classic"
import ModernMinimal from "./designs/modern-minimal"
import DynamicGrid from "./designs/dynamic-grid"
import CardBased from "./designs/card-based"
import Magazine from "./designs/magazine"
import Elegant from "./designs/elegant"

const designs = [
  { id: "classic", name: "Classic Academic", component: ClassicDesign },
  { id: "modern", name: "Modern Minimal", component: ModernMinimal },
  { id: "dynamic", name: "Dynamic Grid", component: DynamicGrid },
  { id: "cards", name: "Card Based", component: CardBased },
  { id: "magazine", name: "Magazine Style", component: Magazine },
  { id: "elegant", name: "Elegant", component: Elegant }
]

export default function DesignSwitcher() {
  const [selectedDesign, setSelectedDesign] = useState("classic")
  
  const sampleSchoolData = {
    schoolName: "St. Margaret's College",
    schoolImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&fit=crop",
    schoolLocation: "1234 Academic Drive, Cambridge, CB2 1TN",
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Academic scholarships are awarded based on entrance examination results and previous academic achievement. Music scholarships require Grade 7 or above in one instrument.",
      percentageOfFees: [20, 50]
    },
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Means-tested bursaries are available to families who require financial assistance. Applications are assessed annually based on household income and circumstances.",
      percentageOfFees: 85
    },
    enquireUrl: "#",
    totalSchoolFees: 39000,
    feePaymemtScheme: true,
    feePaymemtSchemeDetail: "Monthly payment plans available with 0% interest. Sibling discounts of 10% for second child and 15% for third child onwards."
  }

  const SelectedComponent = designs.find(d => d.id === selectedDesign)?.component || designs[0].component

  return (
    (<div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50 w-[200px]">
        <Select value={selectedDesign} onValueChange={setSelectedDesign}>
          <SelectTrigger className="w-full bg-white/90 backdrop-blur-sm shadow-lg">
            <SelectValue placeholder="Select design" />
          </SelectTrigger>
          <SelectContent>
            {designs.map((design) => (
              <SelectItem key={design.id} value={design.id}>
                {design.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <SelectedComponent {...sampleSchoolData} />
    </div>)
  );
}

