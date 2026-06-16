import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { faqData } from "./data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              {faqData.badge}
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              {faqData.title}
            </h2>

            <p className="text-gray-600 mt-4">{faqData.description}</p>
          </div>

          <img
            src={faqData.image}
            alt="FAQ"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <div className="space-y-4">
            {faqData.faqs.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 cursor-pointer transition hover:shadow-md"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-medium flex justify-between items-center">
                  {item.q}
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </h3>

                {openIndex === index && (
                  <p className="text-gray-600 mt-3 text-sm">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
