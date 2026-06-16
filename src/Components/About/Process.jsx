import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { processData } from "./data";

function Process() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            {processData.badge}
          </h5>

          <h2 className="text-4xl font-bold mt-3">{processData.title}</h2>

          <p className="text-gray-600 mt-4">{processData.description}</p>

          {/* STEPS */}
          <div className="mt-8 space-y-6">
            {processData.steps.map((step) => (
              <div key={step.id}>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-5 bg-black text-white p-5 rounded-full">
            {processData.buttonText}
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={processData.image}
            alt="Process"
            className="w-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Process;
