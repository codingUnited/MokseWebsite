"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import {
  VStack,
  HStack,
  Container,
  Link as ChakraLink,
  Button,
  useBreakpointValue,
  Text,
  Heading,
  Center,
  IconButton,
  Icon,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

import { poppins } from "../ui/fonts";
import checkDeviceSize from "../ui/breakpoints";
import {
  FB,
  LinkedIn,
  YouTube,
  Instagram,
  PhoneIcon,
  MapPinIcon,
  MailIcon,
  AngleRightIcon,
} from "../ui/icons";

export default function Footer() {
  const { colorMode } = useColorMode();
  const current = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  const notMobileDevice = checkDeviceSize();
  return (
    <footer>
      {notMobileDevice ? (
        <Container fluid pt={40}>
          <VStack>
            <Flex justify={"space-between"} gap={40}>
              <Box>
                <Image asChild>
                  <NextImage
                    src={
                      colorMode == "light"
                        ? "/mokse-logo.png"
                        : "/MOKSE-3-180x46.png"
                    }
                    alt="MOKSE Logo"
                    width={200}
                    height={51}
                  />
                </Image>
                <Text maxW={300} my={6}>
                  A society where all individuals have equal opportunities to
                  thrive, learn, and lead.
                </Text>
                <HStack justify={"left"} align={"center"} gap={4}>
                  <IconButton
                    variant={"outline"}
                    border={"lg"}
                    borderRadius={"full"}
                    size={"md"}
                    color={"teal.focusRing"}
                    aria-label="Facebook"
                    asChild
                  >
                    <ChakraLink asChild>
                      <NextLink
                        href="https://web.facebook.com/mokseorg/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FB size={10} />
                      </NextLink>
                    </ChakraLink>
                  </IconButton>

                  <IconButton
                    variant={"outline"}
                    border={"lg"}
                    borderRadius={"full"}
                    size={"md"}
                    color={"teal.focusRing"}
                    aria-label="LinkedIn"
                    asChild
                  >
                    <ChakraLink asChild>
                      <NextLink
                        href="https://www.linkedin.com/company/mokse-org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedIn size={20} />
                      </NextLink>
                    </ChakraLink>
                  </IconButton>

                  <IconButton
                    variant={"outline"}
                    border={"lg"}
                    borderRadius={"full"}
                    size={"md"}
                    color={"teal.focusRing"}
                    aria-label="YouTube"
                    asChild
                  >
                    <ChakraLink asChild>
                      <NextLink
                        href="https://www.youtube.com/@mokse-org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <YouTube size={10} />
                      </NextLink>
                    </ChakraLink>
                  </IconButton>

                  <IconButton
                    variant={"outline"}
                    border={"lg"}
                    borderRadius={"full"}
                    size={"md"}
                    color={"teal.focusRing"}
                    aria-label="Instagram"
                    asChild
                  >
                    <ChakraLink asChild>
                      <NextLink
                        href="https://www.instagram.com/mokse_org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram size={10} />
                      </NextLink>
                    </ChakraLink>
                  </IconButton>

                  <IconButton
                    variant={"outline"}
                    border={"lg"}
                    borderRadius={"full"}
                    size={"md"}
                    color={"teal.focusRing"}
                    aria-label="Email"
                    asChild
                  >
                    <ChakraLink asChild>
                      <NextLink
                        href="mailto:info@mokse.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MailIcon size={10} />
                      </NextLink>
                    </ChakraLink>
                  </IconButton>
                </HStack>
              </Box>
              <Flex justify={"space-between"} gap={40}>
                <Box>
                  <VStack>
                    <Heading
                      as="h2"
                      textStyle={"lg"}
                      textAlign={"start"}
                      color={"teal.focusRing"}
                      className={poppins.className}
                      clear={"both"}
                    >
                      Quick Links
                    </Heading>
                    <VStack align={"left"}>
                      <ChakraLink asChild>
                        <NextLink href="/">
                          <Center>
                            <AngleRightIcon
                              color={"teal.focusRing"}
                              height={6}
                              width={6}
                            />
                            <Text textStyle={"md"}>Home</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NextLink href="/about-us">
                          <Center>
                            <AngleRightIcon
                              color={"teal.focusRing"}
                              height={6}
                              width={6}
                            />
                            <Text textStyle={"md"}>About Us</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NextLink href="/services">
                          <Center>
                            <AngleRightIcon
                              color={"teal.focusRing"}
                              height={6}
                              width={6}
                            />
                            <Text textStyle={"md"}>Services</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NextLink href="/contact">
                          <Center>
                            <AngleRightIcon
                              color={"teal.focusRing"}
                              height={6}
                              width={6}
                            />
                            <Text textStyle={"md"}>Contact</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>
                    </VStack>
                  </VStack>
                </Box>
                <Box>
                  <VStack>
                    <Heading
                      as="h2"
                      textStyle={"lg"}
                      textAlign={"start"}
                      color={"teal.focusRing"}
                      className={poppins.className}
                      clear={"both"}
                    >
                      Support
                    </Heading>
                    <VStack align={"left"}>
                      <ChakraLink asChild>
                        <NextLink href="/terms">
                          <Center>
                            <Text textStyle={"md"}>Terms and Conditions</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NextLink href="/about-us#legal">
                          <Center>
                            <Text textStyle={"md"}>Legal</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NextLink href="/services">
                          <Center>
                            <Text textStyle={"md"}>Business</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NextLink href="/contact">
                          <Center>
                            <Text textStyle={"md"}>Partners</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>
                    </VStack>
                  </VStack>
                </Box>
                <Box>
                  <VStack>
                    <Heading
                      as="h2"
                      textStyle={"lg"}
                      textAlign={"start"}
                      color={"teal.focusRing"}
                      className={poppins.className}
                      clear={"both"}
                    >
                      Our Company
                    </Heading>
                    <VStack align={"left"}>
                      <Box asChild>
                        <HStack>
                          {/* <Icon color="teal" height={6} width={6}>
                            test
                          </Text> */}
                          <MapPinIcon color="teal" height={6} width={6} />
                          <Box>
                            <Text>497 Hooksett Road,</Text>
                            <Text> Suite 362,</Text>
                            <Text>Manchester, NH 03104</Text>
                          </Box>
                        </HStack>
                      </Box>
                      <Box>
                        <HStack>
                          <PhoneIcon color="teal" height={6} width={6} />
                          {/* <Text color="teal" height={6} width={6}>
                            test
                          </Text> */}
                          <ChakraLink asChild>
                            <NextLink href="tel:+16034961535">
                              <Text textStyle={"md"}>+1 603 496 1535</Text>
                            </NextLink>
                          </ChakraLink>
                        </HStack>
                      </Box>
                      <Box>
                        <HStack>
                          <MailIcon color="teal" height={6} width={6} />
                          {/* <Text asChild bg="teal" height={6} width={6}>
                          </Text> */}
                          <ChakraLink asChild>
                            <NextLink href="mailto:info@mokse.org">
                              <Text textStyle={"md"}>info@mokse.org</Text>
                            </NextLink>
                          </ChakraLink>
                        </HStack>
                      </Box>
                    </VStack>
                  </VStack>
                </Box>
              </Flex>
            </Flex>

            <Center>
              <HStack h={"10vh"}>
                <p>Copyright &copy; 2025 Mokse | Powered by Mokse</p>
              </HStack>
            </Center>
          </VStack>
        </Container>
      ) : (
        <HStack justify={"space-between"} py={3.5} px={1}>
          <ChakraLink asChild>
            <NextLink href="/">
              <Image
                src="/MOKSE-3-180x46.png"
                alt="MOKSE Logo"
                width={180}
                height={48}
              />
            </NextLink>
          </ChakraLink>
          <Button>Menu</Button>
        </HStack>
      )}
    </footer>
  );
}
