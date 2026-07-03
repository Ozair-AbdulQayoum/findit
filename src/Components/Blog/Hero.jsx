import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Update1 from "../../assets/Updates-1.jpg";
import Update2 from "../../assets/Updates-2.jpg";
import Update3 from "../../assets/Updates-3.jpg";

const Insights = () => {
  const insights = [
    {
      id: 1,
      image: Update1,
      title: "The Power of Natural Light in Architectural Design",
      text: "Natural light plays a crucial role in shaping architectural design, offering both aesthetic and functional value.",
    },
    {
      id: 2,
      image: Update2,
      title: "Photography: Capturing the Essence of Buildings",
      text: "Architectural photography goes beyond documenting structures; it captures the soul of a building.",
    },
    {
      id: 3,
      image: Update3,
      title: "The Future of Smart Homes: Innovative Interior Design",
      text: "Smart homes are transforming how we live by blending technology with modern design.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              Latest News
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Insights & Updates
            </h2>
          </div>

          <p className="max-w-md text-gray-600 text-center md:text-right">
            Stay informed with expert tips, market trends, and property advice
            to guide your real estate journey.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {insights.map((item) => (
            <div key={item.id} className="group">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>

              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
