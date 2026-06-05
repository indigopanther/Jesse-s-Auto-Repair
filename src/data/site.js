// ──────────────────────────────────────────────────────────────────────────
// Jesse's Automotive LLC — single source of truth for all site content.
// Every value here is pulled from the real business (jessesauto.com,
// BBB profile, and public listings). No placeholder/fake data.
// ──────────────────────────────────────────────────────────────────────────

export const business = {
  name: "Jesse's Automotive LLC",
  shortName: "Jesse's Automotive",
  tagline: 'Quality Assured Auto Repair',
  cityLine: 'Serving St. Louis since 1986',
  // Primary number used by the live site's "Call us Now" buttons + most listings.
  phoneDisplay: '(314) 380-4144',
  phoneHref: 'tel:+13143804144',
  address: '2124 Darver Lane, St. Louis, MO 63121',
  addressShort: '2124 Darver Lane',
  mapUrl: 'https://maps.app.goo.gl/KTxDwiVxNCWAtw9j6',
  hoursLine: 'Mon–Fri · 9:00 AM – 4:00 PM',
  hours: [
    { day: 'Monday', time: '9:00 AM – 4:00 PM' },
    { day: 'Tuesday', time: '9:00 AM – 4:00 PM' },
    { day: 'Wednesday', time: '9:00 AM – 4:00 PM' },
    { day: 'Thursday', time: '9:00 AM – 4:00 PM' },
    { day: 'Friday', time: '9:00 AM – 4:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ],
  founded: 1986,
  yearsInBusiness: 40,
  bbbRating: 'A+',
  bbbUrl:
    'https://www.bbb.org/us/mo/saint-louis/profile/auto-repairs/jesses-automotive-llc-0734-110142251/#sealclick',
  bbbSeal: 'https://seal-stlouis.bbb.org/seals/blue-seal-280-80-bbb-110142251.png',
  warranty: '24-month / 24,000-mile warranty on most repairs',
  makes: ["Toyota", "Nissan", "Honda", "GM"],
  social: {
    facebook: 'https://www.facebook.com/jessesautollc',
    instagram: 'https://www.instagram.com/jessesautollc/',
    youtube: 'https://www.youtube.com/channel/UCYV3K7hw-KlUmnhrCHW5g-A',
  },
}

// ShopMonkey booking + quote tools (the real scheduler from the live site).
export const scheduler = {
  bookUrl:
    'https://app.shopmonkey.cloud/public/scheduler/5f174be917281e208b5e4aa7?fullPage=true',
  quoteUrl:
    'https://app.shopmonkey.cloud/public/quote-request/5f174be917281e208b5e4aa7?noExternalScripts=1',
}

// Real review widget used on the live site.
export const reviewsWidgetUrl =
  'https://backend.leadconnectorhq.com/appengine/reviews/get_widget/DUqzQz8F28qe2oiacEBJ'

// Real images served from the business's existing CDN.
const cdn = (id, ext = 'png') =>
  `https://images.leadconnectorhq.com/image/f_webp/q_85/r_1200/u_https://assets.cdn.filesafe.space/DUqzQz8F28qe2oiacEBJ/media/${id}.${ext}`

export const images = {
  logo: cdn('653a46986a3764a67ea4fafe', 'png'),
  shop1: cdn('692090b4f8fa3b2030266d17', 'jpg'),
  shop2: cdn('655e7c9303b8261680f62a3e', 'jpeg'),
}

// Full service catalog, expanded from the live site's real descriptions.
export const services = [
  {
    id: 'maintenance',
    title: 'Routine Maintenance',
    short: 'Oil changes, fluid flushes, rotations & belt service to keep your car healthy.',
    body: "Performing routine maintenance is essential for your vehicle's longevity. We follow the service intervals outlined by your manufacturer — oil changes, tire rotations, brake inspections, fluid flushes and regular belt servicing — and account for your driving habits. Staying on schedule prevents costly repairs down the road.",
    icon: 'oil',
  },
  {
    id: 'brakes',
    title: 'Brake Repair & Replacement',
    short: 'Pads, rotors, fluid flushes and ABS repair for confident, safe stopping.',
    body: 'We service brake pads and rotors, perform brake fluid flushes, and handle ABS system repairs. A well-maintained braking system is imperative to safely operating your vehicle, so we inspect the whole system before recommending work.',
    icon: 'brake',
  },
  {
    id: 'inspections',
    title: 'Missouri State Inspections',
    short: 'Licensed station for safety, emissions and ID/OD verifications.',
    body: 'We are a licensed Missouri inspection station offering safety inspections, emissions testing, and ID/OD verifications. Please note we do not offer motorcycle inspections.',
    icon: 'shield',
  },
  {
    id: 'tires',
    title: 'Tire Services',
    short: 'Installation, mounting, balancing, rotation & repair — many brands.',
    body: 'We offer tire installation, mounting, balancing, rotation and repair, with many tire brands available. Road hazard tire protection is offered on our most popular tires for extra peace of mind.',
    icon: 'tire',
  },
  {
    id: 'diagnostics',
    title: 'Engine Diagnostics',
    short: 'Diagnostics on vehicles from 1979 to current, plus PCM relearning.',
    body: 'We perform engine diagnostics on vehicles from 1979 to the current model year, including PCM replacement and relearning. Our team pinpoints the real cause before any parts are replaced.',
    icon: 'engine',
  },
  {
    id: 'suspension',
    title: 'Suspension Repair',
    short: 'Restore a smooth, controlled ride and even tire wear.',
    body: 'Worn suspension components hurt ride comfort, handling and tire life. We diagnose and repair suspension issues to keep your vehicle planted and comfortable.',
    icon: 'suspension',
  },
  {
    id: 'ac',
    title: 'A/C Service',
    short: 'Stay cool — diagnosis and repair of your air conditioning system.',
    body: 'From weak airflow to a system that no longer cools, we diagnose and repair vehicle air conditioning so you stay comfortable through St. Louis summers.',
    icon: 'snow',
  },
  {
    id: 'timing-belt',
    title: 'Timing Belt Service',
    short: 'Replace your timing belt on schedule to protect the engine.',
    body: 'A failed timing belt can mean major engine damage. We replace timing belts at the proper interval to protect your engine and keep you on the road.',
    icon: 'belt',
  },
  {
    id: 'thermostat',
    title: 'Thermostat Replacement',
    short: 'Fix overheating and poor heat with proper cooling-system repair.',
    body: 'A failing thermostat causes overheating or weak cabin heat. We replace thermostats and service the cooling system to keep temperatures where they belong.',
    icon: 'temp',
  },
  {
    id: 'window-motor',
    title: 'Window Motor Replacement',
    short: 'Get stuck power windows moving again.',
    body: 'Power windows that stick or stop working are more than an annoyance. We replace window motors and regulators to get everything moving smoothly again.',
    icon: 'window',
  },
]

// Real blog posts from jessesauto.com/blog (linked out to the live articles).
export const blogPosts = [
  {
    title: 'Squeaky brakes',
    category: 'Auto tips',
    date: 'January 30, 2025',
    readTime: '1 min read',
    excerpt: 'Squeaky, noisy brakes are nerve-wracking — here is what those sounds are actually telling you.',
    url: 'https://jessesauto.com/blog/b/brakes-squeaking',
  },
  {
    title: "Your tires have a lot riding on them",
    category: 'Auto tips',
    date: 'January 27, 2025',
    readTime: '1 min read',
    excerpt: "Checking your vehicle's tires for wear periodically is one of the simplest ways to stay safe.",
    url: 'https://jessesauto.com/blog/b/Jesses-Automotive-blog',
  },
]

// Trust highlights surfaced across the site.
export const highlights = [
  { stat: '40+', label: 'Years serving St. Louis' },
  { stat: 'A+', label: 'BBB accredited rating' },
  { stat: '24/24', label: 'Month / mile warranty' },
  { stat: '1979→', label: 'Diagnostics on most model years' },
]
