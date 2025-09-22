export const metadata = {
  title: "About | DeveloperX",
  description: "About DeveloperX — skills and background",
};

import { Box, Heading, Text, Stack, List, ListItem, ListIcon, Divider } from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import skills from "@/data/skills";
import experience from "@/data/experience";

export default function AboutPage() {
  return (
    <Box as="section" maxW="4xl" mx="auto" px={4} py={12}>
      <Stack spacing={8}>
        <Heading as="h1" size="xl">About Me</Heading>
        <Text fontSize="lg" color="gray.500">
          {/* Replace with a short bio. Keep concise and highlight your unique value. */}
          I’m a software developer passionate about building delightful, accessible web experiences.
        </Text>

        <Divider />
        <Heading as="h2" size="md">Skills</Heading>
        <List spacing={3}>
          {skills.flatMap(cat => cat.items.map(item => `${cat.title}: ${item}`)).map(item => (
            <ListItem key={item}>
              <ListIcon as={FiCheckCircle} color="green.400" />
              {item}
            </ListItem>
          ))}
        </List>

        <Divider />
        <Heading as="h2" size="md">Experience</Heading>
        <Stack spacing={4}>
          {experience.map(exp => (
            <Box key={`${exp.company}-${exp.role}`} borderWidth="1px" rounded="md" p={4}>
              <Heading as="h3" size="sm">{exp.role} — {exp.company}</Heading>
              <Text color="gray.500" fontSize="sm">{exp.start} — {exp.end}</Text>
              <List mt={2} spacing={2}>
                {exp.bullets.map(b => (
                  <ListItem key={b}>
                    <ListIcon as={FiCheckCircle} color="green.400" />
                    {b}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
