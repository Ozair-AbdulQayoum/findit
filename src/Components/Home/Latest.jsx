import React from "react";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { LuBed, LuSquare } from "react-icons/lu";
import { BiBath } from "react-icons/bi";

function LatestCard({ item }) {
  return (
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
}

export default LatestCard;
