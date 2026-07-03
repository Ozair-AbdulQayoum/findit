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
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* LEFT */}
        <div className="flex-1">
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Latest Properties
          </h5>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Fresh on the market
          </h2>

          <p className="text-gray-600 mt-4">
            Stay ahead of the curve with our newest listings.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <h3 className="text-xl font-semibold">{item.name}</h3>

                  <div className="flex gap-4 text-sm text-gray-600 mt-2">
                    <span>🛏 {item.beds}</span>
                    <span>🛁 {item.baths}</span>
                    <span>📏 {item.sqft}m²</span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <p className="font-bold">{item.price}</p>

                    <div className="flex items-center gap-2">
                      <img
                        src={item.agentImg}
                        alt={item.agent}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-gray-600">
                        {item.agent}
                      </span>
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
