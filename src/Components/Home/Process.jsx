import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import BgImg from "../../assets/bg.jpg";

function Process() {
  const steps = [
    {
      id: 1,
      title: "01. Discover",
      desc: "We start by understanding your goals and lifestyle, then curate properties that match your needs.",
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
  ];

  return (
    <section
      className="py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl">
          {/* Header */}
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Our Process
          </h5>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Simple steps to your dream home
          </h2>

          <p className="text-gray-600 mt-5">
            We make buying, selling, or investing in property effortless. Here's
            how we guide you every step of the way.
          </p>

          {/* Steps */}
          <div className="mt-10 space-y-8">
            {steps.map((step) => (
              <div key={step.id}>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-10 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Start your journey
          </button>
        </div>
      </div>
    </section>
  );
}

export default Process;
