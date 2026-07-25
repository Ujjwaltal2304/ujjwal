"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How do I book a consultation?",
    answer: "You can book a consultation easily through our online portal by clicking the 'Book Appointment' button. Select your preferred department, choose an available time slot, and confirm your details. Alternatively, you can call our front desk directly."
  },
  {
    question: "Do you have doctors for all diseases?",
    answer: "Our expert Ayurvedic practitioners specialize in a wide range of chronic and acute conditions including joint pain, digestive disorders, skin diseases, respiratory issues, and stress management."
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "Yes, you can cancel or reschedule your appointment up to 24 hours in advance by contacting our clinic via phone or through your patient portal link received in the confirmation SMS."
  },
  {
    question: "How do I purchase medicine after consultation?",
    answer: "Prescribed Ayurvedic medicines are available at our in-house pharmacy immediately following your consultation. We also offer an online delivery service for prescription refills."
  },
  {
    question: "How many cities does Dr. Demo Clinic ship medicines to?",
    answer: "We currently ship our authentic Ayurvedic medicines securely to all major cities and states across India."
  },
  {
    question: "Do I have to pay any delivery charges?",
    answer: "Delivery charges apply for orders below ₹1000. Free shipping is provided for all prescription orders exceeding this amount."
  },
  {
    question: "How to pay for the consultation?",
    answer: "We accept all major credit/debit cards, UPI, digital wallets, and cash at the clinic. Online bookings can be prepaid securely via our payment gateway."
  },
  {
    question: "Can I select a specific doctor for consultation?",
    answer: "Yes, if you have a preference for a specific specialist or Panchkarma expert, you can request them during your booking process, subject to their availability."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]/30 border-t border-[var(--color-forest)]/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-forest)] font-semibold mb-4">
            FAQs
          </h2>
          <p className="text-[var(--color-forest)]/70 text-sm max-w-2xl mx-auto">
            Find answers to commonly asked questions about our Ayurvedic treatments, appointments, and pharmacy services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-sm border transition-all duration-300 ${
                  isOpen ? "border-[var(--color-terracotta)] shadow-md" : "border-[var(--color-forest)]/15 hover:border-[var(--color-forest)]/30"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className={`text-sm font-medium transition-colors ${isOpen ? "text-[var(--color-terracotta)]" : "text-[var(--color-forest)]"}`}>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[var(--color-terracotta)] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[var(--color-forest)]/60 shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-1 text-sm text-[var(--color-forest)]/70 leading-relaxed border-t border-gray-50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
