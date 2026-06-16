import React from "react";
import {
  FaRegDotCircle,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { LuBed, LuSquare } from "react-icons/lu";
import { BiBath } from "react-icons/bi";

import { properties } from "./data";

const Card = ({ item }) => (
  <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-64 object-cover"
    />

    <div className="p-4">
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <FaMapMarkerAlt />
        {item.title}
      </div>

      <h3 className="text-lg font-semibold mt-1">{item.name}</h3>

      <div className="flex justify-between mt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <LuBed />
          {item.beds}
        </div>

        <div className="flex items-center gap-1">
          <BiBath />
          {item.baths}
        </div>

        <div className="flex items-center gap-1">
          <LuSquare />
          {item.sqft} sqft
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center border-t pt-3 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <img
            src={item.agentImg}
            alt={item.agent}
            className="w-6 h-6 rounded-full object-cover"
          />
          {item.agent}
        </div>

        <div className="flex items-center gap-2 font-semibold text-black">
          <FaMoneyBillWave />
          {item.price}
        </div>
      </div>
    </div>
  </div>
);

const Latest = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Latest Properties
          </h5>

          <h2 className="text-4xl font-bold mt-3">Fresh on the market</h2>
        </div>

        <p className="max-w-md mt-4 md:mt-0 text-gray-600">
          Stay ahead of the curve with our newest listings — handpicked homes
          and investments recently added to the market.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-600 font-medium">
        <span className="text-black border-b-2 border-black cursor-pointer">
          View All
        </span>
        <span>Apartments</span>
        <span>Condos</span>
        <span>Houses</span>
        <span>Villas</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 px-4">
        {properties.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          View All Properties
        </button>
      </div>
    </section>
  );
};

export default Latest;
