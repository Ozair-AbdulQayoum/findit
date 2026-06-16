import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { properties } from "./data";

export default function LatestProperties() {
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
                <img src={item.image} className="w-full h-56 object-cover" />

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
