export type Experience = {
  company: string;
  role: string;
  start: string; // YYYY-MM
  end: string | "Present";
  bullets: string[];
  logo?: string;
};

export const experience: Experience[] = [
  {
    company: "Acme Co.",
    role: "Frontend Engineer",
    start: "2023-01",
    end: "Present",
    bullets: [
      "Built accessible, responsive UI components and design system primitives.",
      "Improved Web Vitals (LCP/CLS) across key pages by ~30% through code-splitting and image optimization.",
      "Collaborated with designers and backend engineers to ship features end-to-end.",
    ],
  },
  {
    company: "Freelance",
    role: "Full‑stack Developer",
    start: "2021-06",
    end: "2022-12",
    bullets: [
      "Delivered 10+ small business websites and web apps with modern stacks.",
      "Set up CI/CD and cloud hosting workflows with Vercel and GitHub Actions.",
    ],
  },
];

export default experience;
