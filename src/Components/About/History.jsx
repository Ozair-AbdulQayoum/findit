import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

export default function History() {
  const data = {
    badge: "Our History",
    title: "A legacy of trust and growth",
    description:
      "From a small vision to a trusted real estate partner, our journey has been defined by dedication, growth, and client success.",

    timeline: [
      {
        id: 1,
        year: "2005",
        title: "Founded",
        desc: "Started with a mission to make real estate transparent and client-focused.",
      },
      {
        id: 2,
        year: "2010",
        title: "Building Reputation",
        desc: "Earned trust through successful transactions and expanded our residential and commercial services.",
      },
      {
        id: 3,
        year: "2015",
        title: "Expanding Horizons",
        desc: "Reached 250+ closed deals and introduced specialized support for investors and luxury buyers.",
      },
      {
        id: 4,
        year: "2025",
        title: "Leading Today",
        desc: "Achieved $150M+ in sales and served 500+ clients, becoming a trusted partner in every real estate journey.",
      },
    ],
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h5 className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            {data.badge}
          </h5>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">{data.title}</h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600">
            {data.description}
          </p>
        </div>

        {/* TIMELINE */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {data.timeline.map((item) => (
            <div key={item.id} className="text-center md:text-left">
              <h2 className="text-4xl font-bold">{item.year}</h2>

              <h4 className="mt-3 text-xl font-semibold">{item.title}</h4>

              <p className="mt-4 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
