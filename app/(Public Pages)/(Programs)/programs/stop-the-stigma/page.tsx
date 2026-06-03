"use client";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import {
  Card,
  For,
  Center,
  Text,
  VStack,
  Image,
  Heading,
  Button,
  Strong,
  Link as ChakraLink,
  Box,
  Container,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { poppins } from "@/components/ui/fonts";
import {
  HeaderTemplate,
  PageBuilder,
  SectionTemplate,
} from "@/components/page-builder/template";
import FeatureCard from "@/components/home/feature-card";

export default function StopTheStigma() {
  const [countdownTarget] = useState<{ target: number }>({
    // Set the date we're counting down to
    target: new Date("Feb 19, 2026 00:00:00").getTime(),
  });
  const [countdown, setCountdown] = useState<{
    days: number | string;
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownTarget.target - now;
      if (distance < 0) {
        clearInterval(updateTimer);
        setCountdown({ days: "O", hours: "V", minutes: "E", seconds: "R" });
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
        imageHeight={{ base: "44vh", sm: "48vh", md: "56vh", lg: "62vh" }}
        imageLabel="Stop The Stigma Conference"
        title="Stop The Stigma Conference"
        titleAlignment={2}
        titleLocation={100}
      />

      {/* Countdown — its own section right below the hero */}
      <Box
        as={"section"}
        w={"100%"}
        bg={"blackAlpha.950"}
        py={{ base: 6, md: 10 }}
        px={{ base: 4, md: 8 }}
      >
        <Flex
          gap={{ base: 2, sm: 3, md: 5, lg: 8 }}
          direction={"row"}
          wrap={"wrap"}
          justify={"center"}
          align={"center"}
          maxW={"100%"}
        >
          <For
            each={[
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Minutes", value: countdown.minutes },
              { label: "Seconds", value: countdown.seconds },
            ]}
          >
            {({ label, value }: { label: string; value: number | string }) => (
              <Card.Root
                key={label}
                bg={"gray.900"}
                borderWidth={"1px"}
                borderColor={"whiteAlpha.300"}
                w={{ base: "70px", sm: "90px", md: "120px", lg: "150px" }}
                h={{ base: "70px", sm: "90px", md: "120px", lg: "150px" }}
              >
                <Card.Body p={0}>
                  <Center h={"100%"}>
                    <VStack gap={{ base: 0, md: 1 }}>
                      <Text
                        className={poppins.className}
                        color={"white"}
                        fontWeight={700}
                        lineHeight={1}
                        fontSize={{ base: "lg", sm: "2xl", md: "3xl", lg: "4xl" }}
                      >
                        {value}
                      </Text>
                      <Text
                        className={poppins.className}
                        color={"whiteAlpha.800"}
                        textTransform={"uppercase"}
                        letterSpacing={"0.05em"}
                        fontSize={{ base: "10px", sm: "xs", md: "sm", lg: "md" }}
                      >
                        {label}
                      </Text>
                    </VStack>
                  </Center>
                </Card.Body>
              </Card.Root>
            )}
          </For>
        </Flex>
      </Box>

      <SectionTemplate>
        <Container fluid maxW={{ base: "100%", xl: "container.xl" }} px={{ base: 4, md: 6, lg: 8 }} py={{ base: 8, md: 14 }}>
          <Flex
            gap={{ base: 6, md: 10, lg: 16 }}
            direction={{ base: "column", lg: "row" }}
            align={"center"}
          >
            <Image
              asChild
              aspectRatio={4 / 5}
              fit={"contain"}
              maxW={{ base: "100%", lg: "50%" }}
              mx={"auto"}
              w={"100%"}
            >
              <NextImage
                src={"/assets/stop-the-stigma/Linkedin-Carousels.png"}
                width={1080}
                height={1350}
                alt={"Stop The Stigma carousel"}
                fetchPriority={"high"}
                sizes={"(max-width:1080px) 100vw,1080px"}
              />
            </Image>

            <VStack
              align={{ base: "center", lg: "flex-start" }}
              gap={4}
              w={{ base: "100%", lg: "50%" }}
            >
              <Heading
                as={"h2"}
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight={"bold"}
                textAlign={{ base: "center", lg: "left" }}
              >
                What is STOP THE STIGMA?
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                <Strong>STOP THE STIGMA</Strong> is an annual conference centered on
                the stigma of disability and incarceration. Now in its fourth year,
                the conference continues to provide a space for justice-impacted
                individuals to have their voices and stories heard. Presented by Mokse
                and The Community, STOP THE STIGMA integrates innovative media,
                storytelling, and design to engage audiences and amplify impact.
                Together, we build an inclusive platform to challenge assumptions and
                inspire action.
              </Text>
              <Button
                bg={"teal.focusRing"}
                variant={"solid"}
                rounded={"md"}
                size={{ base: "md", md: "lg" }}
                mt={2}
              >
                <ChakraLink asChild>
                  <NextLink href="https://docs.google.com/forms/d/e/1FAIpQLSe4Z0LI5JpkPH3eKBw-8ANquRWRxNJKwpS465KOStu3Jb4v_A/viewform?usp=embed_facebook">
                    <Text color={"white"}>Register Here</Text>
                  </NextLink>
                </ChakraLink>
              </Button>
            </VStack>
          </Flex>
        </Container>

        <Box
          as={"section"}
          w={"100%"}
          bgColor={"midnightblue"}
          color={"white"}
          py={{ base: 10, md: 16 }}
          px={{ base: 4, md: 8 }}
        >
          <Container fluid maxW={{ base: "100%", xl: "container.xl" }}>
            <Heading
              as={"h2"}
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              textAlign={"center"}
              mb={{ base: 6, md: 10 }}
              fontWeight={"bold"}
            >
              Conference Highlights
            </Heading>

            <SimpleGrid
              columns={{ base: 1, sm: 2 }}
              gap={{ base: 6, md: 8, lg: 10 }}
              w={"100%"}
            >
              <FeatureCard
                title={"Opening Night Film - Being Michelle"}
                description={
                  "A groundbreaking documentary that sets the tone for the conference by centering the lived experience of a Deaf woman navigating incarceration and disability."
                }
                icon={"Keyboard"}
              />
              <FeatureCard
                title={"Panels on Race, Incarceration, and Disability"}
                description={
                  "Thought-provoking conversations that tackle the intersections of systemic racism, ableism, and mass incarceration—areas where stigma and structural barriers collide most powerfully."
                }
                icon={"Newspaper"}
              />
              <FeatureCard
                title={"Theatrical Premiere - Brick by Brick"}
                description={
                  "A one-act play debuting at the conference, offering a creative lens into stories of resilience, justice, and belonging."
                }
                icon={"ListAlt"}
              />
              <FeatureCard
                title={"35 Inspiring Speakers"}
                description={
                  "A diverse lineup of national leaders, educators, advocates, and directly impacted individuals sharing expertise, lived experience, and visions for inclusive futures."
                }
                icon={"ObjectGroup"}
              />
            </SimpleGrid>
          </Container>
        </Box>
      </SectionTemplate>
    </PageBuilder>
  );
}