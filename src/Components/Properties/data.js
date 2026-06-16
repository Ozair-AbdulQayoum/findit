// =========================
// Hero  Section Data
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
    id: 2,
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

  {
    id: 3,
    image: New1,
    title: "New York",
    name: "Modern Apartment",
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$2,200",
    agent: "Sarah Johnson",
    agentImg: agent1,
  },
  {
    id: 4,
    image: New2,
    title: "Miami",
    name: "Luxury Condo",
    beds: 4,
    baths: 3,
    sqft: 250,
    price: "$4,000",
    agent: "David Wilson",
    agentImg: agent2,
  },
  {
    id: 5,
    image: New3,
    title: "Dallas",
    name: "Family House",
    beds: 4,
    baths: 2,
    sqft: 210,
    price: "$2,800",
    agent: "Sarah Johnson",
    agentImg: agent1,
  },
  {
    id: 6,
    image: New4,
    title: "Seattle",
    name: "Green Villa",
    beds: 5,
    baths: 4,
    sqft: 320,
    price: "$5,200",
    agent: "David Wilson",
    agentImg: agent2,
  },

  {
    id: 7,
    image: New5,
    title: "Boston",
    name: "City Loft",
    beds: 2,
    baths: 1,
    sqft: 120,
    price: "$1,500",
    agent: "Sarah Johnson",
    agentImg: agent1,
  },
  {
    id: 8,
    image: New6,
    title: "Houston",
    name: "Modern House",
    beds: 3,
    baths: 2,
    sqft: 200,
    price: "$2,400",
    agent: "David Wilson",
    agentImg: agent2,
  },
];

// =========================
// Faq  Section Data
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
      q: "How do I start the process of buying a home?",
      a: "Simply reach out to us a consultation. We'll discuss your goals, budget, and preferences, then guide you step by step.",
    },
    {
      q: "Do I need to get pre-approved for a mortgage first?",
      a: "Yes, we recommend it. Pre-approval helps you understand your budget and shows sellers you’re a serious buyer.",
    },
    {
      q: "What types of properties do you specialize in?",
      a: "We handle residential homes, luxury estates, investment properties, and select commercial spaces.",
    },
    {
      q: "How long does the buying process usually take?",
      a: "It varies, but most transactions take between 30–60 days once an offer is accepted.",
    },
    {
      q: "Do you assist with selling properties as well?",
      a: "Absolutely. From pricing strategy to marketing and negotiations, we help sellers achieve the best value for their property.",
    },
    {
      q: "What makes your agency different from others?",
      a: "Our personalized approach, strong market insights, and commitment to long-term client relationships set us apart.",
    },
  ],
};
