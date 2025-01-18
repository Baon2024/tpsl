'use client'
import { SchoolCard } from "./schoolCard"
//import 'public/images/eton.jpeg';

const schoolsSampleData = [
  
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
    schoolImage: "/images/Winchester-College.jpeg",
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
    schoolImage: "/images/Charterhouse.jpg",
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
    schoolImage: "/images/Rugby.jpeg",
    documentId: 74839283,
    ranking: 5,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Means-tested bursaries for students with financial needs.",
      percentageOfFees: "???",
    },
    established: 1567,
    enquireUrl: "https://rugbyschool.net/admissions",
  },
  {
    schoolName: "Cheltenham College",
    schoolLocation: "Cheltenham, South-West",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "co-ed",
    totalSchoolFees: 41000,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "One of the main vehicles for such encouragement is the offer of College Awards in the form of Scholarships and Exhibitions, awarded at Third Form (Year 9) entry and Sixth Form (Year 12) entry. Scholarships are awarded for outstanding performance and ability in a chosen field and Exhibitions for excellent talent and potential. Scholars are presented with a cerise tie and Exhibitioners are presented with a black and cerise tie, so they are visible throughout College. All awards are entirely merit-based and are based on an exam, audition or other appropriate assessment. Pupils can apply for more than one award if they wish. ",
      percentageOfFees: "???",
    },
    schoolImage: null,
    documentId: 10293847,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: false,
      BursariesDetail: null,
      percentageOfFees: null,
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
    totalSchoolFees: 47440,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "N/A",
      percentageOfFees: 5,
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
    schoolImage: "/images/Oundle-School.jpg",
    documentId: 11293847,
    ranking: 14,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Means-tested bursaries for eligible families.",
      percentageOfFees: [10, 100],
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
    schoolDescription: "Fyling Hal is ------",
    schoolEmail: "Fyling-----@---.co.uk",
    schoolPhoneNumber: '02728 272 826',
    latitude: null,
    longitude: null,
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
      percentageOfFees: [10, 100] //use this to calculate potential worth of savings, cost of fees overall
    },
    schoolImage: "/images/Fyling-Hall-main.jpg",
    documentId: 18502939,
    ranking: 0,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Parents wishing to apply for a bursary should write to the Headmaster outlining the reasons why financial support is necessary. As a general rule, it is unlikely that a bursary will be awarded when family income is greater than four times the school fees. It is possible, indeed not unusual, for a bursary holder to have a scholarship",
      percentageOfFees: "???",
    },
    established: 1552,
    enquireUrl: 'https://fylinghall.org/admissions/scholarships-and-bursaries/'
  },
  {
    schoolName: "",
    schoolLocation: "",
    stages: [""],
    schoolType: [""],
    coeducation: "",
    totalSchoolFees: 0,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Academic scholarships for high-achieving students.",
      percentageOfFees: 25,
    },
    schoolImage: "/images/Westminster-School.jpg",
    documentId: 84572013,
    ranking: 6,
    Bursaries: {
      BursariesAvailable: false,
      BursariesDetail: null,
      percentageOfFees: null,
    },
    established: 1179,
    enquireUrl: "https://westminster.org.uk/admissions",
  }, {
    schoolName: "Eton College",
    schoolDescription: "Eton College is a prestigious and historic boys' school located near Windsor.",
    schoolEmail: "admissions@eton.co.uk",
    schoolPhoneNumber: "01753 370 100",
    latitude: null,
    longitude: null,
    schoolLocation: "Windsor, Berkshire",
    stages: ["primary", "secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "male",
    totalSchoolFees: "from £42,000",
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "available for exceptional talent in academics and the arts",
      percentageOfFees: [10, 100]
    },
    schoolImage: "/images/eton.jpeg",
    documentId: 18502944,
    ranking: 1,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries are available for students from families with low incomes.",
      percentageOfFees: "up to 100%"
    },
    established: 1440,
    enquireUrl: "https://eton.co.uk/admissions/bursaries-and-scholarships/"
  },
  {
    schoolName: "Harrow School",
    schoolDescription: "Harrow School is one of the top boys' schools in the country, known for its traditions.",
    schoolEmail: "admissions@harrowschool.org.uk",
    schoolPhoneNumber: "020 8872 8400",
    latitude: null,
    longitude: null,
    schoolLocation: "Harrow, London",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "male",
    totalSchoolFees: 42000,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "for academic and sporting achievements",
      percentageOfFees: [10, 100]
    },
    schoolImage: "/images/Harrow.jpg",
    documentId: 18502945,
    ranking: 3,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries are available for students who demonstrate financial need.",
      percentageOfFees: "up to 100%"
    },
    established: 1572,
    enquireUrl: "https://harrowschool.org.uk/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "Westminster School",
    schoolDescription: "Westminster School is one of the oldest and most renowned schools in London.",
    schoolEmail: "info@westminster.org.uk",
    schoolPhoneNumber: "020 7222 0265",
    latitude: null,
    longitude: null,
    schoolLocation: "London",
    stages: ["secondary", "sixth form"],
    schoolType: ["day"],
    coeducation: "mixed-sex",
    totalSchoolFees: 25000,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "for excellence in academics and arts",
      percentageOfFees: [10, 50]
    },
    schoolImage: "/images/Westminster-School.jpg",
    documentId: 18502946,
    ranking: 2,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries for families in need are available on request.",
      percentageOfFees: "up to 100%"
    },
    established: 1560,
    enquireUrl: "https://westminster.org.uk/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "Cheltenham Ladies' College",
    schoolDescription: "Cheltenham Ladies' College is a leading girls' school in the UK with a focus on academic excellence.",
    schoolEmail: "admissions@cheltladiescollege.org",
    schoolPhoneNumber: "01242 517 444",
    latitude: null,
    longitude: null,
    schoolLocation: "Cheltenham, Gloucestershire",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "female",
    totalSchoolFees: 34000,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "available for both academic and sporting achievements",
      percentageOfFees: [10, 100]
    },
    schoolImage: "/images/Cheltenham-Ladies-College-main.jpg",
    documentId: 18502947,
    ranking: 4,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries are available for students with financial need.",
      percentageOfFees: "up to 100%"
    },
    established: 1853,
    enquireUrl: "https://cheltladiescollege.org/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "The Dragon School",
    schoolDescription: "The Dragon School is a leading co-educational prep school with strong academic and extracurricular programs.",
    schoolEmail: "info@dragonschool.org",
    schoolPhoneNumber: "01865 315 400",
    latitude: null,
    longitude: null,
    schoolLocation: "Oxford, Oxfordshire",
    stages: ["primary", "secondary"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: 25000,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "for excellence in academics, arts, and sports",
      percentageOfFees: [10, 50]
    },
    schoolImage: "/images/The-Dragon-School-main.jpg",
    documentId: 18502948,
    ranking: 7,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries are available for families in need of financial support.",
      percentageOfFees: [10, 100]
    },
    established: 1877,
    enquireUrl: "https://dragonschool.org/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "St Paul's School",
    schoolDescription: "St Paul's School is an independent boys' school known for its academic excellence.",
    schoolEmail: "admissions@stpaulsschool.org.uk",
    schoolPhoneNumber: "020 8746 1900",
    latitude: null,
    longitude: null,
    schoolLocation: "London",
    stages: ["secondary", "sixth form"],
    schoolType: ["day"],
    coeducation: "male",
    totalSchoolFees: "from £25,000",
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "available for academic excellence and sporting ability",
      percentageOfFees: [10, 50]
    },
    schoolImage: "/images/St-Pauls-School.jpg",
    documentId: 18502949,
    ranking: 5,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries are available for families that demonstrate financial need.",
      percentageOfFees: "up to 100%"
    },
    established: 1509,
    enquireUrl: "https://stpaulsschool.org.uk/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "Tonbridge School",
    schoolDescription: "Tonbridge School is one of the leading independent boys' schools in the UK.",
    schoolEmail: "admissions@tonbridge-school.org",
    schoolPhoneNumber: "01732 365 555",
    latitude: null,
    longitude: null,
    schoolLocation: "Tonbridge, Kent",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "male",
    totalSchoolFees: "from £36,000",
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "for outstanding academic, musical, and sporting achievements",
      percentageOfFees: [10, 100]
    },
    schoolImage: "/images/Tonbridge-School-main.jpg",
    documentId: 18502950,
    ranking: 6,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries available for families with financial need.",
      percentageOfFees: "up to 100%"
    },
    established: 1553,
    enquireUrl: "https://tonbridge-school.org/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "Radley College",
    schoolDescription: "Radley College is a renowned boys' school located in Oxfordshire, known for its academic and extracurricular excellence.",
    schoolEmail: "admissions@radley.org.uk",
    schoolPhoneNumber: "01235 543 144",
    latitude: 51.69249743995564, //51.69249743995564, -1.2459376315366617
    longitude: -1.2459376315366617,
    schoolLocation: "Oxford, Oxfordshire, Home Counties",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "male",
    totalSchoolFees: 288000,//£9,200 per term, 
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Awards can be made at 11+, 13+ and 16+ (Years 7, 9, 12). The strongest candidates will be guaranteed funding when they receive their unconditional offer. Some awards are dependent on successfully securing one of our six scholarships (Academic, Art, Drama, Innovation, Music or Sport). The Radley Keys Award is an all-inclusive scholarship for talented and ambitious boys currently studying at a state school in the UK. This programme is purposefully designed to remove barriers, allowing boys to focus on reaching their goals and maximising the opportunities on offer at Radley. A financial award of up to 115% of our fees is available. The Warden’s Award recognises boys of exceptional ability who win one (or more) of our elite scholarships: Academic, Art, Drama, Innovation, Music or Sport. The financial award attached to the scholarship is means-tested and can range from 10% to 100% of our fees. We welcome applications for 13+ (Year 9) entry from candidates",
      percentageOfFees: [10, 115]
    },
    schoolImage: "/images/radley.jpeg",
    documentId: 18502951,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "The Silk Award celebrates and rewards boys with outstanding all-round ability whose families need some support with our fees. successful candidates will be academically strong and have a wide range of co-curricular interests. The Silk Award is not dependent on scholarship success, but boys will be expected to make a significant contribution to Radley life. The financial award is means-tested and can range from 10% to 100% of our fees. We welcome applications for entry at 13+ (Year 9) and 16+ (Sixth Form). The Armed Forces Fund provides financial support for the independent education of children of UK Service personnel killed or wounded while serving their country. The Fund is means-tested and can range from 10% to more than 100% of fees",
      percentageOfFees: [10, 100]
    },
    feesSchemes: "It is also possible to spread the cost of fees over 12 months through our partner company, School Fee Plan.",
    established: 1847,
    enquireUrl: "https://www.radley.org.uk/apply/funding/"
  },
  {
    schoolName: "St Peter School York",
    schoolDescription: "Welcome to St Peter's School, York, the fourth oldest school in the world and one of the country's leading schools. Our academic results are outstanding but we believe that independent thinking and a love of learning are just as important as excellent grades. Here there is a real focus on developing intellectual curiosity in the classroom and beyond, with pupils and staff being members of a vibrant, learning community.",
    schoolEmail: "bursaries@stpetersyork.org.uk",
    schoolPhoneNumber: "01904 527 300",
    latitude: 53.966374704438394,
    longitude:  -1.0933498907256507,  // 53.966374704438394, -1.0933498907256507
    schoolLocation: "York, North Yorkshire, Yorkshire & Humberside",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: 233585,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "We offer honorary academic scholarships to pupils who perform exceptionally well at GCSE. We also offer music scholarships, some of which come with fee remission. For Sixth Form applicants is the Ginetta STEM scholarship, aimed at pupils with a strong interest in a career in design, technology or engineering. Music awards are available at 13+ and 16+ entry. Please note that these awards can be supplemented by means-tested bursaries. Scholarships are available to young instrumentalists and singers who can offer a broad range of skills to the Music School.",
      percentageOfFees: [0, 100]
    },
    schoolImage: "/images/StPeter'sYork.jpg",
    documentId: 18502952,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "We offer Help With Fees bursaries to children whose families cannot otherwise fund a place. Please arrange to visit us a few months before applying. Please note that we cannot consider a bursary application if you have not visited us prior to applying. The following questions are typically considered by the Head Master, Bursar and Governors when deciding on the level of award Does your family have the ability to improve its financial position? For example, if there are two partners, we would expect both to be working in paid employment unless one is prevented from doing so through illness, or because one partner needs to care for very young children or for other dependants. Could you use funds that you already have? If you have significant savings or investments, or have a lot of equity in your house, we would expect you to use this before we could give help with fees. Do you have other sources of household income? We may need to take this into account. Are you paying fees to other schools or universities? If so, our level of support will need to take this into account.  ",
      percentageOfFees: "depends on the extent of your family's financial need"
    },
    established: 627,
    enquireUrl: "https://www.stpetersyork.org.uk/admissions/bursaries-scholarships/bursaries-scholarships"
  },
  {
    schoolName: "Gordonstoun",
    schoolDescription: "At Gordonstoun, we believe that a broader curriculum broadens not only minds but opportunities too. It is a belief that’s served both us and our students well for over 80 years and that has made Gordonstoun the world leader in character education. Our curriculum, which is unrivalled in breadth, helps every child to achieve their full potential.",
    schoolEmail: "fees@gordonstoun.org.uk",
    schoolPhoneNumber: "+ 44 (0)1343 837829",
    latitude: 57.70346128228585, //57.70346128228585, -3.3702543042896953
    longitude:  -3.3702543042896953,  // 53.966374704438394, -1.0933498907256507
    schoolLocation: "Elgin, Moray, Scotland",
    stages: ["primary","secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: 442434,
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "In line with our charitable status a Gordonstoun scholarship does not come with a remission in fees, however, scholars are prioritised in the allocation of means tested bursaries. Academic and all-round scholarships available. subject specific: Art, Design Technology, Drama, Computing, Music, Sport",
      percentageOfFees: "???"
    },
    schoolImage: "/images/gordonstoun.jpg",
    documentId: 18502953,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Around a third of our pupils receive financial support. We fund this extensive scholarship programme with our own resources and through fundraising. This programme is managed through our designated bursary fund ''The Prince Philip Gordonstoun Foundation''. Parents or guardians who need to apply for a means-tested bursary should request the appropriate form from the Fees Administrator, Alison More, by emailing fees@gordonstoun.org.uk or by telephoning 01343 837914.  ",
      percentageOfFees: "???",
    },
    established: 1934,
    enquireUrl: "https://www.stpetersyork.org.uk/admissions/bursaries-scholarships/bursaries-scholarships"
  }

  
];
  
export default function SchoolsList({searchTerm}) {


    //const schoolsToShow = schoolsSampleData.filter(school => school.schoolLocation || school.schoolName || school.schoolType)

    const normalizedSearchTerm = searchTerm.toLowerCase();

    const schoolsToShow = schoolsSampleData.filter((school) => {
      return (
        school.schoolName.toLowerCase().includes(normalizedSearchTerm) ||
        school.schoolLocation.toLowerCase().includes(normalizedSearchTerm) ||
        school.coeducation.toLowerCase().includes(normalizedSearchTerm) ||
        school.stages.some((stage) =>
          stage.toLowerCase().includes(normalizedSearchTerm)
        ) ||
        school.schoolType.some((type) =>
          type.toLowerCase().includes(normalizedSearchTerm)
        ) ||
        school?.scholarships?.scholarshipsDetail
          ?.toLowerCase()
          .includes(normalizedSearchTerm) ||
        school?.Bursaries?.BursariesDetail
          ?.toLowerCase()
          .includes(normalizedSearchTerm)
      );
    });


  return (
    <div className="w-full px-6 pt-10 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {schoolsToShow.map((school) => (
          <SchoolCard
            key={school.schoolName}
            schoolName={school.schoolName}
            schoolLocation={school.schoolLocation}
            Bursaries={school.Bursaries.BursariesAvailable}
            scholarships={school.scholarships.scholarshipsAvailable}
            schoolImage={school.schoolImage}
            documentId={school.documentId}
            stages={school.stages}
            coeducation={school.coeducation}
            schoolType={school.schoolType}
            latitude={school?.latitude}
            longitude={school?.longitude}
            feesSchemes={school?.feesSchemes}
            schoolDescription={school?.schoolDescription}
            established={school.established}
            /*onClickHandler={onClickHandler}*/ 
          />
        ))}
      </div>
    </div>
  )
}

export { schoolsSampleData };