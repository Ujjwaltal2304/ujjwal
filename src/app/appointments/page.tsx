"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Calendar, CheckCircle, ArrowLeft, Filter, User } from "lucide-react";

type TimeSlot = {
  time: string;
  isBooked: boolean;
};

const morningSlots: TimeSlot[] = [
  { time: "09:00 AM", isBooked: false },
  { time: "09:30 AM", isBooked: true },
  { time: "10:00 AM", isBooked: false },
  { time: "10:30 AM", isBooked: false },
  { time: "11:00 AM", isBooked: true },
  { time: "11:30 AM", isBooked: false },
];

const afternoonSlots: TimeSlot[] = [
  { time: "02:00 PM", isBooked: false },
  { time: "02:30 PM", isBooked: false },
  { time: "03:00 PM", isBooked: true },
  { time: "03:30 PM", isBooked: false },
];

const eveningSlots: TimeSlot[] = [
  { time: "06:00 PM", isBooked: true },
  { time: "06:30 PM", isBooked: false },
  { time: "07:00 PM", isBooked: false },
  { time: "07:30 PM", isBooked: true },
];

export default function DoctorAppointmentsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("general");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderSlots = (slots: TimeSlot[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {slots.map((slot) => (
        <button
          key={slot.time}
          disabled={slot.isBooked}
          onClick={() => setSelectedSlot(slot.time)}
          className={`px-4 py-3 text-sm font-medium rounded-sm border transition-all ${
            slot.isBooked
              ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
              : selectedSlot === slot.time
              ? "bg-[var(--color-terracotta)] border-[var(--color-terracotta)] text-white shadow-md scale-105"
              : "bg-white border-[var(--color-forest)]/20 text-[var(--color-forest)] hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)]"
          }`}
        >
          {slot.time}
          {slot.isBooked && <span className="block text-[10px] mt-1 font-normal uppercase">Booked</span>}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--color-cream)]/20 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-forest)] hover:text-[var(--color-terracotta)] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] font-semibold">
            Doctor Consultation
          </h1>
          <p className="text-lg text-[var(--color-forest)]/70 max-w-2xl mx-auto">
            Schedule a dedicated appointment with Dr. Demo for personalized Ayurvedic assessment and treatment planning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Filters and Slots */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-6 rounded-sm shadow-sm border border-[var(--color-forest)]/10">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-[var(--color-terracotta)]" />
                <h2 className="text-lg font-serif font-semibold text-[var(--color-forest)]">Select Department</h2>
              </div>
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-[var(--color-cream)]/30 text-[var(--color-forest)] font-medium"
              >
                <option value="general">General Ayurveda Physician</option>
                <option value="panchkarma">Panchkarma Specialist</option>
                <option value="kayachitsa">Kayachitsa (Internal Medicine)</option>
                <option value="swasthavaritta">Swasthavaritta (Preventive)</option>
              </select>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-[var(--color-forest)]/10 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-6 border-b border-[var(--color-forest)]/10 pb-3">
                  <Clock className="w-5 h-5 text-[var(--color-terracotta)]" />
                  <h2 className="text-xl font-serif font-semibold text-[var(--color-forest)]">Available Slots Today</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-forest)]/70 uppercase tracking-wider mb-4">Morning</h3>
                    {renderSlots(morningSlots)}
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-forest)]/70 uppercase tracking-wider mb-4">Afternoon</h3>
                    {renderSlots(afternoonSlots)}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-forest)]/70 uppercase tracking-wider mb-4">Evening</h3>
                    {renderSlots(eveningSlots)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-[var(--color-forest)]/10">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="inline-flex p-3 bg-green-50 rounded-full text-green-600 mb-2">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[var(--color-forest)]">Appointment Confirmed</h3>
                  <p className="text-sm text-[var(--color-forest)]/70 leading-relaxed">
                    Your consultation is booked for today at <strong className="text-[var(--color-forest)]">{selectedSlot}</strong>.
                    You will receive an SMS confirmation shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedSlot(null);
                      setFormData({ name: "", phone: "", reason: "" });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[var(--color-terracotta)] hover:underline pt-4 block w-full text-center"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-serif font-semibold text-[var(--color-forest)] mb-2">Confirm Booking</h2>
                  {selectedSlot ? (
                    <p className="text-sm font-medium text-[var(--color-terracotta)] mb-6 bg-[var(--color-terracotta)]/10 p-3 rounded-sm">
                      Selected Slot: {selectedSlot}
                    </p>
                  ) : (
                    <p className="text-sm text-[var(--color-forest)]/60 mb-6 italic">
                      Please select a time slot from the left to proceed.
                    </p>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Patient Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        disabled={!selectedSlot}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-[var(--color-cream)]/30 text-[var(--color-forest)] font-medium disabled:opacity-50"
                        placeholder="Full Name"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        required
                        disabled={!selectedSlot}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-[var(--color-cream)]/30 text-[var(--color-forest)] font-medium disabled:opacity-50"
                        placeholder="e.g. 9876543210"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="reason" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Reason for Visit</label>
                      <textarea 
                        id="reason"
                        required
                        disabled={!selectedSlot}
                        rows={3}
                        value={formData.reason}
                        onChange={(e) => setFormData({...formData, reason: e.target.value})}
                        className="w-full px-4 py-3 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-[var(--color-cream)]/30 text-[var(--color-forest)] font-medium resize-none disabled:opacity-50"
                        placeholder="Briefly describe your symptoms or condition..."
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={!selectedSlot}
                      className="w-full py-4 bg-[var(--color-forest)] text-[var(--color-cream)] font-medium rounded-sm hover:bg-[var(--color-forest)]/90 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      Confirm Appointment
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
