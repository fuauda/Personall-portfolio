import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/userauth.webp",
      DARK: "/images/projects/userauth.webp",
    },
  },


  {
    index: 2,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/realstatae.webp",
      DARK: "/images/projects/realstatae.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "User Auth",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/userauth.webp",
      "/images/projects/userauth.webp",
    ],
    description:
      "A user authentication system built with Node.js that allows users to securely register, log in, and manage their sessions. It uses JWT for token-based authentication and provides a seamless, secure experience for managing user access.",
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "Realstate app",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/realstatae.webp",
      "/images/projects/realstatae.webpp",
      "/images/projects/realstatae.webp",
    ],
    description:
      "A real estate website that showcases property listings with key details like bedrooms, bathrooms, and size. It features an intuitive design and easy navigation, allowing users to quickly find and explore available properties.",
    sourceCodeHref: "https://github.com/fuauda",
    liveWebsiteHref: "https://kannban-board.vercel.app",
  },
  
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "#",
    liveWebsiteHref: siteMetadata.siteUrl,
  },

  {
    name: "Stock Managment",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/fuauda",
  },
];
