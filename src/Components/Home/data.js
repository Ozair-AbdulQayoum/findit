// =========================
// Hero Section Data
// =========================

import HeroImg from "../../assets/Img-1.png";

export const heroData = {
  badgeText: "Your trusted partner in real estate",
  title: "Your dream home, just a step away",
  description:
    "Discover handpicked properties that match your lifestyle, whether you're buying, selling, or investing.",
  image: HeroImg,
  buttons: {
    primary: "Explore Properties",
    secondary: "Book a Visit",
  },
};

// =========================
// Properties Section Data
// =========================

import Home1 from "../../assets/Home-1.jpg";
import Home2 from "../../assets/Home-2.jpg";
import Home3 from "../../assets/Home-3.jpg";
import Home4 from "../../assets/Home-4.jpg";
import Home5 from "../../assets/Home-5.jpg";

export const propertiesData = {
  title: "Explore Our Featured Listings",
  subtitle:
    "Discover premium properties carefully selected for comfort, style, and investment value.",
  badge: "Featured Properties",

  list: [
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
  ],
};

// =========================
// Benefits Section Data
// =========================

import BenefitsImg from "../../assets/Img-2.jpg";

export const benefitsData = {
  badge: "Our Benefits",
  title: "Building dreams, one home at a time",
  description:
    "Our mission goes beyond real estate — it’s about guiding you through one of life’s biggest milestones with heart, expertise, and unwavering commitment.",

  image: BenefitsImg,

  items: [
    {
      id: 1,
      title: "01. Buy a new home",
      desc: "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    },
    {
      id: 2,
      title: "02. Rent a home",
      desc: "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored to your lifestyle needs.",
    },
    {
      id: 3,
      title: "03. Sell a home",
      desc: "Sell confidently with expert guidance and effective strategies to showcase your property's best features.",
    },
  ],

  buttonText: "More about us",
};

// =========================
// Explore Section Data
// =========================

import city1 from "../../assets/city-1.jpg";
import city2 from "../../assets/city-2.jpg";
import city3 from "../../assets/city-3.jpg";
import city4 from "../../assets/city-4.jpg";
import city5 from "../../assets/city-5.jpg";

export const exploreData = {
  title: "Our Locations For You",
  badge: "Explore Cities",
  description:
    "Each neighborhood has its own story. Discover the areas that match your lifestyle.",

  cities: [
    { id: 1, image: city1, name: "Brooklyn", amount: "3 Properties" },
    { id: 2, image: city2, name: "Manhattan", amount: "4 Properties" },
    { id: 3, image: city3, name: "Queens", amount: "6 Properties" },
    { id: 4, image: city4, name: "Staten Island", amount: "4 Properties" },
    { id: 5, image: city5, name: "The Bronx", amount: "4 Properties" },
  ],
};

// =========================
// Process Section Data
// =========================

import BgImg from "../../assets/bg.jpg";

export const processData = {
  background: BgImg,

  badge: "Our Process",
  title: "Simple steps to your dream home",
  description:
    "We make buying, selling, or investing in property effortless. Here’s how we guide you every step of the way.",

  steps: [
    {
      id: 1,
      title: "01. Discover",
      desc: "We start by understanding your goals and lifestyle, then curate properties that match",
    },
    {
      id: 2,
      title: "02. Experience",
      desc: "Guided viewings and expert insights help you explore the best options with confidence.",
    },
    {
      id: 3,
      title: "03. Secure",
      desc: "From negotiation to closing, we ensure a seamless, stress-free transaction.",
    },
  ],

  buttonText: "Start your journey",
};

// =========================
// Latest Section Data
// =========================

import New1 from "../../assets/New-1.jpg";
import New2 from "../../assets/New-2.jpg";
import New3 from "../../assets/New-3.jpg";
import New4 from "../../assets/New-4.jpg";
import New5 from "../../assets/New-5.jpg";
import New6 from "../../assets/New-6.jpg";

import agent1 from "../../assets/agent-1.jpg";
import agent2 from "../../assets/agent-2.jpg";

export const latestData = {
  badge: "Latest Properties",
  title: "Fresh on the market",
  description:
    "Stay ahead of the curve with our newest listings — handpicked homes and investments recently added to the market.",

  filters: ["View All", "Apartments", "Condos", "Houses", "Villas"],

  properties: [
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
  ],
};

// =========================
// Clients Section Data
// =========================

import clients1 from "../../assets/clients-1.jpg";
import clients2 from "../../assets/clients-2.jpg";
import clients3 from "../../assets/clients-3.webp";
import clients4 from "../../assets/clients-4.png";
import clients5 from "../../assets/clients-5.webp";
import clients6 from "../../assets/clients-6.webp";
import clients7 from "../../assets/clients-7.jpg";

export const clientsData = {
  badge: "Testimonials",
  title: "What our clients say",
  description:
    "Real stories from homeowners and investors who trusted us to guide their real estate journey.",

  testimonials: [
    {
      id: 1,
      name: "Mia F.",
      image: clients1,
      title: "Support You Can Rely On",
    },
    { id: 2, name: "David S.", image: clients2, title: "Exceptional Service" },
    {
      id: 3,
      name: "Olivia C.",
      image: clients3,
      title: "Stress-Free Experience",
    },
    { id: 4, name: "Peter R.", image: clients4, title: "Above and Beyond" },
    { id: 5, name: "Sophia M.", image: clients5, title: "Expert Negotiation" },
    {
      id: 6,
      name: "James P.",
      image: clients6,
      title: "Exceptional Experience",
    },
    {
      id: 7,
      name: "Emily T.",
      image: clients7,
      title: "Professional Guidance",
    },
    { id: 8, name: "John D.", image: clients1, title: "Confident Decisions" },
  ],

  stats: [
    {
      id: 1,
      value: "$150M+",
      title: "Properties Sold",
      desc: "Over $150M in sales, helping clients find homes and investments with ease and confidence.",
    },
    {
      id: 2,
      value: "500+",
      title: "Happy Clients",
      desc: "More than 500 satisfied clients trust us to make their real estate journey smooth and successful.",
    },
    {
      id: 3,
      value: "20+",
      title: "Years of Expertise",
      desc: "Over 20 years of experience guiding clients with market insight and professional advice.",
    },
  ],
};

// =========================
// Insights Section Data
// =========================

import Update1 from "../../assets/Updates-1.jpg";
import Update2 from "../../assets/Updates-2.jpg";
import Update3 from "../../assets/Updates-3.jpg";

export const insightsData = {
  badge: "Latest News",
  title: "Insights & Updates",
  description:
    "Stay informed with expert tips, market trends, and property advice to guide your real estate journey.",

  posts: [
    {
      id: 1,
      image: Update1,
      title: "The Power of Natural Light in Architectural Design",
      text: "Natural light plays a crucial role in shaping architectural design, offering both aesthetic and functional benefits.",
    },
    {
      id: 2,
      image: Update2,
      title: "Photography: Capturing the Essence of Buildings",
      text: "Architectural photography goes beyond simply documenting structures; it captures the soul of a building.",
    },
    {
      id: 3,
      image: Update3,
      title: "The Future of Smart Homes: Innovative Interior Design",
      text: "The rise of smart homes is transforming the way we live, blending cutting-edge technology with modern design.",
    },
  ],
};
