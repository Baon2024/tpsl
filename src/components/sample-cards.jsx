import { SchoolCard } from "./school-card"

export default function SampleCards() {
  const sampleSchools = [
    {
      documentId: "1",
      schoolName: "St. Mary's International School",
      schoolLocation: "London, United Kingdom",
      schoolImage: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=2148&auto=format&fit=crop",
      Bursaries: true,
      scholarships: true,
      schoolType: ["Independent", "Day School"],
      coeducation: "Co-educational",
      stages: ["Primary", "Secondary"]
    },
    {
      documentId: "2",
      schoolName: "Cambridge Preparatory Academy",
      schoolLocation: "Cambridge, United Kingdom",
      schoolImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
      Bursaries: true,
      scholarships: false,
      schoolType: ["Preparatory", "Boarding School"],
      coeducation: "Boys Only",
      stages: ["Primary"]
    },
    {
      documentId: "3",
      schoolName: "Oxford International College",
      schoolLocation: "Oxford, United Kingdom",
      schoolImage: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2070&auto=format&fit=crop",
      Bursaries: false,
      scholarships: true,
      schoolType: ["Independent", "Sixth Form"],
      coeducation: "Co-educational",
      stages: ["Sixth Form"]
    }
  ]

  return (
    (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {sampleSchools.map((school) => (
        <SchoolCard key={school.documentId} {...school} />
      ))}
    </div>)
  );
}

