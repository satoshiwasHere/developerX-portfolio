"use client";

import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, Stack, Alert, AlertIcon, Text, HStack, Link } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import socials from "@/data/socials";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm<ContactForm>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactForm) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <Box as="section" maxW="2xl" mx="auto" px={4} py={12}>
      <Heading as="h1" size="xl" mb={4}>Contact</Heading>
      <Text color="gray.500" mb={4}>
        I’m open to freelance work, long-term roles, and collaborations. Reach out via the form
        or connect directly:
      </Text>
      <HStack spacing={4} mb={8} wrap="wrap">
        {socials.map(s => (
          <Link key={s.label} href={s.href} isExternal color="teal.500">
            {s.label}
          </Link>
        ))}
      </HStack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input placeholder="Ada Lovelace" {...register("name")} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="ada@example.com" {...register("email")} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea rows={6} placeholder="Say hello!" {...register("message")} />
          </FormControl>
          <Button type="submit" colorScheme="teal" alignSelf="start">Send</Button>
          {status === "success" && (
            <Alert status="success">
              <AlertIcon /> Message sent! Thanks for reaching out.
            </Alert>
          )}
          {status === "error" && (
            <Alert status="error">
              <AlertIcon /> Something went wrong. Please try again later.
            </Alert>
          )}
        </Stack>
      </form>
    </Box>
  );
}
