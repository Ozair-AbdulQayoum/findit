import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Img1 from "../../assets/About-3.jpg";

export default function Process() {
  const data = {
    badge: "Our Process",
    title: "Simple steps to your dream home",
    description:
      "We make buying, selling, or investing in property effortless. Here’s how we guide you every step of the way.",

    image: Img1,

    steps: [
      {
        id: 1,
        title: "01. Discover",
        desc: "We start by understanding your goals and lifestyle, then curate properties that match.",
      },
      {
        id: 2,
        title: "02. Experience",
        desc: "Guided viewings and expert insights help you explore the best options with confidence.",
      },
      {
        id: 3,
        title: "03. Secure",
        desc: "From negotiation to closing, we ensure a seamless, stress-free transaction.",
      },
    ],

    buttonText: "Start your journey",
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            {data.badge}
          </h5>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">{data.title}</h2>

          <p className="text-gray-600 mt-5">{data.description}</p>

          {/* STEPS */}
          <div className="mt-10 space-y-6">
            {data.steps.map((step) => (
              <div key={step.id}>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-10 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition">
            {data.buttonText}
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={data.image}
            alt="Process"
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
