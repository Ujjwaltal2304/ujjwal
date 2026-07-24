"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Clock, MapPin, Phone, Calendar, CheckCircle, ExternalLink, MessageCircle } from "lucide-react";

function AppointmentForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "phagwara",
    treatment: "general",
    date: "",
    timeSlot: "morning",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const preselected = searchParams.get("treatment");
    if (preselected) {
      setFormData(prev => ({
        ...prev,
        treatment: preselected
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment Request Submitted:", formData);
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="bg-white p-8 md:p-10 border border-[var(--color-forest)]/10 rounded-sm shadow-sm space-y-6">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="inline-flex p-3 bg-green-50 rounded-full text-green-600 mb-2">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-[var(--color-forest)]">Request Received</h3>
          <p className="text-sm text-[var(--color-forest)]/70 max-w-sm mx-auto leading-relaxed">
            Thank you. We have received your consultation request. A representative from the {formData.location === "phagwara" ? "Phagwara" : "Jalandhar"} clinic will call you shortly to finalize your appointment.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                location: "phagwara",
                treatment: "general",
                date: "",
                timeSlot: "morning",
                message: ""
              });
            }}
            className="text-xs font-semibold uppercase tracking-wider text-[var(--color-terracotta)] hover:underline pt-4"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Full Name</label>
            <input 
              type="text" 
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-[var(--color-cream)]/30 text-[var(--color-forest)] font-medium"
              placeholder="e.g. Rajinder Singh"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="phone" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Contact Number</label>
            <input 
              type="tel" 
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-[var(--color-cream)]/30 text-[var(--color-forest)] font-medium"
              placeholder="e.g. 1234567890"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="location" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Preferred Location</label>
              <select 
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-3 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-[var(--color-cream)]/30 text-[var(--color-forest)] font-medium"
              >
                <option value="phagwara">Phagwara Clinic</option>
                <option value="jalandhar">Jalandhar Clinic</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="treatment" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Reason for Visit / Treatment</label>
              <select 
                id="treatment"
                value={formData.treatment}
                onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                className="w-full px-4 py-3 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-[var(--color-cream)]/30 text-[var(--color-forest)] font-medium"
              >
                <option value="general">General Consultation</option>
                <option value="panchakarma">Panchakarma (Detox Therapy)</option>
                <option value="shirodhara">Shirodhara</option>
                <option value="abhyanga">Abhyanga (Oil Massage)</option>
                <option value="nasyam">Nasyam</option>
                <option value="kizhi">Kizhi (Pouch Therapy)</option>
                <option value="herbal-consultation">Herbal Consultation &amp; Prescription</option>
                <option value="diet-lifestyle">Diet &amp; Lifestyle Counselling</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="date" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Preferred Date</label>
              <input 
                type="date" 
                id="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-3 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-[var(--color-cream)]/30 text-[var(--color-forest)] font-medium"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide block mb-1">Preferred Time</span>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2 text-sm text-[var(--color-forest)] font-medium cursor-pointer">
                  <input 
                    type="radio" 
                    name="timeSlot"
                    value="morning"
                    checked={formData.timeSlot === "morning"}
                    onChange={() => setFormData({...formData, timeSlot: "morning"})}
                    className="accent-[var(--color-terracotta)]"
                  />
                  Morning (10am - 4pm)
                </label>
                <label className="flex items-center gap-2 text-sm text-[var(--color-forest)] font-medium cursor-pointer">
                  <input 
                    type="radio" 
                    name="timeSlot"
                    value="evening"
                    checked={formData.timeSlot === "evening"}
                    onChange={() => setFormData({...formData, timeSlot: "evening"})}
                    className="accent-[var(--color-terracotta)]"
                  />
                  Evening (5pm - 8pm)
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-xs font-bold text-[var(--color-forest)]/70 uppercase tracking-wide">Health Concerns / Notes (Optional)</label>
            <textarea 
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 rounded-sm border border-[var(--color-forest)]/15 focus:outline-none focus:border-[var(--color-terracotta)] text-sm bg-[var(--color-cream)]/30 text-[var(--color-forest)] font-medium leading-relaxed"
              placeholder="Briefly explain symptoms or relevant history..."
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-[var(--color-forest)] text-[var(--color-cream)] font-semibold rounded-sm hover:bg-[var(--color-forest)]/90 transition-colors shadow-sm text-sm"
          >
            Request Consultation
          </button>
        </form>
      )}
    </div>
  );
}

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] font-semibold mb-6">
            Schedule a Consultation
          </h1>
          <p className="text-lg text-[var(--color-forest)]/80 max-w-2xl leading-relaxed">
            Submit the request form below, or reach out directly via call or WhatsApp. Our clinic representative will finalize your time slot.
          </p>
          <div className="w-20 h-1 bg-[var(--color-terracotta)] rounded-full mt-6"></div>
        </div>
      </section>

      {/* Alternative Phone/WhatsApp Bar */}
      <section className="py-4 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white p-6 border border-[var(--color-forest)]/10 rounded-sm shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-serif text-lg font-semibold text-[var(--color-forest)]">Need Immediate Booking?</h4>
              <p className="text-sm text-[var(--color-forest)]/70">Connect directly with our coordinators on call or via WhatsApp.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center">
              <a 
                href="tel:1234567890" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-[var(--color-forest)]/20 hover:border-[var(--color-forest)]/40 text-[var(--color-forest)] text-xs font-semibold uppercase tracking-wider transition-colors bg-white w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4 text-[var(--color-terracotta)]" /> Call 1234567890
              </a>
              <a 
                href="https://wa.me/911234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-8 px-4 mb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Appointment Form with Suspense Boundary */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="bg-white p-8 md:p-10 border border-[var(--color-forest)]/10 rounded-sm shadow-sm text-center">Loading request form...</div>}>
                <AppointmentForm />
              </Suspense>
            </div>

            {/* Clinic Details Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Phagwara Sidebar Card */}
              <div className="bg-white p-6 border border-[var(--color-forest)]/10 rounded-sm shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--color-forest)]/5 pb-3">
                  <h3 className="font-serif text-lg font-bold text-[var(--color-forest)]">Phagwara Clinic</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-green-50 text-green-700 rounded-full border border-green-200">Main Facility</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--color-forest)]/80 leading-relaxed">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[var(--color-terracotta)] shrink-0 mt-1" />
                    <span>Singla Market, Prime Tower, opposite Bus Stand Road, Phagwara, Punjab 144401</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[var(--color-terracotta)]" />
                    <span>10:00 AM – 4:00 PM (Sunday Off)</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[var(--color-terracotta)]" />
                    <span>1234567890</span>
                  </p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/LinxEXfSQyDCB7km7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--color-cream)] hover:bg-[var(--color-cream)]/80 text-[var(--color-forest)] font-medium rounded-sm text-xs border border-[var(--color-forest)]/10 transition-colors"
                >
                  View Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Jalandhar Sidebar Card */}
              <div className="bg-white p-6 border border-[var(--color-forest)]/10 rounded-sm shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--color-forest)]/5 pb-3">
                  <h3 className="font-serif text-lg font-bold text-[var(--color-forest)]">Jalandhar Clinic</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-green-50 text-green-700 rounded-full border border-green-200">Evening Facility</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--color-forest)]/80 leading-relaxed">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[var(--color-terracotta)] shrink-0 mt-1" />
                    <span>119, Mann Nagar, near Satguru Kabir Chowk, Wadala Chowk Road, Urban Estate, Jalandhar, Punjab 144001</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[var(--color-terracotta)]" />
                    <span>5:00 PM – 8:00 PM (Sunday Off)</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[var(--color-terracotta)]" />
                    <span>1234567890</span>
                  </p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/jKiWeG4DbcQLTeVZ7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--color-cream)] hover:bg-[var(--color-cream)]/80 text-[var(--color-forest)] font-medium rounded-sm text-xs border border-[var(--color-forest)]/10 transition-colors"
                >
                  View Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
