"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="text-5xl sm:text-6xl font-black text-[#0F0F0F] tracking-tight mb-6">
            We&apos;d love to<br />
            <span className="text-[#7C3AED]">hear from you.</span>
          </h1>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            Questions, feedback, or just want to say hi — our team typically responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#F3F0FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-[#7C3AED]" />
              </div>
              <div>
                <p className="font-semibold text-[#0F0F0F] mb-0.5">Email</p>
                <p className="text-sm text-[#6B7280]">hello@trendystudio.com</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#F3F0FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} className="text-[#7C3AED]" />
              </div>
              <div>
                <p className="font-semibold text-[#0F0F0F] mb-0.5">Live Chat</p>
                <p className="text-sm text-[#6B7280]">Available Mon–Fri, 9am–6pm PST</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#F3F0FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-[#7C3AED]" />
              </div>
              <div>
                <p className="font-semibold text-[#0F0F0F] mb-0.5">Location</p>
                <p className="text-sm text-[#6B7280]">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-3xl p-12 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={28} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F0F0F] mb-2">Message sent!</h3>
                <p className="text-[#6B7280]">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-gray-100 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0F0F0F] mb-2">First name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F0F0F] mb-2">Last name</label>
                    <input
                      type="text"
                      required
                      placeholder="Chen"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F0F0F] mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F0F0F] mb-2">Subject</label>
                  <select className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all appearance-none bg-white">
                    <option>Order inquiry</option>
                    <option>Product question</option>
                    <option>Returns & refunds</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F0F0F] mb-2">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us how we can help..."
                    className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold py-4 rounded-2xl transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
