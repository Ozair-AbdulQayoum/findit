import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { insights } from "./data";

const Insights = () => {
  return (
    <section className="py-20">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Latest News
          </h5>

          <h2 className="text-4xl font-bold mt-3">Insights & Updates</h2>
        </div>

        <p className="max-w-md mt-4 md:mt-0 text-gray-600">
          Stay informed with expert tips, market trends, and property advice to
          guide your real estate journey.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-4">
        {insights.map((item) => (
          <div key={item.id} className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover rounded-3xl"
            />

            <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
