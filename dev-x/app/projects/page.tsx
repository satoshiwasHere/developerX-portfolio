export const metadata = {
  title: "Projects | DeveloperX",
  description: "Selected projects by DeveloperX",
};

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Starter",
      description: "This very portfolio scaffold built with Next.js, Chakra UI, and Supabase.",
      href: "#",
      tags: ["Next.js", "Chakra UI", "TypeScript"],
    },
  ];

  return (
    <Box as="section" maxW="6xl" mx="auto" px={4} py={12}>
      <Heading as="h1" size="xl" mb={6}>Projects</Heading>
      {projects.length === 0 ? (
        <Text color="gray.500">No projects yet. Add your projects to the list in `app/projects/page.tsx`.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {projects.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
