export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  hrefLive?: string;
  hrefRepo?: string;
  image?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: "portfolio-starter",
    title: "Portfolio Starter",
    description: "This portfolio scaffold built with Next.js, Chakra UI, and TypeScript.",
    tags: ["Next.js", "Chakra UI", "TypeScript"],
    hrefRepo: "https://github.com/satoshiwasHere/developerX-portfolio",
  },
  {
    id: "realtime-dashboard",
    title: "Realtime Dashboard",
    description: "Metrics dashboard with streaming updates and responsive charts.",
    tags: ["Next.js", "WebSockets", "Chart.js"],
    hrefLive: "#",
  },
  {
    id: "design-system",
    title: "Design System",
    description: "Reusable component library with tokens, theming, and docs.",
    tags: ["React", "Storybook", "Design Tokens"],
    hrefLive: "#",
  },
];

export default projects;
