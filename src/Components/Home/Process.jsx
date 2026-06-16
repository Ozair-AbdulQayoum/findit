import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { processData } from "./data";

function Process() {
  return (
    <section
      className="py-20 bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${processData.background})` }}
    >
      <div className="max-w-xl ml-10 bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-lg">
        {/* Header */}
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            {processData.badge}
          </h5>

          <h2 className="text-4xl font-bold mt-3">{processData.title}</h2>

          <p className="text-gray-600 mt-4">{processData.description}</p>
        </div>

        {/* Steps */}
        <div className="mt-10 space-y-8">
          {processData.steps.map((step) => (
            <div key={step.id}>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="px-8 py-3 bg-black text-white rounded-full mt-6">
          {processData.buttonText}
        </button>
      </div>
    </section>
  );
}

export default Process;
