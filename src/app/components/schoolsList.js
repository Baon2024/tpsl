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
    documentId: 8457201344,
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
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: "It is also possible to spread the cost of fees over 12 months through our partner company, School Fee Plan.",
    },
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
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
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
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    established: 1934,
    enquireUrl: "https://www.gordonstoun.org.uk/admissions/scholarships-bursaries"
  },
  {
    schoolName: "Shrewsbury School",
    schoolDescription: `Shrewsbury School is a prestigious independent co-educational boarding and day school located in Shrewsbury, Shropshire, England. Founded in 1552 by Edward VI, it is one of the original nine "great public schools" defined by the Public Schools Act 1868. The school combines a rich tradition of academic excellence with strong extracurricular programs, including music, drama, sports, and outdoor activities. Its scenic campus overlooks the River Severn and provides modern facilities alongside historic architecture. Known for its strong sense of community, the school offers a well-rounded education emphasizing personal growth, leadership, and preparation for university and beyond.`,
    schoolEmail: "reception@shrewsbury.org.uk", 
    schoolPhoneNumber: "+ 44 01743 280 500", 
    latitude: 52.702397099804806, //52.702397099804806, -2.7645012970941125
    longitude:  -2.7645012970941125,  // 53.966374704438394, -1.0933498907256507
    schoolLocation: "Shrewsbury, Shropshire, Midlands",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: 142932, //
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "Shrewsbury School has a long tradition, since its founding Charter in 1552, of making generous Scholarship awards recognising outstanding ability. These are an important part of our policy to ensure that the benefits of a Shrewsbury education are accessible to those who do not have the means to pay the full fee. Scholarships fall into various categories - Academic, Music, Art, Drama, Design Technology, Sport and All-Rounder. Awards are made either to pupils under the age of 14 who join the School in the Third Form, or to those entering the School at Sixth Form level. Contact Admissions to discuss available options and arrange a bespoke visit. Alternatively, book one of our forthcoming Open Days.",
      percentageOfFees: [10, 100],
    },
    schoolImage: "/images/shrewsbury.png",
    documentId: 1850295324,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Each year Shrewsbury awards scholarships and bursaries to help fund the fees of talented pupils who will benefit from the educational opportunities offered by the School.  The provision of education is the primary charitable object of the School and our grant-making policy aims to improve access to the School for those who would not otherwise be able to enjoy a Shrewsbury education. The School's policy is to make awards on the basis of the applicant's educational ability and his or her family's ability to pay, subject to the particular conditions imposed by the original donor, where the award is taken from restricted funds. Individual awards will be dependent on the level of financial need identified. Where the demand exceeds the number of bursaries available, bursary funds will be directed to those pupils who are identified as having potential to benefit most from the opportunities Shrewsbury has to offer, and will be able to contribute to the life of the School with reference to performance in the Entrance Assessments.",
      percentageOfFees: "???",
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: "The School is able to offer discounted fees for parents who choose to pay their fees in advance. If you wish to discuss the School's fees in advance scheme further, please contact Tom Young (tyoung@shrewsbury.org.uk). "
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: ["Shrewsbury School is extremely proud of its military heritage, which dates back over 470 years. To this day, we continue to be home to a vibrant community of pupils from families of serving military personnel who thrive at Shrewsbury.", "Shrewsbury is pleased to support the Continuity of Education Allowance Scheme provided by the Ministry of Defence through a highly generous Forces' Bursary. This arrangement ensures that military parents are responsible for no more than 10% of the gross full boarding fees, with the remaining amount being covered by Shrewsbury as part of the Forces’ Bursary, supplemented by the financial assistance received from the Continuity of Education Allowance.", "Shrewsbury is a school with a rich heritage that instils in all Salopians the values of service, leadership and valour. "],
      percentageOfFees: 90,
    },
    established: 1552,
    enquireUrl: "https://www.shrewsbury.org.uk/admissions/admissions"
  },
  {
    schoolName: "Ampleforth College",
    schoolDescription: `Ampleforth College is a renowned independent co-educational boarding and day school located in North Yorkshire, England. Founded in 1802 by the Benedictine monks of Ampleforth Abbey, it is one of the country's leading Catholic schools. The college emphasizes a holistic education rooted in Benedictine values, offering a strong academic curriculum alongside exceptional opportunities in sports, music, drama, and outdoor activities. Its picturesque campus, set in a tranquil valley, provides modern facilities and a nurturing environment that fosters personal growth, leadership, and spiritual development. Ampleforth College is known for its commitment to faith, community, and preparing students for successful futures.`,
    schoolEmail: "admissions@ampleforth.org.uk", 
    schoolPhoneNumber: "+ 44 01439 766 000", 
    latitude: 54.20237464429836, //
    longitude:  -1.0822328160473165,  // 
    schoolLocation: "Ampleforth, North Yorkshire, Yorkshire & the Humber",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: 127080, //
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Scholarships at Ampleforth are awarded in recognition of academic ability or particular talent in the disciplines of Art, Design & Technology, Drama, Dance, Music (Instrumental & Choral), and Sport.", "Ampleforth Scholarships are highly prestigious, recognising existing skills and talents, together with potential. Our scholars provide leadership to their peers and in return, we offer dedicated, tailored programmes to nurture and develop their talents. Scholars are expected to demonstrate a strong contribution and leadership in their field of interest. They are also expected to make the most of the many opportunities on offer to further their talents and each scholar is assigned a personal Scholarship Mentor to monitor and support their progress.", "In Years 7 and 8, to encourage junior pupils to further their interests, Academic and Sports Development Awards carry a 10% fee remission, whilst Music, Dance, and Drama Development Awards cover tuition in an instrument, LAMDA, or dance.", "From Year 9 onwards, scholarships are honorary and bring no fee remission (although in the case of Music Scholarships, music tuition is covered). However, scholarships can be extremely helpful in supporting a bursary application as a strong indication of a child likely to flourish at Ampleforth."],
      percentageOfFees: [0, 10],
    },
    schoolImage: "/images/ampleforth.jpg",
    documentId: 18502953247,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Many families would like their children to have an Ampleforth education but, for some, this is beyond their financial means so bursaries are in demand. All bursary applications have to show that financial assistance with the payment of fees is needed", "Once awarded, each bursary is reviewed on an annual basis and parents are notified of the value of the award for the next academic year.", "To discuss applying for a bursary in more detail, please contact us on admissions@ampleforth.org.uk or call 01439 741081."],
      percentageOfFees: "???",
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: ["Parents wishing to make a lump sum fee payment in advance may like to consider our Fees in Advance scheme. Please contact our Fees Officer for details on fees@ampleforth.org.uk or 01439 766869. "],
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: ["A 20% discount is offered to the children of HM Armed forces and HM Diplomatic Service who are in receipt of the Continuity of Education Allowance (CEA). This is not in addition to the sibling discounts listed. Means-tested bursary assistance may also be available dependent upon individual circumstances"],
      percentageOfFees: 20,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: ["discounts for second up to fourth child, for both boarding and day"],
      percentageOfFees: [10, 30],
    },
    established: 1802,
    enquireUrl: "https://www.ampleforthcollege.org.uk/private-boarding-school-admissions-yorkshire"
  },
  {
    schoolName: "King's College School Cambridge",
    schoolDescription: `King's College School, Cambridge, is a distinguished independent co-educational day school located in the heart of Cambridge, England. Founded in 1441 as part of King’s College by King Henry VI, the school has a rich history of academic excellence and is closely associated with the world-famous King’s College Chapel. The school provides a rigorous and well-rounded education, emphasizing intellectual curiosity, creativity, and personal development. Alongside its strong academic program, King's College School offers outstanding opportunities in music, arts, and sports. Its close-knit community and central location create a vibrant environment where students thrive and are prepared for future success.`,
    schoolEmail: "office@kcs.cambs.sch.uk", 
    schoolPhoneNumber: "+ 44 01223 365 814", 
    latitude: 52.203043628857415, //
    longitude:  0.10662487815197387,  // 
    schoolLocation: "Cambridge, Cambridgeshire, Midlands",
    stages: ["primary", "lower secondary"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: 212274, //day fees, 3 terms, 9 years - 4 to 13
    scholarships: {
      scholarshipsAvailable: false,
      scholarshipsDetail: null,
      percentageOfFees: null,
    },
    schoolImage: "/images/kings-school-cambridge.webp",
    documentId: 1850295324791,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["King’s College School is pleased to offer a means-tested bursary worth up to 100% of the school fees to a child currently at a state primary school to join Year 3.","This would suit a child with academic and musical potential, who would benefit from the outstanding provision we offer at King’s.","Please contact the Registrar for more information."],
      percentageOfFees: 100,
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1441,
    enquireUrl: "https://www.kcs.cambs.sch.uk/admissions/fees-and-bursaries/"
  },
  {
    schoolName: "The Leys School",
    schoolDescription: `The Leys School is a prestigious independent co-educational boarding and day school located in the historic city of Cambridge, England. Founded in 1875, it combines academic excellence with a strong emphasis on pastoral care and personal development. The school offers a broad and balanced curriculum, complemented by a wide range of extracurricular activities, including sports, music, drama, and outdoor pursuits. Its beautiful campus blends historic architecture with modern facilities, providing a nurturing and inspiring environment. Known for its welcoming community and focus on individual achievement, The Leys School prepares students for success at university and beyond while fostering values of integrity, leadership, and service.`,
    schoolEmail: "office@theleys.net", 
    schoolPhoneNumber: "+44 (0)1223 508904", 
    latitude: 52.19682464128857, //
    longitude:  0.12032678187249772,  // 
    schoolLocation: "Cambridge, Cambridgeshire, Midlands",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: 217821, //day fees, 3 terms, 9 years - 4 to 13
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Scholarships at The Leys are offered at Year 9 (13+) and Sixth Form (16+). For Year 7, candidates who perform well in our Entrance Tests are invited to attend a series of interviews with senior staff to be considered for a Scholarship.", "The Leys offers a number of Scholarships under the categories of: Academic, Art, Drama, Music and Sport. The number of awards is dependent upon the calibre of the candidates, and their continuation is subject to the pupil maintaining satisfactory standards. They are open to those entering the School as well as to current pupils who will be entering the Sixth Form in the Autumn Term.Scholars are typically awarded a 5% remission on school fees (with the exception of the Choral and Organ Awards). However, the real value is in the support, guidance and opportunities which Scholars receive. "],
      percentageOfFees: 5,
    },
    schoolImage: "/images/leysschool.jpeg",
    documentId: 18502953247912,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["The Leys is committed to broadening access to the School by offering means-tested financial support to help parents with the payment of School fees. Such support is known as a Bursary and is awarded in the form of a discount on the fees. The value of the Bursary is dependent on financial, compassionate and other pertinent circumstances. Assistance is offered to new applicants to the school and also to existing families where there is a change in financial circumstances. The School has a limited amount of funds available for Bursaries and seeks to allocate the funds to assist as many families as possible. Please note that parents of new pupils who wish to apply for a Bursary must do so before their son or daughter is assessed for entry to the school. For further information about the process, please contact the Finance Bursar, Mrs Mary Cooksey on +44 (0)1223 508909 or mjc@theleys.net", "In addition, though our Gift of Education programme, we able to offer funded bursary places allowing disadvantaged or vulnerable pupils to access the opportunities provided by a Leysian education. For further information about Gift of Education bursaries, including how to apply, families should contact The Royal National Children’s SpringBoard Foundation in the first instance."],
      percentageOfFees: "???",
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1875,
    enquireUrl: "https://www.theleys.net/admissions/"
  },
  {
    schoolName: "The Perse School",
    schoolDescription: `The Perse School is a highly respected independent co-educational day school located in Cambridge, England. Founded in 1615 by Dr. Stephen Perse, the school has a long-standing reputation for academic excellence and innovative teaching. The Perse offers a rich and diverse curriculum, encouraging intellectual curiosity, critical thinking, and creativity. Alongside academics, the school provides outstanding opportunities in sports, music, drama, and outdoor education, fostering well-rounded personal development. Its modern facilities and supportive community create an environment where students are inspired to achieve their full potential. Known for its strong values and commitment to preparing students for successful futures, The Perse School is one of the leading schools in the region.`,
    schoolEmail: "schooloffice@perse.co.uk", 
    schoolPhoneNumber: "+44 (0)1223 403800", 
    latitude: 52.1972419211202, // //52.1972419211202, 0.12726669307427999
    longitude:  0.12726669307427999,  // 
    schoolLocation: "Cambridge, Cambridgeshire, Midlands",
    stages: ["primary","secondary", "sixth form"],
    schoolType: ["day"],
    coeducation: "mixed-sex",
    totalSchoolFees: 362973, //61065, 94500, 207408
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["In Years 7 and 9, we award music scholarships. Perse pupils in Year 7 and Year 9 will receive an invitation to audition for a music scholarship at the end of the academic year’. Scholarship awards are not means-tested and are one off payments of £500.", " Sixth form academic scholarships are available to both current pupils and external applicants. Current Year 11 pupils are continually assessed during Years 10 and 11 and scholarships are awarded to the top performing students, usually approximately 15 pupils. Perse Sixth Form Scholarships are also open to existing Year 11(who have not been awarded one by continuous assessment) and external applicants (who have reached a satisfactory standard in the entrance tests) and would be awarded as follows: Perse Sixth Form Academic Scholarships via exemplary performance on the Sixth Form entrance tests (usually a maximum of 10 scholarships). Perse Sixth Form Music Scholarships via music auditions (usually a maximum of 4 scholarships). Perse Sixth Form Sports Scholarships via sporting assessments / interviews (usually a maximum of 4 scholarships). Perse Sixth Form Art Scholarships via art portfolio / interview (usually a maximum of 2 scholarships). Perse Sixth Form Drama Scholarship via drama audition (usually a maximum of 2 scholarships). Dr Perse Scholarships for school service. Dr Perse Scholarships will be awarded (via application) to students who either at The Perse or in their current school have made a major contribution to the extracurricular (breadth and balance) and pastoral (valuing one another and the environment) life of the / their school (usually a maximum of 10 scholarships)."],
      percentageOfFees: "£500",
    },
    schoolImage: "/images/perse.jpg",
    documentId: 18502953247913,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["The Perse is committed to broadening access by offering eligible parents/guardians means-tested financial support with school fees. The Perse Upper School offers a number of bursaries which are means-tested. No bursaries are available for entry into the Pre-Prep or Prep Schools. Bursary holders receive a percentage reduction against tuition fees, school lunch charges and middle school device scheme charges.","The securing and induction fee payable on acceptance of a place is also reduced by the same percentage.  For children awarded higher levels of bursary support, additional funding may also be offered to assist with the cost of certain extras.","During the 2022/23 academic year 67 pupils at the Upper School are receiving bursary awards.  Of these, 2 receive bursaries between 5% - 24%, 9 receive bursaries between 25% - 49%, 22 receive bursaries between 50% -74% and 34 receive bursaries of 75% or higher with 14 of those receiving full bursary support. Bursaries are available for new entrants to the Upper School joining at different entrance points and are awarded at entry into Year 7, Year 9 and the sixth form. These awards vary from 5% to 100%. The Perse has limited bursary funds to provide emergency assistance to parents of Prep and Upper School pupils where there has been an unforeseen change in financial circumstances. Such awards are subject to availability and cannot be guaranteed. (For information on this for existing pupils please contact the Deputy Bursar. To apply for a bursary, parents must first complete the registration form and pay the registration fee before the deadline published on the School’s website. The box on the registration form applying for ‘means-tested assistance with school fees’ must be ticked. The Bursary will then send the parents a link to the School’s online bursary portal where they can provide the required financial information and supporting documentation which must be submitted before the entrance test date. All bursaries are assessed on a means-tested basis and include a visit to the family home of applicants who have been offered a place at the School to help gain an understanding of the family situation and calculate the financial need of the family on an individual basis. Assessments take into account the family’s situation, including the financial circumstances of both parents and of any current partner of one or both parents, along with social security benefits and other financial details. These will include both capital and current income. The School will advise parents in writing of the amount of financial support they will receive before they need to take a decision on any offer of a place. All bursary applications are subject to annual means-testing and may be varied upwards or downwards depending on parental circumstances and financial information provided on review. A child can be awarded a bursary and scholarship at the same time."],
      percentageOfFees: [5, 100],
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: 'The school accepts payment of fees in advance for a period of three terms or more, the actual calculation for which depends on the number of terms and the items to be included. Details may be obtained from fees@perse.co.uk. ',
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1615,
    enquireUrl: "https://www.theleys.net/admissions/"
  },
  {
    schoolName: "King's Ely",
    schoolDescription: `King's Ely is a historic independent co-educational day and boarding school located in Ely, Cambridgeshire, England. With roots dating back to 970 AD, it is one of the oldest schools in the world, blending centuries of tradition with a modern approach to education. The school offers a broad curriculum that nurtures academic excellence, creativity, and critical thinking, alongside exceptional opportunities in music, drama, art, and outdoor activities. Situated near the iconic Ely Cathedral, the campus provides a unique and inspiring setting. Known for its welcoming and inclusive community, King's Ely fosters personal growth, leadership, and resilience, preparing students to excel in their future endeavors.`,
    schoolEmail: "admissions@kingsely.org", 
    schoolPhoneNumber: "+44 (0)1353 660707", 
    latitude: 52.39883541327537, // //52.1972419211202, 0.12726669307427999
    longitude:  0.26181982617544736 ,  //52.39883541327537, 0.26181982617544736 
    schoolLocation: "Ely, Cambridgeshire, Midlands",
    stages: ["primary","secondary", "sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "mixed-sex",
    totalSchoolFees: 170318, //61065, 94500, 207408
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Scholarships are also awarded following an application process for the following: Academic Scholarships for entry into Year 9, Year 9 specialist Scholarships for Music, Art, Drama, STEM and Sport, Sixth Form Scholarships (on entry into Year 12) are open to existing pupils or to candidates from other schools following their GCSEs. Please note: most scholarship financial related awards are subsumed by any Choral Awards. Governors are particularly appreciative if parents whose child has been selected for a scholarship are willing to surrender some or all of any financial benefit to another pupil who needs assistance. Their own child would still retain the status of scholar. All scholarships expire at the end of Year 11 (a fresh application to enter into Year 12 is required). Parents of eligible scholarship applicants are contacted by letter to invite applications. The letter provides clear timelines within the application and assessment process.","All scholarships are reviewed annually."],
      percentageOfFees: "???",
    },
    schoolImage: "/images/kings-ely.webp",
    documentId: 185029532479138,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Our bursaries are means-tested and the process is thorough and impartial, ensuring that our funds go to those who are most deserving. Throughout each year we receive applications for help in times of unexpected hardship, enabling children to experience continuity and stability when they need it most.","Until 1997, the Assisted Places scheme supported families for whom independent education was out of reach. Many of our alumni benefitted from this scheme as well as from the generosity of previous generations of benefactors of our school.","Without an endowment to support the school we are limited in our capacity to provide funds to those in need. However, we want to continue to provide support if at all possible.","We hope that our community will support this vital work, bringing in young people who enrich our school and giving them a life-changing education. If you feel that you or your child benefitted from an education at King’s Ely then please support our Bursary fund."],
      percentageOfFees: "???",
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: ["We operate a scheme whereby funds towards school fees can be paid in advance attracting a small discount.  If Fees in Advance are used to pay fees, the Acceptance Deposit is required in addition to the FIA.","At the start of each term the FIA value held by the school must always be equal to or above the combined value of the Acceptance Deposit and the Additional Deposit for International domiciled pupils. When fees are paid in advance, any extra charges should be settled each term as per the invoice issued.","For further information, please contact the Chief Financial Officer and Deputy COO, Mrs Fiona Sanders-Hewett."],
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: ["King's Ely provides allowances for elegible families of the Armed Forces, the Foreign, Commonwealth and Development Office (FCDO) and the Clergy","A fee remission of up to 10% for children of Clergy serving the Christian faith within the Anglican Communion (available from Reception Year).","Boarding children eligible for Armed Forces Continuity of Education Allowance (CEA) receive an allowance such that taking into account any other Scholarships and/or Awards, the parental contribution is limited to 10% of the boarding fees (the CEA Allowance pays the remaining 90%). This will be reviewed if the MoD changes significantly the CEA scheme and/or the funding arrangements at any time in the future."],
      percentageOfFees: [10, 90],
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: ["King's Ely recognises family loyalty by offering a Sibling Discount. A sibling discount of 10% of the day fees is awarded to the third child and subsequent children of the same immediate family attending King’s Ely. The discount is only available whilst three or more children from the same parent(s) are at King’s Ely concurrently and only available from Year 3 onwards. The discount will apply to the youngest child(ren), irrespective of the order of entry into the school, and will cease as older siblings leave school."],
      percentageOfFees: 10,
    },
    established: 970,
    enquireUrl: "https://www.kingsely.org/admissions"
  },
  {
    schoolName: "Oswestry School",
    schoolDescription: `Oswestry School is a distinguished independent co-educational day and boarding school located in Shropshire, England. Founded in 1407, it is one of the oldest schools in the country, combining a rich heritage with a forward-thinking approach to education. The school offers a broad and balanced curriculum that emphasizes academic excellence, creativity, and critical thinking. With a strong focus on personal development, students are encouraged to participate in a wide range of extracurricular activities, including sports, music, drama, and outdoor pursuits. Its welcoming community and picturesque campus provide a nurturing environment where students thrive, developing confidence, leadership, and resilience to prepare for their futures.`,
    schoolEmail: "enquiries@oswestryschool.com", 
    schoolPhoneNumber: "+44 (0) 1691 655711", 
    latitude: 52.85611213778966, // //52.1972419211202, 0.12726669307427999
    longitude: -3.0626770449622684,  //52.85611213778966, -3.0626770449622684
    schoolLocation: "Oswestry, Shropshire, Midlands",
    stages: ["primary","secondary", "sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "mixed-sex",
    totalSchoolFees: 159820, //61065, 94500, 207408
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Scholarships are available for candidates showing evidenced talent in, and commitment to, Academic subjects, Art & Design, Design & Technology, Languages, Performing Arts, and Sport.","Scholarships can be worth up to a maximum of 20% of school fees.","If you would like more information on our Scholarship Programme and whether your child is eligible, please contact our Admissions Team."],
      percentageOfFees: [0,20],
    },
    schoolImage: "/images/oswestry.jpg",
    documentId: 1850295324791381,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["The bursary is a reduction in fees based on an assessment of the merit of a pupil and the financial circumstances of the family. This is a means-tested award and may be awarded in addition to a scholarship. Bursaries are not dependant on scholastic merit, but are awarded to pupils who are likely to gain the most from an Oswestry School education and will contribute fully to the life of the school.","The pupils in question must satisfy the school's entry requirements and continue to work to capacity as they progress through the school. Parents who feel that they may need the support of a bursary are encouraged to discuss the matter with the school well in advance of the child's due date of entry. Judgements are dependent on a supporting reference from a candidate's previous school (where applicable), an informal interview and scrutiny of the family's financial circumstances.","Contact the Admissions Office to ask for a Bursary Application Form. "],
      percentageOfFees: [0,100],
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: ["In support of the Armed Forces Covenant we offer serving members of the armed forces a 20% reduction in school fees."],
      percentageOfFees: 20,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: ["A sibling discount of 10% is granted to families with a second child in the school and is applied on the younger child's account. Further siblings each receive a 25% discount."],
      percentageOfFees: [10, 25],
    },
    established: 1407,
    enquireUrl: "https://www.oswestryschool.com/admissions-home"
  },
  {
    schoolName: "The Peterborough School",
    schoolDescription: `The Peterborough School is a well-regarded independent co-educational day school located in Peterborough, Cambridgeshire, England. Founded in 1895, the school offers a nurturing and inclusive environment where students are encouraged to excel academically and personally. With a broad and dynamic curriculum, it promotes intellectual curiosity, creativity, and critical thinking, alongside opportunities to participate in sports, music, drama, and various extracurricular activities. Set within a beautiful campus close to the city center, the school combines modern facilities with a strong sense of community. The Peterborough School is known for its dedication to pastoral care, fostering confidence, leadership, and a lifelong love of learning in its students.`,
    schoolEmail: "admissions@tpsch.co.uk", 
    schoolPhoneNumber: "+44 01733 343357", 
    latitude: 52.57559517316705, // //52.1972419211202, 0.12726669307427999
    longitude:  -0.2624535026499312,  //52.57559517316705, -0.2624535026499312
    schoolLocation: "Peterborough, Cambridgeshire, Midlands",
    stages: ["primary","secondary", "sixth form"],
    schoolType: ["day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [12945, 21882], //61065, 94500, 207408
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Pupils applying to enter the School in Year 7 or for Sixth Form are eligible to apply for a Scholarship, and a limited number of Scholarships may be awarded. Traditionally, Scholarship applications for entry into Year 7 need to be received by the November in the year prior to entry, and for Sixth Form applications the entry needs to be received in the October where entry would fall in the following academic year. ","The following Scholarships are open for applications from pupils either moving up from Year 6 within our Preparatory School, or for those moving to us for Year 7. The Helen Belgion Memorial Scholarship is awarded each year on the results of the Entrance Examination. It is open to all children entering Year 7 and is worth 50% in fee remission annually. There is also a range of other academic scholarships awarded to students entering Year 7, which vary in the fee remission available. Music Scholarships, worth 10% of fees annually plus a weekly music lesson, are awarded each year and are open to all pupils entering Year 7 of Grade 3 level or above. The Hannah Warner Scholarship for creativity, worth 12.5% in fee remission annually, is awarded each year to a Year 7 pupil. A Sports Scholarship is awarded each year and is open to all pupils entering Year 7.  Sport scholarships are worth £1,000 annually towards specialist coaching, sports tours, travel or equipment costs etc, as agreed with the Bursar. Woodard Scholarships are available to students who combine a strong academic performance, as indicated on entrance assessments, with clear potential in one or more of the following categories:  creative arts (music, drama, dance, art), sport or leadership.  Woodard Scholarships are awarded at the Headmaster's discretion to pupils in Year 7 and those joining in other Senior School year groups."],
      percentageOfFees: [10,50],
    },
    schoolImage: "/images/peterborough.jpg",
    documentId: 1850295324791389,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["The School is able to offer a limited number of bursaries, which are awarded on the grounds of financial need. Bursaries are of very limited availability and are reviewed annually.","These may be awarded in the form of a discount on tuition fees payable, depending on the financial, compassionate or other pertinent circumstances of applicants. ","Bursary awards are subject to repeat testing of parental means each year and may be varied upwards or downwards, depending on parental circumstances. Awards are made on the basis of a confidential scale of awards which sets out award levels in relation to a family's financial circumstances (e.g. their savings, investments and realisable assets as well as their income, the size of their family, any other persons dependent upon them and like factors)."],
      percentageOfFees: "mean-tested",
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: ["For School Fees, most parents opt to use our no-cost direct debit monthly fee payment plan, offered by market-leading school fee finance provider, School Fee Plan.", "You may apply online to pay fees in monthly instalments by clicking this link https://www.myschoolfeeplan.com/ThePeterboroughSch-PE3"],
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: ["A discount is available for families with three or more children at the School."],
      percentageOfFees: "???",
    },
    established: 1895,
    enquireUrl: "https://www.thepeterboroughschool.co.uk/admissions"
  },
  {
    schoolName: "Eaton Square Prep School",
    schoolDescription: `Eaton Square Senior School is a respected independent co-educational day school located in the heart of central London. Known for its personalized approach to education, the school provides a supportive and inclusive environment where students are encouraged to thrive academically, socially, and emotionally. Offering a modern curriculum designed to foster intellectual curiosity, creativity, and critical thinking, Eaton Square also places great emphasis on extracurricular opportunities, including sports, performing arts, and leadership initiatives. With its prime location and close-knit community, the school prepares students for success at university and beyond, instilling confidence, resilience, and a passion for lifelong learning.`,
    schoolEmail: "registrar@eatonsquareschools.com", 
    schoolPhoneNumber: "+44 0207 225 3131", 
    latitude: 51.49361938367208, // //52.1972419211202, 0.12726669307427999
    longitude:  -0.1435888484034945,  //51.49361938367208, -0.1435888484034945
    schoolLocation: "Pimblico, London, South-East",
    stages: ["primary","prep"],
    schoolType: ["day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [29685, 31950], //per annual school year
    scholarships: {
      scholarshipsAvailable: false,
      scholarshipsDetail: null,
      percentageOfFees: null,
    },
    schoolImage: "/images/eatonprep.webp",
    documentId: 185053247913891,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: false,
      BursariesDetail: null,
      percentageOfFees: null,
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: null,
    enquireUrl: "https://www.eatonsquareschools.com/admissions/"
  },
  {
    schoolName: "Radnor House Twickenham",
    schoolDescription: `Radnor House is a highly regarded independent co-educational day school situated on the banks of the River Thames in Twickenham, London. Founded in 2011, the school is known for its nurturing and inclusive community, where each student is encouraged to excel both academically and personally. Offering a broad and dynamic curriculum, Radnor House emphasizes intellectual curiosity, creativity, and resilience, alongside exceptional opportunities in sports, performing arts, and extracurricular activities. Its modern facilities and picturesque riverside setting provide an inspiring environment for learning. Radnor House is dedicated to fostering confidence, leadership, and a love of learning, preparing students for successful futures.`,
    schoolEmail: "registrar@eatonsquareschools.com", 
    schoolPhoneNumber: "+44 (0)20 8891 6264", 
    latitude: 51.44216000131499, // //52.1972419211202, 0.12726669307427999
    longitude: -0.3308083150206847,  //51.44216000131499, -0.3308083150206847
    schoolLocation: "Twickenham, London, South-East",
    stages: ["secondary","sixth form"],
    schoolType: ["day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [24435, 28530], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["We offer academic scholarships for applicants joining us following the entrance examination for Year 7. These are awarded at the discretion of the Principal and therefore, we do not have a formal scholarship application process. Scholarships in other areas, including Sport, Music, Drama and Art are considered in Year 11 for Radnor students. Scholarships in these areas are based on commitment demonstrated throughout their time at the school and are offered at the discretion of the Principal."],
      percentageOfFees: "???",
    },
    schoolImage: "/images/Radnor-House.webp",
    documentId: 185053247223891,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Means-tested bursaries of up to 30% are awarded more usually to students in Years 9 and above, and are awarded for the duration of their time at the school. If you are interested in enquiring about a bursary please contact the Principal's PA, Susan Wood, on swood@radnorhouse.org  who will send you a link to the bursary application form."],
      percentageOfFees: [0,30],
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 2011,
    enquireUrl: "https://www.radnor-twickenham.org/admissions/admissions-process"
  },
  {
    schoolName: "Epsom College",
    schoolDescription: `Epsom College is a prestigious independent co-educational day and boarding school located in Surrey, England. Founded in 1855, the school has a long-standing reputation for academic excellence, strong pastoral care, and a commitment to developing well-rounded individuals. Epsom College offers a rigorous curriculum alongside outstanding opportunities in sports, music, drama, and leadership, fostering intellectual curiosity and personal growth. Set within a stunning 85-acre campus, the school provides a supportive and inspiring environment where students are encouraged to achieve their full potential. With a strong sense of community and values rooted in service and integrity, Epsom College prepares students for success at university and beyond.`,
    studentNumbers: 1143,
    faithSchool: "Church of England",
    schoolEmail: "admissions@epsomcollege.org.uk", 
    schoolPhoneNumber: "+44 01372 821 234", 
    latitude: 51.32599803243023, // //52.1972419211202, 0.12726669307427999
    longitude:  -0.24532391621510422,  //51.32599803243023, -0.24532391621510422
    schoolLocation: "Epsom, Surrey, South-East",
    stages: ["secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "mixed-sex",
    totalSchoolFees: [28443, 55158], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Scholarships are our way of recognising and rewarding those pupils who demonstrate particular promise in academic study, Drama, Music or Sport. ","A number of Academic Awards are available at every entry point in the College – 11+, 13+ and 16+ – and range in value from £750 to £6,000 per year.","We award two Performing Arts Scholarships and two Performing Arts Exhibitions at each entry point into the College (11+, 13+, and 16+). A Scholarship is worth £1,000 a year, and an Exhibition is worth £750 a year. We award scholarships for talent and prowess in acting and directing as well as technical aspects of production such as set and sound design.","We award two Performing Arts Scholarships and two Performing Arts Exhibitions at each entry point into the College (11+, 13+, and 16+). A Scholarship is worth £1,000 a year, and an Exhibition is worth £750 a year. Music scholars will lead by example and become immersed in all aspects of music-making and performance at the College. Many scholars leave Epsom to study and perform at the highest level internationally.","We welcome applications for Sports scholarships at all entry points into the College. The value of our Sports scholarships vary each year, depending on the number and quality of scholars – but each will access the full benefit of our specialised Talented and Gifted programme."],
      percentageOfFees: "???",
    },
    schoolImage: "/images/epsom.jpg",
    documentId: 185053247323891,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Last year, we offered just under £2m of support to families. 76 pupils benefited from bursaries, with more than half receiving support of 75% or more of their fees.","If you feel your circumstances qualify you for financial support, we would encourage you to read our guidance for means-tested bursaries. Funds are limited, therefore we advise you to apply 6-12 months before your child enrols at Epsom. "],
      percentageOfFees: "means-tested",
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: ["It is possible to pay all your child’s school fees in advance, as a single lump sum. The fee can be paid by anyone (not only the child’s parents) and brings with it significant savings."],
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1855,
    enquireUrl: "https://www.epsomcollege.org.uk/admissions/"
  },
  {
    schoolName: "Royal Grammar School Guildford",
    schoolDescription: `The Royal Grammar School, Guildford (RGS Guildford), is a prestigious independent boys’ day school located in Surrey, England. Founded in 1509, the school has a rich history of academic excellence and a reputation for nurturing intellectual curiosity, leadership, and personal development. RGS Guildford offers a challenging and dynamic curriculum, complemented by outstanding opportunities in sports, music, drama, and extracurricular activities. Set within a historic yet modern campus, the school fosters a supportive and ambitious environment where students are encouraged to reach their full potential. With a strong tradition of scholarship and innovation, RGS Guildford prepares its students for top universities and successful futures.`,
    studentNumbers: 1312,
    faithSchool: "non-denominational",
    schoolEmail: "RGS-Admissions@rgsg.co.uk", 
    schoolPhoneNumber: "+44 01483 880 600", 
    latitude: 51.23732846566378, // //52.1972419211202, 0.12726669307427999
    longitude:  -0.569051683801031,  //51.23732846566378, -0.569051683801031
    schoolLocation: "Guildford, Surrey, South-East",
    stages: ["prep", "secondary","sixth form"],
    schoolType: ["day"],
    coeducation: "boys",
    totalSchoolFees: [16098, 24174], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["We offer a number of scholarships at various entry points: 11+, 13+ and 16+.","The categories are: Academic, Art, Drama, Music and Sport Scholarships","Scholarships are not means-tested and can be combined with bursaries"],
      percentageOfFees: [5,20],
    },
    schoolImage: "/images/royalGuildford.jpg",
    documentId: 1850432473238921,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["A bursary (assistance with fees) to attend the RGS and RGS Prep can offer a life-changing experience, providing students with the knowledge, the values and the skills to flourish at school and beyond.  Our vision is to realise the talent of future generations by providing an excellent education to students of all backgrounds.  As a result, although entry is competitive, any parent who would like their son to come to the RGS or RGS Prep should not be deterred from applying for financial reasons as bursary funding is offered to successful applicants on a means-tested basis.","Those applying to join the RGS at age 11 and those applying to join from Year 3 at RGS Prep are eligible for bursaries","There is no set number of bursary awards that may be made; the funds available will determine the number of awards granted.  The value of bursaries is set by strict criteria and is based upon financial need; these are rigorously means tested and reviewed each year."],
      percentageOfFees: [25,100],
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: ["It is possible to pay all your child’s school fees in advance, as a single lump sum. The fee can be paid by anyone (not only the child’s parents) and brings with it significant savings."],
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1509,
    enquireUrl: "https://www.rgsg.co.uk/admissions/"
  },
  {
    schoolName: "Sherrardswood School",
    schoolDescription: `Sherrardswood School is a well-regarded independent co-educational day school located in Welwyn, Hertfordshire, England. Founded in 1928, the school is known for its nurturing and inclusive community, where students receive a personalised education that encourages academic achievement and personal growth. Offering a broad and balanced curriculum, Sherrardswood fosters intellectual curiosity, creativity, and resilience, alongside a wide range of extracurricular activities, including sports, performing arts, and outdoor pursuits. Set within a beautiful woodland campus, the school provides a supportive and inspiring environment where students develop confidence, leadership skills, and a lifelong love of learning, preparing them for future success.`,
    studentNumbers: 502,
    faithSchool: "All-faiths",
    schoolEmail: "office@sherrardswood.co.uk", 
    schoolPhoneNumber: "+44 01438 714 282", 
    latitude: 51.82680561273373, // //
    longitude: -0.2061528604785276,  //51.82680561273373, -0.2061528604785276
    schoolLocation: "Welwyn, Hertfordshire, South-East",
    stages: ["primary", "secondary","sixth form"],
    schoolType: ["day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [1290, 6339], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["We offer a number of scholarships at various entry points: 11+, 13+ and 16+.","The categories are: Academic, Art, Drama, Music and Sport Scholarships","Scholarships are not means-tested and can be combined with bursaries"],
      percentageOfFees: [5,20],
    },
    schoolImage: "/images/sherrardswood.png",
    documentId: 1850433173238921,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: false,
      BursariesDetail: null,
      percentageOfFees: null,
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1928,
    enquireUrl: "https://www.sherrardswood.co.uk/admissions/"
  },
  {
    schoolName: "Amesbury School",
    schoolDescription: `Amesbury School is a respected independent co-educational preparatory school located in Hindhead, Surrey, England. Founded in 1870, it is one of the oldest prep schools in the country, known for its nurturing environment and commitment to academic excellence. The school offers a broad and engaging curriculum that fosters intellectual curiosity, creativity, and personal growth. Alongside strong academics, Amesbury provides exceptional opportunities in sports, performing arts, and outdoor education, encouraging well-rounded development. Set within a picturesque campus, the school combines traditional values with a modern approach to learning, preparing students for success at leading senior schools and beyond.`,
    studentNumbers: 349,
    faithSchool: "All-faiths",
    schoolEmail: "admissions@amesburyschool.co.uk", 
    schoolPhoneNumber: "+44 (0)1428 604 322", 
    latitude: 51.10076709037832, // //51.10076709037832, -0.7435842027348746
    longitude: -0.7435842027348746,  //
    schoolLocation: "Hindhead, Surrey, South-East",
    stages: ["primary", "prep"],
    schoolType: ["day","boarding"],
    coeducation: "mixed-sex",
    totalSchoolFees: [15120, 23334], //per annual school year
    scholarships: {
      scholarshipsAvailable: false,
      scholarshipsDetail: null,
      percentageOfFees: null,
    },
    schoolImage: "/images/amesbury.jpg",
    documentId: 185043317323331,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: false,
      BursariesDetail: null,
      percentageOfFees: null,
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1870,
    enquireUrl: "https://www.amesburyschool.co.uk/admissions/visit-us/"
  },
  {
    schoolName: "Dulwich College",
    schoolDescription: `Dulwich College is a prestigious independent boys’ day and boarding school located in South London, England. Founded in 1619 by Edward Alleyn, the school has a long-standing reputation for academic excellence, strong pastoral care, and a commitment to developing well-rounded individuals. Offering a rigorous and diverse curriculum, Dulwich College fosters intellectual curiosity, creativity, and leadership, alongside exceptional opportunities in sports, music, drama, and extracurricular activities. Its historic yet modern campus provides a stimulating environment where students are encouraged to achieve their full potential. With a strong tradition of scholarship and service, Dulwich College prepares students for top universities and successful futures.`,
    studentNumbers: 1899,
    faithSchool: "Church of England",
    schoolEmail: "enquiries@dulwich.org.uk", 
    schoolPhoneNumber: "+44 020 8693 3601", 
    latitude: 51.43900097660687, // //51.10076709037832, -0.7435842027348746
    longitude: -0.0855706603868238,  //51.43900097660687, -0.0855706603868238
    schoolLocation: "Dulwich, London, South-East",
    stages: ["primary", "prep","secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "mixed-sex",
    totalSchoolFees: 29094, //per annual school year
    scholarships: {
      scholarshipsAvailable: false,
      scholarshipsDetail: null,
      percentageOfFees: null,
    },
    schoolImage: "/images/amesbury.jpg",
    documentId: 1850433173433331,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: false,
      BursariesDetail: null,
      percentageOfFees: null,
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: false,
      forcesSchemeDescription: null,
      percentageOfFees: null,
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1619,
    enquireUrl: "https://www.amesburyschool.co.uk/admissions/visit-us/"
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
        ) 
      );
    });


  return (
    <div className="w-full px-6 pt-10 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {schoolsToShow.map((school, index) => (
          <SchoolCard
            key={school.documentId}
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
            schoolDescription={school?.schoolDescription}
            established={school.established}
            forceScheme={school?.forceScheme}
            feesScheme={school?.feesScheme}
            index={index}
            school={school}
            /*onClickHandler={onClickHandler}*/ 
          />
        ))}
      </div>
    </div>
  )
}

export { schoolsSampleData };