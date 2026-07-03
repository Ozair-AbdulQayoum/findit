import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import city1 from "../../assets/city-1.jpg";
import city2 from "../../assets/city-2.jpg";
import city3 from "../../assets/city-3.jpg";
import city4 from "../../assets/city-4.jpg";
import city5 from "../../assets/city-5.jpg";

const Explore = () => {
  const cities = [
    {
      id: 1,
      image: city1,
      name: "Brooklyn",
      amount: "3 Properties",
    },
    {
      id: 2,
      image: city2,
      name: "Manhattan",
      amount: "4 Properties",
    },
    {
      id: 3,
      image: city3,
      name: "Queens",
      amount: "6 Properties",
    },
    {
      id: 4,
      image: city4,
      name: "Staten Island",
      amount: "4 Properties",
    },
    {
      id: 5,
      image: city5,
      name: "The Bronx",
      amount: "4 Properties",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h5 className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Explore Cities
          </h5>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Our Locations For You
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600">
            Each neighborhood has its own story. Discover the areas that match
            your lifestyle.
          </p>
        </div>

        {/* Top 3 Cities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.slice(0, 3).map((city) => (
            <div key={city.id} className="group text-center">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-semibold mt-4">{city.name}</h3>
              <p className="text-gray-500 mt-1">{city.amount}</p>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {cities.slice(3).map((city) => (
            <div key={city.id} className="group text-center">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-semibold mt-4">{city.name}</h3>
              <p className="text-gray-500 mt-1">{city.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
