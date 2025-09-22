"use client";

import { Box, Text, Link, Stack, useColorModeValue, HStack } from "@chakra-ui/react";
import socials from "@/data/socials";

export default function Footer() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.600", "gray.400");
  return (
    <Box as="footer" bg={bg} borderTopWidth="1px" mt={8} py={8}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center" justify="space-between" maxW="6xl" mx="auto" px={4}>
        <Text color={color}>© {new Date().getFullYear()} DeveloperX. All rights reserved.</Text>
        <Stack direction="row" spacing={6} align="center">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <HStack spacing={4}>
            {socials.map(s => (
              <Link key={s.label} href={s.href} isExternal>
                {s.label}
              </Link>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
}
