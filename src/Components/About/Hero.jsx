import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { aboutData } from "./data";

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              {aboutData.badge}
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 max-w-xl">
              {aboutData.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600">{aboutData.description}</p>

            <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              {aboutData.buttonText}
            </button>
          </div>
        </div>

        {/* IMAGES */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {aboutData.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="About"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {aboutData.stats.map((item, i) => (
            <div
              key={item.id}
              className={i !== 2 ? "md:border-r border-gray-300 md:pr-10" : ""}
            >
              <h2 className="text-5xl font-bold">{item.value}</h2>
              <h4 className="mt-3 text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-600 mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
