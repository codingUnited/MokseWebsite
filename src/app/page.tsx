'use client'

import Image from 'next/image';
import Link from 'next/link';
import FeatureCard from "@/components/home/feature-card";
import Navbar from "@/components/common/navbar";
import { empowerment } from "@/data/empowerment";
import { getInvolved } from "@/data/get-involved";
import { useBreakpointValue, Box, Text, Button, AbsoluteCenter, VStack, Heading } from '@chakra-ui/react';
import { RiArrowRightLine } from 'react-icons/ri';

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
          <>
            <div>
              <Image src="/HeroImage.jpg" alt="Mokse hero image" width={1920} height={1080} priority />
              <h1>Empowering Change Through Education and Advocacy</h1>
              <p>We strive to break down barriers and stop the stigma associated with
                incarceration through consulting services, educational conferences, and business support programs.</p>
              <Link href="/services">
                <button>Learn More</button>
              </Link>
            </div>
            <div>
              <div>
                <h1>A Commitment to Empowerment</h1>
                <p>To transform the lives of learners by providing accessible education, entrepreneurial
                  support, and empowerment resources that foster personal and professional growth.</p>
                <Link href="/about-us">
                  <button>About Us</button>
                </Link>
              </div>
              <div>
                {empowerment.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </div>
            </div>
            <div>
              <img src="/Image-1-1.jpg" alt="College students" />
              <h3>Make a Difference – Get Involved!</h3>
              <p>Are you passionate about helping justice-impacted individuals?
                We need compassionate volunteers to assist in various roles, including
                mentorship, tutoring, and administrative support.</p>
              <button>Get Involved</button>
            </div>
            <div>
              <div>
                {getInvolved.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </div>
              <button>Donate</button>
            </div>
            <div>
              <h2>special story: The Three Words That Change My Life.</h2>
              <p>Mokse is proud to share the TEDx talk of Dr. Matthews.</p>
              <div>
                <iframe src="https://www.youtube.com/embed/p2q--KoXnXA" frameBorder="0"></iframe>
              </div>
            </div>
            <div>
              <div>
                <img src="IMG_0997-1-1024x683.webp" alt="" />
                <img src="IMG_1004-1024x683.webp" alt="" />
              </div>
              <div>
                <img src="IMG_1011-300x300.webp" alt="" />
                <img src="IMG_1012-300x300.webp" alt="" />
                <img src="IMG_1027-300x300.webp" alt="" />
                <img src="IMG_0995-300x300.webp" alt="" />
              </div>
            </div>
          </>
        ) : (
          <div>
            <Box
              position="relative"
              w="100vw"
              h="82vh"
              bgImage="url('/HeroImage.jpg')"
              bgSize="cover"
              backgroundPosition="right"
              bgRepeat="no-repeat"
              color="white"
            >
              <AbsoluteCenter
                textAlign="center"
                bg="rgba(0, 0, 0, 0.4)"
                w={"100%"}
                h={"100%"}
                alignItems={"center"}
              >
                <VStack>
                  <Heading as={"h1"}>
                    <Text textStyle="3xl" fontWeight={'bold'}>Empowering Change Through Education and Advocacy</Text>
                  </Heading>
                  <p>We strive to break down barriers and stop the stigma associated with
                    incarceration through consulting services, educational conferences, and business support programs.</p>
                  <Link href="/services">
                    <Button colorPalette="teal" variant="solid">
                      Learn More <RiArrowRightLine />
                    </Button>
                  </Link>
                </VStack>
              </AbsoluteCenter>
            </Box>
          </div>
        )
      }

    </>
  );
}
