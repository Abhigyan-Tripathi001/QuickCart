"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About QuickCart</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Your one-stop destination for electronics, gadgets, and lifestyle
            essentials – delivered with speed and care.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At <span className="font-medium text-orange-600">QuickCart</span>,
            our mission is simple – to make online shopping effortless,
            affordable, and reliable. We carefully curate a wide range of
            high-quality products, from premium headphones to powerful laptops,
            so you can find everything you need in one place.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={assets.header_headphone_image}
            alt="Mission"
            className="rounded-xl shadow-md w-80 h-auto"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose QuickCart?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600">
                🚚 Fast Delivery
              </h3>
              <p className="mt-2">
                Get your products delivered at lightning speed with our trusted
                shipping partners.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600">
                💳 Secure Payments
              </h3>
              <p className="mt-2">
                Shop worry-free with 100% secure payment gateways and flexible
                payment options.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600">
                ⭐ Premium Quality
              </h3>
              <p className="mt-2">
                Every product is handpicked and verified to give you the best
                online shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Vision Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Vision
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          We believe that online shopping should be more than just a
          transaction – it should be an experience. That’s why we are building
          QuickCart into a platform that combines technology, trust, and
          customer-first values. We’re not just here to sell products, we’re
          here to create connections.
        </p>
      </section>
    </div>
  );
};

export default About;
