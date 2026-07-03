import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Faqimg from "../../assets/Faq-img.png";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    description:
      "Got questions? We’ve answered some of the most common ones to guide you through your real estate journey.",

    image: Faqimg,

    faqs: [
      {
        id: 1,
        q: "How do I start the process of buying a home?",
        a: "Simply reach out to us for a consultation. We'll discuss your goals, budget, and preferences, then guide you step by step.",
      },
      {
        id: 2,
        q: "Do I need to get pre-approved for a mortgage first?",
        a: "Yes, we recommend it. Pre-approval helps you understand your budget and shows sellers you’re a serious buyer.",
      },
      {
        id: 3,
        q: "What types of properties do you specialize in?",
        a: "We handle residential homes, luxury estates, investment properties, and select commercial spaces.",
      },
      {
        id: 4,
        q: "How long does the buying process usually take?",
        a: "It varies, but most transactions take between 30–60 days once an offer is accepted.",
      },
      {
        id: 5,
        q: "Do you assist with selling properties as well?",
        a: "Absolutely. From pricing strategy to marketing and negotiations, we help sellers achieve the best value.",
      },
      {
        id: 6,
        q: "What makes your agency different from others?",
        a: "Our personalized approach, strong market insights, and commitment to long-term client relationships set us apart.",
      },
    ],
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              {data.badge}
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              {data.title}
            </h2>

            <p className="text-gray-600 mt-4">{data.description}</p>
          </div>

          <img
            src={data.image}
            alt="FAQ"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {data.faqs.map((item, index) => (
            <div
              key={item.id}
              className="border rounded-xl p-4 cursor-pointer transition hover:shadow-md"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="font-medium text-gray-800 flex justify-between items-center">
                {item.q}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h3>

              {openIndex === index && (
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
