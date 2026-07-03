import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Team1 from "../../assets/team1.png";
import Team2 from "../../assets/team2.png";
import Team3 from "../../assets/team3.png";
import Team4 from "../../assets/team4.jpg";

export default function Team() {
  const data = {
    badge: "Our Team",
    title: "Dedicated experts, working for you",
    description:
      "Behind every successful property journey is a team of professionals committed to guiding you with trust, expertise, and care.",

    members: [
      {
        id: 1,
        img: Team1,
        name: "Michael Carter",
        title: "Founder & Lead Consultant",
      },
      {
        id: 2,
        img: Team2,
        name: "Sophia Martinez",
        title: "Senior Property Advisor",
      },
      {
        id: 3,
        img: Team3,
        name: "Daniel Wong",
        title: "Investment Specialist",
      },
      {
        id: 4,
        img: Team4,
        name: "Emma Johnson",
        title: "Client Relations Manager",
      },
    ],
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              {data.badge}
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 max-w-xl">
              {data.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600">{data.description}</p>
          </div>
        </div>

        {/* TEAM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {data.members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500 mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
