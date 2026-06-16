// =========================
// Hero  Section Data
// =========================

import Agent1 from "../../assets/Agent1.jpg";
import Agent2 from "../../assets/Agent2.jpg";
import Agent3 from "../../assets/Agent3.jpg";

export const agents = [
  {
    id: 1,
    img: Agent1,
    name: "Steve Parker",
    email: "steveparker@example.com",
    role: "Senior Real Estate Agent",
  },
  {
    id: 2,
    img: Agent2,
    name: "Ingrid Vulk",
    email: "ingridvulk@example.com",
    role: "Property Consultant",
  },
  {
    id: 3,
    img: Agent3,
    name: "Rachel Gray",
    email: "rachelgray@example.com",
    role: "Luxury Property Specialist",
  },
];

// =========================
// Benefits  Section Data
// =========================

import Img1 from "../../assets/Img-2.jpg";

export const benefitsData = {
  image: Img1,
  titleBadge: "Our Benefits",
  heading: "Building dreams, one home at a time",
  description:
    "Our mission goes beyond real estate — it’s about guiding you through one of life’s biggest milestones with heart, expertise, and unwavering commitment.",

  items: [
    {
      id: 1,
      title: "Buy a new home",
      text: "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    },
    {
      id: 2,
      title: "Rent a home",
      text: "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
    },
    {
      id: 3,
      title: "Sell a home",
      text: "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
    },
  ],

  buttonText: "More about us",
};

// =========================
// Latest  Section Data
// =========================

import New1 from "../../assets/New-1.jpg";
import New2 from "../../assets/New-2.jpg";
import New3 from "../../assets/New-3.jpg";
import New4 from "../../assets/New-4.jpg";
import New5 from "../../assets/New-5.jpg";
import New6 from "../../assets/New-6.jpg";

import agent1 from "../../assets/agent-1.jpg";
import agent2 from "../../assets/agent-2.jpg";

export const properties = [
  {
    id: 1,
    image: New1,
    title: "Staten Island",
    name: "South Sunlight Apartment",
    beds: 4,
    baths: 2,
    sqft: 160,
    price: "$1,200",
    agent: "Rachel Gray",
    agentImg: agent1,
  },
  {
    id: 2,
    image: New2,
    title: "Brooklyn Heights",
    name: "Modern Family Home",
    beds: 3,
    baths: 2,
    sqft: 140,
    price: "$1,500",
    agent: "John Smith",
    agentImg: agent2,
  },
  {
    id: 3,
    image: New3,
    title: "Manhattan",
    name: "Luxury Condo",
    beds: 2,
    baths: 1,
    sqft: 120,
    price: "$2,200",
    agent: "Emily Brown",
    agentImg: agent1,
  },
  {
    id: 4,
    image: New4,
    title: "Queens",
    name: "City Apartment",
    beds: 3,
    baths: 2,
    sqft: 150,
    price: "$1,800",
    agent: "Michael Lee",
    agentImg: agent2,
  },
  {
    id: 5,
    image: New5,
    title: "Los Angeles",
    name: "Beach Villa",
    beds: 5,
    baths: 3,
    sqft: 300,
    price: "$3,500",
    agent: "Sarah Johnson",
    agentImg: agent1,
  },
  {
    id: 6,
    image: New6,
    title: "Chicago",
    name: "Urban Loft",
    beds: 2,
    baths: 1,
    sqft: 110,
    price: "$1,100",
    agent: "David Wilson",
    agentImg: agent2,
  },
];
