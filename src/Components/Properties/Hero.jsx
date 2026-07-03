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
        <div className="grid lg:grid-cols-[420px_1fr] gap-16">
          {/* ================= Left Content ================= */}
          <div className="sticky top-28 h-fit">
            <h5 className="flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-wider">
              <FaRegDotCircle />
              Latest Properties
            </h5>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Fresh on the market
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Stay ahead of the curve with our newest listings.
            </p>

            {/* Filter Card */}
            <div className="mt-10 rounded-3xl bg-white border border-gray-200 shadow-lg p-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Explore :<span className="text-blue-600 ml-2">All</span>
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Browse our latest properties—from cozy family homes to luxury
                  estates. Every listing is carefully selected to suit different
                  lifestyles, preferences, and budgets.
                </p>
              </div>

              {/* Type */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Type</h4>

                <div className="flex flex-wrap gap-3">
                  <button className="px-5 py-2 rounded-full bg-black text-white">
                    All
                  </button>

                  <button className="px-5 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
                    Sell
                  </button>

                  <button className="px-5 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
                    Rent
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Category</h4>

                <div className="flex flex-wrap gap-3">
                  {["Apartments", "Condos", "Houses", "Villas"].map((item) => (
                    <button
                      key={item}
                      className="px-5 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Location</h4>

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
                      className="px-5 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= Right Properties ================= */}
          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">
                    {item.title}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <div className="flex flex-wrap gap-5 mt-5 text-gray-600">
                    <span>🛏 {item.beds} Beds</span>
                    <span>🛁 {item.baths} Baths</span>
                    <span>📐 {item.sqft} m²</span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
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
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.agent}
                        </p>

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
