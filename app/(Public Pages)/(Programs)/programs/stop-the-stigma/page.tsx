"use client";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import {
  Card,
  For,
  Stack,
  Center,
  Text,
  VStack,
  HStack,
  Image as ChakraImage,
  Heading,
  Button,
  Strong,
  Link as ChakraLink,
  Float,
  Box,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useColorMode } from "@/components/ui/color-mode";
import { poppins } from "@/components/ui/fonts";
import {
  HeaderTemplate,
  PageBuilder,
  SectionTemplate,
} from "@/components/page-builder/template";
import FeatureCard from "@/components/home/feature-card";

export default function StopTheStigma() {
  const [countdownTarget] = useState({
    target: new Date("Feb 19, 2026 00:00:00").getTime(),
  });

  const [countdown, setCountdown] = useState({
    days: 0 as number | string,
    hours: 0 as number | string,
    minutes: 0 as number | string,
    seconds: 0 as number | string,
  });

  useEffect(() => {
    const updateTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownTarget.target - now;

      if (distance < 0) {
        clearInterval(updateTimer);
        setCountdown({
          days: "O",
          hours: "V",
          minutes: "E",
          seconds: "R",
        });
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(updateTimer);
  }, [countdownTarget.target]);

  return (
    <PageBuilder>
      <HeaderTemplate
        image="/assets/stop-the-stigma/stop-stigma-auditorium.webp"
        imageHeight={{ base: "80vh", md: "100vh" }}
        imageLabel="Stop The Stigma Conference"
        title="Stop The Stigma Conference"
        titleLocation={100}
      >
        {/* Adjusted the Float offset and card sizing so it doesn't break mobile viewports */}
        <Float placement={"bottom-center"} offsetY={{ base: "10%", md: "15%" }} w="full">
          <HStack gap={{ base: 2, md: 6 }} justify="center" w="full" px={4}>
            <For
              each={[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ]}
            >
              {({ label, value }) => (
                <Card.Root
                  key={label}
                  bg={"blackAlpha.950"}
                  w={{ base: "70px", md: "120px", lg: "180px" }}
                  h={{ base: "80px", md: "120px", lg: "180px" }}
                >
                  <Card.Body p={0} h="full">
                    <Center h="full">
                      <VStack gap={0}>
                        <Text
                          className={poppins.className}
                          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                          color="white"
                          lineHeight="1"
                        >
                          {value}
                        </Text>
                        <Text
                          className={poppins.className}
                          fontSize={{ base: "xs", md: "md", lg: "xl" }}
                          color="gray.400"
                        >
                          {label}
                        </Text>
                      </VStack>
                    </Center>
                  </Card.Body>
                </Card.Root>
              )}
            </For>
          </HStack>
        </Float>
      </HeaderTemplate>

      {/* SECTION: What is Stop The Stigma */}
      <SectionTemplate>
        <Container fluid py={{ base: 12, md: 20 }}>
          {/* Replaced fixed Flex with a responsive Stack that stacks vertically on mobile */}
          <Stack direction={{ base: "column", lg: "row" }} gap={{ base: 10, lg: 24 }} align="center">
            <Box w={{ base: "100%", lg: "50%" }} maxW="600px">
              <ChakraImage asChild aspectRatio={4 / 5} fit={"contain"} width={"full"}>
                <NextImage
                  src={"/assets/stop-the-stigma/Linkedin-Carousels.png"}
                  width={1080}
                  height={1350}
                  alt={"Stop The Stigma Carousel"}
                  priority
                  sizes={"(max-width:1080px) 100vw,1080px"}
                />
              </ChakraImage>
            </Box>

            <VStack w={{ base: "100%", lg: "50%" }} align={{ base: "center", lg: "flex-start" }} textAlign={{ base: "center", lg: "left" }} gap={6}>
              <Heading as={"h1"} size={{ base: "3xl", md: "5xl" }} fontWeight={'bold'}>
                What is STOP THE STIGMA?
              </Heading>
              <Text textStyle={{ base: "md", md: "lg" }} color="fg.muted">
                <Strong color="fg">STOP THE STIGMA</Strong> is an annual conference centered
                on the stigma of disability and incarceration. Now in its fourth
                year the conference continues to provide a space for justice
                impacted individuals to have their voices and stories heard.
                Presented by Mokse and The Community, STOP THE STIGMA integrates
                innovative media, storytelling, and design to engage audiences and
                amplify impact. Together, we build an inclusive platform to
                challenge assumptions and inspire action.
              </Text>
              <Button
                bg={"teal.focusRing"}
                color="white"
                variant="solid"
                rounded="md"
                size={"xl"}
                _hover={{ bg: "teal.600" }}
              >
                <ChakraLink asChild _hover={{ textDecoration: "none" }}>
                  <NextLink href="https://docs.google.com/forms/d/e/1FAIpQLSe4Z0LI5JpkPH3eKBw-8ANquRWRxNJKwpS465KOStu3Jb4v_A/viewform" target="_blank">
                    <Text>Register Here</Text>
                  </NextLink>
                </ChakraLink>
              </Button>
            </VStack>
          </Stack>
        </Container>
      </SectionTemplate>

      {/* SECTION: Highlights */}
      {/* Moved background color to the Section wrapper to ensure it spans full bleed organically */}
      <Box as="section" bg={"midnightblue"} color={"white"} py={{ base: 16, md: 24 }}>
        <Container fluid>
          <VStack gap={12}>
            <Heading as={"h2"} size={{ base: "3xl", md: "5xl" }} textAlign={"center"} fontWeight={'bold'}>
              Conference Highlights
            </Heading>

            {/* Replaced 40vw with fluid widths and updated columns to stack on mobile */}
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gap={{ base: 8, md: 16 }}
              w={{ base: "100%", lg: "80%" }}
              mx="auto"
            >
              <FeatureCard
                title={"Opening Night Film - Being Michelle"}
                description={"A groundbreaking documentary that sets the tone for the conference by centering the lived experience of a Deaf woman navigating incarceration and disability."}
                icon={"Keyboard"}
              />
              <FeatureCard
                title={"Panels on Race, Incarceration, and Disability"}
                description={"Thought-provoking conversations that tackle the intersections of systemic racism, ableism, and mass incarceration—areas where stigma and structural barriers collide most powerfully."}
                icon={"Newspaper"}
              />
              <FeatureCard
                title={"Theatrical Premiere - Brick by Brick"}
                description={"A one-act play debuting at the conference, offering a creative lens into stories of resilience, justice, and belonging."}
                icon={"ListAlt"}
              />
              <FeatureCard
                title={"35 Inspiring Speakers"}
                description={"A diverse lineup of national leaders, educators, advocates, and directly impacted individuals sharing expertise, lived experience, and visions for inclusive futures."}
                icon={"ObjectGroup"}
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* FOOTER BANNER */}
      <HeaderTemplate
        image="/assets/stop-the-stigma/stop-stigma-sect2_background.webp"
        imageHeight={{ base: "15vh", md: "25vh" }}
        imageLabel="Stop The Stigma Conference Footer"
      />
    </PageBuilder>
  );
}