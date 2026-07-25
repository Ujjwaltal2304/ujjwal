import { Store } from "lucide-react";

export const metadata = {
  title: "Chemist Dashboard - Dr. Demo Ayurveda Clinic",
};

export default function ChemistDashboard() {
  return (
    <div className="flex-1 flex flex-col relative bg-[var(--color-cream)]/20">
      {/* Top Color Strip - Chemist */}
      <div className="h-1.5 w-full bg-[#2dd4bf] shrink-0"></div>
      <div className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full bg-white p-12 rounded-sm shadow-sm border border-[var(--color-forest)]/10 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta)] mb-6">
          <Store className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-serif font-semibold text-[var(--color-forest)] mb-4">
          Chemist & Retailer Dashboard
        </h1>
        <p className="text-[var(--color-forest)]/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Welcome to the B2B portal. This area allows verified chemists and retail partners to view our Ayurvedic inventory, place wholesale orders, and track shipments.
        </p>
        <div className="p-6 bg-green-50/50 border border-green-100 rounded-sm inline-block">
          <p className="text-sm font-medium text-green-800">
            Feature in development. Inventory management will be available soon.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
