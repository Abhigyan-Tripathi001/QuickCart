"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-6 md:px-16 lg:px-32 py-12">
        {/* Title */}
        <div className="text-center text-2xl pt-6 text-gray-500">
          <p>
            ABOUT <span className="text-gray-700 font-medium">US</span>
          </p>
        </div>

        {/* Top Section */}
        <div className="my-12 flex flex-col md:flex-row gap-12">
          {/* Left side */}
          <div className="flex justify-center">
            <Image
              className="w-full md:max-w-[360px] rounded-lg shadow-md"
              src={assets.header_headphone_image}
              alt="About QuickCart"
            />
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-sm leading-relaxed">
            <p>
              Welcome to{" "}
              <span className="font-semibold text-orange-600">QuickCart</span>, 
              your trusted partner for electronics, gadgets, and lifestyle essentials. 
              We’re dedicated to providing you with the best online shopping experience 
              by offering high-quality products at unbeatable prices.
            </p>
            <p>
              At QuickCart, we don’t just deliver products — we deliver 
              convenience, trust, and satisfaction. From powerful laptops to 
              premium headphones, we curate items that fit seamlessly into 
              your lifestyle.
            </p>
            <b className="text-gray-800">Our Vision</b>
            <p>
              Our vision at QuickCart is to make online shopping effortless, 
              secure, and enjoyable. We aim to bridge the gap between technology 
              and trust, ensuring that every customer enjoys a seamless shopping 
              journey from start to finish.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-xl my-8 text-center">
          <p>
            WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row mb-20 gap-6">
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-4 text-sm hover:bg-orange-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow">
            <b>🚚 Fast Delivery</b>
            <p>Lightning-fast shipping through our trusted delivery partners.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-4 text-sm hover:bg-orange-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow">
            <b>💳 Secure Payments</b>
            <p>Shop worry-free with 100% secure and flexible payment options.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-4 text-sm hover:bg-orange-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow">
            <b>⭐ Premium Quality</b>
            <p>Every product is verified to ensure the best shopping experience.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
