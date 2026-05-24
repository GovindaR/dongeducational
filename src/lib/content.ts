export const stats = [
  { value: "10+", label: "Years guiding students" },
  { value: "500+", label: "Students counseled" },
  { value: "50+", label: "Partner institutions" },
  { value: "95%", label: "Visa success rate*" },
] as const;

export const whyJapan = [
  {
    title: "Quality education",
    description:
      "Japan offers globally recognized universities, practical vocational programs, and structured language schools with strong graduate outcomes.",
  },
  {
    title: "Part-time work allowed",
    description:
      "Most student visa holders can work up to 28 hours per week during term and full-time during breaks — helping cover living costs.",
  },
  {
    title: "Safe & disciplined culture",
    description:
      "Japan is known for safety, punctuality, and respect — an environment where students from Nepal can focus on study and career growth.",
  },
  {
    title: "Path to long-term career",
    description:
      "From language school to senmon, university, and skilled work — Japan offers clear pathways for those who plan ahead.",
  },
] as const;

export const programs = [
  {
    slug: "language-school",
    title: "Japanese Language School",
    duration: "1–2 years",
    intake: "April & October",
    summary:
      "Build JLPT-level Japanese before university or vocational study. Ideal for beginners and +2 graduates.",
    highlights: [
      "JLPT N5–N2 focused curriculum",
      "Housing & guarantor guidance",
      "Pathway to senmon or university",
    ],
  },
  {
    slug: "vocational",
    title: "Vocational / Senmon School",
    duration: "2–3 years",
    intake: "April",
    summary:
      "Hands-on programs in IT, hospitality, anime, design, care work, and more — with strong job placement in Japan.",
    highlights: [
      "Practical skills + internship",
      "N3–N2 Japanese usually required",
      "Work visa pathway after graduation",
    ],
  },
  {
    slug: "undergraduate",
    title: "Undergraduate University",
    duration: "4 years",
    intake: "April / September",
    summary:
      "Bachelor degrees at national, public, and private universities — including English-taught programs at select schools.",
    highlights: [
      "EJU preparation support",
      "Scholarship guidance (MEXT, etc.)",
      "Foundation year options available",
    ],
  },
  {
    slug: "graduate",
    title: "Graduate & Research",
    duration: "2+ years",
    intake: "April / October",
    summary:
      "Master's and research programs for students with a bachelor's degree and clear academic goals.",
    highlights: [
      "Professor matching advice",
      "Research plan & document review",
      "MEXT & university scholarship info",
    ],
  },
] as const;

export const servicesDetailed = [
  {
    title: "Free career counseling",
    description:
      "One-on-one sessions in clear English to understand your education background, budget, Japanese level, and career goals before you commit to any school.",
    includes: ["Education pathway mapping", "Budget & timeline planning", "Honest school shortlist"],
  },
  {
    title: "School selection & application",
    description:
      "We match you with partner language schools, senmon colleges, and universities that fit your profile — then manage the application process.",
    includes: ["School comparison", "Application form support", "Interview preparation"],
  },
  {
    title: "Documentation & COE",
    description:
      "Certificate of Eligibility (COE) is required before your visa. We help prepare financial proof, academic records, and sponsorship documents.",
    includes: ["Document checklist", "Financial proof review", "COE follow-up with school"],
  },
  {
    title: "Visa & pre-departure",
    description:
      "Embassy visa application guidance, mock interviews, flight planning, and orientation before you leave Nepal.",
    includes: ["Visa form guidance", "Pre-departure briefing", "Accommodation tips in Japan"],
  },
  {
    title: "JLPT & Japanese prep",
    description:
      "Guidance on self-study plans and partner classes in Nepal to reach the Japanese level required for your target program.",
    includes: ["JLPT roadmap", "Study material advice", "Level assessment"],
  },
  {
    title: "Post-arrival support",
    description:
      "Help with residence card, bank account, part-time job rules, and connecting with senior students from Nepal who are already in Japan.",
    includes: ["Arrival checklist", "Part-time work rules", "Community referrals"],
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Free counseling",
    duration: "Week 1",
    description:
      "Visit our office or book online. We assess your +2/Bachelor profile, Japanese level, budget, and preferred intake (April or October).",
  },
  {
    step: 2,
    title: "Program & school selection",
    duration: "Week 2–3",
    description:
      "Receive a shortlist of 2–4 schools with fees, location, and requirements. Parents are welcome in meetings.",
  },
  {
    step: 3,
    title: "Application submission",
    duration: "Week 4–8",
    description:
      "Submit application forms, academic transcripts, passport copy, and photos. We coordinate directly with the school in Japan.",
  },
  {
    step: 4,
    title: "COE issuance",
    duration: "2–3 months",
    description:
      "School applies to immigration for your Certificate of Eligibility. We track status and request additional documents if needed.",
  },
  {
    step: 5,
    title: "Visa application",
    duration: "2–4 weeks",
    description:
      "With COE in hand, apply at the Japanese Embassy in Kathmandu. We provide form guidance and interview preparation.",
  },
  {
    step: 6,
    title: "Fly to Japan",
    duration: "Before intake",
    description:
      "Pre-departure orientation covers airport pickup options, dorm check-in, part-time work rules, and first-week survival tips.",
  },
] as const;

export const testimonials = [
  {
    name: "Sunita Gurung",
    program: "Language School → Senmon",
    location: "Tokyo",
    quote:
      "DONG explained every step clearly. My COE came on time and I am now in my second year of vocational college in Tokyo.",
  },
  {
    name: "Ramesh Thapa",
    program: "Undergraduate",
    location: "Osaka",
    quote:
      "They helped me choose a university within my budget and prepared me for the EJU. The visa interview went smoothly.",
  },
  {
    name: "Anjali Shrestha",
    program: "Language School",
    location: "Fukuoka",
    quote:
      "As a +2 graduate I was confused about April vs October intake. DONG made a clear plan and my parents understood the costs.",
  },
] as const;

export const faqs = [
  {
    question: "How much does it cost to study in Japan from Nepal?",
    answer:
      "Costs vary by program. Language school: roughly ¥800,000–1,200,000 per year tuition plus living expenses. University and senmon differ by city and school. We provide a transparent fee breakdown during free counseling — no hidden charges from DONG.",
  },
  {
    question: "Do I need to know Japanese before applying?",
    answer:
      "For language school, beginners are accepted (N5 level or zero). Vocational and university programs usually require N3–N2 or completion of a language school in Japan. We assess your level and recommend a realistic timeline.",
  },
  {
    question: "What is COE and why is it important?",
    answer:
      "COE (Certificate of Eligibility) is issued by Japan immigration and sponsored by your school. You need it before applying for a student visa at the embassy in Kathmandu.",
  },
  {
    question: "Can I work part-time as a student in Japan?",
    answer:
      "Yes. With permission, most student visa holders can work up to 28 hours per week during semester and full-time during long breaks. We explain the rules during pre-departure orientation.",
  },
  {
    question: "What documents do I need to start?",
    answer:
      "Typically: passport, academic transcripts (+2 or Bachelor), photos, bank balance certificate, and sponsorship letter if applicable. Exact list depends on school and program — we give you a checklist.",
  },
  {
    question: "When are the main intakes?",
    answer:
      "Language schools: April and October. Most universities and senmon: April. Some programs also accept September/October. Apply 6–8 months before your target intake.",
  },
  {
    question: "Does DONG charge consultancy fees?",
    answer:
      "We charge a transparent service fee for counseling, documentation, and visa support. School tuition is paid directly to the institution. All fees are explained upfront in your first meeting.",
  },
  {
    question: "Can parents join the counseling session?",
    answer:
      "Absolutely. We encourage family involvement so everyone understands costs, timeline, and expectations before application.",
  },
] as const;

export const aboutContent = {
  story:
    "DONG Educational Consultancy was founded in Kathmandu with one mission: make Japan study abroad clear, honest, and achievable for students from Nepal and their families. We saw too many students confused by intake dates, COE paperwork, and visa rules — so we built a consultancy that explains everything in straightforward English first.",
  values: [
    {
      title: "Transparency",
      description: "Clear fees, realistic timelines, and honest school recommendations — no false promises.",
    },
    {
      title: "Student-first",
      description: "Your career goals drive our advice, not commission from any single school.",
    },
    {
      title: "Family trust",
      description: "Parents are part of the process. We answer questions about safety, cost, and outcomes.",
    },
    {
      title: "Long-term support",
      description: "From first counseling to pre-departure — and referrals to seniors already in Japan.",
    },
  ],
  team: [
    {
      name: "Counseling Team",
      role: "Japan pathway advisors",
      bio: "Specialists in language school, senmon, and university routes with experience placing students from Nepal across Tokyo, Osaka, and regional cities.",
    },
    {
      name: "Documentation Team",
      role: "COE & visa coordinators",
      bio: "Handles application forms, financial proof review, embassy checklist, and follow-up with partner schools in Japan.",
    },
    {
      name: "Japanese Language Advisors",
      role: "JLPT & study planning",
      bio: "Helps you build a realistic Japanese study plan before and during your application period.",
    },
  ],
} as const;

export const companiesInJapan = [
  {
    name: "Visa Processing & Counseling",
    type: "Visa & Admission Support",
    city: "Japan Student Visa Center",
    programs: ["Student Visa application guidance", "Document Checking & embassy support", "COE(Certificate of Eligibility) assistance"],
  },
  {
    name: "Accommodation Assistance",
    type: "Student Support Services",
    city: "Housing Support Desk",
    programs: ["Help finding apartments & dormitories", "Move-in support in japan", "Affordable housing guidance"],
  },
  {
    name: "Airport Pickup & Arrival Support",
    type: "Student Support Services",
    city: "Arrival Support Center",
    programs: ["Airport pickup arrangement", "SIM card & transportation", "First-day orientation in Japan"],
  },
  {
    name: "Student Life Support in japan",
    type: "Student Support Services",
    city: "Student Life Center",
    programs: ["Bank account & insurance assistance", "City hall registration", "Daily life counseling for students"],
  },
  {
    name: "Part-time Job Assistance",
    type: "Career Support Desk",
    city: "Career Support Desk",
    programs: ["Guidance for arubaito(part-time jobs)", "Resume & interview preparation", "Work permit application support"],
  },
  {
    name: "University & Career Guidance",
    type: "Career & Education Guidance",
    city: "University Counseling Center",
    programs: ["School/university admission counseling", "Scholarship guidance", "Career pathway support in japan"],
  },
] as const;

export const companyInJapanIntro = {
  title: "Your Journey to Study in Japan",
  description:
    "Dong Global Office helps students apply to language schools, senmon colleges, and universities across Japan. Personalized school recommendations are provided based on each student’s academic background, budget, Japanese language level, and career goals.",
  note:
    "We help students with school selection, admission processing, and visa support for studying in Japan. Personalized guidance is provided based on academic background, Japanese level, and preferred intake.",
} as const;

export const intakeDates = [
  {
    intake: "April intake",
    applyBy: "August – October (previous year)",
    bestFor: "Language school, university, most senmon",
  },
  {
    intake: "October intake",
    applyBy: "March – May (same year)",
    bestFor: "Language school (main October start)",
  },
] as const;
