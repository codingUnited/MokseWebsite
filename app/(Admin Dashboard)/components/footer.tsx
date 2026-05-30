"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import {
  Container,
  Link as ChakraLink,
  Text,
  Box,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container
      as={"footer"}
      fluid
      pt={{ base: 10, md: 14, lg: 16 }}
      pb={{ base: 8, md: 10 }}
      px={{ base: 4, md: 8 }}
      centerContent
    >
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        hideFrom={"md"}
      >
        <Text fontSize={{ base: "sm", md: "md" }}>Copyright &copy; 2025 Mokse</Text>
        <Text fontSize={{ base: "sm", md: "md" }}>
          <ChakraLink as={NextLink} href='https://codingunited.vercel.app/'>Developed By Coding United</ChakraLink>
        </Text>
      </Box>
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        hideBelow={"md"}
      >
        <Text fontSize={{ md: "md", lg: "md" }}>
          Copyright &copy; 2025 Mokse | <ChakraLink as={NextLink} href='https://codingunited.vercel.app/'>Developed By Coding United</ChakraLink>
        </Text>
      </Box>
    </Container >
  );
}
