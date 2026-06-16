import React from "react";
import { motion } from "framer-motion";
import { FaRegDotCircle, FaStar } from "react-icons/fa";
import { clientsData } from "./data";

const Clients = () => {
  const firstRow = clientsData.testimonials.slice(0, 4);
  const secondRow = clientsData.testimonials.slice(4, 8);

  const Card = ({ item }) => (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl h-[260px] flex flex-col"
    >
      <div className="flex gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={14} />
        ))}
      </div>

      <h3 className="font-semibold text-lg mt-4">{item.title}</h3>

      <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-1">
        Their guidance made the entire process simple and stress-free. We felt
        confident every step of the way and couldn't be happier with the
        outcome.
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium text-gray-700">{item.name}</span>
      </div>
    </motion.div>
  );

  const Row = ({ items, reverse = false }) => {
    const duplicatedItems = [...items, ...items];

    return (
      <div className="overflow-hidden py-3">
        <motion.div
          className="flex gap-6 w-max"
          animate={{
            x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="w-[320px] flex-shrink-0">
              <Card item={item} />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <>
      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-100 overflow-hidden">
        <div className="text-center mb-12">
          <h5 className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 uppercase">
            <FaRegDotCircle />
            {clientsData.badge}
          </h5>

          <h2 className="text-5xl font-bold mt-4">{clientsData.title}</h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            {clientsData.description}
          </p>
        </div>

        <div
          className="relative mt-16"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <Row items={firstRow} />
          <Row items={secondRow} reverse />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-4 text-center">
          {clientsData.stats.map((stat, i) => (
            <div
              key={stat.id}
              className={i !== 2 ? "md:border-r border-gray-700 px-6" : ""}
            >
              <h2 className="text-5xl font-bold">{stat.value}</h2>
              <h4 className="mt-3 text-xl font-semibold">{stat.title}</h4>
              <p className="text-gray-400 mt-4">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Clients;
