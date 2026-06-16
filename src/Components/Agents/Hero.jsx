import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { agents } from "./data";

export default function Agents() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
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
