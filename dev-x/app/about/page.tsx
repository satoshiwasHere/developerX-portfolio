export const metadata = {
  title: "About | DeveloperX",
  description: "About DeveloperX — skills and background",
};

import { Box, Heading, Text, Stack, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";

export default function AboutPage() {
  return (
    <Box as="section" maxW="4xl" mx="auto" px={4} py={12}>
      <Stack spacing={6}>
        <Heading as="h1" size="xl">About Me</Heading>
        <Text fontSize="lg" color="gray.500">
          {/* Replace with a short bio. Keep concise and highlight your unique value. */}
          I’m a software developer passionate about building delightful, accessible web experiences.
        </Text>
        <Heading as="h2" size="md">Skills</Heading>
        <List spacing={3}>
          {[
            "TypeScript, React, Next.js",
            "Node.js, API design",
            "UI/UX, Design Systems",
            "Cloud, CI/CD",
          ].map(item => (
            <ListItem key={item}>
              <ListIcon as={FiCheckCircle} color="green.400" />
              {item}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
}
