import React from "react";
import { MdStars } from "react-icons/md";
import { BiPlayCircle } from "react-icons/bi";

import HeroImg from "../../assets/Img-1.png";

function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm font-medium">
            <MdStars className="text-yellow-500 text-lg" />
            Your trusted partner in real estate
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Your dream home, just a step away
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-base md:text-lg">
            Discover handpicked properties that match your lifestyle, whether
            you're buying, selling, or investing.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-10">
            <button className="px-7 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Explore Properties
            </button>

            <button className="px-7 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              Book a Visit
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-5xl mx-auto mt-16">
          <img
            src={HeroImg}
            alt="Real Estate"
            className="w-full rounded-3xl object-cover"
          />

          {/* Play Button */}
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-16 h-16 md:w-20 md:h-20 bg-white rounded-full
            flex items-center justify-center shadow-xl hover:scale-110 transition"
          >
            <BiPlayCircle className="text-4xl md:text-5xl text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
