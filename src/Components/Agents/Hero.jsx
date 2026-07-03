import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Agent1 from "../../assets/Agent1.jpg";
import Agent2 from "../../assets/Agent2.jpg";
import Agent3 from "../../assets/Agent3.jpg";

export default function Agents() {
  const agents = [
    {
      id: 1,
      img: Agent1,
      name: "Steve Parker",
      email: "steveparker@example.com",
      role: "Senior Real Estate Agent",
    },
    {
      id: 2,
      img: Agent2,
      name: "Ingrid Vulk",
      email: "ingridvulk@example.com",
      role: "Property Consultant",
    },
    {
      id: 3,
      img: Agent3,
      name: "Rachel Gray",
      email: "rachelgray@example.com",
      role: "Luxury Property Specialist",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              Our Agents
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 max-w-xl">
              Meet the experts behind your real estate journey
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600">
              Our agents combine local knowledge, market expertise, and a
              passion for helping clients find the right property.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={agent.img}
                alt={agent.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{agent.name}</h3>
                <p className="text-gray-500 mt-1">{agent.role}</p>
                <p className="text-sm text-gray-400 mt-2">{agent.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
