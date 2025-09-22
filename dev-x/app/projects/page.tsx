export const metadata = {
  title: "Projects | DeveloperX",
  description: "Selected projects by DeveloperX",
};

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Box as="section" maxW="6xl" mx="auto" px={4} py={12}>
      <Heading as="h1" size="xl" mb={6}>Projects</Heading>
      {projects.length === 0 ? (
        <Text color="gray.500">No projects yet. Add your projects to the list in `app/projects/page.tsx`.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {projects.map(p => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              tags={p.tags}
              href={p.hrefLive ?? p.hrefRepo}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
