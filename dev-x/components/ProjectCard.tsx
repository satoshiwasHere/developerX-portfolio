"use client";

import { Box, Heading, Text, Stack, Link, useColorModeValue, Tag, HStack } from "@chakra-ui/react";

export type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
};

export default function ProjectCard({ title, description, href, tags = [] }: ProjectCardProps) {
  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");

  return (
    <Box borderWidth="1px" borderColor={border} rounded="md" p={5} bg={bg} _hover={{ shadow: "md" }} transition="box-shadow 0.2s ease">
      <Stack spacing={3}>
        <Heading as="h3" size="md">
          {href ? (
            <Link href={href} isExternal>
              {title}
            </Link>
          ) : (
            title
          )}
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.300")}>{description}</Text>
        {tags.length > 0 && (
          <HStack spacing={2} wrap="wrap">
            {tags.map(tag => (
              <Tag key={tag} size="sm" colorScheme="gray">
                {tag}
              </Tag>
            ))}
          </HStack>
        )}
      </Stack>
    </Box>
  );
}
