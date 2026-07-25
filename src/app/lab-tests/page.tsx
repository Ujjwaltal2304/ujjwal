"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, FlaskConical, AlertCircle, Info, IndianRupee } from "lucide-react";

type LabTest = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  preparation: string;
};

const labTestsData: LabTest[] = [
  {
    id: "lt-1",
    name: "Complete Blood Count (CBC)",
    category: "Blood Tests",
    description: "Measures different components of your blood, including red blood cells, white blood cells, and platelets. Essential for detecting infections, anemia, and other diseases.",
    price: 450,
    preparation: "No special preparation required. Can be taken at any time."
  },
  {
    id: "lt-2",
    name: "Lipid Profile",
    category: "Blood Tests",
    description: "Measures the level of specific lipids in blood to assess cardiovascular risk. Includes Total Cholesterol, HDL, LDL, and Triglycerides.",
    price: 700,
    preparation: "Fasting for 10-12 hours is mandatory. Only water is permitted."
  },
  {
    id: "lt-3",
    name: "Thyroid Profile (T3, T4, TSH)",
    category: "Diagnostics",
    description: "Evaluates thyroid gland function. Used to diagnose hyperthyroidism and hypothyroidism.",
    price: 650,
    preparation: "Ideally taken in the morning. Fasting is not strictly required but recommended."
  },
  {
    id: "lt-4",
    name: "HbA1c (Glycated Hemoglobin)",
    category: "Diagnostics",
    description: "Measures average blood sugar levels over the past 2-3 months. Crucial for diabetes diagnosis and management.",
    price: 550,
    preparation: "No fasting required."
  },
  {
    id: "lt-5",
    name: "Comprehensive Master Health Check",
    category: "Preventive",
    description: "An extensive full-body screening covering 60+ parameters including liver function, kidney function, vitamins, and cardiac markers.",
    price: 2500,
    preparation: "Fasting for 12 hours is strictly required."
  }
];

export default function LabTestsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTest, setSelectedTest] = useState<LabTest | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    time: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = ["All", ...Array.from(new Set(labTestsData.map(test => test.category)))];

  const filteredTests = selectedCategory === "All" 
    ? labTestsData 
    : labTestsData.filter(test => test.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)]/20 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-forest)] hover:text-[var(--color-terracotta)] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] font-semibold flex items-center gap-3">
            <FlaskConical className="w-10 h-10 text-[var(--color-terracotta)]" />
            Lab Tests & Diagnostics
          </h1>
          <p className="text-lg text-[var(--color-forest)]/70 max-w-3xl">
            Book highly accurate laboratory tests and preventive health screenings. Our advanced diagnostic facility ensures fast, reliable results for better Ayurvedic treatment planning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Test Catalog */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[var(--color-forest)] text-white"
                      : "bg-white text-[var(--color-forest)] border border-[var(--color-forest)]/10 hover:border-[var(--color-forest)]/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Test Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTests.map((test) => (
                <div 
                  key={test.id} 
                  className={`bg-white p-6 rounded-sm shadow-sm border transition-all ${
                    selectedTest?.id === test.id 
                      ? "border-[var(--color-terracotta)] ring-1 ring-[var(--color-terracotta)]"
                      : "border-[var(--color-forest)]/10 hover:border-[var(--color-forest)]/30"
                  } flex flex-col`}
                >
                  <div className="flex-grow">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-serif text-lg font-semibold text-[var(--color-forest)]">{test.name}</h3>
                      <span className="flex items-center text-[var(--color-terracotta)] font-bold whitespace-nowrap">
                        <IndianRupee className="w-3.5 h-3.5 mr-0.5" />
                        {test.price}
                      </span>
                    </div>
                    <span className="inline-block px-2.5 py-1 bg-[var(--color-forest)]/5 text-[var(--color-forest)] text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
                      {test.category}
                    </span>
                    <p className="text-sm text-[var(--color-forest)]/70 mb-6 leading-relaxed">
                      {test.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-2 bg-yellow-50 p-3 rounded-sm">
                      <AlertCircle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-yellow-800 leading-snug">{test.preparation}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedTest(test)}
                      className={`w-full py-2.5 text-sm font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                        selectedTest?.id === test.id
                          ? "bg-[var(--color-terracotta)] text-white"
                          : "bg-white border border-[var(--color-terracotta)] text-[var(--color-terracotta)] hover:bg-[var(--color-terracotta)] hover:text-white"
                      }`}
                    >
                      {selectedTest?.id === test.id ? "Selected" : "Select Test"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white p-6 rounded-sm shadow-sm border border-[var(--color-forest)]/10">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="inline-flex p-3 bg-green-50 rounded-full text-green-600 mb-2">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[var(--color-forest)]">Booking Confirmed</h3>
                  <p className="text-sm text-[var(--color-forest)]/70 leading-relaxed">
                    Your lab test <strong className="text-[var(--color-forest)]">{selectedTest?.name}</strong> is scheduled. 
                    Please ensure you follow the preparation instructions.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedTest(null);
                      setFormData({ name: "", contact: "", date: "", time: "" });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[var(--color-terracotta)] hover:underline pt-4 block w-full text-center"
                  >
                    Book Another Test
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-serif font-semibold text-[var(--color-forest)] mb-4 border-b border-[var(--color-forest)]/10 pb-4">Schedule Lab Test</h2>
                  
                  {selectedTest ? (
                    <div className="mb-6 bg-[var(--color-forest)]/5 p-4 rounded-sm border border-[var(--color-forest)]/10">
                      <p className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wider mb-1">Selected Test</p>
                      <p className="text-sm font-medium text-[var(--color-forest)]">{selectedTest.name}</p>
                      <p className="text-sm font-bold text-[var(--color-terracotta)] mt-1 flex items-center">
                        <IndianRupee className="w-3.5 h-3.5" />{selectedTest.price}
                      </p>
                    </div>
                  ) : (
                    <div className="mb-6 flex items-start gap-3 text-sm text-[var(--color-forest)]/60 bg-[var(--color-cream)]/30 p-4 rounded-sm border border-dashed border-[var(--color-forest)]/20">
                      <Info className="w-5 h-5 shrink-0 text-[var(--color-forest)]/40" />
                      <p>Please select a test from the catalog on the left to schedule your appointment.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Patient Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        disabled={!selectedTest}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-white text-[var(--color-forest)] font-medium disabled:opacity-50 disabled:bg-gray-50"
                        placeholder="Full Name"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="contact" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Contact Number</label>
                      <input 
                        type="tel" 
                        id="contact"
                        required
                        disabled={!selectedTest}
                        value={formData.contact}
                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-white text-[var(--color-forest)] font-medium disabled:opacity-50 disabled:bg-gray-50"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label htmlFor="date" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Preferred Date</label>
                        <input 
                          type="date" 
                          id="date"
                          required
                          disabled={!selectedTest}
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full px-3 py-2.5 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-white text-[var(--color-forest)] font-medium disabled:opacity-50 disabled:bg-gray-50"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="time" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Preferred Time</label>
                        <input 
                          type="time" 
                          id="time"
                          required
                          disabled={!selectedTest}
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="w-full px-3 py-2.5 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-white text-[var(--color-forest)] font-medium disabled:opacity-50 disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={!selectedTest}
                      className="w-full py-3.5 bg-[var(--color-forest)] text-[var(--color-cream)] font-medium rounded-sm hover:bg-[var(--color-forest)]/90 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                      Book Lab Test
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
