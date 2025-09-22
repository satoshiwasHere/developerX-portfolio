"use client";

import { Box, Button, Heading, Stack, Text, HStack, Link, SimpleGrid, Tag, VStack } from "@chakra-ui/react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import skills from "@/data/skills";

export default function Home() {
  return (
    <Box as="section" maxW="6xl" mx="auto" px={4} py={{ base: 12, md: 24 }}>
      {/* Hero */}
      <Stack spacing={6} mb={{ base: 12, md: 16 }}>
        <Heading as="h1" size="2xl" lineHeight={1.2}>
          Hi, I’m <Text as="span" color="teal.500">DeveloperX</Text>.
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.500" maxW="3xl">
          {/* Replace this intro with your own pitch. Keep it clear and outcome-focused. */}
          I craft accessible, performant web apps using TypeScript, Next.js, and modern UI systems.
        </Text>
        <HStack spacing={4}>
          <Button as={Link} href="/projects" colorScheme="teal">View Projects</Button>
          <Button as={Link} href="/contact" variant="outline">Contact Me</Button>
        </HStack>
      </Stack>

      {/* Tech Stack */}
      <VStack align="stretch" spacing={4} mb={{ base: 12, md: 16 }}>
        <Heading as="h2" size="md">Technologies</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={3}>
          {skills.map(cat => (
            <HStack key={cat.title} align="start" spacing={3}>
              <Text fontWeight="bold" minW="110px">{cat.title}:</Text>
              <HStack wrap="wrap" spacing={2}>
                {cat.items.map(item => (
                  <Tag key={item} size="sm" colorScheme="gray">{item}</Tag>
                ))}
              </HStack>
            </HStack>
          ))}
        </SimpleGrid>
      </VStack>

      {/* Featured Projects */}
      <VStack align="stretch" spacing={4}>
        <Heading as="h2" size="md">Featured Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {projects.slice(0, 3).map(p => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              tags={p.tags}
              href={p.hrefLive ?? p.hrefRepo}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
