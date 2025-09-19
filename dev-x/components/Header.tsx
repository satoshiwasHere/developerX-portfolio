"use client";

import NextLink from "next/link";
import { Box, Flex, HStack, IconButton, Link as ChakraLink, useColorMode, useDisclosure, useColorModeValue, Stack, Text } from "@chakra-ui/react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <ChakraLink
      as={NextLink}
      px={3}
      py={2}
      rounded={"md"}
      _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}
      href={href}
    >
      {label}
    </ChakraLink>
  );
}

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" bg={useColorModeValue("gray.50", "gray.900")} px={4} borderBottomWidth="1px">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} maxW="6xl" mx="auto">
        <IconButton
          size={"md"}
          icon={isOpen ? <FiX /> : <FiMenu />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Text fontWeight="bold">DeveloperX</Text>
          <HStack as={"nav"} spacing={2} display={{ base: "none", md: "flex" }}>
            {links.map(link => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </HStack>
        </HStack>

        <Flex alignItems={"center"}>
          <IconButton
            aria-label="Toggle color mode"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
            variant="ghost"
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={2}>
            {links.map(link => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
