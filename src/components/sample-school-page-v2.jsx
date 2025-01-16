import SchoolPage from './school-page-v2'

export default function SampleSchoolPage() {
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

  return <SchoolPage {...sampleSchoolData} />;
}

