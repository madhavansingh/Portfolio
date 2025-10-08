import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "B.Tech Student",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Developer | Lakecity Hackathon",
    companyName: "Lakecity Hackathon 2025",
    iconBg: "#383E56",
    date: "April 2025",
    points: [
      "Participated in the Lakecity Hackathon, developing innovative solutions using React and Node.js.",
      "Collaborated with team members on frontend UI and component design.",
      "Focused on rapid prototyping and effective problem-solving within the challenge timeline.",
    ],
  },
  {
    title: "Frontend Developer | mosAIc – AI in Action (The Product Folks)",
    companyName: "mosAIc | AI Hackathon by The Product Folks",
    iconBg: "#E6DEDD",
    date: "August 2025",
    points: [
      "Built a platform featuring multiple AI assistants for diverse creative and professional tasks.",
      "Integrated different AI tools into a single unified experience.",
      "Designed clean, responsive UI using React and Tailwind CSS.",
    ],
  },
  {
    title: "AI Developer | Samadhan 2.0 Hackathon – KODR AI",
    companyName: "Samadhan 2.0 Hackathon",
    iconBg: "#383E56",
    date: "September 2025",
    points: [
      "Developed KODR AI, a next-gen AI-powered assistant aimed at solving real-world coding and civic challenges.",
      "Implemented modular architecture and prompt-based logic using modern web technologies.",
      "Collaborated with a cross-functional team to present a working demo and documentation.",
    ],
  },
  {
    title: "AI/ML Developer | NASA Space Apps Challenge – NovaSync",
    companyName: "NASA Space Apps Challenge 2025",
    iconBg: "#E6DEDD",
    date: "October 2025",
    points: [
      "Built NovaSync: 'A Space Biology Knowledge Engine' blending AI/ML with NASA’s bioscience datasets.",
      "Developed a model to help scientists uncover hidden patterns in complex space biology data.",
      "Contributed to AI workflow design, research insights, and the final pitch presentation.",
    ],
  },
];

const beyondCode = [
  {
    title: "🎨 Designing UI/UX",
    description: "Exploring Figma and improving my sense of design through practical projects.",
  },
  {
    title: "📚 Learning Full Stack",
    description: "Currently deepening my understanding of React, Node.js, and databases.",
  },
  {
    title: "⚙️ Experimenting with AI",
    description: "Building small prototypes involving LLMs, digital twins, and civic-tech tools.",
  },
  {
    title: "🎧 Hobbies",
    description: "I enjoy lo-fi music, sketching UI layouts, and tinkering with side projects.",
  },
];

const projects: TProject[] = [
  {
    name: "Orvian",
    description:
      "A 3D visual collaboration platform inspired by Spline, allowing users to create and interact with real-time 3D scenes collaboratively.",
    tags: [
      { name: "threejs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "webgl", color: "pink-text-gradient" },
    ],
    image: threejs,
    sourceCodeLink: "https://github.com/madhavansingh/Orvian.git",
  },
  {
    name: "Smart Rake Planner",
    description:
      "An AI-based Decision Support System for optimizing rake formation strategies at SAIL, with real-time dashboards and ML-assisted recommendations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: backend,
    sourceCodeLink: "https://github.com/madhavansingh/smart-rake-planner.git",
  },
  {
    name: "NovaSync",
    description:
      "Developed for NASA Space Apps Challenge 2025 — a platform to sync satellite and ground station data for visualization and monitoring.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nasa-api", color: "green-text-gradient" },
      { name: "spaceapps", color: "pink-text-gradient" },
    ],
    image: mobile,
    sourceCodeLink: "https://github.com/madhavansingh/Nasa.git",
  },
];

export { services, technologies, experiences, beyondCode, projects };
