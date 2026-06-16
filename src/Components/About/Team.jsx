import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { teamData } from "./data";

export default function Team() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              {teamData.badge}
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 max-w-xl">
              {teamData.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600">{teamData.description}</p>
          </div>
        </div>

        {/* TEAM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {teamData.members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>

                <p className="text-gray-500 mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
