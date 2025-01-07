'use client'
import { SchoolCard } from "./schoolCard"
//import 'public/images/eton.jpeg';

const schoolsSampleData = [
  {
    schoolName: "Eton",
    schoolLocation: "Berkshire, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "boys-only",
    totalSchoolFees: 44298,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Music, academic, and sporting scholarships are available.",
      percentageOfFees: 25,
    },
    schoolImage: "/images/eton.jpeg",
    documentId: 37363632,
    ranking: 1,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries available for families earning less than £80,000 annually.",
      percentageOfFees: 50,
    },
    established: 1440,
    enquireUrl: "https://etoncollege.com/admissions",
  },
  {
    schoolName: "Harrow",
    schoolLocation: "London, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "boys-only",
    totalSchoolFees: 42600,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Scholarships available for outstanding students in music and academics.",
      percentageOfFees: 20,
    },
    schoolImage: null,
    documentId: 49392849,
    ranking: 2,
    Bursaries: {
      BursariesAvailable: false,
      BursariesDetail: "N/A",
      percentageOfFees: "N/A",
    },
    established: 1572,
    enquireUrl: "https://harrowschool.org.uk/admissions",
  },
  {
    schoolName: "Winchester College",
    schoolLocation: "Winchester, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "boys-only",
    totalSchoolFees: 45900,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Academic scholarships offered for top-performing candidates.",
      percentageOfFees: 30,
    },
    schoolImage: null,
    documentId: 57483920,
    ranking: 3,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Financial assistance available based on means-testing.",
      percentageOfFees: 50,
    },
    established: 1382,
    enquireUrl: "https://winchestercollege.org/admissions",
  },
  {
    schoolName: "Charterhouse",
    schoolLocation: "Godalming, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "co-ed",
    totalSchoolFees: 43410,
    scholarships: {
      scholarshipsAvailable: false,
      scholarshipsDetail: "N/A",
      percentageOfFees: "N/A",
    },
    schoolImage: null,
    documentId: 64820394,
    ranking: 4,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries available for students from underprivileged backgrounds.",
      percentageOfFees: 50,
    },
    established: 1611,
    enquireUrl: "https://charterhouse.org.uk/admissions",
  },
  {
    schoolName: "Rugby School",
    schoolLocation: "Rugby, Midlands",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "co-ed",
    totalSchoolFees: 44520,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Sports scholarships available for talented athletes.",
      percentageOfFees: 20,
    },
    schoolImage: null,
    documentId: 74839283,
    ranking: 5,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Means-tested bursaries for students with financial needs.",
      percentageOfFees: 50,
    },
    established: 1567,
    enquireUrl: "https://rugbyschool.net/admissions",
  },
  {
    schoolName: "Westminster School",
    schoolLocation: "London, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "boys-only",
    totalSchoolFees: 45870,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Academic scholarships for high-achieving students.",
      percentageOfFees: 25,
    },
    schoolImage: null,
    documentId: 84572013,
    ranking: 6,
    Bursaries: {
      BursariesAvailable: false,
      BursariesDetail: "N/A",
      percentageOfFees: "N/A",
    },
    established: 1179,
    enquireUrl: "https://westminster.org.uk/admissions",
  },
  {
    schoolName: "St Paul's School",
    schoolLocation: "London, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["day"],
    coeducation: "boys-only",
    totalSchoolFees: 43560,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Scholarships available for outstanding academic performance.",
      percentageOfFees: 30,
    },
    schoolImage: null,
    documentId: 91284934,
    ranking: 7,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries for students from low-income families.",
      percentageOfFees: 50,
    },
    established: 1509,
    enquireUrl: "https://stpaulsschool.org.uk/admissions",
  },
  {
    schoolName: "Cheltenham College",
    schoolLocation: "Cheltenham, South-West",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "co-ed",
    totalSchoolFees: 41000,
    scholarships: {
      scholarshipsAvailable: false,
      scholarshipsDetail: "N/A",
      percentageOfFees: "N/A",
    },
    schoolImage: null,
    documentId: 10293847,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries for talented but financially constrained students.",
      percentageOfFees: 40,
    },
    established: 1841,
    enquireUrl: "https://cheltenhamcollege.org/admissions",
  },
  {
    schoolName: "King's College School",
    schoolLocation: "Wimbledon, London",
    stages: ["primary", "secondary", "sixth form"],
    schoolType: ["day"],
    coeducation: "co-ed",
    totalSchoolFees: 37000,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Scholarships offered in academics and sports.",
      percentageOfFees: 15,
    },
    schoolImage: null,
    documentId: 83792018,
    ranking: 9,
    Bursaries: {
      BursariesAvailable: false,
      BursariesDetail: "N/A",
      percentageOfFees: "N/A",
    },
    established: 1829,
    enquireUrl: "https://kcs.org.uk/admissions",
  },
  {
    schoolName: "Bedford School",
    schoolLocation: "Bedford, East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "boys-only",
    totalSchoolFees: 42000,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Music scholarships for talented musicians.",
      percentageOfFees: 20,
    },
    schoolImage: null,
    documentId: 73918284,
    ranking: 10,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Means-tested bursaries available for eligible families.",
      percentageOfFees: 50,
    },
    established: 1552,
    enquireUrl: "https://bedfordschool.org/admissions",
  },
  // Repeat similar structure for remaining schools up to 16.
  {
    schoolName: "Tonbridge School",
    schoolLocation: "Tonbridge, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "boys-only",
    totalSchoolFees: 42600,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Academic, music, and sports scholarships available.",
      percentageOfFees: 25,
    },
    schoolImage: null,
    documentId: 64719204,
    ranking: 11,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries for students with financial needs.",
      percentageOfFees: 40,
    },
    established: 1553,
    enquireUrl: "https://tonbridge-school.co.uk/admissions",
  },
  {
    schoolName: "Brighton College",
    schoolLocation: "Brighton, South-East",
    stages: ["primary", "secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "co-ed",
    totalSchoolFees: 44520,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Scholarships for academics, music, and sports.",
      percentageOfFees: 20,
    },
    schoolImage: null,
    documentId: 85749372,
    ranking: 12,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries available based on financial assessment.",
      percentageOfFees: 50,
    },
    established: 1845,
    enquireUrl: "https://brightoncollege.org.uk/admissions",
  },
  {
    schoolName: "Stowe School",
    schoolLocation: "Buckinghamshire, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "co-ed",
    totalSchoolFees: 43320,
    scholarships: {
      scholarshipsAvailable: false,
      scholarshipsDetail: "N/A",
      percentageOfFees: "N/A",
    },
    schoolImage: null,
    documentId: 91837465,
    ranking: 13,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries for deserving students from underprivileged backgrounds.",
      percentageOfFees: 50,
    },
    established: 1923,
    enquireUrl: "https://stowe.co.uk/admissions",
  },
  {
    schoolName: "Oundle School",
    schoolLocation: "Oundle, East Midlands",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "co-ed",
    totalSchoolFees: 43710,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Scholarships available in music, sports, and academics.",
      percentageOfFees: 20,
    },
    schoolImage: null,
    documentId: 11293847,
    ranking: 14,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Means-tested bursaries for eligible families.",
      percentageOfFees: 50,
    },
    established: 1556,
    enquireUrl: "https://oundleschool.org.uk/admissions",
  },
  {
    schoolName: "Marlborough College",
    schoolLocation: "Wiltshire, South-West",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "co-ed",
    totalSchoolFees: 45900,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Academic, music, and sports scholarships available.",
      percentageOfFees: 25,
    },
    schoolImage: null,
    documentId: 67849302,
    ranking: 15,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries offered to students from low-income families.",
      percentageOfFees: 50,
    },
    established: 1843,
    enquireUrl: "https://marlboroughcollege.org/admissions",
  },
  {
    schoolName: "Wellington College",
    schoolLocation: "Crowthorne, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "co-ed",
    totalSchoolFees: 45780,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Scholarships for excellence in academics, music, and sports.",
      percentageOfFees: 30,
    },
    schoolImage: null,
    documentId: 95837402,
    ranking: 16,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Means-tested bursaries available for eligible students.",
      percentageOfFees: 50,
    },
    established: 1859,
    enquireUrl: "https://wellingtoncollege.org.uk/admissions",
  },
  {
    schoolName: "Fyling Hall",
    schoolLocation: "Fylingdales, Scarborough, North Yorkshire",
    stages: [
      "reception", "primary", "secondary", "sixth form"
    ],
    schoolType: [ "boarding", "day" ],
    coeducation: "mixed-sex",
    totalSchoolFees: 54084, //present this as 'from £54,084', with daily fees as default (cheapest)
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "for xxx",
      percentageOfFees: 10 //use this to calculate potential worth of savings, cost of fees overall
    },
    schoolImage: "/images/Fyling-Hall-main.jpg",
    documentId: 18502939,
    ranking: 0,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Parents wishing to apply for a bursary should write to the Headmaster outlining the reasons why financial support is necessary. As a general rule, it is unlikely that a bursary will be awarded when family income is greater than four times the school fees. It is possible, indeed not unusual, for a bursary holder to have a scholarship",
      percentageOfFees: "unknown",
    },
    established: 1552,
    enquireUrl: 'https://fylinghall.org/admissions/scholarships-and-bursaries/'
  },
];
  
export default function SchoolsList() {
  return (
    <div className="w-full px-6 pt-10 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {schoolsSampleData.map((school) => (
          <SchoolCard
            key={school.schoolName}
            schoolName={school.schoolName}
            schoolLocation={school.schoolLocation}
            Bursaries={school.Bursaries.BursariesAvailable}
            scholarships={school.scholarships}
            schoolImage={school.schoolImage}
            documentId={school.documentId}
            /*onClickHandler={onClickHandler}*/ 
          />
        ))}
      </div>
    </div>
  )
}

export { schoolsSampleData };