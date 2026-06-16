import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { propertiesData } from "./data";

const Properties = () => {
  return (
    <section className="py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            {propertiesData.badge}
          </h5>

          <h2 className="text-4xl font-bold mt-3">{propertiesData.title}</h2>
        </div>

        <p className="max-w-md mt-4 md:mt-0 text-gray-600">
          {propertiesData.subtitle}
        </p>
      </div>

      {/* First 2 large cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12 px-4">
        {propertiesData.list.slice(0, 2).map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover rounded-3xl"
            />
            <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
            <p className="text-gray-500">{item.address}</p>
          </div>
        ))}
      </div>

      {/* Remaining cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6 px-4">
        {propertiesData.list.slice(2).map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-3xl"
            />
            <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
            <p className="text-gray-500">{item.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
