import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import New1 from "../../assets/New-1.jpg";
import New2 from "../../assets/New-2.jpg";
import New3 from "../../assets/New-3.jpg";
import New4 from "../../assets/New-4.jpg";
import New5 from "../../assets/New-5.jpg";
import New6 from "../../assets/New-6.jpg";

import agent1 from "../../assets/agent-1.jpg";
import agent2 from "../../assets/agent-2.jpg";

export default function LatestProperties() {
  const properties = [
    {
      id: 1,
      image: New5,
      title: "Los Angeles",
      name: "Beach Villa",
      beds: 5,
      baths: 3,
      sqft: 300,
      price: "$3,500",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      id: 2,
      image: New6,
      title: "Chicago",
      name: "Urban Loft",
      beds: 2,
      baths: 1,
      sqft: 110,
      price: "$1,100",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      id: 3,
      image: New1,
      title: "New York",
      name: "Modern Apartment",
      beds: 3,
      baths: 2,
      sqft: 180,
      price: "$2,200",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      id: 4,
      image: New2,
      title: "Miami",
      name: "Luxury Condo",
      beds: 4,
      baths: 3,
      sqft: 250,
      price: "$4,000",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      id: 5,
      image: New3,
      title: "Dallas",
      name: "Family House",
      beds: 4,
      baths: 2,
      sqft: 210,
      price: "$2,800",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      id: 6,
      image: New4,
      title: "Seattle",
      name: "Green Villa",
      beds: 5,
      baths: 4,
      sqft: 320,
      price: "$5,200",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      id: 7,
      image: New5,
      title: "Boston",
      name: "City Loft",
      beds: 2,
      baths: 1,
      sqft: 120,
      price: "$1,500",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      id: 8,
      image: New6,
      title: "Houston",
      name: "Modern House",
      beds: 3,
      baths: 2,
      sqft: 200,
      price: "$2,400",
      agent: "David Wilson",
      agentImg: agent2,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">
          {/* ================= Left ================= */}
          <div className="relative h-fit self-start lg:sticky lg:top-28">
            <h5 className="flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-wider">
              <FaRegDotCircle />
              Latest Properties
            </h5>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
              Fresh on the market
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Stay ahead of the curve with our newest listings.
            </p>

            {/* Filter Card */}
            <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
              {/* Explore */}

              <div>
                <h3 className="text-2xl font-bold">
                  Explore : <span className="text-blue-600">All</span>
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Browse our latest properties—from cozy family homes to luxury
                  estates. Every listing is carefully selected to suit different
                  lifestyles and budgets.
                </p>
              </div>

              {/* Type */}
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold">Type</h4>

                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full bg-black px-5 py-2 text-white">
                    All
                  </button>
                  <button className="rounded-full border border-gray-300 px-5 py-2 hover:bg-black hover:text-white transition">
                    Sell
                  </button>
                  <button className="rounded-full border border-gray-300 px-5 py-2 hover:bg-black hover:text-white transition">
                    Rent
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold">Category</h4>

                <div className="flex flex-wrap gap-3">
                  {["Apartments", "Condos", "Houses", "Villas"].map((item) => (
                    <button
                      key={item}
                      className="rounded-full border border-gray-300 px-5 py-2 hover:bg-black hover:text-white transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold">Location</h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Brooklyn",
                    "Manhattan",
                    "Queens",
                    "Staten Island",
                    "The Bronx",
                  ].map((item) => (
                    <button
                      key={item}
                      className="rounded-full border border-gray-300 px-5 py-2 hover:bg-black hover:text-white transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= Right ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="text-sm font-medium text-blue-600">
                    {item.title}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">{item.name}</h3>

                  <div className="mt-5 flex flex-wrap gap-5 text-gray-600">
                    <span>🛏 {item.beds} Beds</span>
                    <span>🛁 {item.baths} Baths</span>
                    <span>📐 {item.sqft} m²</span>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
                    <div>
                      <p className="text-sm text-gray-500">Starting From</p>

                      <h4 className="text-2xl font-bold text-blue-600">
                        {item.price}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src={item.agentImg}
                        alt={item.agent}
                        className="h-12 w-12 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-semibold">{item.agent}</p>
                        <span className="text-sm text-gray-500">
                          Property Agent
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
