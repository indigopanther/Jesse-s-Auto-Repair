// ──────────────────────────────────────────────────────────────────────────
// Jesse's Auto Repair - Mobile Mechanic (Atlanta, GA)
// All content pulled from the real business site (jesseautorepair1.wixsite.com).
// No placeholder/invented data.
// ──────────────────────────────────────────────────────────────────────────

export const business = {
  name: "Jesse's Auto Repair",
  shortName: "Jesse's Auto Repair",
  role: 'Mobile Mechanic',
  operator: 'Jesse',
  tagline: 'You Drive It, We Fix It',
  promise: 'Quick. Reliable. Affordable.',
  city: 'Atlanta, GA',
  yearsExperience: 15,

  // Featured "Call or Text" number across the live site.
  phoneDisplay: '(404) 805-5398',
  phoneHref: 'tel:+14048055398',
  smsHref: 'sms:+14048055398',

  email: 'JesseAutoRepair1@gmail.com',
  emailHref: 'mailto:JesseAutoRepair1@gmail.com',

  hoursLine: 'Mon-Fri 9-6 | Sat 9-7 | Closed Sun',
  hours: [
    { day: 'Monday', time: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 6:00 PM' },
    { day: 'Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 7:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],

  payment: 'All major debit & credit cards accepted',
  travel: 'Travel runs $35-$50 depending on your location. Every quote is travel + labor, up front.',
}

// Metro-Atlanta counties Jesse serves (from the live site).
export const serviceAreas = [
  'Cobb', 'West Cobb', 'Fulton', 'DeKalb',
  'Douglas', 'Paulding', 'Rockdale', 'Clayton', 'North Clayton',
]

// Real images served from the business's existing Wix CDN (full-resolution originals).
const wix = (id) => `https://static.wixstatic.com/media/${id}`
export const images = {
  logo: wix('84770f_9c23f56a09a7f06d4dbf80ed6fdcd2e4.png'),
  hero: wix('69564c_8629032b33aed445210b83f9d5fb450b.jpg'),
  maintenanceBanner: wix('69564c_63091f205522a015c143b135acd7bcef.jpg'),
  gallery: [
    wix('69564c_40604e5e32b67f4f55ee5950c85c5183.jpg'),
    wix('69564c_7a9b983b58862b574d9d9b173f45e2cc.jpg'),
    wix('69564c_825925e1d6b6279653ab1a715f6cf0c7.jpg'),
    wix('69564c_4f8f31fb4f13158a129dbf9cd6a41fea.jpg'),
    wix('69564c_905917856b5cfb0dacc7056e6892688f.jpg'),
    wix('69564c_768fc3c60d6de3b7e17a4d9e9de80251.jpg'),
    wix('69564c_166a6a5b7bb30fcb35f5eb4047e98928.jpg'),
    wix('69564c_b91cfa97857f47d6ed9f49f088b88f95.jpg'),
    wix('69564c_ededf6f2d295dbe853265c728f96a0be.jpg'),
    wix('69564c_17cad69ed9856c1cbaeceb5f7419682e.jpg'),
  ],
}

// Full service catalog, compiled from the live site's Home / Repairs / Maintenance pages.
export const services = [
  {
    id: 'diagnostics',
    title: 'Mechanical Problems & Diagnostics',
    short: 'Hard starts, stalls, warning lights, odd noises. I find the cause and fix it.',
    icon: 'wrench',
  },
  {
    id: 'brakes',
    title: 'Brake Repairs',
    short: 'Pads, rotors and brake service so you can stop with confidence.',
    icon: 'brake',
  },
  {
    id: 'tuneups',
    title: 'Tune-Ups',
    short: 'Plugs, filters and adjustments to keep your engine running smooth.',
    icon: 'engine',
  },
  {
    id: 'oil',
    title: 'Oil Changes & Fluid Checks',
    short: 'Fresh oil and a full fluid check to protect your engine and save money later.',
    icon: 'oil',
  },
  {
    id: 'tires',
    title: 'Tire Rotation & Replacement',
    short: 'Mounting, rotation and replacement to keep you safe and rolling evenly.',
    icon: 'tire',
  },
  {
    id: 'belts',
    title: 'Belts, Hoses & Gaskets',
    short: 'Serpentine and heater belts, hoses and gasket replacements before they fail.',
    icon: 'belt',
  },
  {
    id: 'electrical',
    title: 'Batteries, Plugs & Alternators',
    short: 'No-start and charging issues sorted - batteries, spark plugs and alternators.',
    icon: 'battery',
  },
  {
    id: 'cooling',
    title: 'Radiators, Water Pumps & Thermostats',
    short: 'Cooling-system repair and water-pump replacement to prevent overheating.',
    icon: 'temp',
  },
  {
    id: 'sensors',
    title: 'Oxygen Sensors',
    short: 'Diagnose and replace O2 sensors to fix performance and emissions issues.',
    icon: 'bolt',
  },
  {
    id: 'motors',
    title: 'Window & Seat Motors',
    short: 'Get stuck power windows and seats moving again.',
    icon: 'window',
  },
  {
    id: 'suspension',
    title: 'Shocks & Suspension',
    short: 'Shocks, struts and suspension work for a smooth, controlled ride.',
    icon: 'suspension',
  },
]

// How it works - the real process from the site (contact with details -> quote -> Jesse comes to you).
export const steps = [
  {
    n: '1',
    title: 'Call or text',
    body: 'Reach out at (404) 805-5398 with the year, make and model of your vehicle and what is going on.',
    icon: 'message',
  },
  {
    n: '2',
    title: 'Get an honest quote',
    body: 'You get a clear quote up front - travel plus labor - so there are no surprises.',
    icon: 'dollar',
  },
  {
    n: '3',
    title: 'I come to you',
    body: 'I show up at your home or work across metro Atlanta and get the job done. No tow needed.',
    icon: 'car',
  },
]

// Trust highlights surfaced across the site.
export const highlights = [
  { stat: '15+', label: 'Years of experience' },
  { stat: 'Mobile', label: 'We come to you' },
  { stat: '6 Days', label: 'Open Monday - Saturday' },
  { stat: 'Cards OK', label: 'Debit & credit accepted' },
]
