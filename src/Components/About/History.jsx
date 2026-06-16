import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { historyData } from "./data";

export default function History() {
  return (
    <section>
      {/* HEADER */}
      <div className="text-center mb-12">
        <h5 className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
          <FaRegDotCircle />
          {historyData.badge}
        </h5>

        <h2 className="text-4xl font-bold mt-3">{historyData.title}</h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          {historyData.description}
        </p>
      </div>

      {/* TIMELINE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {historyData.timeline.map((item) => (
              <div key={item.id}>
                <h2 className="text-4xl font-bold">{item.year}</h2>

                <h4 className="mt-3 text-xl font-semibold">{item.title}</h4>

                <p className="mt-4 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
