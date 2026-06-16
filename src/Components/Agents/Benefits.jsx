import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { benefitsData } from "./data";

function Benefits() {
  const { image, titleBadge, heading, description, items, buttonText } =
    benefitsData;

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div>
          <img
            src={image}
            alt="Benefits"
            className="w-full object-cover rounded-3xl"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            {titleBadge}
          </h5>

          <h2 className="text-4xl font-bold mt-3">{heading}</h2>

          <p className="text-gray-600 mt-4">{description}</p>

          {/* ITEMS */}
          <div className="mt-8 space-y-6">
            {items.map((item) => (
              <div key={item.id}>
                <h3 className="text-lg font-semibold">
                  {item.id.toString().padStart(2, "0")}. {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          <button className="mt-5 bg-black text-white p-5 rounded-full">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
