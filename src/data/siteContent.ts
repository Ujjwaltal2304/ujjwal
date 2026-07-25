export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export type PageData = {
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  imageUrl: string;
};

// Generic filler content generators to ensure relevant Ayurveda content
const getTreatmentDesc = (title: string) => `Experience authentic healing with ${title}, a specialized Ayurvedic therapy designed to restore balance and vitality. At Dr. Demo Ayurveda Clinic, our expert practitioners administer this treatment using premium herbal oils and ancient techniques customized to your dosha.`;
const getConditionDesc = (title: string) => `Manage and reverse the effects of ${title} through our integrative Ayurvedic approach. We focus on identifying the root cause of your condition and prescribe personalized herbal medicines, dietary modifications, and detoxification therapies to promote natural healing.`;
const getMedicineDesc = (title: string) => `Discover our premium range of ${title} formulations. Crafted from authentic, sustainably sourced Ayurvedic herbs, these medicines undergo rigorous quality testing to ensure maximum efficacy and safety for your well-being.`;
const getServiceDesc = (title: string) => `Our ${title} program provides comprehensive, compassionate care tailored to your unique health requirements. Benefit from our world-class facilities and expert Ayurvedic physicians dedicated to your holistic recovery.`;

const genericBenefits = [
  "Restores natural metabolic balance",
  "Enhances immunity and cellular regeneration",
  "Reduces stress and systemic inflammation",
  "Promotes long-term holistic wellness"
];

const genericImages = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop"
];

function createDataArray(items: string[], descGenerator: (t: string) => string): PageData[] {
  return items.map((title, index) => ({
    title,
    slug: slugify(title),
    description: descGenerator(title),
    benefits: genericBenefits,
    imageUrl: genericImages[index % genericImages.length]
  }));
}

export const treatmentsData = createDataArray([
  "Abhyangam", "BashpaSweda", "Ilakkizhi", "Ksheeradhara", "MukhaLepa", "Nasya", 
  "Panchakarma", "Padabhyanga", "Podikizhi", "Paschatkarma", "Shirodhara", 
  "Shirovasti", "Shiroabhyanga", "Raktamokshana", "Thalam", "Navarakkizhi", 
  "Virechana", "Vamana", "Vasti", "Udwartana", "Kativasti"
], getTreatmentDesc);

export const conditionsData = createDataArray([
  "Ayurveda Parasurgery", "Autoimmune Disorders", "Blood Disorders", "Cardiology", 
  "Dermatology", "Endocrinology", "Ear-Nose Throat-Mouth", "Elder-Care", 
  "Gastrointestinal", "Gynaecology", "Integrative Oncology", "Infectious Diseases", 
  "Liver-Hepato-Biliary-Care", "Mental Health & De-addiction", "Male Reproductive Disorders", 
  "Nephrology", "Neurological Disorders", "Orthopaedic Disorders", "Ophthalmology", 
  "Obstetrics Integrative", "Preventive Health & Wellbeing", "Pulmonology", 
  "Pediatric Development Disorder", "Sleep Disorders"
], getConditionDesc);

export const doctorsData = [
  "Bangalore", "Kochi", "Delhi", "Uttarakhand", "Chennai", "Hyderabad", "Mumbai"
].map(city => ({
  title: `Doctors in ${city}`,
  slug: slugify(city),
  description: `Consult our top-rated Ayurvedic physicians in ${city}. Our expert doctors carry decades of clinical experience in traditional pulse diagnosis, chronic disease management, and authentic Panchkarma therapies.`,
  benefits: ["Expert pulse diagnosis (Nadi Pariksha)", "Personalized diet and lifestyle counseling", "Comprehensive chronic disease management"],
  imageUrl: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1200&auto=format&fit=crop",
  city: city
}));

export const medicineData = createDataArray([
  "Skin Care", "Hair Care", "Bioactive Hydration Drinks", "Pain Management", 
  "Immunity Booster", "Cough Cold & Fever", "Bone & Joint", "Gut Health"
], getMedicineDesc);

export const servicesData = createDataArray([
  "Integrative Care & Rehabilitation", "International Patients", "Root Cause Disease Reversal", 
  "Super-Fast Ayurveda Care", "Swasthya Care", "Whole Person Care", "Wellbeing Programs"
], getServiceDesc);

export const aboutData = createDataArray([
  "Awards & Recognitions", "Contact Us", "Company Overview", "Careers", "News", "Quality", "Vision & Mission", "Team"
], (title) => `Learn more about Dr. Demo Ayurveda Clinic's commitment to excellence in ${title}. We blend ancient Ayurvedic wisdom with modern scientific rigor to deliver unparalleled healthcare outcomes.`);

export const insuranceData = createDataArray([
  "Medical Insurance CGHS"
], (title) => `We offer seamless admission and cashless treatment facilities for ${title} beneficiaries. Experience stress-free healing with our dedicated insurance assistance desk.`);
