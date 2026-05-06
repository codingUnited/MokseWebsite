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
    <Container as={"footer"} fluid pt={{ base: "24dvh", md: "40dvh", lg: "25dvh" }} centerContent>
      <Box alignItems={"center"} justifyContent={"center"} display={"flex"} flexDirection={"column"} hideFrom={"md"}>
        <Text>Copyright &copy; 2025 Mokse</Text>
        <Text><ChakraLink as={NextLink} href='https://codingunited.vercel.app/'>Developed By Coding United</ChakraLink></Text>
      </Box>
      <Box alignItems={"center"} justifyContent={"center"} display={"flex"} flexDirection={"column"} hideBelow={"md"}>
        <Text>Copyright &copy; 2025 Mokse | <ChakraLink as={NextLink} href='https://codingunited.vercel.app/'>Developed By Coding United</ChakraLink></Text></Box>
    </Container >
  );
}
