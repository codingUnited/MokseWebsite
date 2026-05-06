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
  const ContainerProps = {
    h: { mobile: "10dvh", tablet: "30dvh", laptop: "50dvh", xLarge: "70dvh", "2XLarge": "90dvh" }, //"2XLarge": "10dvh",
    zIndex: 2, //2,

    py: { base: 5, mdTo2xl: 8 },//isFixed ? (notMobileDevice ? 8 : 2) : notMobileDevice ? 8 : 5,

    boxShadow: { base: "2xl" },//isFixed ? "2xl" : "none",
    bg: {
      base: colorMode === "light"
        ? "black"
        : "blackAlpha.950"
      ,
      aboveBase: colorMode === "light"
        ? "black"
        : "blackAlpha.950"
    },
    w: "100dvw",
    className: openSans.className,//openSans.className,
    justifyContent: "space-between",
  } as const;

  // Nav text props
  const navTextProps = {
    fontSize: "16px",
    fontWeight: 600,
    _light: { color: "white" },
  } as const;

  return (
    <HStack {...ContainerProps} as={"nav"} color={"#f8f7f7"}>

      <ChakraLink asChild pl={{ mobile: 4, laptop: 8 }}>
        <NextLink href="/">
          <ChakraImage asChild >
            <Image
              src="/mokse-logo_darkmode.png"
              alt="MOKSE Logo"
              width={"180"}
              height={"46"}
            />
          </ChakraImage>

        </NextLink>
      </ChakraLink>
      <HStack justifyContent={"space-evenly"} spaceX={6} px={8} hideBelow={"laptop"}>
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
      <Drawer.Root size={"full"} open={open} onOpenChange={(e) => setOpen(e.open)}  >
        <Drawer.Trigger asChild mr={8}>
          <Button variant="outline" size="sm">
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
                  <VStack>
                    <Heading>Navigation</Heading>
                    <VStack gapY={4} alignItems={"start"}>
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
                            <Float placement={"middle-start"} offsetX="-5" >
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
                            <Float placement={"middle-start"} offsetX="-5"
                            >
                              <Badge variant="solid" colorPalette="green">
                                New
                              </Badge>
                            </Float>
                          </Box>
                        </NextLink>
                      </ChakraLink>
                    </VStack>

                    <Heading>Appearance</Heading>
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
                <Button variant="outline" size="sm" onClick={() => setOpen(false)} mb={"10dvh"}>
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
    </HStack >
  );
}
