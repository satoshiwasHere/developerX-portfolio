"use client";

import { Box, Button, Heading, Stack, Text, HStack, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="section" maxW="6xl" mx="auto" px={4} py={{ base: 12, md: 24 }}>
      <Stack spacing={6}>
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
    </Box>
  );
}
