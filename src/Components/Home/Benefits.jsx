import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import BenefitsImg from "../../assets/Img-2.jpg";

function Benefits() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src={BenefitsImg}
            alt="Benefits"
            className="w-full rounded-3xl object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Our Benefits
          </h5>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Building dreams, one home at a time
          </h2>

          <p className="text-gray-600 mt-5">
            Our mission goes beyond real estate — it's about guiding you through
            one of life's biggest milestones with heart, expertise, and
            unwavering commitment.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">01. Buy a new home</h3>
              <p className="text-gray-600 mt-2">
                Discover your dream home effortlessly. Explore diverse
                properties and expert guidance for a seamless buying experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">02. Rent a home</h3>
              <p className="text-gray-600 mt-2">
                Discover your perfect rental effortlessly. Explore a diverse
                variety of listings tailored to your lifestyle needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">03. Sell a home</h3>
              <p className="text-gray-600 mt-2">
                Sell confidently with expert guidance and effective strategies
                to showcase your property's best features.
              </p>
            </div>
          </div>

          <button className="mt-10 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition">
            More about us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
