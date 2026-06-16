import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { exploreData } from "./data";

const Explore = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h5 className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
          <FaRegDotCircle />
          {exploreData.badge}
        </h5>

        <h2 className="text-4xl font-bold mt-3">{exploreData.title}</h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          {exploreData.description}
        </p>
      </div>

      {/* First 3 cities */}
      <div className="grid md:grid-cols-3 gap-6">
        {exploreData.cities.slice(0, 3).map((city) => (
          <div key={city.id} className="text-center">
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-72 object-cover rounded-3xl"
            />

            <h3 className="text-xl font-semibold mt-3">{city.name}</h3>
            <p className="text-gray-500">{city.amount}</p>
          </div>
        ))}
      </div>

      {/* Remaining cities */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {exploreData.cities.slice(3).map((city) => (
          <div key={city.id} className="text-center">
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-72 object-cover rounded-3xl"
            />

            <h3 className="text-xl font-semibold mt-3">{city.name}</h3>
            <p className="text-gray-500">{city.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
