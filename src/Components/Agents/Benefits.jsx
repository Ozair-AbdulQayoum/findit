import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Img1 from "../../assets/Img-2.jpg";

function Benefits() {
  const data = {
    image: Img1,
    titleBadge: "Our Benefits",
    heading: "Building dreams, one home at a time",
    description:
      "Our mission goes beyond real estate — it’s about guiding you through one of life’s biggest milestones with heart, expertise, and unwavering commitment.",

    items: [
      {
        id: 1,
        title: "Buy a new home",
        text: "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
      },
      {
        id: 2,
        title: "Rent a home",
        text: "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
      },
      {
        id: 3,
        title: "Sell a home",
        text: "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
      },
    ],

    buttonText: "More about us",
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div>
          <img
            src={data.image}
            alt="Benefits"
            className="w-full rounded-3xl object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            {data.titleBadge}
          </h5>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            {data.heading}
          </h2>

          <p className="text-gray-600 mt-5">{data.description}</p>

          {/* ITEMS */}
          <div className="mt-10 space-y-6">
            {data.items.map((item) => (
              <div key={item.id}>
                <h3 className="text-lg font-semibold">
                  {String(item.id).padStart(2, "0")}. {item.title}
                </h3>
                <p className="text-gray-600 mt-1">{item.text}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-10 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition">
            {data.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
