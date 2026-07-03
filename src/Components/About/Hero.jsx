import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import hero1 from "../../assets/About-1.jpg";
import hero2 from "../../assets/About-2.jpg";

export default function About() {
  const data = {
    badge: "About Us",
    title: "Building dreams, one home at a time",
    description:
      "We’re more than real estate agents — we’re your trusted partners, helping you find the right property with confidence and ease.",
    buttonText: "Contact Us",

    images: [hero1, hero2],

    stats: [
      {
        id: 1,
        value: "$150M+",
        title: "Properties Sold",
        desc: "Over $150M in sales, helping clients find homes and investments with ease and confidence.",
      },
      {
        id: 2,
        value: "500+",
        title: "Happy Clients",
        desc: "More than 500 satisfied clients trust us to make their real estate journey smooth and successful.",
      },
      {
        id: 3,
        value: "20+",
        title: "Years of Expertise",
        desc: "Over 20 years of experience guiding clients with market insight and professional advice.",
      },
    ],
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              {data.badge}
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 max-w-xl">
              {data.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600">{data.description}</p>

            <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              {data.buttonText}
            </button>
          </div>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {data.images.map((img, i) => (
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
          {data.stats.map((item, i) => (
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
