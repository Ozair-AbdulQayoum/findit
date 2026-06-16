import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { benefitsData } from "./data";

function Benefits() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src={benefitsData.image}
            alt="Benefits"
            className="w-full object-cover rounded-3xl"
          />
        </div>

        {/* Content */}
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            {benefitsData.badge}
          </h5>

          <h2 className="text-4xl font-bold mt-3">{benefitsData.title}</h2>

          <p className="text-gray-600 mt-4">{benefitsData.description}</p>

          <div className="mt-8 space-y-6">
            {benefitsData.items.map((item) => (
              <div key={item.id}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className="mt-5 bg-black text-white p-5 rounded-full">
            {benefitsData.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
