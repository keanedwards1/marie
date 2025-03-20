// =======================================
//  /src/pages/contact.tsx - SECURE VERSION
// =======================================

import React, { useState } from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/RespFooter";
import SubscribeForm from "@/components/SubscribeForm";
import ComicButton from "@/components/ComicButton";
import router from "next/router";
import DOMPurify from "dompurify"; // ✅ ADDED: For input sanitization

export default function ContactPage() {
  // ✅ State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    error: "",
    success: "",
  });

  // ✅ Get API URL from environment variables (Prevents hardcoding)
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://159.89.233.75.nip.io";

  // ✅ Basic sanitization function
  const sanitizeInput = (input: string) => DOMPurify.sanitize(input);

  // ✅ Email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ✅ Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormStatus({ error: "", success: "" });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        error: "Please fill out all required fields.",
        success: "",
      });
      return;
    }

    // ✅ Validate email format
    if (!emailPattern.test(formData.email)) {
      setFormStatus({
        error: "Please enter a valid email address.",
        success: "",
      });
      return;
    }

    // ✅ Sanitize user inputs before sending
    const safeFormData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    try {
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(safeFormData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("🚨 Error Response:", data.error);
        throw new Error(data.error || "An unknown error occurred");
      }

      // ✅ Reset form after success
      setFormStatus({ error: "", success: "Thank you for contacting us!" });
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error: any) {
      console.error("🚨 Error Sending Message:", error);
      setFormStatus({
        error: error.message || "Something went wrong. Please try again.",
        success: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* ✅ SEO Head */}
      <Head
        title="Contact Us | Realm of Unity"
        description="Contact page for The Realm of Unity"
      />

      {/* ✅ Navigation */}
      <Nav />

      {/* ✅ Page Content */}
      <div className="flex-grow md:p-8 lg:p-12 flex -pb-12 flex-col items-center">
        <h1 className="text-4xl mb-8 font-serif font-bold text-[#2e2e2e]">
          Contact Us
        </h1>
        <p className="text-lg mb-8 font-serif font-md text-[#2e2e2e]">
          Feel free to send a message if you have any questions at all.
        </p>

        {/* ✅ Contact Form */}
        <div className="max-w-2xl w-full bg-white shadow-md text-[#212121] rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none text-[#212121] focus:ring-2 focus:ring-[#4458adc5]"
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#212121] font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none text-[#212121] focus:ring-2 focus:ring-[#4458adc5]"
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-[#212121] font-semibold">
                Subject
              </label>
              <input
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none text-[#212121] focus:ring-2 focus:ring-[#4458adc5]"
                type="text"
                id="subject"
                name="subject"
                placeholder="(Optional) Let us know what this is about"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#212121] font-semibold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 text-[#212121] focus:ring-[#4458adc5]"
                id="message"
                name="message"
                rows={5}
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* ✅ Error or Success Messages */}
            {formStatus.error && (
              <p className="text-red-600 text-sm">{formStatus.error}</p>
            )}
            {formStatus.success && (
              <p className="text-green-600 text-sm">{formStatus.success}</p>
            )}

            {/* ✅ Submit Button */}
            <button type="submit" className="comic-button text-large">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Navigation Buttons */}
      <section className="mt-16 mb-16 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton label="← View Reviews 🕊️" onClick={() => router.push("/short-stories")} />
        </div>
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton label="🏡 Go Home ↩" onClick={() => router.push("/")} />
        </div>
      </section>

      {/* ✅ Subscription Form & Footer */}
      <SubscribeForm />
      <Footer />
    </div>
  );
}
