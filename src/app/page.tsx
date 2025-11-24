'use client'

import Image from 'next/image';
import Link from 'next/link';
import FeatureCard from "@/components/home/feature-card";
import Navbar from "@/components/common/navbar";
import { empowerment } from "@/data/empowerment";
import { getInvolved } from "@/data/get-involved";
import { useBreakpointValue, Box, Text, Button, AbsoluteCenter, VStack, Heading, Link as ChakraLink, Center } from '@chakra-ui/react';
import { RiArrowRightLine } from 'react-icons/ri';
import { poppins } from '@/components/ui/fonts';


export default function Home() {
  const current = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  return (
    <>
      {
        current !== "base" && current !== "sm" ? (
          <VStack w={"100%"} >
            <Box position="relative"
              w={"100%"}
              h={"100vh"}
              bgImage={"url('/HeroImage.jpg')"}
              bgSize={"cover"}
              backgroundPosition={"center"}
              bgRepeat={"no-repeat"}
              color={"white"}
            //  alt="Mokse hero image"
            >
              <AbsoluteCenter
                textAlign="center"
                bg="rgba(0, 0, 0, 0.4)"
                w={"100%"}
                h={"100%"}
                alignItems={"center"}
              >
                <VStack>
                  <Heading as={"h1"} p={2} >
                    <Text textStyle={"7xl"} className={poppins.variable} textAlign={'left'} overflow={'hidden'}
                    >Empowering Change Through Education And Advocacy</Text>
                  </Heading>
                  <Text>
                    We strive to break down barriers and stop the stigma associated with
                    incarceration through consulting services, educational conferences, and business support programs.
                  </Text>
                  <ChakraLink asChild>
                    <Link href="/services">
                      <Button colorPalette="teal" variant="solid">
                        Learn More <RiArrowRightLine />
                      </Button>
                    </Link>
                  </ChakraLink>
                </VStack>
              </AbsoluteCenter>
            </Box>
            <Box>
              <Box>
                <h1>A Commitment to Empowerment</h1>
                <p>To transform the lives of learners by providing accessible education, entrepreneurial
                  support, and empowerment resources that foster personal and professional growth.</p>
                <Link href="/about-us">
                  <button>About Us</button>
                </Link>
              </Box>
              <Box>
                {empowerment.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </Box>
            </Box>
            <Box>
              <img src="/Image-1-1.jpg" alt="College students" />
              <h3>Make a Difference – Get Involved!</h3>
              <p>Are you passionate about helping justice-impacted inBoxiduals?
                We need compassionate volunteers to assist in various roles, including
                mentorship, tutoring, and administrative support.</p>
              <button>Get Involved</button>
            </Box>
            <Box>
              <Box>
                {getInvolved.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </Box>
              <button>Donate</button>
            </Box>
            <Box>
              <h2>special story: The Three Words That Change My Life.</h2>
              <p>Mokse is proud to share the TEDx talk of Dr. Matthews.</p>
              <Box>
                <iframe src="https://www.youtube.com/embed/p2q--KoXnXA" frameBorder="0"></iframe>
              </Box>
            </Box>
            <Box>
              <Box>
                <img src="IMG_0997-1-1024x683.webp" alt="" />
                <img src="IMG_1004-1024x683.webp" alt="" />
              </Box>
              <Box>
                <img src="IMG_1011-300x300.webp" alt="" />
                <img src="IMG_1012-300x300.webp" alt="" />
                <img src="IMG_1027-300x300.webp" alt="" />
                <img src="IMG_0995-300x300.webp" alt="" />
              </Box>
            </Box>
          </VStack >
        ) : (
          <VStack>
            <Box
              position="relative"
              w="100vw"
              h="82vh"
              bgImage="url('/HeroImage.jpg')"
              bgSize="cover"
              backgroundPosition="right"
              bgRepeat="no-repeat"
              color="white"
              m={-2}
            >
              <AbsoluteCenter
                textAlign="center"
                bg="rgba(0, 0, 0, 0.4)"
                w={"100%"}
                h={"100%"}
                alignItems={"center"}
              >
                <VStack>
                  <Heading as={"h1"} p={2} justifyContent={'end'}>
                    <Text textStyle={"4xl"}>Empowering Change Through Education And Advocacy</Text>
                  </Heading>
                  <p>We strive to break down barriers and stop the stigma associated with
                    incarceration through consulting services, educational conferences, and business support programs.</p>
                  <ChakraLink asChild>
                    <Link href="/services">
                      <Button colorPalette="teal" variant="solid">
                        Learn More <RiArrowRightLine />
                      </Button>
                    </Link>
                  </ChakraLink>
                </VStack>
              </AbsoluteCenter>
            </Box>
            <Box bg={'white'}>
              <Box>
                <Heading as={"h2"}>
                  <Text textStyle={"2xl"} color={'black'}>A Commitment to Empowerment</Text>
                </Heading>
                <Text color={"gray.500"}>To transform the lives of learners by providing accessible education, entrepreneurial
                  support, and empowerment resources that foster personal and professional growth.</Text>
                <ChakraLink asChild>
                  <Link href="/about-us">
                    <Button colorPalette="teal" variant="solid">
                      About Us <RiArrowRightLine />
                    </Button>
                  </Link>
                </ChakraLink>
              </Box>
              <Center p={4}>
                {empowerment.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </Center>
            </Box>
            {/* <Box>
              <img src="/Image-1-1.jpg" alt="College students" />
              <h3>Make a Difference – Get Involved!</h3>
              <p>Are you passionate about helping justice-impacted inBoxiduals?
                We need compassionate volunteers to assist in various roles, including
                mentorship, tutoring, and administrative support.</p>
              <button>Get Involved</button>
            </Box>
            <Box>
              <Box>
                {getInvolved.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </Box>
              <button>Donate</button>
            </Box>
            <Box>
              <h2>special story: The Three Words That Change My Life.</h2>
              <p>Mokse is proud to share the TEDx talk of Dr. Matthews.</p>
              <Box>
                <iframe src="https://www.youtube.com/embed/p2q--KoXnXA" frameBorder="0"></iframe>
              </Box>
            </Box>
            <Box>
              <img src="IMG_0997-1-1024x683.webp" alt="" />
              <img src="IMG_1004-1024x683.webp" alt="" />
            </Box>
            <Box>
              <img src="IMG_1011-300x300.webp" alt="" />
              <img src="IMG_1012-300x300.webp" alt="" />
              <img src="IMG_1027-300x300.webp" alt="" />
              <img src="IMG_0995-300x300.webp" alt="" />
            </Box> */}
          </VStack>
        )
      }

    </>
  );
}
