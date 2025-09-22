export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Chakra UI", "Accessibility"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "Supabase", "Auth", "Serverless"],
  },
  {
    title: "DevOps / Tooling",
    items: ["GitHub Actions", "Vercel", "Testing", "Lighthouse", "CI/CD"],
  },
];

export default skills;
