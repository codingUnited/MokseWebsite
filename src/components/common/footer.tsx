'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { VStack, HStack, Container, Link as ChakraLink, Button, useBreakpointValue, Text, Heading, Center, IconButton, Icon } from '@chakra-ui/react'
import { useColorMode } from '../ui/color-mode';
import { IoIosArrowForward as IoRightArrow } from "react-icons/io";
import { MdLocationPin, MdPhone, MdOutlineMailOutline as MdMail } from "react-icons/md";
import { FaFacebook as FB, FaLinkedin as LinkedIn, FaYoutube as YouTube, FaInstagram as Instagram } from "react-icons/fa6";

import { poppins } from '@/components/ui/fonts';
import checkDeviceSize from '@/components/ui/breakpoints';

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
        <Container fluid pt={24} justifyContent={'space-between'} px={8} >

          <VStack alignItems={'start'}>
            <Image src="/mokse-logo.png" alt="Mokse" width={200} height={51} />
            <Text maxW={300}>A society where all individuals have equal opportunities to thrive, learn, and lead.</Text>
            <HStack justifyContent={'space-evenly'} gap={6}>
              <ChakraLink asChild >
                <NextLink href="https://web.facebook.com/mokseorg/" target="_blank" rel="noopener noreferrer" >
                  <IconButton variant={'outline'} border={'lg'} borderRadius={'full'} size={'lg'} color={'teal.focusRing'} p={2} aria-label="Facebook">
                    <FB size={10} />
                  </IconButton>
                </NextLink>
              </ChakraLink>
              <ChakraLink asChild >
                <NextLink href="https://www.linkedin.com/company/mokse-org" target="_blank" rel="noopener noreferrer" >
                  <IconButton variant={'outline'} border={'lg'} borderRadius={'full'} size={'lg'} color={'teal.focusRing'} p={2} aria-label="LinkedIn">
                    <LinkedIn size={10} />
                  </IconButton>
                </NextLink>
              </ChakraLink>
              <ChakraLink asChild >
                <NextLink href="https://www.youtube.com/@mokse-org" target="_blank" rel="noopener noreferrer" >
                  <IconButton variant={'outline'} border={'lg'} borderRadius={'full'} size={'lg'} color={'teal.focusRing'} p={2} aria-label="YouTube">
                    <YouTube size={10} />
                  </IconButton>
                </NextLink>
              </ChakraLink>
              <ChakraLink asChild >
                <NextLink href="https://www.instagram.com/mokse_org/" target="_blank" rel="noopener noreferrer" >
                  <IconButton variant={'outline'} border={'lg'} borderRadius={'full'} size={'lg'} color={'teal.focusRing'} p={2} aria-label="Instagram">
                    <Instagram size={10} />
                  </IconButton>
                </NextLink>
              </ChakraLink>
              <ChakraLink asChild >
                <NextLink href="mailto:info@mokse.org" target="_blank" rel="noopener noreferrer" >
                  <IconButton variant={'outline'} border={'lg'} borderRadius={'full'} size={'lg'} color={'teal.focusRing'} p={2} aria-label="Email">
                    <Icon asChild size={"md"} fill={'teal.focusRing'} >
                      <MdMail color={'teal.focusRing'} />
                    </Icon>
                  </IconButton>
                </NextLink>
              </ChakraLink>
            </HStack>
          </VStack>
          <VStack>
            <Heading as="h2" textStyle={"lg"} textAlign={'start'} color={'teal.focusRing'} className={poppins.className} clear={'both'}>
              Quick Links
            </Heading>
            <VStack alignItems={'left'}>
              <ChakraLink asChild>
                <NextLink href="/">
                  <Center>
                    <Text asChild color='teal' height={6} width={6} >
                      <IoRightArrow />
                    </Text>
                    <Text textStyle={'md'}>Home</Text>
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
            <Heading as="h2" textStyle={"lg"} textAlign={'start'} color={'teal.focusRing'} className={poppins.className} clear={'both'}>
              Support
            </Heading>
            <VStack alignItems={'left'}>

              <ChakraLink asChild >
                <NextLink href="/terms">
                  <Center>
                    <Text textStyle={'md'}>
                      Terms and Conditions
                    </Text>
                  </Center>


                </NextLink>
              </ChakraLink>


              <ChakraLink asChild >
                <NextLink href="/about-us#legal">
                  <Center>
                    <Text textStyle={'md'}>
                      Legal
                    </Text>
                  </Center>

                </NextLink>
              </ChakraLink>


              <ChakraLink asChild >
                <NextLink href="/services">
                  <Center>
                    <Text textStyle={'md'}>
                      Business
                    </Text>
                  </Center>

                </NextLink>
              </ChakraLink>


              <ChakraLink asChild >
                <NextLink href="/contact">
                  <Center>
                    <Text textStyle={'md'}>
                      Partners
                    </Text>
                  </Center>
                </NextLink>
              </ChakraLink>

            </VStack>
          </VStack>
          <VStack>
            <Heading as="h2" textStyle={"lg"} textAlign={'start'} color={'teal.focusRing'} className={poppins.className} >
              Our Company
            </Heading>
            <VStack>
              <Text>
                <MdLocationPin /> 497 Hooksett Road, Suite 362, Manchester, NH 03104
              </Text>
              <HStack>
                <Text asChild color='teal' height={6} width={6} ><MdPhone /></Text>
                <ChakraLink asChild >
                  <NextLink href="tel:+16034961535">
                    <Text textStyle={'md'}>
                      +1 603 496 1535
                    </Text>
                  </NextLink>
                </ChakraLink>
              </HStack>
              <HStack>
                <Text asChild bg='teal' height={6} width={6} ><MdMail /></Text>
                <ChakraLink asChild >
                  <NextLink href="mailto:info@mokse.org">
                    <Text textStyle={'md'}>
                      info@mokse.org
                    </Text>
                  </NextLink>
                </ChakraLink>
              </HStack>
            </VStack>
          </VStack>


          <Center>

            <HStack h={"10vh"}>
              <p>Copyright &copy; 2025 Mokse | Powered by Mokse</p>
            </HStack>
          </Center>
        </Container >
      )
        : (

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
        )
      }


    </footer >
  );
}
