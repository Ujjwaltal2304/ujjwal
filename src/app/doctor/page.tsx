import { Stethoscope } from "lucide-react";

export const metadata = {
  title: "Doctor Dashboard - Dr. Demo Ayurveda Clinic",
};

export default function DoctorDashboard() {
  return (
    <div className="flex-1 flex flex-col relative bg-[var(--color-cream)]/20">
      {/* Top Color Strip - Doctor */}
      <div className="h-1.5 w-full bg-[#818cf8] shrink-0"></div>
      <div className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full bg-white p-12 rounded-sm shadow-sm border border-[var(--color-forest)]/10 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta)] mb-6">
          <Stethoscope className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-serif font-semibold text-[var(--color-forest)] mb-4">
          Doctor & Student Dashboard
        </h1>
        <p className="text-[var(--color-forest)]/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Welcome to the professional portal. This space is designed for medical practitioners and students to access clinical resources, case studies, and advanced diagnostic tools.
        </p>
        <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-sm inline-block">
          <p className="text-sm font-medium text-blue-800">
            Feature in development. Clinical resources will be available soon.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
