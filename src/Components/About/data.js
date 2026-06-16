// =========================
// Hero Section Data
// =========================

import hero1 from "../../assets/About-1.jpg";
import hero2 from "../../assets/About-2.jpg";

export const aboutData = {
  badge: "About Us",
  title: "Building dreams, one home at a time",
  description:
    "We’re more than real estate agents — we’re your trusted partners, helping you find the right property with confidence and ease.",

  buttonText: "Contact Us",

  images: [hero1, hero2],

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
// History Section Data
// =========================

export const historyData = {
  badge: "Our History",
  title: "A legacy of trust and growth",
  description:
    "From a small vision to a trusted real estate partner, our journey has been defined by dedication, growth, and client success.",

  timeline: [
    {
      id: 1,
      year: "2005",
      title: "Founded",
      desc: "Started with a mission to make real estate transparent and client-focused.",
    },
    {
      id: 2,
      year: "2010",
      title: "Building Reputation",
      desc: "Earned trust through successful transactions and expanded our residential and commercial services.",
    },
    {
      id: 3,
      year: "2015",
      title: "Expanding Horizons",
      desc: "Reached 250+ closed deals and introduced specialized support for investors and luxury buyers.",
    },
    {
      id: 4,
      year: "2025",
      title: "Leading Today",
      desc: "Achieved $150M+ in sales and served 500+ clients, becoming a trusted partner in every real estate journey.",
    },
  ],
};

// =========================
// Process Section Data
// =========================

import Img1 from "../../assets/About-3.jpg";

export const processData = {
  badge: "Our Process",
  title: "Simple steps to your dream home",
  description:
    "We make buying, selling, or investing in property effortless. Here’s how we guide you every step of the way.",

  image: Img1,

  steps: [
    {
      id: 1,
      title: "01. Discover",
      desc: "We start by understanding your goals and lifestyle, then curate properties that match.",
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
// Team Section Data
// =========================

import Team1 from "../../assets/team1.png";
import Team2 from "../../assets/team2.png";
import Team3 from "../../assets/team3.png";
import Team4 from "../../assets/team4.jpg";

export const teamData = {
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
    {
      id: 2,
      name: "David S.",
      image: clients2,
      title: "Exceptional Service",
    },
    {
      id: 3,
      name: "Olivia C.",
      image: clients3,
      title: "Stress-Free Experience",
    },
    {
      id: 4,
      name: "Peter R.",
      image: clients4,
      title: "Above and Beyond",
    },
    {
      id: 5,
      name: "Sophia M.",
      image: clients5,
      title: "Expert Negotiation",
    },
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
    {
      id: 8,
      name: "John D.",
      image: clients1,
      title: "Confident Decisions",
    },
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
// Faq Section Data
// =========================

import Faqimg from "../../assets/Faq-img.png";

export const faqData = {
  badge: "FAQ",
  title: "Frequently Asked Questions",
  description:
    "Got questions? We’ve answered some of the most common ones to guide you through your real estate journey.",

  image: Faqimg,

  faqs: [
    {
      id: 1,
      q: "How do I start the process of buying a home?",
      a: "Simply reach out to us for a consultation. We'll discuss your goals, budget, and preferences, then guide you step by step.",
    },
    {
      id: 2,
      q: "Do I need to get pre-approved for a mortgage first?",
      a: "Yes, we recommend it. Pre-approval helps you understand your budget and shows sellers you’re a serious buyer.",
    },
    {
      id: 3,
      q: "What types of properties do you specialize in?",
      a: "We handle residential homes, luxury estates, investment properties, and select commercial spaces.",
    },
    {
      id: 4,
      q: "How long does the buying process usually take?",
      a: "It varies, but most transactions take between 30–60 days once an offer is accepted.",
    },
    {
      id: 5,
      q: "Do you assist with selling properties as well?",
      a: "Absolutely. From pricing strategy to marketing and negotiations, we help sellers achieve the best value.",
    },
    {
      id: 6,
      q: "What makes your agency different from others?",
      a: "Our personalized approach, strong market insights, and commitment to long-term client relationships set us apart.",
    },
  ],
};
