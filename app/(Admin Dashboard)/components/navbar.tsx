"use client";

import Image from "next/image";
import NextLink from "next/link";
import {
  HStack,
  Container,
  Link as ChakraLink,
  Image as ChakraImage,
  Button, ButtonGroup,
  Text,
  Badge,
  VStack,
  Float,
  Box,
  Drawer,
  CloseButton,
  Portal,
  Heading,
  Center,
  Card,
  StackProps,
} from "@chakra-ui/react";
import {
  MdBrightness4 as MdMoon,
  MdBrightness5 as MdSun,
} from "react-icons/md";
import { useColorMode } from "@/components/ui/color-mode";
import { useEffect, useState } from "react";
import { openSans } from "@/components/ui/fonts";
import useDeviceSize from "@/components/ui/breakpoints";

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



  const [open, setOpen] = useState(false)
  // Container props
  const ContainerProps: StackProps = {
    h: { base: "64px", md: "72px", lg: "80px" },
    minH: { base: "64px", md: "72px", lg: "80px" },
    zIndex: 2,
    py: { base: 3, md: 4, lg: 5 },
    px: { base: 2, md: 4, lg: 6 },
    boxShadow: "2xl",
    bg: colorMode === "light" ? "black" : "blackAlpha.950",
    w: "100%",
    maxW: "100vw",
    className: openSans.className,
    justifyContent: "space-between",
    alignItems: "center",
  };

  // Nav text props (for the dark navbar — light text)
  const navTextProps: StackProps = {
    fontSize: { base: "14px", lg: "16px" },
    fontWeight: 600,
    _light: { color: "white" },
  };

  // Drawer text props (drawer bg is light in light mode, so text must be dark)
  const drawerTextProps: StackProps = {
    fontSize: { base: "md", md: "lg" },
    fontWeight: 600,
    _light: { color: "gray.800" },
    _dark: { color: "white" },
  };

  return (
    <HStack {...ContainerProps} as={"nav"} color={"#f8f7f7"}>

      <ChakraLink asChild pl={{ base: 2, md: 4, lg: 8 }}>
        <NextLink href="/">
          <ChakraImage asChild
            w={{ base: "120px", sm: "140px", md: "160px", lg: "180px" }}
            h={"auto"}
          >
            <Image
              src="/mokse-logo_darkmode.png"
              alt="MOKSE Logo"
              width={180}
              height={46}
              priority
            />
          </ChakraImage>

        </NextLink>
      </ChakraLink>
      <HStack justifyContent={"space-evenly"} spaceX={{ lg: 3, xl: 6 }} px={{ lg: 4, xl: 8 }} hideBelow={"laptop"}>
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

      {/* Mobile Menu */}
      <Box hideFrom={"laptop"} mr={{ base: 2, md: 4 }}>
        <Drawer.Root size={"full"} open={open} onOpenChange={(e) => setOpen(e.open)}  >
          <Drawer.Trigger asChild>
            <Button variant="outline" size={{ base: "sm", md: "md" }} color={"white"} borderColor={"whiteAlpha.700"}>
              Menu
            </Button>
          </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Menu</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Container>
                  <VStack gap={8} align={"stretch"} pt={4}>
                    <VStack gap={3} align={"stretch"}>
                      <Heading size={"md"}>Navigation</Heading>
                      <VStack gap={5} alignItems={"start"} pl={2}>
                        <ChakraLink asChild onClick={() => setOpen(false)}>
                          <NextLink href="/about">
                            <Text {...drawerTextProps}>About</Text>
                          </NextLink>
                        </ChakraLink>
                        <ChakraLink asChild onClick={() => setOpen(false)}>
                          <NextLink href="/contact">
                            <Text {...drawerTextProps}>Contact</Text>
                          </NextLink>
                        </ChakraLink>
                        <ChakraLink asChild onClick={() => setOpen(false)}>
                          <NextLink href="/services">
                            <Text {...drawerTextProps}>Services</Text>
                          </NextLink>
                        </ChakraLink>

                        <ChakraLink asChild onClick={() => setOpen(false)}>
                          <NextLink href="/programs">
                            <Box position={"relative"} display={"inline-block"}>
                              <Text {...drawerTextProps}>
                                Programs
                              </Text>
                              <Float placement={"middle-end"} offsetX="-8">
                                <Badge variant="solid" colorPalette="green">
                                  New
                                </Badge>
                              </Float>
                            </Box>
                          </NextLink>
                        </ChakraLink>
                        <ChakraLink asChild onClick={() => setOpen(false)}>
                          <NextLink href="/resources">
                            <Box position={"relative"} display={"inline-block"}>
                              <Text {...drawerTextProps}>
                                Resources
                              </Text>
                              <Float placement={"middle-end"} offsetX="-8">
                                <Badge variant="solid" colorPalette="green">
                                  New
                                </Badge>
                              </Float>
                            </Box>
                          </NextLink>
                        </ChakraLink>
                      </VStack>
                    </VStack>

                    <Heading size={"md"}>Appearance</Heading>
                    <ButtonGroup>
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
                        {isMounted && (colorMode === "light" ? <><MdMoon /> Dark Mode</> : <><MdSun /> Light Mode</>)}
                      </Button>
                    </ButtonGroup>

                  </VStack>
                </Container>
              </Drawer.Body>
              <Drawer.Footer justifyContent={"center"}>
                <Button variant="outline" size="sm" onClick={() => setOpen(false)} mb={{ base: 4, md: 8 }}>
                  Close
                </Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
        </Drawer.Root>
      </Box>
    </HStack >
  );
}
