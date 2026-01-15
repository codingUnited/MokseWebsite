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
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

import { poppins } from "../ui/fonts";
import checkDeviceSize from "../ui/breakpoints";

import { Icon } from "@/components/ui/icons/icon";

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
                    src={useColorModeValue(
                      "/mokse-logo.png",
                      "/MOKSE-3-180x46.png"
                    )}
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
                        <Icon name="Facebook" />
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
                        <Icon name="LinkedIn" />
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
                        <Icon name="YouTube" />
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
                        <Icon name="Instagram" />
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
                        <Icon name="Mail" />
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
                            <Icon
                              name="AngleRight"
                              size={6}
                              color={"teal.focusRing"}
                            />
                            <Text textStyle={"md"}>Home</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NextLink href="/about-us">
                          <Center>
                            <Icon
                              name="AngleRight"
                              size={6}
                              color={"teal.focusRing"}
                            />
                            <Text textStyle={"md"}>About Us</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NextLink href="/services">
                          <Center>
                            <Icon
                              name="AngleRight"
                              size={6}
                              color={"teal.focusRing"}
                            />
                            <Text textStyle={"md"}>Services</Text>
                          </Center>
                        </NextLink>
                      </ChakraLink>

                      <ChakraLink asChild>
                        <NextLink href="/contact">
                          <Center>
                            <Icon
                              name="AngleRight"
                              size={6}
                              color={"teal.focusRing"}
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
                          <Icon
                            name="MapPin"
                            color="teal"
                            height={6}
                            width={6}
                          />
                          <Box>
                            <Text>497 Hooksett Road,</Text>
                            <Text> Suite 362,</Text>
                            <Text>Manchester, NH 03104</Text>
                          </Box>
                        </HStack>
                      </Box>
                      <Box>
                        <HStack>
                          <Icon
                            name="Phone"
                            color="teal"
                            height={6}
                            width={6}
                          />
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
                          <Icon name="Mail" color="teal" height={6} width={6} />
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
