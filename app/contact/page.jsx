"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-6 md:px-16 lg:px-32 py-12">
        {/* Header */}
        <div className="text-center text-2xl pt-6 text-gray-500">
          <p>
            CONTACT <span className="text-gray-700 font-medium">US</span>
          </p>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm">
            Have questions or need support? We’d love to hear from you. 
            Reach out to our team and we’ll get back to you quickly.
          </p>
        </div>

        {/* Contact Section */}
        <div className="my-12 flex flex-col md:flex-row gap-12">
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center gap-6 md:w-1/2 text-sm text-gray-600">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
            <p>
              Whether you’re curious about our products, need help with an order,
              or just want to say hello — we’re here for you.
            </p>

            <div className="space-y-4">
              <p>
                📍 <span className="font-medium">Address:</span> 123 QuickCart Plaza, Prayagraj, India
              </p>
              <p>
                📧 <span className="font-medium">Email:</span> support@quickcart.com
              </p>
              <p>
                📞 <span className="font-medium">Phone:</span> +91 98765 43210
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <Image src={assets.facebook_icon} alt="facebook" className=" cursor-pointer hover:opacity-80" />
              <Image src={assets.instagram_icon} alt="instagram" className=" cursor-pointer hover:opacity-80" />
              <Image src={assets.twitter_icon} alt="twitter" className=" cursor-pointer hover:opacity-80" />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6 md:w-1/2">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
