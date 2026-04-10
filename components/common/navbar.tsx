"use client";

import Image from "next/image";
import NextLink from "next/link";
import {
  HStack,
  Container,
  Link as ChakraLink,
  Image as ChakraImage,
  Button,
  Text,
  Badge,
  VStack,
  Float,
  Box,
} from "@chakra-ui/react";
import {
  MdBrightness4 as MdMoon,
  MdBrightness5 as MdSun,
} from "react-icons/md";
import { useColorMode } from "../ui/color-mode";
import { useEffect, useState } from "react";
import { openSans } from "../ui/fonts";
import useDeviceSize from "../ui/breakpoints";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const deviceSize = useDeviceSize();
  const notMobileDevice = deviceSize !== "base" && deviceSize !== "sm";

  const [isMounted, setIsMounted] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  // Mount check for screen size check
  const runMountCheck = () => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }
  useEffect(() => {
    runMountCheck();
  }, []);

  // Check device scroll position for navbar position
  useEffect(() => {
    if (!isMounted) return;
    const handleScroll = () => {
      const scrollPosition = window?.scrollY;
      setIsFixed(scrollPosition >= 50);
    };
    handleScroll();
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  // Container props
  const ContainerProps = {
    h: notMobileDevice ? "10vh" : "5vh",
    zIndex: 1,
    position: isFixed ? "fixed" : "absolute",
    fluid: true,
    py: isFixed ? (notMobileDevice ? 8 : 2) : notMobileDevice ? 8 : 5,
    transition: "all 0.2s ease-in-out",
    transform: isFixed ? "translateY(0)" : "translateY(-20px)",
    opacity: isFixed ? 1 : 0.9,
    boxShadow: isFixed ? "2xl" : "none",
    bg: isFixed
      ? colorMode === "light"
        ? "black"
        : "blackAlpha.950"
      : "transparent",
    className: openSans.className,
  } as const;

  // Nav text props
  const navTextProps = {
    fontSize: "16px",
    fontWeight: 600,
    _light: { color: "white" },
  } as const;

  return (
    <nav>
      <Container {...ContainerProps}>
        {notMobileDevice ? (
          <HStack justifyContent={"space-between"} px={8}>
            <ChakraLink asChild pl={8}>
              <NextLink href="/">
                <ChakraImage asChild>
                  <Image
                    src="/MOKSE-3-180x46.png"
                    alt="MOKSE Logo"
                    width={180}
                    height={46}
                  />
                </ChakraImage>

              </NextLink>
            </ChakraLink>
            <HStack justifyContent={"space-evenly"} spaceX={6} px={8}>
              <ChakraLink asChild>
                <NextLink href="/about">
                  <Text {...navTextProps}>About</Text>
                </NextLink>
              </ChakraLink>
              <ChakraLink asChild>
                <NextLink href="/contact">
                  <Text {...navTextProps}>Contact</Text>
                </NextLink>
              </ChakraLink>
              <ChakraLink asChild>
                <NextLink href="/services">
                  <Text {...navTextProps}>Services</Text>
                </NextLink>
              </ChakraLink>

              <ChakraLink asChild>
                <NextLink href="/programs">
                  <Box position={"relative"} display={"inline-block"}>
                    <Text {...navTextProps}>
                      {/* Float the badge to the above the text */}
                      Programs
                    </Text>
                    <Float placement={"top-center"} offsetX="1" offsetY="-1">
                      <Badge variant="solid" colorPalette="green">
                        New
                      </Badge>
                    </Float>
                  </Box>
                </NextLink>
              </ChakraLink>
              <ChakraLink asChild>
                <NextLink href="/resources">
                  <Box position={"relative"} display={"inline-block"}>
                    <Text {...navTextProps}>
                      {/* Float the badge to the above the text */}

                      Resources
                    </Text>
                    <Float placement={"top-center"} offsetX="1" offsetY="-1"
                    >
                      <Badge variant="solid" colorPalette="green">
                        New
                      </Badge>
                    </Float>
                  </Box>
                </NextLink>
              </ChakraLink>
              <Button
                bg={
                  isFixed
                    ? isMounted
                      ? "teal.focusRing"
                      : "teal.focusRing"
                    : "transparent"
                }
                variant={isFixed ? "solid" : "ghost"}
                rounded="md"
                size={"xl"}
                onClick={toggleColorMode}
              >
                {isMounted && (colorMode === "light" ? <MdMoon /> : <MdSun />)}
              </Button>
            </HStack>
          </HStack>
        ) : (
          <HStack justifyContent={"space-between"} px={1}>
            <ChakraLink asChild>
              <NextLink href="/">
                <ChakraImage asChild>
                  <Image
                    src="/MOKSE-3-180x46.png"
                    alt="MOKSE Logo"
                    width={180}
                    height={48}
                  /></ChakraImage>
              </NextLink>
            </ChakraLink>
            <Button>Menu</Button>
          </HStack>
        )}
      </Container>
    </nav >
  );
}
