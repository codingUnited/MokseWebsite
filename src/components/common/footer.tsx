'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { VStack, HStack, Container, Link as ChakraLink, Button, useBreakpointValue, Text, Heading, Center } from '@chakra-ui/react'
import { useColorMode } from '../ui/color-mode';
import { IoIosArrowForward as IoRightArrow } from "react-icons/io";

export default function Footer() {

  const { toggleColorMode, colorMode, } = useColorMode();
  const current = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  return (
    <footer>
      <Container h={'50vh'} fluid pt={24}>
        {current !== "base" && current !== "sm" ? (
          <VStack justifyContent={'space-between'} px={8}>
            <HStack>
              <VStack>
                <Image src="/mokse-logo.png" alt="Mokse" width={200} height={51} />
                <p>A society where all individuals have equal opportunities to thrive, learn, and lead.</p>
                <VStack alignItems={'left'}>

                  <ChakraLink asChild >
                    <NextLink href="https://web.facebook.com/mokseorg/" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </NextLink>
                  </ChakraLink>


                  <ChakraLink asChild >
                    <NextLink href="https://www.linkedin.com/company/mokse-org" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </NextLink>
                  </ChakraLink>


                  <ChakraLink asChild >
                    <NextLink href="https://www.youtube.com/@mokse-org" target="_blank" rel="noopener noreferrer">
                      YouTube
                    </NextLink>
                  </ChakraLink>


                  <ChakraLink asChild >
                    <NextLink href="https://www.instagram.com/mokse_org/" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </NextLink>
                  </ChakraLink>


                  <ChakraLink asChild >
                    <NextLink href="mailto:info@mokse.org">
                      Email
                    </NextLink>
                  </ChakraLink>

                </VStack>
              </VStack>
              <VStack>
                <Heading as="h2">
                  <Text textStyle={"lg"} textAlign={'center'} overflow={'hidden'} _light={{ color: "white" }}>
                    Quick Links
                  </Text>
                </Heading>
                <VStack alignItems={'left'}>
                  <ChakraLink asChild>
                    <NextLink href="/">
                      <Center><Text asChild color='teal' height={6} width={6} ><IoRightArrow /></Text><Text textStyle={'md'}>Home</Text>
                      </Center>
                    </NextLink>
                  </ChakraLink>


                  <ChakraLink asChild>
                    <NextLink href="/about-us">
                      <Center><Text asChild color='teal' height={6} width={6} ><IoRightArrow /></Text><Text textStyle={'md'}>About Us</Text>
                      </Center>
                    </NextLink>
                  </ChakraLink>


                  <ChakraLink asChild>
                    <NextLink href="/services">
                      <Center><Text asChild color='teal' height={6} width={6} ><IoRightArrow /></Text><Text textStyle={'md'}>Services</Text>
                      </Center>
                    </NextLink>
                  </ChakraLink>


                  <ChakraLink asChild>
                    <NextLink href="/contact">
                      <Center><Text asChild color='teal' height={6} width={6} ><IoRightArrow /></Text><Text textStyle={'md'}>Contact</Text>
                      </Center>
                    </NextLink>
                  </ChakraLink>

                </VStack>
              </VStack>
              <VStack>
                <Heading as="h2">
                  <Text textStyle={"lg"} textAlign={'center'} overflow={'hidden'} _light={{ color: "white" }}>
                    Support
                  </Text>
                </Heading>
                <VStack alignItems={'left'}>

                  <ChakraLink asChild >
                    <NextLink href="/terms">
                      <Text textStyle={'md'}>Terms and Conditions</Text>
                    </NextLink>
                  </ChakraLink>


                  <ChakraLink asChild >
                    <NextLink href="/about-us#legal">
                      <Text textStyle={'md'}>Legal</Text>
                    </NextLink>
                  </ChakraLink>


                  <ChakraLink asChild >
                    <NextLink href="/services">
                      <Text textStyle={'md'}>Business</Text>
                    </NextLink>
                  </ChakraLink>


                  <ChakraLink asChild >
                    <NextLink href="/contact">
                      <Text textStyle={'md'}>Partners</Text>
                    </NextLink>
                  </ChakraLink>

                </VStack>
              </VStack>
              <VStack>
                <Heading as="h2">
                  <Text textStyle={"lg"} textAlign={'center'} overflow={'hidden'} _light={{ color: "white" }}>
                    Our Company
                  </Text>
                </Heading>
                <address>
                  <p>497 Hooksett Road, Suite 362, Manchester, NH 03104</p>
                  <p>
                    <a href="tel:+16034961535">+1 603 496 1535</a>
                  </p>
                  <p>
                    <a href="mailto:info@mokse.org">info@mokse.org</a>
                  </p>
                </address>
              </VStack>
            </HStack>
            <HStack>
              <p>Copyright &copy; 2025 Mokse | Powered by Mokse</p>
            </HStack>


            {/* <ChakraLink asChild >
                <NextLink href="/contact">
                  <Text textStyle={'md'} color={"white"}>Contact</Text>
                </NextLink>
              </ChakraLink> */}

          </VStack>
        ) : (
          <HStack justifyContent={'space-between'} py={3.5} px={1}>
            <ChakraLink asChild  >
              <NextLink href="/">
                <Image src="/MOKSE-3-180x46.png" alt="MOKSE Logo" width={180} height={48} />
              </NextLink>
            </ChakraLink>
            <Button>
              Menu
            </Button>

          </HStack>
        )}


      </Container>

    </footer>
  );
}
