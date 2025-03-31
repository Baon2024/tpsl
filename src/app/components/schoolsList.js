'use client'
import { SchoolCard } from "./schoolCard"
//import 'public/images/eton.jpeg';

const schoolsSampleData = [
  
  {
    schoolName: "Winchester College",
    schoolDescription: [`Winchester College is one of the oldest and most prestigious independent schools in England, founded in 1382 by William of Wykeham. Located in Winchester, Hampshire, the school has a long-standing reputation for academic excellence, with a rigorous curriculum that fosters deep intellectual curiosity and independent thinking. Many students go on to study at top universities, including Oxford and Cambridge.`,`Traditionally a boys' boarding school, Winchester College now welcomes girls into the sixth form. The school offers a rich extracurricular program, excelling in sports, music, drama, and leadership activities. Its distinctive tutorial-style teaching, known as "Div," encourages students to explore subjects beyond exam syllabuses. With a historic campus, modern facilities, and a strong emphasis on character development and service, Winchester College provides a unique and inspiring environment that prepares students for future success.`],
    studentNumbers: 726,
    faithSchool: "Church of England",
    schoolEmail: 'information@wincoll.ac.uk',//
    schoolPhoneNumber: '+44 (0)1962 621 100',//
    latitude: 51.05854282570295,//51.05854282570295, -1.3126016585590796
    longitude: -1.3126016585590796,//
    schoolLocation: "Winchester, Hampshire, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "boys (some girls)",
    totalSchoolFees: [44400, 60000],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`Music and Sports Scholarships and the Warden's Sixth Form Awards are available to any candidate who shows exceptional talent or ability in their chosen field. The short films below give a snapshot of what is involved in being a Music or Sports Scholar at the College.`,`Sport and Music Award applications for 13+ entry are made in Year 8, with deadlines for applications in October and November respectively.`,`Sport and Music Award applications for 16+ entry are made at the same time as applications to the school.`,`Unlike Bursaries, Music and Sports Scholarships do not automatically carry a remission on school fees`],
      percentageOfFees: "no fee remission",
    },
    schoolImage: "/images/Winchester-College.jpeg",
    documentId: 57483920,
    ranking: 3,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`William of Wykeham established Winchester College to provide an education for those with the intellectual spark and curiosity to take advantage of everything the school had to offer, and the drive and determination to give something back - regardless of their financial position. That is what we continue to look for in our applicants.`,`Winchester has one of the most generous bursary programmes in the country with over 140 pupils receiving financial support – 20% of the pupil body. We remain committed to tackling inequality of access and each year welcome pupils from a diversity of cultural, and socio-economic backgrounds.`,`Thanks to the generosity of donors there are three additional means-tested bursaries that are available to help with the school fees.`,`Bursaries: (*) Golf Bursary - Available to academically able and talented golfers, whose parents need financial assistance to meet the fee, (*) Keniston-Cooper Maths Bursary - Available to Sixth Form students from UK state school who intend to study Further Maths at A-Level, (*) Northern Ireland Bursary - Available to students from Northern Ireland, (*) The Wykeham Award - The Wykeham Award is a means-tested bursary for pupils who join the school in the Sixth Form and who are currently studying at a UK state secondary school.`,`Average Bursary reward is 72%`],
      percentageOfFees: [0, 100],
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: [`Once an offer letter has been received, confirming your child's place at the school, a lump sum may be paid in advance of your child’s entry, covering up to five years of fees for the school, and providing a discount on the full fees. Contact the Finance Team for more information.`],
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
    established: 1382,
    enquireUrl: "https://winchestercollege.org/admissions",
  },
  {
    schoolName: "Charterhouse",
    schoolDescription: [`Charterhouse is a prestigious independent co-educational boarding and day school located in Godalming, Surrey. Founded in 1611, it has a long tradition of academic excellence, with students consistently achieving outstanding results and progressing to top universities, including Oxford, Cambridge, and leading global institutions. The school fosters intellectual curiosity, critical thinking, and a passion for lifelong learning.`, `Beyond academics, Charterhouse offers exceptional opportunities in sports, music, drama, and a diverse range of extracurricular activities, encouraging leadership, creativity, and personal development. The school’s historic architecture blends seamlessly with state-of-the-art facilities, providing an inspiring learning environment. With a strong emphasis on character building, pastoral care, and a close-knit community, Charterhouse nurtures well-rounded, confident individuals, preparing them for success in higher education and beyond.`],
    studentNumbers: 950,
    faithSchool: "Christian",
    schoolEmail: 'reception@charterhouse.org.uk',
    schoolPhoneNumber: '+44 (0)1483 291 500',
    latitude: 51.196772582390864,//51.196772582390864, -0.6219583738937733
    longitude: -0.6219583738937733,//
    schoolLocation: "Godalming, Surrey, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "Co-Educational",
    totalSchoolFees: [45018, 56418],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`Scholarship awards recognise and reward pupils who demonstrate excellence and outstanding potential in their chosen field. Scholarships are offered at 13+ and 16+ entry.`,`13+ Scholarships: Art & Textiles, Drama, Dance, Performing Arts, Design Engineering, Music and Sport`,`16+ Scholarships: Academic, Music, Drama, Art & Design and Sport`],
      percentageOfFees: "no fee remission",
    },
    schoolImage: "/images/Charterhouse.jpg",
    documentId: 64820394,
    ranking: 4,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`Charterhouse is able to offer a number of bursaries each year for pupils entering either Year 9 or Year 12, with preference given to those who gain a Scholarship or an Award (not including Exhibitions), who would benefit from a Charterhouse education, but whose parents are unable to afford the fees.`,`All bursaries are means-tested and are subject to funds being available. The award is reviewed annually for changes in parents’ financial circumstances and may be adjusted as a result. Awards may cover up to 100% of the school fee. Eligibility for financial assistance is based on both parents’ income and assets using a standard formula widely used within the independent sector, and may include a home visit by Bursary Administration Ltd (BAL), the School’s agent.`],
      percentageOfFees: [0, 100],
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
    established: 1611,
    enquireUrl: "https://charterhouse.org.uk/admissions",
  },
  {
    schoolName: "Rugby School",
    schoolDescription: [`Rugby School is a prestigious independent co-educational boarding and day school in Warwickshire, England. Founded in 1567, it is one of the oldest and most historic schools in the UK, best known as the birthplace of rugby football. The school has a strong academic reputation, with students consistently achieving excellent results and progressing to top universities, including Oxford and Cambridge.`,`Rugby School places great emphasis on holistic education, fostering intellectual curiosity, leadership, and personal development. Beyond academics, it offers outstanding opportunities in sports, music, drama, and a wide range of extracurricular activities. The school's distinctive "Whole Person" philosophy ensures that students develop resilience, creativity, and social responsibility. With a rich heritage, modern facilities, and a strong sense of community, Rugby School provides an inspiring and supportive environment, preparing students for success in their future careers and lives.`],
    studentNumbers: 865,
    faithSchool: "Church of England",
    schoolEmail: 'visits@rugbyschool.net',
    schoolPhoneNumber: '+44 (0) 1788 556 216',
    latitude: 52.37047983657904,//52.37047983657904, -1.2615547739388124
    longitude: -1.2615547739388124,//
    schoolLocation: "Rugby, Warwickshire, Midlands",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "Co-Educational",
    totalSchoolFees: [34914, 55056],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`Rugby School offers a range of Scholarship Awards which allow awardees to access extraordinary opportunities, enrichment and support through Scholars’ Programmes.`,`Scholarships available at 13+ and 16+: Academic, Art, Computing, Design and Technology, Performing Arts, Music and Sport `],
      percentageOfFees: "no fee remission",
    },
    schoolImage: "/images/Rugby.jpeg",
    documentId: 74839283,
    ranking: 5,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`If candidates are successful in being awarded a scholarship, fee assistance can be obtained up to the value of 100%, by completing a means-tested bursary application. Exceptional awards are also available at the Head Master’s discretion, where we identify exceptional potentia;.`,`Arnold Foundation Award: he Arnold Foundation enables Rugby School to offer fully funded places to talented and deserving young people with the most to gain from Rugby School and Bilton Grange, and whose families could not otherwise consider a boarding school education. When launched in 2003, it was a revolutionary programme. Today, it is a source of immense pride and an intrinsic part of the Rugby School ethos. More than 185 young people have already benefited from the Rugby experience as a result of the School’s support from the Arnold Foundation, amplifying the School’s positive impact and enriching the lives of all our community. With your support, it will provide opportunities for many more in years to come.`,`Foundation Awards are made to widen access to a Rugby School education for local children. Children who are likely to thrive at Rugby School both in our academic and our co-curricular life, who live within 20 miles of Rugby School and are applying for entry as a Day student and whose parents are assessed as being eligible for means-tested bursary support towards fees may be considered for Foundation Awards.`],
      percentageOfFees: [0, 100],
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
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: [`5% discount on net termly fees for a third child at Rugby or Bilton Grange. 7.5% discount on net fees for fourth (and subsequent) child at Rugby or Bilton Grange.`],
      percentageOfFees: [5, 7.5],
    },
    established: 1567,
    enquireUrl: "https://rugbyschool.net/admissions",
  },
  {
    schoolName: "Cheltenham College",
    schoolDescription: [`Cheltenham College is a distinguished independent co-educational boarding and day school in Gloucestershire, England. Founded in 1841, the school is known for its strong academic reputation, with students regularly achieving excellent results and progressing to top universities, including Oxford and Cambridge. The curriculum is designed to foster intellectual curiosity, critical thinking, and a lifelong love of learning.`,`Beyond academics, Cheltenham College offers a vibrant extracurricular program, excelling in sports, music, drama, and leadership opportunities. The school has a strong military tradition and is home to one of the oldest Combined Cadet Forces in the country. With a supportive pastoral system and a close-knit community, Cheltenham College provides an enriching and inspiring environment that nurtures well-rounded, confident, and resilient individuals, preparing them for success in both their professional and personal lives.`],
    studentNumbers: 740,
    faithSchool: "Church of England",
    schoolEmail: 'info@cheltenhamcollege.org',//
    schoolPhoneNumber: '+44 01242 265 600/+44 01242 265 639',//
    latitude: 51.89197668881975,//51.89197668881975, -2.0763886451320688
    longitude: -2.0763886451320688,//
    schoolLocation: "Cheltenham, Gloucestershire, South-West",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "Co-Educational",
    totalSchoolFees: [12312, 42963], 
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`One of the main vehicles for such encouragement is the offer of College Awards in the form of Scholarships and Exhibitions, awarded at Third Form (Year 9) entry and Sixth Form (Year 12) entry. Scholarships are awarded for outstanding performance and ability in a chosen field and Exhibitions for excellent talent and potential. Scholars are presented with a cerise tie and Exhibitioners are presented with a black and cerise tie, so they are visible throughout College. All awards are entirely merit-based and are based on an exam, audition or other appropriate assessment. Pupils can apply for more than one award if they wish.`,`Types are: Sport, Art, Music/Vocal/Organist, Drama and Academic`],
      percentageOfFees: "???",
    },
    schoolImage: "/images/cheltenhamCollege.jpg",
    documentId: 10293847,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`Cheltenham College is committed to widening access to independent education. To support this commitment, we offer bursaries. Bursaries are potentially available from Year 6 onwards and are not limited to pupils who show exceptional talent – any child who meets our baseline entrance requirements can apply.`,`Our bursaries are means-tested and so dependant on financial circumstances.  A bursary can be applied for alongside a scholarship (or scholarships) if you wish. Bursary applications for the September entry need to be received into College by 31 January of the same year. Applications received after this date will not be considered.`],
      percentageOfFees: null,
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: [`Cheltenham College supports the Continuity of Education Allowance (CEA) from the Military of Defence. From January 2025, Cheltenham College will be offering the Military discounts for Military families who have children boarding at Cheltenham College and are in receipt of CEA . These discounts can be combined with a means-tested bursary.`,`Cheltenham College also offers a 15% discount to day and boarding families serving within the Foreign Commonwealth and Development Office who are in receipt of the FCDO support.`],
      percentageOfFees: [15, 30],
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1841,
    enquireUrl: "https://cheltenhamcollege.org/admissions",
  },
  {
    schoolName: "King's College School Wimbledon",
    schoolDescription: [`King’s College School, Wimbledon, is a prestigious independent day school for boys aged 7-18 and girls in the sixth form, located in southwest London. Founded in 1829 as the junior department of King’s College London, the school is renowned for its academic excellence, consistently ranking among the top schools in the UK, with many students progressing to Oxford, Cambridge, and other leading universities worldwide.`,`Beyond academics, King’s Wimbledon offers exceptional opportunities in sports, music, drama, and a vast array of extracurricular activities, fostering creativity, leadership, and personal growth. The school places a strong emphasis on character development, intellectual curiosity, and a supportive community. With state-of-the-art facilities and a commitment to innovation in education, King’s College School provides an inspiring and well-rounded learning environment, preparing students for success in both their academic and personal lives.`],
    studentNumbers: 1221,
    faithSchool: "Church of England",
    schoolEmail: 'reception@kcs.org.uk',
    schoolPhoneNumber: '+44 (0)20 8255 5300',
    latitude: 51.421737749416295,//51.421737749416295, -0.22605994134631877
    longitude: -0.22605994134631877,//
    schoolLocation: "Wimbledon, London, South-East",
    stages: ["primary", "secondary", "sixth form"],
    schoolType: ["day"],
    coeducation: " Boys only (co-ed sixth form)",
    totalSchoolFees: [26679, 31449],
    scholarships: {
      scholarshipsAvailable: false,
      scholarshipsDetail: null,
      percentageOfFees: null,
    },
    schoolImage: "/images/kingsCollegeWimbledon.jpg",
    documentId: 83792018,
    ranking: 9,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`We are committed to ensuring bright pupils from all backgrounds can access the outstanding education available at King’s. We offer means-tested bursaries of up to 100% discount on tuition fees at 11+ (year 7), 13+ (year 9) and sixth form entry. A bursary award may also include provision for extras such as school trips and uniform.`,`s with all other applicants, pupils hoping to benefit from financial assistance must first gain a place at King’s. On application at 11+, 13+ and 16+ those who wish to apply for financial assistance must indicate this when they are registering their child for the academic assessment. The Admissions team will then send a link to a confidential financial assessment form designed to establish the level of financial support required. The school works with an independent, third party, Bursary Assessment Associates, who then review and assess all applications for financial assistance. This may include an online meeting or home visit which, by necessity, will be at short notice. Bursary Assessment Associates will liaise with you directly to make arrangements.`,`Assessments of eligibility for financial assistance are conducted independently of the academic selection process. `],
      percentageOfFees: [0, 100],
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
    established: 1829,
    enquireUrl: "https://kcs.org.uk/admissions",
  },
  {
    schoolName: "Bedford School",
    schoolDescription: [`Bedford School is a prestigious independent boarding and day school for boys, located in Bedford, England. Founded in 1552, it has a long history of academic excellence, character development, and leadership preparation. The school provides a rigorous curriculum that fosters intellectual curiosity and critical thinking, preparing students for top universities in the UK and abroad, including Oxford and Cambridge.`, `Beyond academics, Bedford School offers outstanding opportunities in sports, music, drama, and a wide range of extracurricular activities, encouraging personal growth, teamwork, and resilience. With a strong emphasis on pastoral care and well-being, the school nurtures a supportive and inclusive community. Its blend of historic architecture and modern facilities provides an inspiring environment where students can thrive both academically and personally, equipping them with the skills and values needed for future success.`],
    studentNumbers: 1070,
    faithSchool: "Church of England",
    schoolEmail:  'admissions@bedfordschool.org.uk',//
    schoolPhoneNumber: '+44 (0)1234 362 216',//
    latitude: 52.141703504440656,//52.141703504440656, -0.4661550144318919
    longitude: -0.4661550144318919,//
    schoolLocation: "Bedford, Bedfordshire, East Midlands",
    stages: ["primary","secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "boys",
    totalSchoolFees: [18942, 29229],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`Scholarships are awarded to boys who excel academically or show outstanding talent in Art, Computer Science, Drama, Music or Sport. Boys who show ability in two of these areas and/or other particular strengths may be considered for an all-round exhibition.`,`Scholarships are non-means-tested honours that are awarded to current boys and external candidates as they enter Year 9 (13+), and to external candidates only at Year 12 (16+). In exceptional circumstances, boys may be considered for a scholarship on entry to the school in Years 10 and 11, subject to the availability of funding.`],
      percentageOfFees: "???",
    },
    schoolImage: "/images/bedfordSchool.jpg",
    documentId: 73918284,
    ranking: 10,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`We welcome bursary applications from parents who require financial assistance for their son to join us at our key entry points in Year 7 (11+), Year 9 (13+) and Year 12 (16+). Current parents are also welcome to submit a bursary application before their son moves into Year 7, Year 9 or Year 12, providing that they meet the criteria for a bursary award. We would ask, in the first instance, that parents contact the Director of Finance and Operations (DFO) by emailing dfo@bedfordschool.org.uk if their financial position has changed significantly.`,`All awards are subject to means-testing of family income and capital, but bursaries of up to 100% of school fees (day and boarding) are possible. In addition to assessing your family’s financial circumstances, we will also examine your son’s academic performance and consider any other areas of recognised talent. The awards will then be allocated based on performance across the criteria set by the school. Achievement and potential are both considered. Boys with exceptional talent may also be invited to apply for an art, drama, music, sport or golf scholarship and attend the relevant assessment day.`,`The amount of any bursary awarded will be reviewed by The Harpur Trust on an annual basis and may be adjusted, increased or reduced, if your financial circumstances alter. Bursary awards normally last for the duration of your son’s time at the school (subject to your assessable family income per annum remaining within eligible levels) and will continue across the transfer at 16+ provided that the academic entry criteria for the Sixth Form are met.`],
      percentageOfFees: [0, 100],
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
    established: 1552,
    enquireUrl: "https://bedfordschool.org/admissions",
  },
  {
    schoolName: "Stowe School",
    schoolDescription: [`Stowe School is a prestigious independent co-educational boarding and day school located in Buckinghamshire, England. Founded in 1923, it is known for its academic ambition, emphasis on personal development, and stunning historic setting within Stowe House and its vast landscaped gardens. The school provides a broad and challenging curriculum designed to inspire intellectual curiosity and prepare students for top universities worldwide.`,`Beyond academics, Stowe offers exceptional opportunities in sports, music, drama, and a wide range of extracurricular activities, encouraging leadership, creativity, and resilience. The school fosters a strong sense of community and individuality, ensuring that each student is supported in their personal and academic growth. With its distinctive ethos of nurturing character and excellence, Stowe School provides an inspiring and enriching education that equips students with the confidence, skills, and values needed for future success.`],
    studentNumbers: 905,
    faithSchool: "Church of England",
    schoolEmail:  'enquiries@stowe.co.uk',//
    schoolPhoneNumber: '+44 (0)1280 818 000',//
    latitude: 52.031455183077206,//52.031455183077206, -1.0178803161745376
    longitude: -1.0178803161745376,//
    schoolLocation: "Stowe, Buckinghamshire, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "Co-Educational",
    totalSchoolFees: [32448, 53238],//
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`Stowe awards Scholarships each year in recognition of proven talent at Third Form and Sixth Form Entry. 

We believe that Scholarships should not reward talent alone, but should also consider an individual’s potential and ability to maintain an eager, open-minded attitude to learning. It is important that Scholars should consistently achieve high standards during their time at Stowe. 

Scholars will take the lead in many of the intellectual and extra-curricular activities of the whole School – and it is here, and in the Houses, that they learn how to use and mix their special gifts with those of others. It is vital that the Scholarship process should encourage and reward attitudes to learning that will above all set standards for others. 

For all Scholarship applications a full report from the candidate’s school will be requested. 

Third Form candidates may apply for more than one Scholarship; however, candidates cannot be awarded both an Academic Scholarship and a Roxburgh Scholarship.

Sixth Form candidates are not permitted to sit Scholarships in more than two disciplines. 

It should also be noted that all Scholarships are tenable throughout the holder’s career at Stowe, subject only to the Head’s satisfaction with the holder’s industry, performance and behaviour. All scholarships are awarded at the discretion of the Scholarships and Bursaries Committee. 

A typical Scholarship at Stowe is worth 5% of the School Fee. `],
      percentageOfFees: 5,
    },
    schoolImage: "/images/stoweSchool.jpg",
    documentId: 91837465,
    ranking: 13,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [` Means-tested bursaries are available, with a limited number of fully-funded places where there is proven financial need. Bursaries are only available to successful Scholarship candidates and are awarded to further supplement fees according to financial circumstances following an in-depth financial assessment ahead of the Entry Days. If your child is applying for a Scholarship and requires additional bursary support, please contact the Admissions Office to obtain a Financial Circumstances Form. `],
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
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: [`Sibling discounts are awarded when three children or more from the same family are in The Stowe Group of Schools at the same time. Each child will be entitled to a 5% discount. This is maintained until the children leave`],
      percentageOfFees: 5,
    },
    established: 1923,
    enquireUrl: "https://stowe.co.uk/admissions",
  },
  {
    schoolName: "Oundle School",
    schoolDescription: [`Oundle School is a prestigious independent co-educational boarding and day school located in Northamptonshire, England. Founded in 1556, it is known for its academic excellence, strong traditions, and commitment to developing well-rounded, confident, and intellectually curious students. The school offers a rigorous and stimulating curriculum that prepares pupils for leading universities worldwide, particularly Oxford and Cambridge.`,`Beyond academics, Oundle provides exceptional opportunities in sports, music, drama, and a wide range of extracurricular activities, fostering leadership, teamwork, and resilience. The school is also recognized for its emphasis on STEM subjects and its state-of-the-art SciTec Centre. With a blend of historic architecture and modern facilities, Oundle offers a nurturing yet challenging environment that encourages students to excel both academically and personally, equipping them with the skills and values needed for lifelong success.`],
    studentNumbers: 1120,
    faithSchool: "Church of England",
    schoolEmail:  'admissions@oundleschool.org.uk',
    schoolPhoneNumber: '+44 (0)1832 277 125',
    latitude: 52.48163713594271,//52.48163713594271, -0.4684974604389704
    longitude: -0.4684974604389704,
    schoolLocation: "Oundle, Northamptonshire, East Midlands",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "Co-Educational",
    totalSchoolFees: [28692, 37710],//
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`We offer a range of Entrance Scholarships at 11+, 13+ and 16+. All scholarships are won in open competition and are awarded solely on merit. They are highly prized, recognising not just honed skills and talents but also endeavour and potential. We look to our Scholars, who should join Oundle with great pride in their status, to provide intellectual and cultural leadership to their peers and in return, we offer dedicated programmes of opportunity and support to help them make the most of their talents.`,`No fee remission is attached to a Scholarship as we believe its integrity lies in its honorary capacity. All scholarships can, however, be underpinned by bursary assistance if the financial circumstances of an individual family necessitate it. All awards are conditional upon success in the entrance examinations and the tenure of any award depends upon continued satisfactory progress once in School.`,`11+: We offer Music Scholarships at this stage, as well as Entrance Exhibitions in recognition of outstanding academic achievement and effort in the entrance papers. Children, especially at 11+, develop at different stages and once at Oundle, may go on to develop an enhanced level of confidence and skill relative to their year-group. We therefore offer further Scholarship opportunities from 13+ upwards across a wide range of disciplines, including Academic. Each Scholarship Award comes with a tailored pathway to support continued development in that discipline.`,`13+: Our 13+ Scholarships reward distinctive ability or special talent in Academic, Art, Drama, Design Engineering and Technology (DET), Music and Sport. We also offer an Oundle Scholarship to reward talented candidates who have a genuine interest and ability in two or more of our Scholarship disciplines. For those pupils applying to Oundle through the Common Entrance (CE) route, we encourage you to liaise with your child’s current school as formal applications are made via the Head of our Feeder Schools. We are, of course, always happy to advise and give information where appropriate.`,`16+: At 16+, we offer Entrance Scholarships in Academic, Art, Design Engineering Technology (DET), Music and Sport. All short listed candidates will be asked to indicate whether they wish to apply for a 16+ Scholarship when they are contacted in the September prior to the entry exams in November of Year 11.`],
      percentageOfFees: "no fee remission",
    },
    schoolImage: "/images/Oundle-School.jpg",
    documentId: 11293847,
    ranking: 14,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`We are proud that over one hundred pupils at Oundle are supported with bursaries and we are continually working to increase our Bursary Endowment Fund.`,`We are committed to offering a broad range of means-tested financial support, both for new pupils and for those families who find themselves in difficult financial circumstances part way through their child’s education, often through no fault of their own. We also have a Bursary Scheme which seeks to provide opportunities for children from disadvantaged backgrounds who are identified as being particularly likely to benefit from a boarding education.`,`Bursaries vary in size according to circumstance; it may be that a ten percent remission makes all the difference to a family, whilst others may require 100 percent or more to ensure a pupil does not miss out on the broad range of co-curricular opportunities Oundle offers.`,`Average fee remission: 70%`],
      percentageOfFees: [10, 100],
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: [`We offer a Fees in Advance (FIA) Scheme, which provides the opportunity to pay a discounted lump sum in return for a guaranteed credit to a pupil’s fee account over a pre-defined period. It is possible to pay all your child’s School fees in advance as a single lump sum. The fee can be paid by anyone, including grandparents, as it is not limited to the child’s parents. For further information or to discuss a quotation, please contact our Finance team on billing@oundleschool.org.uk.`],
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
    established: 1556,
    enquireUrl: "https://oundleschool.org.uk/admissions",
  },
  {
    schoolName: "Wellington College",
    schoolDescription: [`Wellington College is a prestigious independent day and boarding school located in Berkshire, England. Founded in 1859 in memory of the Duke of Wellington, the school is renowned for its academic excellence, forward-thinking approach to education, and strong emphasis on leadership and character development. It consistently ranks among the top schools in the UK, offering a rigorous and dynamic curriculum that prepares students for leading universities worldwide. Beyond academics, Wellington College provides exceptional opportunities in sports, music, drama, and a wide range of extracurricular activities, fostering creativity, resilience, and teamwork. The school is known for its progressive outlook, combining tradition with innovation to create a well-rounded and modern education. Set within a stunning 400-acre campus with state-of-the-art facilities, Wellington College offers an inspiring and supportive environment, equipping students with the skills, confidence, and values needed to succeed in life.`],
    studentNumbers: 1140,
    faithSchool: "Church of England",
    schoolEmail:  'info@wellingtoncollege.org.uk',
    schoolPhoneNumber: '+44 (0)1344 444 013',
    latitude: 53.39366171416993,//53.39366171416993, -2.3353384719169354
    longitude: -2.3353384719169354,
    schoolLocation: "Crowthorne, Berkshire, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "co-educational",
    totalSchoolFees: [43830, 59940],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`At 13+ a small number of Academic Scholarships are offered before entry to the College via an examination and interview process that takes place during Year 8. The majority of the scholarships including the College’s seven highest academic accolades – our named Scholarships – are awarded at the end of the Third Form (Year 9). All students are considered for Academic Scholarships on the basis of the selection criteria below, there is no need to apply. All academic scholarships carry prestige and entitle pupils to join the Academic Scholarship Programme but are not attached to fee remission. From the start of Fourth Form (Year 10) we have approximately 24 Academic Scholars involved in the Academic Scholarship Programme. `],
      percentageOfFees: "no fee remission",
    },
    schoolImage: "/images/wellingtonCollege.jpg",//fix this 
    documentId: 95837402,
    ranking: 16,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`For children with exceptional talents whose families would not be able to afford the full Wellington fees, we offer awards ranging from 10% to 100% of fees. Eligibility for an award is generally assessed – via means testing – at the time of an offer being made so that a family can accept the offer knowing that the required level of fee assistance is available.`,`An average year might see 20 pupils be admitted with an average award of c. 50% remission. Any family wishing to make an application for fee assistance will be invited to apply as part of the broader admissions process. A link to the online confidential ‘statement of financial position’ form will be sent after the registration deadline to families requesting fee assistance.`,`The Prince Albert Foundation is a scholarship programme aimed at widening participation to families who would not normally consider or be able to access independent education, and for whom we can offer a genuine shift in opportunity. Currently there are 10-15 fully funded Prince Albert Scholarships awarded each year, predominantly at 16+. Children who are eligible for Prince Albert Scholarships are those whose families are at socio-economic disadvantage; all families are means assessed by the College’s Chief Operating Officer. There is often a further relevant need/desire for boarding.`,`Candidates must meet our minimum academic criteria for entrance; we  assess potential as well as current achievement, and actively encourage applicants who will maximise opportunities at the College – including academic, sporting, music and student leadership. The Prince Albert Foundation is not a programme designed to recruit pupils with a significant sporting talent.`],
      percentageOfFees: [0, 100],
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
    established: 1859,
    enquireUrl: "https://wellingtoncollege.org.uk/admissions",
  },
  {
    schoolName: "Fyling Hall",
    schoolDescription: [`Fyling Hall is a small, independent day and boarding school located in North Yorkshire, England. Founded in 1923, it is known for its strong sense of community, personalized approach to education, and commitment to academic excellence. The school provides a nurturing environment where students are encouraged to develop curiosity, resilience, and independence, preparing them for higher education and future careers. Beyond academics, Fyling Hall offers a broad range of extracurricular opportunities, including sports, music, drama, and outdoor activities, taking full advantage of its stunning coastal and countryside setting. With a focus on character development, leadership, and personal growth, the school fosters a supportive and inclusive atmosphere where students thrive both academically and socially. Fyling Hall’s unique setting and ethos create a well-rounded educational experience that equips pupils with the skills and confidence needed for lifelong success.`],
    studentNumbers: 165,
    faithSchool: "Interdenominational",
    schoolEmail:  'office@fylinghall.org',
    schoolPhoneNumber: '+44 (0) 1947 880 353',
    latitude: 54.42569965423745,//54.42569965423745, -0.557511016034008
    longitude: -0.557511016034008,
    schoolLocation: "Fylingdales, North Yorkshire, Yorkshire & Humber",
    stages: [
      "reception", "primary", "secondary", "sixth form"
    ],
    schoolType: [ "boarding", "day" ],
    coeducation: "co-educational",
    totalSchoolFees: [8733, 14508], //present this as 'from £54,084', with daily fees as default (cheapest)
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`These can be awarded where a pupil demonstrates an outstanding ability in one of the following areas: academia, sport, music, drama. A scholarship can also be awarded to a pupil deemed to be an ‘all-rounder’. Scholarships will usually not amount to more than 10% of the fees due.`], //A sibling discount of 10% applies to the younger child.
      percentageOfFees: [0, 10] //use this to calculate potential worth of savings, cost of fees overall
    },
    schoolImage: "/images/Fyling-Hall-main.jpg",
    documentId: 18502939,
    ranking: 0,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Parents wishing to apply for a bursary should write to the Headmaster outlining the reasons why financial support is necessary. As a general rule, it is unlikely that a bursary will be awarded when family income is greater than four times the school fees. It is possible, indeed not unusual, for a bursary holder to have a scholarship",
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
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: [`A sibling discount of 10% applies to the younger child.`],
      percentageOfFees: 10,
    },
    established: 1923,
    enquireUrl: 'https://fylinghall.org/admissions/scholarships-and-bursaries/'
  },
   {
    schoolName: "Eton College",
    schoolDescription: [`Eton College is one of the most prestigious independent boarding schools for boys in the world, located in Windsor, England. Founded in 1440 by King Henry VI, it is renowned for its academic excellence, strong traditions, and commitment to developing well-rounded, intellectually curious, and confident young men. The school consistently ranks among the top in the UK, offering a rigorous curriculum that prepares students for leading universities, particularly Oxford and Cambridge. Beyond academics, Eton provides outstanding opportunities in sports, music, drama, and a vast array of extracurricular activities, fostering leadership, resilience, and teamwork. The school is known for its distinctive traditions, including formal dress, house rivalries, and a deep sense of camaraderie among pupils. Set within a historic yet modern campus with world-class facilities, Eton College offers a challenging yet nurturing environment that equips students with the skills, values, and confidence needed for lifelong success.`],
    studentNumbers: 1341,
    faithSchool: "Church of England",
    schoolEmail: "admissions@eton.co.uk",
    schoolPhoneNumber: "+44 01753 370 100",
    latitude: 51.49203031242214, //51.49203031242214, -0.6090060566848277
    longitude: -0.6090060566848277,
    schoolLocation: "Windsor, Berkshire, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "boys",
    totalSchoolFees: [63297, 63297],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`Scholarships differ from bursaries, which are means-tested awards given to help support families who wouldn’t otherwise be able to afford some or all of the school fees. Our scholarships do not carry any automatic fee remission. When a boy applies for a scholarship it is possible for his parents to apply for a means-tested bursary in connection with that scholarship to cover school fees. Please note that we do not offer sports or arts scholarships. Such abilities feature strongly in the majority of our selection processes along with all-round personality and suitability for membership of a boarding community. However, while sporting or artistic ability will be of interest after the selection has been made, these abilities are not a factor in deciding the 13+ King’s Scholarship and Music Awards.`,`Scholarships for entry at 13+: (*) King’s Scholarships: Based on academic ability for boys entering the School at age 13. Around 14 are awarded each year. (*) Rokos Scholarship: Boys who are outstanding academically, who have been educated in the UK state system at primary level and who need financial assistance to attend Eton can be considered for the Rokos Scholarship. Thanks to the generosity of a donor, this award provides means-tested financial support for up to four boys per year to attend Eton. These boys are identified by the School during the Admissions process. Where necessary, the scholarship will cover 100% fees and extras. We will help families identify the most appropriate pathway for their sons in Years 7 and 8. Boys should be registered in the normal way for 13+ entry by 30 June in UK School Year 5. Please contact the Admissions Office if you have any queries. (*) Music Awards: A wide range of scholarships and exhibition awards are designed to recognise and support talented musicians.`,`Scholarships for entry at 16+: (*) Orwell Awards are for boys who have spent Years 9, 10 and 11 in a UK state school. Boys who are receiving substantial financial assistance at a UK independent school that does not have a Sixth Form may also apply. Up to 14 places may be awarded per year; however, this depends on the quality of applications received. (*) MCM Drama Award: The MCM Drama Award may be awarded to a boy applying for the Orwell Award who will make an outstanding contribution to Drama at Eton. (*) Sixth Form Music Award: The Sixth Form Music Award may be awarded to a boy applying for the Orwell Award who is a musical high-flyer. `],
      percentageOfFees: [0, 100]
    },
    schoolImage: "/images/etonCollege.jpg",
    documentId: 18502944,
    ranking: 1,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`Eton warmly welcomes bursary applications from parents who might, under ordinary circumstances, not consider Eton for their son for financial reasons. Eton has substantial bursary funds designed to widen access by enabling boys to come to the School at the normal entry age of 13, who could not otherwise do so, and to allow boys to remain in the event of an unforeseen change in family circumstances. No parents with a talented boy should feel that Eton is necessarily beyond their means. Both the registration fee and the entrance fee may be waived in case of parental need subject to supporting documentation.`,`For boys entering the School at age 13 (Year 9), parents will be invited to complete a financial aid declaration form when their son is finishing Year 5. A completed application form needs to be submitted during Year 6 in accordance with published deadlines. These deadlines will be strictly adhered to.`, `All applications are subject to a detailed means-test. Parents should be aware that we do not have sufficient funds to satisfy all the requests received. A bursary award is made at the same time as a conditional offer of a place at the School is made. Bursary applications are treated confidentially and boys will not be aware of having a bursary unless their parents choose to tell them.`,`Bursaries range from 5% to 100% and are dependent on a family’s financial circumstances. We do not publish guidance on qualifying income levels as each application is assessed on a case by case basis. An independent company may carry out a home visit to assist in the assessment of family circumstances.  In 2022/23, 265 boys received fee reductions; 105 of these boys paid no fees at all. The average award was 69% of the fee.`],
      percentageOfFees: [0, 100]
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: [`The School offers a pre-paid fees scheme which may be of interest to parents who have a capital sum available for Eton school fees. Putting a payment down in advance has the attraction of securing a chosen amount towards future school bills.`],
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
    established: 1440,
    enquireUrl: "https://eton.co.uk/admissions/bursaries-and-scholarships/"
  },
  {
    schoolName: "Harrow School",
    schoolDescription: [`Harrow School is a prestigious independent boarding school for boys, located in Harrow, London. Founded in 1572, it is renowned for its academic excellence, strong traditions, and commitment to developing well-rounded, confident young men. The school offers a rigorous curriculum that prepares students for top universities worldwide, with a particular emphasis on critical thinking, leadership, and intellectual curiosity.`,`Beyond academics, Harrow provides exceptional opportunities in sports, music, drama, and a wide range of extracurricular activities, fostering teamwork, resilience, and creativity. The school is known for its distinctive traditions, including the famous Harrow uniform, house competitions, and a strong sense of camaraderie among pupils. Set within a stunning historic campus with state-of-the-art facilities, Harrow School offers a challenging yet supportive environment, equipping students with the skills, values, and confidence needed for lifelong success.`],
    studentNumbers: 837,
    faithSchool: "Church of England",
    schoolEmail: "admissions@harrowschool.org.uk",
    schoolPhoneNumber: "020 8872 8400",
    latitude: 51.57265036790661,//51.57265036790661, -0.3333364720227726
    longitude: -0.3333364720227726,
    schoolLocation: "Harrow, London, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "boys",
    totalSchoolFees: [61584, 61584],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`Boys can be invited to compete for one or more of the following awards: Academic, Sport, Drama, Music, Art and Design and Technology, for entry into either Year 9 or Year 12. Awards are made on an overall assessment, which takes into account: (*) a boy's character and suitability for boarding, (*) his academic ability and potential, (*) the needs of the School, and (*) the field of boys applying.`],
      percentageOfFees: 5,
    },
    schoolImage: "/images/Harrow.jpg",
    documentId: 18502945,
    ranking: 3,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`Many boys at Harrow benefit from our means-tested bursary provision. Bursary support is considered for strong candidates upon application to the School. Bursaries can be awarded either independent from or dependent on obtaining a scholarship. Please see our guidance on Bursaries here. We strongly recommend that you inform us of your need for a bursary when making your application to the School. This will not disadvantage your son's application in any way. You will be able to indicate on the online registration form the level of bursarial assistance you would require for your son to come to Harrow, as a percentage of the School fee. In addition to our bursary provision, there are a number of specific financial awards that are granted to boys who fulfil set criteria.`,`Year 7, 9 and 12 awards available. `],
      percentageOfFees: [0, 100]
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: [`The HJ Flower and H Gower Award, for very strong candidates who are the sons of serving members of the British armed forces`],
      percentageOfFees: "???",
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1572,
    enquireUrl: "https://harrowschool.org.uk/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "Westminster School",
    schoolDescription: [`Westminster School is a prestigious independent day and boarding school for boys, with a co-educational Sixth Form, located in the heart of London. Founded in 1560, it is renowned for its academic excellence, intellectual rigour, and strong tradition of producing some of the brightest minds in the UK. The school consistently ranks among the top in the country, offering a challenging curriculum that prepares students for leading universities worldwide, particularly Oxford and Cambridge.`, `Beyond academics, Westminster provides outstanding opportunities in sports, music, drama, and a wide range of extracurricular activities, fostering creativity, leadership, and resilience. Its central London location offers unique cultural and educational opportunities, while its historic yet modern facilities provide an inspiring learning environment. With a strong emphasis on independent thought, debate, and personal growth, Westminster School nurtures confident, inquisitive, and well-rounded individuals ready to excel in all walks of life.`],
    studentNumbers: 774,
    faithSchool: "Anglican",
    schoolEmail: "info@westminster.org.uk",
    schoolPhoneNumber: "020 7222 0265",
    latitude: 51.499684172990904,//51.499684172990904, -0.12794887395534177
    longitude: -0.12794887395534177,
    schoolLocation: "Westminister, London, South-East",
    stages: ["secondary", "sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "mixed-sex",
    totalSchoolFees: [44247, 62985],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`King’s Scholarships are the School’s much-coveted academic scholarships. The Scholarships, which are not means-tested, were originally established by Henry VIII and were more formally affirmed by Elizabeth I in 1560 – the historic link with the Royal Family continues today. Our King’s Scholars are privileged to be able to attend a variety of special services in Westminster Abbey, as invited by the Dean; and they have other ceremonial duties to perform in connection with the Abbey and the Crown. (*) There are a total of 48 King’s Scholars, with usually 12 chosen every year: up to eight academic King’s Scholarships are awarded each year to pupils entering the School at 13+ and up to six King’s Scholarships are awarded each year to pupils entering the School at 16+. King’s Scholars are required to board at the School and all belong to College, one of the six boarding houses. For information about College, please refer to our boarding pages. (*) For election to a King’s Scholarship a candidate for 13+ entry must be under 14 years of age on 1 September of the year of entry and for 16+ entry must be under 17 years of age on the same date. (*) The fee for King’s Scholars is set at the day fee for the academic year. The value of a scholarship may be supplemented by a bursary up to a maximum of 100% if there is proven financial need.`,`In order to be considered for a King’s Scholarship, a pupil in Year 8 can take an examination at Westminster known as ‘The Challenge’. The Challenge is held annually in late April or early May to determine which pupils are elected as King’s Scholars for 13+ entry the following September. The Challenge consists of papers in Mathematics, English, French, Science, Latin, History, Geography, which all Challenge candidates sit, and an optional Greek paper for those who have studied it. For King’s Scholarships awarded to pupils entering the Sixth Form at 16+, selection is based on the overall performance in the Sixth Form Entrance Exam papers and interviews, which take place in the November before the year of entry.`,`Annually, the School awards up to eight Music Awards for 13+ entry. These are each worth 10% of the day fee, irrespective of day or boarding status. In addition, three music exhibitions may be awarded annually at 13+ entry and four for 16+ entry. Both types of awards include free tuition on up to two instruments, and they may be supplemented by additional means-tested bursaries to a maximum of the full fees.`],
      percentageOfFees: [10, 100]
    },
    schoolImage: "/images/Westminster-School.jpg",
    documentId: 18502946,
    ranking: 2,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`The School has a programme of bursary support that provides approximately £2.0m each year to pupils at both the Under School and Great School. This allows pupils of exceptional talent and promise to benefit from a high-quality education regardless of their background or financial position.`,`Means-tested day bursaries of up to 100% of day fees are available for day pupils and are awarded to pupils according to individual need, at both 13+ and 16+ entry. All bursaries continue until a pupil leaves the School at 18, although they may be decreased or increased if financial circumstances change. We aim to act as sensitively as possible; very few members of staff and none of the other pupils will be aware that a boy or girl is receiving financial assistance. When a full bursary is awarded, it will cover the cost of uniform, equipment and compulsory school expeditions.`,`Boarding bursaries are not awarded, except when combined with King’s Scholarships`,`For 13+ entrance: 3+ bursaries would usually be awarded only to those who already hold bursaries at their prep schools. To apply for a bursary, please email the Bursar’s Department to request an initial financial assessment form. Once you have submitted the form, you will be contacted by the Bursar. To be eligible for a bursary, a child’s parent(s) must have lived in the UK continuously in the two years prior to application and must also live in London at the date of application. If a child, who has been awarded a bursary, subsequently wins a scholarship, the monetary value of the scholarship will be absorbed within the bursary.`,`for 16+ entrance: Candidates who wish to apply for a bursary should ask their parents to upload their passports and complete the Bursary Part A (Initial Assessment) and Part B (In-depth Assessment) Forms, which is available as part of the main registration process online. If a pupil who has been awarded a bursary also is awarded with a Music or King’s Scholarship, the monetary value of the scholarship will be absorbed within the bursary. Please note that bursaries are available for day pupils who live in London only and who meet the eligibility criteria. Bursaries are available where the parents and children fall into all of the following categories: (*) The child has the right to live and study in the UK on commencement of their studies at the School. (*) At least one of the parents and the child have lived in the UK for at least two continuous years at the time of applying for a bursary. (*) The parents live inside the M25 London orbital at the time of applying for a bursary and whilst their child is in receipt of bursary funding from School.`],
      percentageOfFees: [0, 100],
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
    established: 1560,
    enquireUrl: "https://westminster.org.uk/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "Cheltenham Ladies' College",
    schoolDescription: [`Cheltenham Ladies’ College is a prestigious independent boarding and day school for girls, located in Cheltenham, England. Founded in 1853, it is renowned for its academic excellence, strong pastoral care, and commitment to empowering young women. The school consistently ranks among the top in the UK, offering a rigorous and dynamic curriculum that prepares students for leading universities worldwide.`,`Beyond academics, Cheltenham Ladies’ College provides outstanding opportunities in sports, music, drama, and a wide range of extracurricular activities, fostering leadership, creativity, and resilience. The school places great emphasis on personal development, global awareness, and a strong sense of community, ensuring students are both challenged and supported. Set within a stunning historic campus with state-of-the-art facilities, Cheltenham Ladies’ College offers a nurturing and intellectually stimulating environment where students thrive, equipping them with the skills, values, and confidence needed for lifelong success.`],
    studentNumbers: 851,
    faithSchool: "Christian",
    schoolEmail: "admissions@cheltladiescollege.org",
    schoolPhoneNumber: "01242 517 444",
    latitude: 51.897964342831244,
    longitude: -2.0814395623237427,//51.897964342831244, -2.0814395623237427
    schoolLocation: "Cheltenham, Gloucestershire, South-West",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "girls",
    totalSchoolFees: [35823, 40590],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`CLC offers an exciting and enriching Scholarship Programme with a wealth of opportunities aimed at stretching and developing individual talent for the benefit of the whole community. Being a Scholar is a position of honour at CLC and those who earn the title will play a key role in the life of the school and enjoy the chance to lead and inspire others whilst fulfilling their own potential. Scholarship Awards do not carry fee remission`],
      percentageOfFees: "no fee remission"
    },
    schoolImage: "/images/cheltenhamLadies.jpg",
    documentId: 18502947,
    ranking: 4,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`Our means-tested bursaries are known as Beale Awards and are named after our second and longest-serving Principal, Dorothea Beale, a pioneer in the education of young women. These awards offer fully or partially funded boarding or day places at College - from 1%-100%, depending on circumstances.`,`Across College, approximately 65 pupils receive fees support via a Beale Award, totalling approximately £1.6million annually. A significant number of these students receive 100% fees support, whilst others receive a percentage award determined through our financial means-testing process. All Beale Award families are also supported with pro-rated financial assistance towards the additional costs of attending school, such as uniform and co-curricular activities.`],
      percentageOfFees: [1, 100]
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
    established: 1853,
    enquireUrl: "https://cheltladiescollege.org/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "The Dragon School",
    schoolDescription: [`Dragon School is a prestigious independent preparatory school located in Oxford, England. Founded in 1877, it is renowned for its academic excellence, strong pastoral care, and commitment to developing well-rounded and confident young learners. The school provides a dynamic and engaging curriculum that fosters intellectual curiosity, creativity, and independent thinking, preparing students for top senior schools across the UK.`,`Beyond academics, Dragon School offers exceptional opportunities in sports, music, drama, and a diverse range of extracurricular activities, encouraging teamwork, resilience, and leadership skills. With a strong emphasis on character development and a nurturing yet stimulating environment, the school ensures that pupils are both challenged and supported. Set within a historic yet modern campus, Dragon School blends tradition with innovation, equipping students with the skills, values, and confidence needed for lifelong success.`],
    studentNumbers: 807,
    faithSchool: "Non-Denominational",
    schoolEmail: "info@dragonschool.org",
    schoolPhoneNumber: "01865 315 400",
    latitude: 51.768166848104634,
    longitude: -1.2556430228372186, //51.768166848104634, -1.2556430228372186
    schoolLocation: "Oxford, Oxfordshire, South-East",
    stages: ["primary", "secondary"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [25000, 25000],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "for excellence in academics, arts, and sports",
      percentageOfFees: [10, 50]
    },
    schoolImage: "/images/dragonSchool.jpg",
    documentId: 18502948,
    ranking: 7,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`We fund up to five bursary places in each year group, with 25 children in total across the Prep school at any one time. (For the most part, places are offered to children coming into the school in Year 4. Exceptionally, those coming up from Dragon Pre-Prep or applying to join in Year 5 may be considered). There are no bursaries offered at the Pre-Prep. Our Bursaries are means-tested and families applying for support will be asked to submit a financial questionnaire which is reviewed by an independent organisation in accordance with our Means Tested Bursary Policy. The level of support varies according to financial need and the following examples are merely indicative: Single parent family on a low income living in rented accommodation. One child could receive 100% fee remission. Parents both earn moderate incomes and the family own a modest house with mortgage. One child could receive 75% fee remission.`],
      percentageOfFees: [10, 100]
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: [`The Dragon gives discounts on full boarding fees to children of employees of the Foreign, Commonwealth and Development Office and those who serve in the Armed Forces. Please contact our Admissions teams for more information.`],
      percentageOfFees: "???",
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1877,
    enquireUrl: "https://dragonschool.org/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "St Paul's School",
    schoolDescription: `St Paul’s School is a prestigious independent boys’ school located in London, England. Founded in 1509, it is renowned for its academic excellence, strong intellectual tradition, and commitment to nurturing curiosity, leadership, and independent thought. The school consistently ranks among the top in the UK, offering a rigorous curriculum that prepares students for leading universities worldwide. Beyond academics, St Paul’s provides outstanding opportunities in sports, music, drama, and a wide range of extracurricular activities, fostering creativity, resilience, and teamwork. With a strong emphasis on pastoral care and personal development, the school cultivates a supportive yet challenging environment where students can excel. Set on a modern riverside campus with world-class facilities, St Paul’s combines tradition with innovation, equipping pupils with the skills, knowledge, and confidence needed for lifelong success.`,
    studentNumbers: 1502,
    faithSchool: "All-Faiths",
    schoolEmail: "admissions@stpaulsschool.org.uk",
    schoolPhoneNumber: "+44 020 8746 1900",
    latitude: 51.4880153923539,
    longitude: -0.2366167797629858, //51.4880153923539, -0.2366167797629858
    schoolLocation: "London",
    stages: ["secondary", "sixth form"],
    schoolType: ["day"],
    coeducation: "male",
    totalSchoolFees: [27162, 51129],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "available for academic excellence and sporting ability",
      percentageOfFees: [10, 50]
    },
    schoolImage: "/images/stPaulLondon.jpg",
    documentId: 18502949,
    ranking: 5,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries are available for families that demonstrate financial need.",
      percentageOfFees: [0, 100],
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
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: [`The Governors make some remission of fees when there are three or more children of one family at St Paul’s School, St Paul’s Juniors or St Paul’s Girls’ School. A formal application, in writing, must be made by the parent to the Finance Director.`],
      percentageOfFees: "???",
    },
    established: 1509,
    enquireUrl: "https://stpaulsschool.org.uk/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "Tonbridge School",
    schoolDescription: `Tonbridge School is a prestigious independent boarding and day school for boys, located in Kent, England. Founded in 1553, it is renowned for its academic excellence, strong pastoral care, and commitment to developing well-rounded individuals. The school offers a rigorous and stimulating curriculum, preparing students for top universities in the UK and worldwide, while fostering intellectual curiosity, independent thinking, and leadership skills. Beyond academics, Tonbridge provides exceptional opportunities in sports, music, drama, and a diverse range of extracurricular activities, encouraging personal growth, teamwork, and resilience. The school is known for its outstanding facilities, including state-of-the-art science and arts centers, and a strong tradition of service and community engagement. Set within a historic yet modern campus, Tonbridge School provides a dynamic and inspiring environment where students thrive, equipping them with the skills and confidence needed for lifelong success.`,
    studentNumbers: 801,
    faithSchool: "Church of England",
    schoolEmail: "admissions@tonbridge-school.org",
    schoolPhoneNumber: "+44 01732 365 555",
    latitude: 51.19944851080719, //51.19944851080719, 0.2758819819281802
    longitude: 0.2758819819281802,
    schoolLocation: "Tonbridge, Kent",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "male",
    totalSchoolFees: [44358, 59124],
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: "for outstanding academic, musical, and sporting achievements",
      percentageOfFees: [10, 100]
    },
    schoolImage: "/images/tonbridge.webp",
    documentId: 18502950,
    ranking: 6,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: "Bursaries available for families with financial need.",
      percentageOfFees: [0, 100],
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
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: ["A 10% reduction of fees is given to the third son (and any subsequent sons) of the same family to attend the school."],
      percentageOfFees: 10,
    },
    established: 1553,
    enquireUrl: "https://tonbridge-school.org/admissions/scholarships-and-bursaries/"
  },
  {
    schoolName: "Radley College",
    schoolDescription: "Radley College is a renowned boys' school located in Oxfordshire, known for its academic and extracurricular excellence.",
    studentNumbers: 767,
    faithSchool: "Church of England",
    schoolEmail: "admissions@radley.org.uk",
    schoolPhoneNumber: "01235 543 144",
    latitude: 51.69249743995564, //51.69249743995564, -1.2459376315366617
    longitude: -1.2459376315366617,
    schoolLocation: "Oxford, Oxfordshire, Home Counties",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding"],
    coeducation: "male",
    totalSchoolFees: [288000, 288000],//£9,200 per term, 
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
    studentNumbers: 1282,
    faithSchool: "Church of England",
    schoolEmail: "bursaries@stpetersyork.org.uk",
    schoolPhoneNumber: "01904 527 300",
    latitude: 53.966374704438394,
    longitude:  -1.0933498907256507,  // 53.966374704438394, -1.0933498907256507
    schoolLocation: "York, North Yorkshire, Yorkshire & Humberside",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [233585, 233585],
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
    studentNumbers: 547,
    faithSchool: "Non-Denominational",
    schoolEmail: "fees@gordonstoun.org.uk",
    schoolPhoneNumber: "+ 44 (0)1343 837829",
    latitude: 57.70346128228585, //57.70346128228585, -3.3702543042896953
    longitude:  -3.3702543042896953,  // 53.966374704438394, -1.0933498907256507
    schoolLocation: "Elgin, Moray, Scotland",
    stages: ["primary","secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [442434, 442434],
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
    studentNumbers: 839,
    faithSchool: "Church of England",
    schoolEmail: "reception@shrewsbury.org.uk", 
    schoolPhoneNumber: "+ 44 01743 280 500", 
    latitude: 52.702397099804806, //52.702397099804806, -2.7645012970941125
    longitude:  -2.7645012970941125,  // 53.966374704438394, -1.0933498907256507
    schoolLocation: "Shrewsbury, Shropshire, Midlands",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [142932, 142932], //
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
    studentNumbers: 392,
    faithSchool: "Roman Catholic",
    schoolEmail: "admissions@ampleforth.org.uk", 
    schoolPhoneNumber: "+ 44 01439 766 000", 
    latitude: 54.20237464429836, //
    longitude:  -1.0822328160473165,  // 
    schoolLocation: "Ampleforth, North Yorkshire, Yorkshire & the Humber",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [127080, 127080], //
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
    studentNumbers: 414,
    faithSchool: "Anglican",
    schoolEmail: "office@kcs.cambs.sch.uk", 
    schoolPhoneNumber: "+ 44 01223 365 814", 
    latitude: 52.203043628857415, //
    longitude:  0.10662487815197387,  // 
    schoolLocation: "Cambridge, Cambridgeshire, Midlands",
    stages: ["primary", "lower secondary"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [212274, 212274], //day fees, 3 terms, 9 years - 4 to 13
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
    studentNumbers: 570,
    faithSchool: "Methodist",
    schoolEmail: "office@theleys.net", 
    schoolPhoneNumber: "+44 (0)1223 508904", 
    latitude: 52.19682464128857, //
    longitude:  0.12032678187249772,  // 
    schoolLocation: "Cambridge, Cambridgeshire, Midlands",
    stages: ["secondary", "sixth form"],
    schoolType: ["boarding", "day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [217821, 217821], //day fees, 3 terms, 9 years - 4 to 13
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
    studentNumbers: 1705,
    faithSchool: "Church of England",
    schoolEmail: "schooloffice@perse.co.uk", 
    schoolPhoneNumber: "+44 (0)1223 403800", 
    latitude: 52.1972419211202, // //52.1972419211202, 0.12726669307427999
    longitude:  0.12726669307427999,  // 
    schoolLocation: "Cambridge, Cambridgeshire, Midlands",
    stages: ["primary","secondary", "sixth form"],
    schoolType: ["day"],
    coeducation: "mixed-sex",
    totalSchoolFees: [362973, 362973], //61065, 94500, 207408
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
    studentNumbers: 603,
    faithSchool: "Church of England",
    schoolEmail: "admissions@kingsely.org", 
    schoolPhoneNumber: "+44 (0)1353 660707", 
    latitude: 52.39883541327537, // //52.1972419211202, 0.12726669307427999
    longitude:  0.26181982617544736 ,  //52.39883541327537, 0.26181982617544736 
    schoolLocation: "Ely, Cambridgeshire, Midlands",
    stages: ["primary","secondary", "sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "mixed-sex",
    totalSchoolFees: [170318, 170318], //61065, 94500, 207408
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
    studentNumbers: 507,
    faithSchool: "Non-Denominational",
    schoolEmail: "enquiries@oswestryschool.com", 
    schoolPhoneNumber: "+44 (0) 1691 655711", 
    latitude: 52.85611213778966, // //52.1972419211202, 0.12726669307427999
    longitude: -3.0626770449622684,  //52.85611213778966, -3.0626770449622684
    schoolLocation: "Oswestry, Shropshire, Midlands",
    stages: ["primary","secondary", "sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "mixed-sex",
    totalSchoolFees: [159820, 159820], //61065, 94500, 207408
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
    studentNumbers: 533,
    faithSchool: "Church of England",
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
    documentId: 1850295324791382,
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
    studentNumbers: 413,
    faithSchool: "All-Faiths",
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
    studentNumbers: 455,
    faithSchool: "Non-Denominational",
    schoolEmail: "info@radnorhouse.org", 
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
    totalSchoolFees: [29094, 29094], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Academic Scholarships are awarded to those boys who perform exceptionally well and score the highest grades in their examination and interview. For entry to Years 7 and Year 9 (late entry) all boys who sit the entrance examinations are automatically considered for an academic scholarship.","The pupils who join us through the Year 9 deferred entry route will sit the entrance examinations when they are in Year 6 and will have the opportunity to apply for Academic, Music, Art, and sports scholarships when they are in Year 8.  Parents will be sent full information and the applications form in the summer term when their son is in Year 7.","Scholarships may be held by day boys and boarders and will be continued until the holder leaves the College, subject to satisfactory progress and conduct. Scholarships are not means-tested. Scholarships range in value from 10% to one third of tuition fees."],
      percentageOfFees: [10, 33],
    },
    schoolImage: "/images/dulwich.jpg",
    documentId: 1850433173433331,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["We warmly welcome applications from parents and guardians with academically strong boys who need full or partial financial support to send their son to Dulwich College. Bursaries provide financial assistance with school fees. Whilst the majority of bursaries are offered on entry to Year 7 (11+), we also award bursaries to boys joining in Years 3 (7+), 5 (9+), 9 (13+) and 12 (16+). 125 pupils receive a free place at Dulwich College","The criteria listed below provide a guide of the circumstances in which a household might be eligible for a bursary award: A combined gross income of less than £110,000. Both parents are working (or actively seeking employment). Ownership of only one residential property with a mortgage or living in rented accommodation. Savings and/or discretionary spending of less than £10,000. No frequent and/or expensive holidays, new or luxury cars or investment in significant home improvements"],
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
    established: 1619,
    enquireUrl: "https://www.dulwich.org.uk/admissions/"
  },
  {
    schoolName: "Merchant Taylor's School",
    schoolDescription: `Merchant Taylors’ School is a prestigious independent boys’ day school located in Northwood, Hertfordshire, England. Founded in 1561 by the Merchant Taylors’ Company, the school has a distinguished history of academic excellence and character development. Offering a challenging and dynamic curriculum, it fosters intellectual curiosity, leadership, and independent thinking. Alongside academics, the school provides outstanding opportunities in sports, music, drama, and extracurricular activities, encouraging well-rounded personal growth. Set within a spacious and well-equipped campus, Merchant Taylors’ School nurtures ambition, integrity, and resilience, preparing students for top universities and successful careers in a wide range of fields.`,
    studentNumbers: 963,
    faithSchool: "Church of England",
    schoolEmail: "admissions@mtsn.org.uk", 
    schoolPhoneNumber: "+44 01923 845 517", 
    latitude: 51.632380839212345, // //51.10076709037832, -0.7435842027348746
    longitude: -0.4204043468826351,  //51.632380839212345, -0.4204043468826351
    schoolLocation: "Northwood, Hertfordshire, South-East",
    stages: ["primary", "prep","secondary","sixth form"],
    schoolType: ["day"],
    coeducation: "boys",
    totalSchoolFees: [29610, 29610], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Merchant Taylors’ School runs a Scholarship Programme to recognise and reward talent and potential across a variety of fields. Scholarships are awarded on merit, irrespective of means and are available to pupils entering Year 7 and the Sixth Form. Scholars are expected to work hard and make a positive contribution to the life of the school throughout their time at Merchant Taylors’.","Open to all, Academic Scholarships are offered based on a pupil’s performance at the entrance exams and interview. Candidates who have performed exceptionally well will be invited back for a scholarship assessment day. Successful pupils are rewarded with a reduction in their school fees.","Practical Scholarships recognise outstanding ability and potential in a particular field. Art; Drama; Design, Engineering and Technology; Music and Sports scholarships are available to boys joining us in Year 7. These scholarships need to be applied for once you have registered your son. The deadline for Practical Scholarships is 30th September of the year preceding entry (when your son is in Year 6). "],
      percentageOfFees: "???",
    },
    schoolImage: "/images/merchantTaylorSchoolNorthwood.jpg",
    documentId: 1850433663433331,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Since our founding in 1561, Merchant Taylors’ has been dedicated to providing the best educational opportunities possible to children with talent. This spirit continues through our bursary programme which aims to broaden access to education to exceptionally talented pupils irrespective of their financial circumstances. Our bursary programme provides financial support up to 100% of the fees and in some circumstances may also cover uniform, coaches, and other costs to enable pupils to take full advantage of the broad spectrum of activities here at Merchant Taylors’. Bursaries and Scholarships are assessed independently so if a pupil has been offered a Scholarship, they may also be eligible for a Bursary and vice versa. ","Eligibility for a Bursary is assessed via financial means-testing which is carried out by an independent company and is likely to require a home visit. The first step is to complete your son’s registration"],
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
    established: 1561,
    enquireUrl: "https://www.mtsn.org.uk/admissions/welcome"
  },
  {
    schoolName: "Wellington School",
    schoolDescription: `Wellington School is a respected independent co-educational day and boarding school located in Somerset, England. Founded in 1837, the school is known for its strong academic standards, supportive community, and emphasis on character development. Offering a broad and engaging curriculum, Wellington School encourages intellectual curiosity, creativity, and independent thinking, alongside exceptional opportunities in sports, music, drama, and outdoor education. Set within a beautiful campus, the school provides a nurturing and inspiring environment where students develop confidence, leadership skills, and resilience. With a focus on both academic achievement and personal growth, Wellington School prepares students for top universities and future success.`,
    studentNumbers: 908,
    faithSchool: "Church of England",
    schoolEmail: "admissions@wellington-school.org.uk", 
    schoolPhoneNumber: "+44 01823 668 800", 
    latitude: 50.976992227472756, // //51.10076709037832, -0.7435842027348746
    longitude:  -3.226278522855273,  //50.976992227472756, -3.226278522855273
    schoolLocation: "Wellington, Somerset, South-West",
    stages: ["primary", "prep","secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "mixed-sex",
    totalSchoolFees: [9771, 47970], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Scholarships are offered to recognise ability and potential in the following areas: Academic, Music, Sport, Drama, Performing Arts and Art & Design. Pupils applying for Sport, Music, Drama, Performing Arts and Art & Design scholarships must fulfil the academic requirements of the school. Scholarships are offered for entry into Year 7, Year 9 and the Sixth Form. For further information on scholarships and bursaries for the academic year 2025/26 please contact the Admissions Team"],
      percentageOfFees: [5,20],
    },
    schoolImage: "/images/wellington.jpg",
    documentId: 1850455563433331,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["All parents are entitled to submit a means-testing form for bursarial assistance. Bursaries will be reviewed annually to ensure the award is still appropriate."],
      percentageOfFees: "means-tested",
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: ["Wellington has a long and successful history of working with Forces’ families. We are very proud of our boarding community and currently have a number of Service children attending the School who benefit from the stable, healthy, challenging, fun and friendly environment provided by our Houses.","Wellington supports the Continuity of Education Allowance with a very generous Forces’ Bursary, with parents paying only 10% of the  Continuity of Education Allowance."],
      percentageOfFees: "90% of CEA allowance (£10,211)",
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1837,
    enquireUrl: "https://www.wellington-school.org.uk/senior/admissions/visiting-the-school"
  },
  {
    schoolName: "Haberdashers' Eltree Schools",
    schoolDescription: `Haberdashers' Elstree Schools, comprising Haberdashers' Boys' School and Haberdashers' Girls' School, are prestigious independent day schools located in Elstree, Hertfordshire, England. With a shared heritage dating back to 1690, both schools are renowned for their academic excellence, strong pastoral care, and commitment to developing well-rounded individuals. Offering a rigorous and dynamic curriculum, they foster intellectual curiosity, creativity, and leadership, alongside outstanding opportunities in sports, music, drama, and extracurricular activities. Set within a modern and well-equipped campus, the schools provide a supportive and inspiring environment where students develop confidence, resilience, and a lifelong love of learning. With a strong tradition of scholarship and innovation, Haberdashers' Elstree Schools prepare students for top universities and successful futures.`,
    studentNumbers: 2629,
    faithSchool: "Christian",
    schoolEmail: "officegirls@habselstree.org.uk/officeboys@habselstree.org.uk", 
    schoolPhoneNumber: "44 020 8266 2300/020 8266 1700", 
    latitude: 51.654948134316875, // //51.10076709037832, -0.7435842027348746
    longitude: -0.3133737436229754,  //51.654948134316875, -0.3133737436229754
    schoolLocation: "Elstree, London, South-East",
    stages: ["primary","secondary","sixth form"],
    schoolType: ["day"],
    coeducation: "both but seperate",
    totalSchoolFees: [22943, 28424], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["We have a range of specialist scholarships available at 11+ and 16+, as well as academic scholarships for both prospective and current students. Where eligible, students can receive more than one type of scholarship, while also benefitting from a bursary.","Types: Art, Creative Writing, Design and Technology, Drama, Gymnaastics, Music, Sports  "],
      percentageOfFees: "???",
    },
    schoolImage: "/images/habselstree.jpg",
    documentId: 1853336663433331,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Roughly 10% of our students receive financial support. Our bursary programmes are intended to be transformational, we award to lower-income families who qualify for full or nearly full support. Our bursary programmes open up the world of Habs Girls to students whose families could not otherwise send their children here. Approximately 160 Senior School students attend Habs each year with bursary support and they will continue to receive support throughout their time at Habs, for as long as they need it. All students applying for a bursary will need to sit our standard entrance assessments.","We have an additional bursary scheme for students of Black African or Caribbean heritage that sits alongside the overall Habs bursary programme. Bright Futures is a new, donor-supported initiative, it aims to gain greater representation in higher education for individuals with protected characteristics (Equality Act 2010), who are also underrepresented at Habs and whose families could not afford to send them to Habs without substantial financial support. Funding is currently available for up to two fully funded spaces for 11+, 13+ or 16+ entry at Habs Girls.","The level of financial support we can offer is based on your financial declaration. The process includes an informal meeting with a member of our Finance team. As a guide, families whose total household gross income is below £50,000 is likely to qualify for a free school place. Households with total gross income of approximately £115,000 or more are not eligible for bursary support. Every year, each bursary is subject to a means-test reassessment."],
      percentageOfFees: [50, 100],
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: ["Many parents choose to spread the cost of their school fees by paying monthly, via a School Fee Plan. This independent service offers a convenient way to manage your child’s fees through regular direct debit payments. Any extras can then be added on a termly basis, such as music tuition and trips","Our Fees In Advance scheme allows you or any family members to make lump-sum payments towards all or part of your child’s fees, including extras. Many parents, grandparents and even godparents like to contribute as part of the scheme. The amount deposited with Habs is then used to pay your child’s fees as they fall due each term, until the pre-payment is exhausted. In return for holding the lump sum, the school will apply a discount to the advance payment of 3.50%, which approximates to a return on investment of 4.16% per year for higher-rate taxpayers. The scheme does not fix your future school fees. Yet the rate of return will be guaranteed at the time the money is received by Habs – and for however long it is held.","f you subscribe to the School Fees Refund scheme, you can claim back for absences due to illness or accident. You can also claim for contact with infection, which should be for a continuous contact period of at least five days, including weekends. If you would like to join the scheme, the current charge is 0.82% of your child’s school fees per term."],
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
    established: 1690,
    enquireUrl: "https://www.habselstree.org.uk/"
  },
  {
    schoolName: "Queen Ethelburga's",
    schoolDescription: `Queen Ethelburga’s Collegiate is a prestigious independent co-educational day and boarding school located in North Yorkshire, England. Established in 1912, the Collegiate is made up of four distinct schools: **The Chapter House** (for pupils aged 3 months to Year 5), **King’s Magna** (for Years 6-9), **The College**, and **The Faculty** (both for Years 10-13). This structure allows students to receive a tailored education that suits their individual learning styles and ambitions. Renowned for its academic excellence, Queen Ethelburga’s fosters intellectual curiosity, creativity, and leadership while offering a broad and dynamic curriculum. Students benefit from exceptional opportunities in sports, performing arts, and extracurricular activities, supported by world-class facilities, including modern classrooms, a professional-grade theatre, extensive sports facilities, and high-quality boarding accommodations. Set within a stunning 220-acre countryside campus, the Collegiate provides a nurturing and inspiring environment where students develop confidence, resilience, and ambition. With a strong focus on both academic achievement and personal growth, Queen Ethelburga’s prepares students for top universities and successful futures, instilling values of respect, independence, and excellence.`,
    studentNumbers: 1335,
    faithSchool: "Non-Denominational",
    schoolEmail: "admission@qe.org", 
    schoolPhoneNumber: "+44 (0)1423 33 33 30", 
    latitude: 54.02715689936455, // //51.10076709037832, -0.7435842027348746
    longitude: -1.2963811025563412,  //54.02715689936455, -1.2963811025563412
    schoolLocation: "Thorpe Underwood, North Yorkshire, Yorkshire & Humber",
    stages: ["primary","secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "co-educational",
    totalSchoolFees: [13050, 72375], //per annual school year //4350
    scholarships: {
      scholarshipsAvailable: false,
      scholarshipsDetail: ["We wish to inform you that we have made the decision not to offer scholarships or bursaries to new families for the next academic year. Our school fees remain competitively priced across the local area, and we have absorbed much of the VAT cost without compromising any of the exceptional offerings we provide at QE. For now, our current priority is to support our existing families and ensure continuity for our students, especially those in crucial exam years, to prevent any disruption to their education."],
      percentageOfFees: "???",
    },
    schoolImage: "/images/queenEthelburga's.webp",
    documentId: 1854436663433331,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: false,
      BursariesDetail: ["We wish to inform you that we have made the decision not to offer scholarships or bursaries to new families for the next academic year. Our school fees remain competitively priced across the local area, and we have absorbed much of the VAT cost without compromising any of the exceptional offerings we provide at QE. For now, our current priority is to support our existing families and ensure continuity for our students, especially those in crucial exam years, to prevent any disruption to their education."],
      percentageOfFees: "???",
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: ["At QE, we offer a generous discount on fees for Forces children. If you are eligible for the CEA (Continuity of Education Allowance), the parental contribution is £1,470 per term."],
      percentageOfFees: [60,66],
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: ["Sibling discounts are offered with fee reductions of 5% for a second child in attendance, 20% for a third child and 35% for a fourth child and any subsequent children. Please note: these discounts only apply to UK students and are capped at 5% for siblings in Kindergarten."],
      percentageOfFees: [5,35],
    },
    established: 1912,
    enquireUrl: "https://www.qe.org/admissions"
  },
  {
    schoolName: "Yarm School",
    schoolDescription: `Yarm School is a leading independent co-educational day school located in Yarm, North Yorkshire, England. Founded in 1978, the school has built a strong reputation for academic excellence, outstanding pastoral care, and a commitment to developing well-rounded individuals. Catering to pupils from Nursery through to Sixth Form, Yarm School offers a broad and engaging curriculum that fosters intellectual curiosity, creativity, and leadership. Beyond academics, the school provides exceptional opportunities in sports, performing arts, outdoor education, and extracurricular activities, encouraging personal growth and resilience. Situated on a picturesque riverside campus with state-of-the-art facilities, Yarm School offers a supportive and inspiring environment where students can thrive. With a focus on both academic achievement and character development, the school prepares pupils for top universities and successful futures while instilling values of integrity, ambition, and community spirit.`,
    studentNumbers: 1167,
    faithSchool: "All Faiths",
    schoolEmail: "admin@yarmschool.org", 
    schoolPhoneNumber: "+44 01642 786 023", 
    latitude: 54.50707805216794, // //51.10076709037832, -0.7435842027348746
    longitude: -1.3519089448647768,  //54.50707805216794, -1.3519089448647768
    schoolLocation: "Yarm, North Yorkshire, Yorkshire & Humber",
    stages: ["primary","secondary","sixth form"],
    schoolType: ["day"],
    coeducation: "co-educational",
    totalSchoolFees: [11253, 18681], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["As an academically selective school, many of our pupils are high on the national spectrum of academic achievement. We want to recognise gifted and talented children and give them an opportunity to join one of the leading independent schools in the North East by offering a number of academic Scholarships throughout the Senior School and Sixth Form.","Music Scholarships are available for pupils on entry at 11+, 13+ or 16+. They must show reasonable, all-round academic ability in the Entrance Assessment and a high standard of achievement on one or more instruments or voice. Pupils may also offer composition at 16+. All applicants must demonstrate superb musical progress and a high level of involvement in the musical life of the School to retain their Music Scholarship. In addition, the pupil must make sound academic progress and display high standards of behaviour.","We believe that ambitious, driven students should benefit from an independent education no matter their domestic circumstances. That’s why we offer four fully funded Sixth Form Scholarships to outstanding students new to the School.","Our Sixth Form Scholarships are means-tested and candidates must secure a minimum of eight 7/8/9 grades at GCSE. Joint parental income must also be below £45,000 per annum. Our Sixth Form Scholarships are means-tested and candidates must secure a minimum of eight 7/8/9 grades at GCSE. Joint parental income must also be below £45,000 per annum.","we are one of a limited number of schools that offer the prestigious Arkwright Scholarships. Together with Arkwright, we aim to enable, inspire and nurture future leaders in engineering and technical design. These Scholarships are tenable for two Sixth Form years. Students must study Maths at A Level and will be asked to demonstrate their plan to study engineering or technical design at degree level. Applications must be made by the end of January in the year the Sixth Form studies are to commence."],
      percentageOfFees: "means-tested",
    },
    schoolImage: "/images/yarm.jpg",
    documentId: 1854226663433331,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Our means-tested Bursaries are open to pupils joining the First Year (Year 7) in our Senior School or Lower Sixth (Year 12) in our Sixth Form. They are intended to make it possible for promising, academically talented children to receive an independent school education at Yarm, regardless of their financial or domestic circumstances.","Yarm’s Bursaries cover a percentage of the pupil’s tuition; as a guide, assistance is given on a sliding scale linked to family income. In some cases, we will also offer financial support for extras such as lunch, school trips and uniform.","On average, almost £500k per annum is spent supporting around 60 children with means-tested Bursaries, which range in value from 100%+ to 20% of the full fee, depending on the family’s financial circumstances","We will consider making an award where the total gross family income is less than £55,000 per annum. Savings and assets are also considered when assessing eligibility for a bursary award."],
      percentageOfFees: [20, 100],
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
    established: 1978,
    enquireUrl: "https://www.yarmschool.org/admissions/"
  },
  {
    schoolName: "Benenden School",
    schoolDescription: `Benenden School is a prestigious independent boarding school for girls, located in the Kent countryside, England. Founded in 1923, the school is renowned for its academic excellence, outstanding pastoral care, and commitment to developing confident, well-rounded young women. Offering a rigorous and dynamic curriculum, Benenden fosters intellectual curiosity, creativity, and leadership, alongside exceptional opportunities in sports, performing arts, and extracurricular activities. Set within a stunning 250-acre campus with state-of-the-art facilities, the school provides a nurturing and inspiring environment where students develop resilience, independence, and ambition. With a strong tradition of academic achievement, personal development, and global outlook, Benenden School prepares students for top universities and successful futures, equipping them with the skills and values needed to thrive in an ever-changing world.`,
    studentNumbers: 584,
    faithSchool: "Church of England",
    schoolEmail: "registry@benenden.school", 
    schoolPhoneNumber: "+44 01580 240 592", 
    latitude: 51.07564538913721, // //51.10076709037832, -0.7435842027348746
    longitude: 0.5713626836547036,  //51.07564538913721, 0.5713626836547036
    schoolLocation: "Benenden, Kent, South-East",
    stages: ["secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "girls",
    totalSchoolFees: [40680, 56700], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Being a Scholar is a position of honour at Benenden. Whilst it does not carry any remission in fees, it does allow pupils to play a key role in the life of the School and opens a world of opportunities from which she can expand her learning. "],
      percentageOfFees: "no fee remision",
    },
    schoolImage: "/images/benenden.jpg",
    documentId: 1224226663433331,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Three types of Bursaries:", "11+ Fourths Award programme (previously the 11+ Trust Award Bursary programme) - Each year Benenden School can offer one or more places for a girl to enter the Fourth Form (11+ or Year 7). Each place may be fully funded – that is to say up to 100% of school fees, subject to means-testing. The 11+ Fourths Award is open only to girls attending a local primary schools, located within a 7.5 mile radius of Benenden School.","16+ Founders Award (previously the Sixth Form Trust Award programme) - Each year Benenden School can offer one or more places for a pupil to enter the Sixth Form (16+ or Year 12). Each place may be fully funded – that is to say up to 100% of school fees, subject to means-testing. In addition to covering fees, if necessary, all school uniform costs would be covered and an allowance paid to cover two extra activities per term, eg musical instrument tuition, sports coaching, or extra drama, etc. The successful candidate would be expected to complete her education with us.","Benenden Bursary Awards at 11+, 12+, 13+, 14+ and 16+ - Our general Bursary award progamme is open to all UK resident candidates. Awards are subject to means-testing and the eligibility criteria set out below. Full details of the new Bursary Awards and the application process can be found below."],
      percentageOfFees: [20, 100],
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: ["Benenden operates a fee payment in advance scheme. For more details please contact their Accounts team"],
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: ["Families who are in receipt of the UK government Continuity of Education Allowance (CEA) for Service or Diplomatic Children may seek additional bursary support from Benenden of up to 20% of fees. This is not be means-tested."],
      percentageOfFees: [0,20],
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1923,
    enquireUrl: "https://www.benenden.school/admissions/?_gl=1*19ieerh*_ga*NjIwMDQxNTc1LjE3Mzg4Njg2NDc.*_ga_PFQS6VRF35*MTczODg2ODY0Ni4xLjEuMTczODg2OTc3Ni42MC4wLjA."
  },
  {
    schoolName: "Brighton School",
    schoolDescription: `Brighton College is a prestigious independent co-educational day and boarding school located in Brighton, England. Founded in 1845, the school is renowned for its academic excellence, innovative teaching, and strong pastoral care. Consistently ranked among the top schools in the UK, Brighton College fosters intellectual curiosity, creativity, and leadership through a dynamic and forward-thinking curriculum. Beyond academics, the school offers exceptional opportunities in sports, music, drama, and extracurricular activities, encouraging students to develop resilience, confidence, and a global outlook. Set within a stunning mix of historic and modern architecture, the campus provides world-class facilities that support students' personal and academic growth. With a strong emphasis on kindness, inclusivity, and ambition, Brighton College prepares students for top universities and successful futures in a rapidly evolving world.`,
    studentNumbers: 1242,
    faithSchool: "Church of England",
    schoolEmail: "collegeadmissions@brightoncollege.net", 
    schoolPhoneNumber: "+44 (0)1273 704 200", 
    latitude: 50.82065404578936, // //51.10076709037832, -0.7435842027348746
    longitude: -0.12204453162237046,  //50.82065404578936, -0.12204453162237046
    schoolLocation: "Brighton, East Sussex, South-East",
    stages: ["secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "co-educational",
    totalSchoolFees: [14160, 31770], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Scholarships are awarded during the admissions process to recognise talented pupils who show great promise in a particular area of school life. Scholars are expected to act as role models in their fields of interest. Successful pupils are rewarded with an annual amount deducted from their fees, which lasts throughout their time at the College.","Sport, Music, Design & Technology, Drama, Dance, Art & Photography and Academic Scholarships are available","Since September 2020, Brighton College has offered 20 free 16+ places in our Opening Doors scholarship programme. This initiative makes Sixth Form places at Brighton College, one of the world’s leading schools, available to talented and ambitious young people from the local area. With fully funded Sixth Form scholarships, we hope to attract local pupils for whom our pastoral care and academic rigor will offer a life-changing opportunity. This may include: Pupils who are eligible for free school meals, Pupils in care or who have been in care, Pupils who would be the first in their families to attend university, Pupils who have experienced a significant disadvantage, or who have been displaced, such as a refugee."],
      percentageOfFees: [0, 100],
    },
    schoolImage: "/images/brightonCollege.jpg",
    documentId: 1224225563433331,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["With the aim of giving more children the opportunity to flourish, a bursary is awarded on the basis of a means-test form and offer a fee reduction appropriate to the individual situation of each family. Bursaries are reviewed each year and may change as a family’s financial situation changes. They are given for day places only. "],
      percentageOfFees: [0, 100],
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
    established: 1923,
    enquireUrl: "https://www.brightoncollege.org.uk/"
  },
  {
    schoolName: "Downe House School",
    schoolDescription: `Downe House School is a prestigious independent boarding school for girls, located in Berkshire, England. Founded in 1907, the school is renowned for its academic excellence, strong pastoral care, and commitment to empowering young women. With a challenging and enriching curriculum, Downe House fosters intellectual curiosity, creativity, and leadership while maintaining a strong sense of tradition and innovation. Beyond academics, the school offers outstanding opportunities in sports, music, drama, and extracurricular activities, encouraging students to develop confidence, resilience, and a global perspective. Set within a beautiful and well-equipped campus, Downe House provides a nurturing and inspiring environment where students can thrive. With a strong focus on academic achievement, personal development, and character-building, the school prepares pupils for top universities and successful futures, instilling values of integrity, ambition, and service.`,
    studentNumbers: 569,
    faithSchool: "Church of England",
    schoolEmail: " hamisie@downehouse.net", 
    schoolPhoneNumber: "+44 01635 200 286", 
    latitude: 51.43765994003928, // //51.10076709037832, -0.7435842027348746
    longitude: -1.2744322199076514,  //51.43765994003928, -1.2744322199076514
    schoolLocation: "Thatcham, Berkshire, South-East",
    stages: ["secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "girls",
    totalSchoolFees: [43350, 58290], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Downe House offers Scholarships and Exhibitions to girls with exceptional potential in Creative Arts, Music, Drama, Sport and Academics. Our Award Holders play an important role in the life of the School, inspiring others to strive for excellence and sharing a culture of endeavour whilst at the same time fulfilling their own potential. Scholarship Awards do not carry fee remission but families can apply for assistance with fees through our bursary scheme."],
      percentageOfFees: "no fee remision",
    },
    schoolImage: "/images/downeHouse.jpg",
    documentId: 1224225563433131,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["In 2023-24, 45 girls are benefitting from full and partial means-tested bursaries. We value pupils who will flourish in and contribute to life at Downe House, seizing every opportunity and enriching our community. These gifted pupils will benefit from an education and boarding environment of the highest calibre and quality, as well as the provision of academic, cultural, sporting and social experiences to help them reach their potential. Our means-tested bursaries are available at all points of entry to Downe House and vary in size based on the circumstances of the applicant’s family. We offer financial assistance as high as 100% plus an allowance towards School extras, recognising that a Downe House education encompasses more than classroom learning. Bursaries also take into account academic entry requirements and an applicant’s capacity to progress in their work through the School. If you feel that you may need the support of  one of our means tested bursaries, please discuss with us well in advance of your daughter’s date of entry. Please don’t hesitate to contact our Registrar, Miss Angela Nutt by calling 01635 204701 for a confidential conversation"],
      percentageOfFees: [0, 100],
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
    established: 1907,
    enquireUrl: "https://www.downehouse.net/downe-house-admissions/"
  },
  {
    schoolName: "Fettes College",
    schoolDescription: `Fettes College is a prestigious independent co-educational boarding and day school located in Edinburgh, Scotland. Founded in 1870, the school is renowned for its academic excellence, strong pastoral care, and rich heritage. Offering a rigorous and well-rounded curriculum, Fettes fosters intellectual curiosity, creativity, and leadership, preparing students for top universities worldwide. Beyond academics, the school provides exceptional opportunities in sports, music, drama, and extracurricular activities, encouraging personal growth, resilience, and teamwork. Set within a stunning 90-acre campus with historic architecture and state-of-the-art facilities, Fettes College offers a supportive and inspiring environment where students thrive. With a strong emphasis on academic achievement, character development, and global citizenship, the school equips pupils with the skills and values needed for lifelong success.`,
    studentNumbers: 744,
    faithSchool: "Interdenominational",
    schoolEmail: "enquiries@fettes.com", 
    schoolPhoneNumber: "+44 01635 200 286", 
    latitude: 51.43765994003928, // //51.10076709037832, -0.7435842027348746
    longitude: -1.2744322199076514,  //51.43765994003928, -1.2744322199076514
    schoolLocation: "Edinburgh, Midlothian, Scotland",
    stages: ["primary","secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "co-educational",
    totalSchoolFees: [13950, 42225], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Fettes College offers a range of Scholarships and Awards based on merit, each of which is awarded entirely at the discretion of the Head. In Scotland and at Fettes Scholarships are not connected to Bursaries - Bursaries are means tested, whereas Scholarships are awarded based on a child demonstrating excellence in a particular area. Considerable kudos is attached to being a scholar at Fettes and Scholarships cover up to a maximum of 5% of the fees. To be considered for a Scholarship or Award you must sit your assessment at Fettes.","The following Scholarships and Awards are available at 13+ and are assessed in the January prior to entry: Academic Scholarships, All-Rounder Awards, Art Awards, Music Awards and Exhibitions, Piping and Snare Drumming Awards and Exhibitions, Sports Awards","The following Scholarships and Awards are available at 16+ and are assessed in the November prior to entry: Academic Scholarships, Art Awards, Music Awards and Exhibitions, Piping and Snare Drumming Awards and Exhibitions, Sports Awards"],
      percentageOfFees: [0, 5],
    },
    schoolImage: "/images/fettes.jpg",
    documentId: 1124225563433131,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Fettes is committed to broadening access to the school by offering means-tested financial support towards the payment of school fees – known as a Bursary. In Scotland, bursaries are entirely different to scholarships. Bursaries are means-tested and can cover up to 100% of fees payable, depending on the financial circumstances of applicants. Given the inclusive nature of the school, consideration will also be given to support towards the cost of essential school equipment and some relevant and educationally focussed trips. There are strict deadlines, each year, for applying for a bursary to Fettes "],
      percentageOfFees: [0, 100],
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: ["We offer a tiered remission to HM Forces families (and Foreign Office families who qualify for CEA) based on year group and rank. This is applied as follows: In the Prep School – 15% remission. In the Senior School – 20% remission (25% remission is available to Lieutenant, Captain, Flight Lieutenant or below.)","No other remission will be available, and scholarships awarded will be entirely honorary with no financial benefit."],
      percentageOfFees: [5, 25], //can't remember whether others were counted same way?
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: ["If you have two or more children attending Fettes at the same time (5% for your second child, 35% for your third child and 50% for your fourth and any additional children who are on the School roll at the same time."],
      percentageOfFees: [5, 50],
    },
    established: 1870,
    enquireUrl: "https://www.fettes.com/admissions/"
  },
  {
    schoolName: "Haileybury College",
    schoolDescription: `Haileybury College is a prestigious independent co-educational boarding and day school located in Hertfordshire, England. Founded in 1862, the school is renowned for its academic excellence, strong pastoral care, and commitment to developing well-rounded individuals. Offering a challenging and enriching curriculum, Haileybury fosters intellectual curiosity, creativity, and leadership, preparing students for top universities worldwide. Beyond academics, the school provides outstanding opportunities in sports, music, drama, and extracurricular activities, encouraging personal growth, resilience, and a spirit of service. Set within a stunning 500-acre campus with historic architecture and state-of-the-art facilities, Haileybury offers a supportive and inspiring environment where students thrive. With a strong emphasis on academic achievement, character development, and global awareness, the school equips pupils with the skills and values needed for lifelong success.`,
    studentNumbers: 914,
    faithSchool: "Church of England",
    schoolEmail: "reception@haileybury.com", 
    schoolPhoneNumber: "+44 (0) 1992 706200", 
    latitude: 51.778751712359224, // //51.10076709037832, -0.7435842027348746
    longitude:  -0.029236187479593702,  //51.778751712359224, -0.029236187479593702
    schoolLocation: "Hertford, Hertfordshire, South-East",
    stages: ["secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "co-educational",
    totalSchoolFees: [25770, 38775], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["A Haileybury Scholarship typically carries a nominal fee remission and successful applicants gain enormously from the additional opportunities and enrichment programmes on offer. Scholarships are awarded on merit and applicants are required to attend a scholarship assessment day.","Scholarship categories: Academic, Music, Sport, (16+ only) Design Technology, Drama and Art","A Scholarship will normally be held for the duration of a pupil’s career at Haileybury, subject to them continuing to meet the standards expected. Scholarships are reviewed annually. Applicants may only apply for a maximum of three scholarships. Dependent upon individual circumstances, a scholarship and bursary can run concurrently in the case of a pupil requiring financial assistance."],
      percentageOfFees: "nominal fee remission",
    },
    schoolImage: "/images/haileybury.jpg",
    documentId: 1124221363433131,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["The Governors of Haileybury are committed to providing financial aid, in the form of bursaries, to any child with academic potential who would benefit from accessing the opportunities Haileybury has to offer but who would otherwise not have the means to attend. Bursary support takes the form of a discount on tuition fees payable depending upon the financial circumstances of applicants. The awards are made at the discretion of the Master in consultation with the Bursary Awards Committee, based on a means test, which includes a review of a family’s circumstances, income and capital resources.","If you are interested in seeking a place after your visit, please register for the entrance tests. Parents seeking a bursary are required to complete a bursary application form by 1 October, which seeks to establish the financial circumstances of the household. Bursary forms are available from Admissions, admissions@haileybury.com"],
      percentageOfFees: [0, 100],
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
    established: 1862,
    enquireUrl: "https://www.haileybury.com/admissions/"
  },
  {
    schoolName: "Marlborough College",
    schoolDescription: `Marlborough College is a prestigious independent co-educational boarding and day school located in Wiltshire, England. Founded in 1843, the school is renowned for its academic excellence, strong pastoral care, and commitment to developing well-rounded individuals. Offering a rigorous and diverse curriculum, Marlborough fosters intellectual curiosity, creativity, and leadership, preparing students for top universities worldwide. Beyond academics, the school provides exceptional opportunities in sports, music, drama, and extracurricular activities, encouraging personal growth, resilience, and teamwork. Set within a stunning historic campus with state-of-the-art facilities, Marlborough College offers a supportive and inspiring environment where students thrive. With a strong emphasis on academic achievement, character development, and global citizenship, the school equips pupils with the skills and values needed for lifelong success.`,
    studentNumbers: 1010,
    faithSchool: "Church of England",
    schoolEmail: "admissions@marlboroughcollege.org", 
    schoolPhoneNumber: "+44 01672 892 300", 
    latitude: 51.417508800409436, // //51.10076709037832, -0.7435842027348746
    longitude:  -1.7350428990178521,  //51.417508800409436, -1.7350428990178521
    schoolLocation: "Marlborough, Wiltshire, South-West",
    stages: ["secondary","sixth form"],
    schoolType: ["boarding"],
    coeducation: "co-educational",
    totalSchoolFees: [59142, 59142], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["In order to obtain a scholarship, it is necessary to gain a place at the College through the Entry Assessment process.","Scholarships are available for: Academic, Art, Design Technology, Drama and Music. With the large number of candidates applying each year for sport, the College offers Sport Awards for the duration of a pupil’s first year, after which a number will be offered scholarships.","Scholarships are honorary and carry no reduction in fees but they provide access to the relevant scholarship programme. ","Our Directors’ Awards are awarded to a small number of pupils joining the College in the Shell and Lower Sixth at the discretion of the Director of Music or the Director of Sport. They are awarded in recognition of outstanding excellence in Music or Sport to children who are perceived to be able to have a substantial impact on the life of the College. They carry a fee reduction of up to 20%. Successful candidates will be: exceptionally talented in Music or Sport, role models in their expert area and expected to encourage positive behaviours and ambition in those around them, able to meet or exceed the College’s academic standards, and committed to participating fully in all aspects of life in a full boarding school."],
      percentageOfFees: [0, 20],
    },
    schoolImage: "/images/marlboroughCollege.webp",
    documentId: 2124221363433131,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Our bursaries offer transformative opportunities for young people and we strongly believe that the whole College benefits from a pupil community that is diverse and more representative of our society.  What sets us apart is the significant pastoral benefits that come from living within our full boarding community which develop into positive, enduring bonds of friendship for life. Bursaries are available for eligible families applying for entry to the College at both 13+ and 16+. Depending on family circumstances, a bursarial award can cover between 5% and 100% of fees, plus additional amounts towards extras such as IT equipment, academic trips, travel costs and uniform. Candidates for a bursary would not be required to present scholarship level in a particular subject, although overall academic strength is an important consideration for all who apply for a place at the College.","Types of Bursaries: General Bursary, Art and Sports, Specific Boarding, Consolidated Fund, Swindon Academy and Old Malburian awards"],
      percentageOfFees: [5, 100],
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
    established: 1843,
    enquireUrl: "https://www.marlboroughcollege.org/admissions/"
  },
  {
    schoolName: "Millfield School",
    schoolDescription: `Millfield School is a prestigious independent co-educational day and boarding school located in Somerset, England. Founded in 1935, the school is renowned for its academic excellence, strong pastoral care, and world-class sports facilities. Offering a broad and dynamic curriculum, Millfield fosters intellectual curiosity, creativity, and leadership, preparing students for top universities and future careers. Beyond academics, the school provides outstanding opportunities in sports, music, drama, and extracurricular activities, encouraging personal growth, resilience, and teamwork. With a reputation for nurturing talent in a wide range of disciplines, Millfield supports students in reaching their full potential. Set within a spacious and well-equipped campus, the school offers an inspiring environment where students can thrive. With a strong emphasis on individual development, ambition, and innovation, Millfield equips pupils with the skills and confidence needed for lifelong success.`,
    studentNumbers: 1383,
    faithSchool: "All Faiths",
    schoolEmail: "generaloffice@millfieldschool.com", 
    schoolPhoneNumber: "+44 01458 442 291/+44 01458 832 446", 
    latitude: 51.1289423733992, // //51.10076709037832, -0.7435842027348746
    longitude:  -2.727175818793825,  //51.1289423733992, -2.727175818793825
    schoolLocation: "Street, Somerset, South-West",
    stages: ["primary","secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "co-educational",
    totalSchoolFees: [12693, 57132], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: ["Millfield prep: We award a number of Academic, Art, Drama, Music and Sports Scholarships each year for entry into Years 6, 7 and 8 for new pupils (into Years 6 and 7 only for existing pupils already attending Millfield Prep). Additionally, our Millfield Prep Award recognises Prep pupils who are talented all-rounders (strong academics and talented in any two areas from Art, Drama, Music, Sport). Please note that this award is only for Years 6, 7 and 8 whilst at Millfield Prep School and will automatically end on transfer to Year 9. Pupils who hold a Millfield Prep Award may apply for a new Scholarship for entry into Year 9 and these are currently available for Academic, Co-curricular and Sport. Scholarships carry a maximum fee reduction of up to 10% (multiple awards may be applied for but the maximum fee reduction will be no more than 10%).  Parents who do not require financial assistance are encouraged to accept their child's Scholarship on an honorary basis. Parents in genuine financial need can apply to have a Scholarship augmented by a bursary, subject to a means test. ", "Millfield: Scholarships are available for entry into Year 9 or the Lower Sixth. Application forms will be provided once the Senior Registration Form has been completed. Academic, Art, Chess, Dance, Drama, Music, Product Design and Sport Scholarships are awarded annually to candidates who are exceptionally talented in any one or two of these disciplines. Scholarships carry a maximum fee reduction of up to 10%. Parents can apply to have a Scholarship augmented by a bursary, subject to a means test. Alternatively, parents who do not require financial assistance are encouraged to accept their child's Scholarship on an honorary basis. Parents in genuine financial need can apply to have a Scholarship augmented by a bursary, subject to a means test. "],
      percentageOfFees: [0, 10],
    },
    schoolImage: "/images/MillfieldHouse.jpg",
    documentId: 2124221363433132,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Where a child is judged suitable to receive an award, the amount of any assistance in addition to a scholarship is assessed on a means-tested basis on the extent of need. Factors which the School may take into account include but are not limited to: (*) The ability to improve the financial position or earning power of the family, (*) Opportunities to release any capital (including investments and significant equity value in houses), (*) The costs of any siblings at the School, (*) In cases of divorce or separation, the contribution made by both parents (unless otherwise directed by a Court Order), (*) Any contribution to fees or other household costs by other family members or other outside sources, (*) All awards are subject to the School’s ability to fund them within the context of its overall budget and cannot therefore be guaranteed. The School seeks to support as many children as possible through its limited scholarship and bursary funds. In particular, the School’s ability to fund high value awards is limited and such awards are allocated to children with exceptional talent or potential where there is a genuine financial need. "],
      percentageOfFees: [0, 100],
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: ["We are pleased to announce that for September 2024 we have created an exclusive package for military families in receipt of CEA, where families pay only 10% of our boarding fee in addition to CEA. We value our service families and in recognition of your service we offer this significant reduction in school fees.", "The boarding fee includes tuition, most activities at school, breakfast, three-course lunch, three-course supper, laundry, games and prep, textbook loan, pupils’ personal accident insurance, contribution to travel and accommodation when representing the school, and internet access. Please be aware that fees in many other schools are not inclusive of all of the above and are charged as ‘extras’ on termly bills. Millfield is home to more than 40 military children and we have many former military personnel working at the school.  We understand that a good, consistent and stable education is important to military families. With Millfield Prep having 130 full-time boarders and Millfield being a full boarding school of 950 students, including 250 British expats, we offer an outstanding education, excellent learning support, world class sporting programmes and facilities, unrivalled co-curricular programmes, and a home from home environment. Millfield and Millfield Prep are near RNAS Yeovilton, only 60 – 90 minutes from the Salisbury Plain Garrisons and 2 hours from Plymouth, RAF Odiham and RAF Brize Norton. Millfield Prep Head Dan Thornburn is from a military family himself, attending boarding school as a child, so he knows first hand what life is like for serving personnel and their families."],
      percentageOfFees: 90, 
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: false,
      siblingsDiscountDetails: null,
      percentageOfFees: null,
    },
    established: 1935,
    enquireUrl: "https://www.millfieldschool.com/admissions/"
  },
  {
    schoolName: "Sevenoaks School",
    schoolDescription: `Sevenoaks School is a prestigious independent co-educational day and boarding school located in Kent, England. Founded in 1432, it is one of the oldest and most respected schools in the UK, known for its academic excellence, international outlook, and innovative approach to education. Sevenoaks was one of the first UK schools to adopt the International Baccalaureate (IB) Diploma, which remains at the heart of its rigorous and forward-thinking curriculum. Beyond academics, the school offers exceptional opportunities in sports, music, drama, and extracurricular activities, fostering leadership, creativity, and personal growth. With a diverse and globally minded student body, Sevenoaks provides a nurturing yet challenging environment that encourages intellectual curiosity and independent thinking. Its modern campus, set in picturesque surroundings, features cutting-edge facilities that support academic and extracurricular excellence. With a strong emphasis on global citizenship, innovation, and character development, Sevenoaks prepares students for top universities and successful futures`,
    studentNumbers: 1245,
    faithSchool: "Non-Denominational",
    schoolEmail: "admissions@sevenoaksschool.org", 
    schoolPhoneNumber: "+44 (0)1732 467 703/+44 (0)1732 467713", 
    latitude: 51.26630098522708, // //51.10076709037832, -0.7435842027348746
    longitude:  0.1954745414527575,  //51.26630098522708, 0.1954745414527575
    schoolLocation: "Sevenoaks, Kent, South-East",
    stages: ["secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "co-educational",
    totalSchoolFees: [34416, 61584], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`Academic scholarships are available at all entry points and are offered after the entrance exams. Co-curricular scholarships are offered in art, drama, music and sport. Music scholarships are available to external candidates at all entry points, while art, drama and sport scholarships are available to internal candidates at 13+ entry, and to external candidates at 13+ and 16+ entry. Candidates can only apply for one co-curricular scholarship. Co-curricular scholarships are also awarded ad hoc to students who demonstrate exceptional talent whilst at the school, at the school’s discretion. We no longer offer a financial element to our scholarships, as we embrace a principle of awarding financial assistance according to need. Music scholars still receive free tuition in one instrument. `],
      percentageOfFees: "honorary, no fee remission",
    },
    schoolImage: "/images/sevenoaks.jpg",
    documentId: 8124121363533131,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["Our tradition of financial assistance began with the school’s foundation in 1432 by William Sevenoke. Today, the school continues to actively welcome applications from children who would only be able to take up their place with financial assistance. Currently 80 pupils are in receipt of financial assistance, with some receiving additional support to cover the cost of uniform, trips and other extras. It is a key priority for the school to significantly increase the number of students we support financially over the coming years ","All awards of financial assistance are means-tested, which requires parents to answer detailed questions and provide evidence of their financial circumstances. We use an outside team who will usually visit your home as part of the assessment process. We therefore encourage families to visit the school and consider the likelihood of their child passing our assessment process and being offered a place before applying for financial assistance. The school only offers financial assistance to day students, not to boarders. Applicants  for financial assistance will be asked to confirm that they live within a reasonable daily commute – usually up to 45 minutes – of the school."],
      percentageOfFees: [0, 100],
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: [`In return for a lump sum payment at or after the acceptance of an offer of a place for the pupil, the School offers a termly fee contribution to be applied against each term's fee invoice for a set number of terms. The total value of these fee contributions will be discounted at an agreed rate to calculate the amount of the lump sum payment. The discount rate is 1.00% and is calculated on the compound basis and, for the purposes of the scheme, the increase in fees is calculated at 4% per annum compound. Please note that under the Scheme terms and conditions, you will be required to pay the difference between the amount applied under this scheme per term and the total amount due to the School that term (for example, where fees have been increased beyond those assumed in the proposal or where extras are due).`],
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
    established: 1432,
    enquireUrl: "https://www.sevenoaksschool.org/admissions/"
  },
  {
    schoolName: "St Mary's School Ascot",
    schoolDescription: `St Mary’s School Ascot is a prestigious independent Roman Catholic boarding school for girls, located in Berkshire, England. Founded in 1885, the school is renowned for its academic excellence, strong pastoral care, and emphasis on faith, character, and personal development. It provides a rigorous and well-rounded curriculum, preparing students for top universities in the UK and beyond. Beyond academics, St Mary’s offers exceptional opportunities in sports, music, drama, and extracurricular activities, fostering leadership, creativity, and resilience. The school places great importance on community values, spiritual growth, and service to others, creating a supportive and nurturing environment where students thrive. Set within a beautiful and well-equipped campus, St Mary’s School Ascot provides an inspiring atmosphere that encourages intellectual curiosity, ambition, and lifelong success.`,
    studentNumbers: 398,
    faithSchool: "Roman Catholic",
    schoolEmail: "admissions@stmarysascot.com", 
    schoolPhoneNumber: "+44 (0)1344 296 614", 
    latitude: 51.39343383917327, // //51.10076709037832, -0.7435842027348746
    longitude: -0.6693810027181786,  //51.39343383917327, -0.6693810027181786
    schoolLocation: "Ascot, Berkshire, South-East",
    stages: ["secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "girls",
    totalSchoolFees: [45000, 63180], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`All candidates sitting assessment for entry at 11+, 13+ and 16+ will automatically be considered for the academic scholarships (All-Rounder, Art, Music and Sports). At 11+ there are three academic scholarships available. The value of each scholarship is 5% of the fees. Candidates sit papers in English and Mathematics and also complete a general paper. At 13+ there are three academic scholarships available. The value of each scholarship is 5% of the fees. Candidates sit papers in English, Mathematics, Science, Religious Studies, a modern language (French, Spanish, Italian or German), Latin, and choose from either History or Geography. At 16+ there is one academic scholarship available. The value of the scholarship is 5% of the fees. Candidates sit a written paper, meet Department Heads of those subjects they wish to study at A Level, and are also interviewed by the Head of Sixth Form. Scholarships are tenable throughout the scholar’s time at St Mary’s, subject to certain conditions.`],
      percentageOfFees: 5,
    },
    schoolImage: "/images/stMary'sAscot.jpg",
    documentId: 8121213635113131,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: ["St Mary’s School Ascot is able to provide means-tested admission bursaries, which are awarded on an annual basis to pupils whose parents are financially eligible and who meet the application requirements. Due to the limited financial resources of the school, not every eligible application for a bursary will be successful."],
      percentageOfFees: [0, 100],
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
    established: 1885,
    enquireUrl: "https://www.st-marys-ascot.co.uk/admissions/"
  },
  {
    schoolName: "The King's School Canterbury",
    schoolDescription: `The King’s School, Canterbury is a prestigious independent co-educational day and boarding school located in Kent, England. Founded in 597 AD, it is the oldest school in the UK and one of the most historic in the world. Renowned for its academic excellence, strong pastoral care, and rich heritage, the school offers a rigorous and dynamic curriculum that prepares students for top universities globally. Beyond academics, The King’s School provides outstanding opportunities in sports, music, drama, and extracurricular activities, fostering leadership, creativity, and personal growth. The school embraces both tradition and innovation, with state-of-the-art facilities complementing its historic surroundings. With a strong emphasis on intellectual curiosity, independent thinking, and character development, King’s Canterbury offers a supportive and inspiring environment where students thrive, equipping them with the skills and confidence for lifelong success.`,
    studentNumbers: 910,
    faithSchool: "Church of England",
    schoolEmail: "registrar@junior-kings.co.uk", 
    schoolPhoneNumber: "+44 01227 714 000", 
    latitude: 51.281481264578154, // //51.10076709037832, -0.7435842027348746
    longitude: 1.084055697160071,  //51.281481264578154, 1.084055697160071
    schoolLocation: "Canterbury, Kent, South-East",
    stages: ["secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "co-educational",
    totalSchoolFees: [17175, 30300], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`There are scholarships available at Junior and Senior Schools.`,`Two 11+ Academic Scholarships and two 11+ Academic Exhibitions are awarded to suitable internal or external candidates showing strong academic potential for the future. Internal and external candidates are invited to attend a special 11+ Scholarship Day at the School. They will sit extension tests in English, Maths and Thinking Skills and will have an interview with a senior member of staff. Awards will be based upon overall performance. The maximum award available will be 5% of full fees for a Scholarship and 2.5% for an Exhibition. The awards are held for two years only at Junior King’s.`,`Seven types of Scholarship are available at Senior school: Academic, Music, Art, Sports, Design & Technology, Drama and Dance`],
      percentageOfFees: [5, 10],
    },
    schoolImage: "/images/kingsSchoolCanterbury.webp",
    documentId: 8121111635113131,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`Bursary support at all levels of up to 100% of full boarding fees may be available depending on the financial, compassionate or other circumstances of applicants. All bursary awards are subject to annual testing of parental means and may be varied upward or downward depending on circumstances. Awards are assessed on the basis of a completed Statement of Financial Circumstances which is available from the Bursar.`,`Bursaries may be made available to parents or guardians of children in the Junior School but only in exceptional circumstances would a bursary be awarded to pupils below Year 7 entry (11+). Bursaries are awarded at the discretion of the Governors, and the Head and School Bursar are responsible for the management and coordination of the process.`,`The deadline for Bursary applications is 31 October in the year preceding entry.`],
      percentageOfFees: [0, 100],
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
    established: 597,
    enquireUrl: "https://www.kings-school.co.uk/admissions/"
  },
  {
    schoolName: "Uppingham School",
    schoolDescription: `Uppingham School is a prestigious independent co-educational boarding school located in Rutland, England. Founded in 1584, the school is renowned for its academic excellence, strong sense of community, and commitment to developing well-rounded individuals. With a rigorous and forward-thinking curriculum, Uppingham prepares students for top universities worldwide while fostering intellectual curiosity, creativity, and leadership. Beyond academics, the school offers exceptional opportunities in sports, music, drama, and a wide range of extracurricular activities, encouraging personal growth, resilience, and teamwork. Uppingham is known for its outstanding performing arts and sports facilities, as well as its dedication to pastoral care and student wellbeing. Set within a historic yet modern campus, the school provides a dynamic and inspiring environment where students thrive. With a strong emphasis on tradition, innovation, and character development, Uppingham equips pupils with the skills and values needed for lifelong success.`,
    studentNumbers: 844,
    faithSchool: "Church of England",
    schoolEmail: "admissions@uppingham.co.uk", 
    schoolPhoneNumber: "+44 01572 820 611", 
    latitude: 52.588164390847524, // //51.10076709037832, -0.7435842027348746
    longitude: -0.7252521315968805,  //52.588164390847524, -0.7252521315968805
    schoolLocation: "Oakham, Rutland, Midlands",
    stages: ["secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "co-educational",
    totalSchoolFees: [34074, 55674], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`Scholarships are awarded to pupils joining the School into the Fourth Form (13+, Year 9) or joining the School at Sixth Form level (16+, Year 12). Scholarship awards may be made either for evidence of a high level of attainment and promise or exceptional specialist aptitude. Candidates are assessed through test, examination or observation, interview and reference.`,`Uppingham is proud of its moral and charitable commitment to widening participation in the School. To do so, we use as much of our funding as we can to enable as many young people as possible to benefit from an Uppingham education. For that reason, non means-tested scholarships would not ordinarily exceed 5% of the fees. Larger scholarship awards are made on the basis of financial need, which means that any scholarship award can be supplemented up to 110% of the school fees through a means-tested award.`,`At Uppingham a candidate may only hold one scholarship award at any one time so that they can specialise in their area of talent. This does not preclude them from participating in other areas of school life, however, the rich additional provision of each of our scholarship programmes requires pupils to manage their time judiciously within their field of expertise. Uppingham awards scholarships to candidates who show excellence in the following fields: Academic, Music, Art, Textiles, Design and Technology, Sport, Drama and All Rounder (The Thring Award, 13+ only). `],
      percentageOfFees: [5, 110],
    },
    schoolImage: "/images/uppingham.png",
    documentId: 3321111635113131,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`Where a family’s financial means leaves them unable to afford a place at Uppingham they may be eligible to receive support via Means Tested Fee Assistance. To initiate access to assessment of such need, families should be familiar with the Fee Assistance Policy and contact the Director of Admissions, Charlie Bostock, to request a Blue Form (bursary application form).`],
      percentageOfFees: [0, 110],
    },
    feesScheme: {
      feesSchemeAvailability: true,
      feesSchemeDetails: [`We offer a Standard Fees in Advance scheme, which is an attractive way of reducing school fees by making an advanced lump sum payment. A deposit into the scheme secures future fees at a fixed discount, with possible tax benefits, and gives you peace of mind that your school fees are dealt with. Under the Scheme, a lump sum payment in units of £1,000 is made to cover future fees, either in advance of entry to the School, or at any time after joining the School. Payments can be made by anyone who has parental consent and is approved by the School. You can choose the amount you wish to deposit, the number of terms’ fees you wish to cover (between three and fifteen terms), or the amount of annual fees you wish to cater for. You can also decide the rate of future annual fee inflation you wish to be applied in your quotation and can add supplementary payments. `],
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
    established: 1584,
    enquireUrl: "https://www.uppingham.co.uk/admissions/"
  },
  {
    schoolName: "Wycombe Abbey",
    schoolDescription: `Wycombe Abbey is a prestigious independent boarding school for girls, located in Buckinghamshire, England. Founded in 1896, it is renowned for its academic excellence, exceptional pastoral care, and commitment to developing confident and ambitious young women. The school consistently ranks among the top in the UK for academic achievement, with a rigorous curriculum that prepares students for leading universities worldwide. Beyond academics, Wycombe Abbey offers outstanding opportunities in sports, music, drama, and a wide range of extracurricular activities, fostering leadership, creativity, and resilience. The school places great emphasis on personal development, wellbeing, and a strong sense of community, ensuring that students are both challenged and supported. Set within a stunning 170-acre campus, Wycombe Abbey provides a nurturing yet intellectually stimulating environment where students thrive, equipping them with the skills, values, and confidence needed for lifelong success.`,
    studentNumbers: 645,
    faithSchool: "Church of England",
    schoolEmail: "admissions@wycombeabbey.com", 
    schoolPhoneNumber: "+44 (0) 1494 897008", 
    latitude: 51.62626930312093, // //51.10076709037832, -0.7435842027348746
    longitude: -0.751159392910686,  //51.62626930312093, -0.751159392910686
    schoolLocation: "High Wycombe, Buckinghamshire, South-East",
    stages: ["secondary","sixth form"],
    schoolType: ["day","boarding"],
    coeducation: "girls",
    totalSchoolFees: [44496, 58572], //per annual school year
    scholarships: {
      scholarshipsAvailable: true,
      scholarshipsDetail: [`Wycombe Abbey Scholarships and Exhibition Awards carry consierable prestige within the School but are of limited financial value. `],
      percentageOfFees: [0, 5],
    },
    schoolImage: "/images/wycombeAbbey.jpg",
    documentId: 3321111555553131,
    ranking: 8,
    Bursaries: {
      BursariesAvailable: true,
      BursariesDetail: [`Wycombe Abbey are able to offer mean-tested bursaries.`,`Assistance, in the form of a Bursary, may represent up to 100% of the fees and is dependent on assessment of the parental financial circumstances. All Bursaries are reviewed annually and may increase or reduce in accordance with changes to parental circumstances. The financial assessment takes into account the value of assets held, including the family home, savings, investments, pension provision and other realisable assets, as well as income, the size of the family, and any other dependents. In general, a family with a combined disposable income of less than £30,000 may be eligible for an award of up to 100%. Alternatively, a family with a combined gross income of over £150,000 may not qualify for any support. We also offer additional assistance to recipients of bursaries to help cover the cost of co-curricular activities, uniform costs and educational trips`],
      percentageOfFees: [0, 100],
    },
    feesScheme: {
      feesSchemeAvailability: false,
      feesSchemeDetails: null,
    },
    forceScheme: {
      forceSchemeAvailable: true,
      forcesSchemeDescription: [`A 25% discount on boarding fees is offered to children of HM Armed Forces and HM Diplomatic Services who are in receipt of the Continuity of Education Allowance. This is in addition to the sibling discounts listed.`],
      percentageOfFees: 25, 
    },
    siblingsDiscount: {
      siblingsDiscountAvailable: true,
      siblingsDiscountDetails: [`Wycombe Abbey offers a sibling discount on day and boarding fees. The discount is 5% for the second child, increasing by 5% for each subsequent child.`],
      percentageOfFees: [5, 10],
    },
    established: 1584,
    enquireUrl: "https://www.wycombeabbey.com/admissions/"
  }

  






  
];
  
export default function SchoolsList({searchTerm, setSubscriptionModalBox, clicks, setClicks, schools}) {


    //const schoolsToShow = schoolsSampleData.filter(school => school.schoolLocation || school.schoolName || school.schoolType)
    //const [ clicks, setClicks ] = useState(0);

    const normalizedSearchTerm = searchTerm.toLowerCase();

    const schoolsToShow = schools.filter((school) => {
      
      if (normalizedSearchTerm === "bursaries" || normalizedSearchTerm.startsWith("b") || normalizedSearchTerm.startsWith("bu") || normalizedSearchTerm.startsWith("bur") || normalizedSearchTerm.startsWith("burs") || normalizedSearchTerm.startsWith("bursa") || normalizedSearchTerm.startsWith("bursar") || normalizedSearchTerm.startsWith("bursari") || normalizedSearchTerm.startsWith("bursarie")) {
        return school.Bursaries?.BursariesAvailable === true;
      }


      //make schoolsList SSR, so its already here on load?? then move clicks/setClicks down to schoolCard child 

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
   //for the mapping of schools below, and of schoolsToFilter above, i've implenetged it so schools passed down as props (from supabase)
   //are comapred adn then displayed if they pass the filter

  return (
    <div className="w-full px-6 pt-10 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {schoolsToShow?.map((school, index) => (
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
            setSubscriptionModalBox={setSubscriptionModalBox}
            clicks={clicks}
            setClicks={setClicks}
            /*onClickHandler={onClickHandler}*/ 
          />
        ))}
      </div>
    </div>
  )
}

export { schoolsSampleData };