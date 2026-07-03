import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Home1 from "../../assets/Home-1.jpg";
import Home2 from "../../assets/Home-2.jpg";
import Home3 from "../../assets/Home-3.jpg";
import Home4 from "../../assets/Home-4.jpg";
import Home5 from "../../assets/Home-5.jpg";

const Properties = () => {
  const properties = [
    {
      image: Home1,
      name: "Marble House",
      address: "161-03 84th Ave, Queens, NY 11432, USA",
    },
    {
      image: Home2,
      name: "Family Mansion",
      address: "654 Water St, Manhattan, NY 10002, USA",
    },
    {
      image: Home3,
      name: "South Side Garden",
      address: "161-03 84th Ave, Queens, NY 11432, USA",
    },
    {
      image: Home4,
      name: "Modern Family Home",
      address: "654 Water St, New York, NY 10002, USA",
    },
    {
      image: Home5,
      name: "Rustic Forest Cabin",
      address: "1845 Tenbroeck Ave, The Bronx, NY 10461, USA",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              Featured Properties
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Explore Our Featured Listings
            </h2>
          </div>

          <p className="max-w-md text-gray-600">
            Discover premium properties carefully selected for comfort, style,
            and investment value.
          </p>
        </div>

        {/* First 2 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {properties.slice(0, 2).map((item, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-semibold mt-4">{item.name}</h3>
              <p className="text-gray-500 mt-1">{item.address}</p>
            </div>
          ))}
        </div>

        {/* Remaining 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {properties.slice(2).map((item, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
              <p className="text-gray-500 mt-1">{item.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
