import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const sitemapData = [
    {
      title: "Ayurveda Treatments",
      items: ["Abhyangam", "BashpaSweda", "Ilakkizhi", "Ksheeradhara", "MukhaLepa", "Nasya", "Panchakarma", "Padabhyanga", "Podikizhi", "Paschatkarma", "Shirodhara", "Shirovasti", "Shiroabhyanga", "Raktamokshana", "Thalam", "Navarakkizhi", "Virechana", "Vamana", "Vasti", "Udwartana", "Kativasti"]
    },
    {
      title: "Diseases and Conditions",
      items: ["Ayurveda Parasurgery", "Autoimmune Disorders", "Blood Disorders", "Cardiology", "Dermatology", "Endocrinology", "Ear-Nose Throat-Mouth", "Elder-Care", "Gastrointestinal", "Gynaecology", "Integrative Oncology", "Infectious Diseases", "Liver-Hepato-Biliary-Care", "Mental Health & De-addiction", "Male Reproductive Disorders", "Nephrology", "Neurological Disorders", "Orthopaedic Disorders", "Ophthalmology", "Obstetrics Integrative", "Preventive Health & Wellbeing", "Pulmonology", "Pediatric Development Disorder", "Sleep Disorders"]
    },
    {
      title: "Ayurveda Doctors",
      items: ["Doctors in Bangalore", "Doctors in Kochi", "Doctors in Delhi", "Doctors in Uttarakhand", "Doctors in Chennai", "Doctors in Hyderabad", "Doctors in Mumbai"]
    },
    {
      title: "Ayurveda Medicine",
      items: ["Skin Care", "Hair Care", "Bioactive Hydration Drinks", "Pain Management", "Immunity Booster", "Cough, Cold & Fever", "Bone & Joint", "Gut Health"]
    },
    {
      title: "Ayurveda Services",
      items: ["Integrative Care & Rehabilitation", "International Patients", "Root Cause Disease Reversal", "Super-Fast Ayurveda Care", "Swasthya Care", "Whole Person Care", "Wellbeing Programs"]
    },
    {
      title: "About Apollo AyurVAID",
      items: ["Awards & Recognitions", "Contact Us", "Company Overview", "Careers", "News", "Quality", "Vision & Mission", "Team"]
    },
    {
      title: "Insurance & More",
      items: ["Medical Insurance CGHS", "Sitemap"]
    }
  ];

  return (
    <footer className="bg-[#0A2540] border-t-[6px] border-[#059669] pt-16 pb-8 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-serif font-bold text-white mb-2">Dr. Demo Ayurveda Clinic Sitemap</h2>
          <p className="text-[#38bdf8] uppercase tracking-widest text-sm font-semibold">Comprehensive Healthcare Guide</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {sitemapData.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-[#10B981] mb-5 border-b border-[#10B981]/20 pb-2">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-sm text-[#F4FAF8]/70 hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-[#38bdf8]/50 group-hover:bg-[#38bdf8] transition-colors"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-[#F4FAF8]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-xs text-[#F4FAF8]/50 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Dr. Demo Ayurveda Clinic. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-4">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link>
              <Link href="/appointments" className="hover:text-white transition-colors">Appointments</Link>
            </div>
            <span className="hidden sm:inline text-[#F4FAF8]/20">|</span>
            <p>Website by <a href="#" className="hover:text-white transition-colors font-medium">Kenet Technologies</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
