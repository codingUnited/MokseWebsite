"use client";
import NextImage from "next/image";
import TeamMemberCard from "@/components/about/team-member-card";
import { executiveBoard, teamMembers } from "@/data/team";
import {
  Container,
  Box,
  Text,
  AbsoluteCenter,
  VStack,
  Stack,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Image as ChakraImage,
  Card,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { poppins } from "@/components/ui/fonts";
import NextLink from "next/link";
import { Icon } from "@/components/ui/icons/icon";

export default function AboutUs() {
  return (
    <VStack w={"100%"}>
      <Box
        position="relative"
        w={"100%"}
        h={{ base: "45vh", md: "58vh" }}
        bgImage={"url('/assets/about-us/about-HeroImage.webp')"}
        bgSize={"cover"}
        backgroundPosition={"center"}
        bgRepeat={"no-repeat"}
      >
        <AbsoluteCenter
          textAlign="center"
          bg="rgba(0, 0, 0, 0.4)"
          w={"100%"}
          h={"100%"}
          alignItems={"center"}
          display="flex"
          justifyContent="center"
        >
          <SimpleGrid columns={1} w="100%">
            <VStack
              w={{ base: "90%", md: "75%" }}
              pl={{ base: 0, md: 16 }}
              margin="0 auto"
            >
              <Heading as={"h1"} p={2}>
                <Text
                  textStyle={{ base: "5xl", md: "7xl" }}
                  className={poppins.className}
                  textAlign={{ base: "center", md: "start" }}
                  textTransform={"capitalize"}
                  overflow={"hidden"}
                  wordBreak={"normal"}
                  verticalAlign={"baseline"}
                  color={"white"}
                >
                  About Us
                </Text>
              </Heading>
              <Text
                color={"white"}
                textAlign={{ base: "center", md: "start" }}
                px={{ base: 4, md: 0 }}
              >
                Our organization strives to break down barriers and stop the
                stigma associated with incarceration through technical
                assistance, consulting services, educational conferences,
                and business support programs.
              </Text>
            </VStack>
          </SimpleGrid>
        </AbsoluteCenter>
      </Box>

      <Container as={"main"} maxW={"7xl"} h={"100%"} px={{ base: 4, md: 8 }}>
        <SimpleGrid
          as={"section"}
          pt={12}
          pb={"35px"}
          columns={{ base: 1, md: 2 }}
          gap={6}
        >
          <Card.Root p={8}>
            <Avatar.Root size={"2xl"}>
              <Icon name={"Gem"} size={8} color={"#44C1B4"} />
            </Avatar.Root>
            <Box mt={4}>
              <Heading as="h3" textStyle="xl" mb={2}>
                Vision
              </Heading>
              <Text>
                A society where all individuals have equal opportunities to
                thrive, learn, and lead. Empowered to contribute positively
                to their communities without the stigma or limitations from
                their past.
              </Text>
            </Box>
          </Card.Root>

          <Card.Root p={8}>
            <Avatar.Root size={"2xl"}>
              <Icon name={"Gem"} size={8} color={"#44C1B4"} />
            </Avatar.Root>
            <Box mt={4}>
              <Heading as="h3" textStyle="xl" mb={2}>
                Mission
              </Heading>
              <Text>
                To promote education, empowerment, and entrepreneurship
                among incarcerated learners and individuals. Our
                organization strives to break down barriers and stop the
                stigma associated with incarceration through consulting
                services, educational conferences, and business support
                programs.
              </Text>
            </Box>
          </Card.Root>
        </SimpleGrid>

        <Box as="section" py={8}>
          <Heading
            as="h2"
            textAlign={"center"}
            className={poppins.className}
            textStyle={{ base: "3xl", md: "4xl" }}
            mb={8}
          >
            Executive Board Members
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8}>

            {executiveBoard.map((member) => (
              <Center key={member.name}>
                <TeamMemberCard {...member} />
              </Center>
            ))}

          </SimpleGrid>
        </Box>

        <Box as="section" py={8}>
          <Heading
            as="h2"
            textAlign={"center"}
            className={poppins.className}
            textStyle={{ base: "3xl", md: "4xl" }}
            mb={8}
          >
            Our Team
          </Heading>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            gapY={10}
            gapX={{ base: 6, md: 16 }}
          >
            {teamMembers.map((member) => (
              <Center key={member.name + member.email}>
                <TeamMemberCard  {...member} />
              </Center>
            ))}
          </SimpleGrid>
        </Box>

        <Box as="section" py={12} pb={20}>
          <Heading
            as="h2"
            textAlign={"center"}
            className={poppins.className}
            textStyle={{ base: "3xl", md: "4xl" }}
          >
            Our Partners
          </Heading>
          <Text textAlign={"center"} mt={4}>
            Join us in creating meaningful change through collaborative
            projects and shared resources.
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ base: 8, md: 16 }}
            mt={8}
          >
            <Box>
              <ChakraLink asChild variant="underline">
                <NextLink
                  href="https://www.facebook.com/profile.php?id=61569163410278"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChakraImage asChild w={{ base: "200px", md: "300px" }}>
                    <NextImage
                      src="/assets/partners/ht-logo.webp"
                      alt="HT Partner"
                      width={300}
                      height={300}
                    />
                  </ChakraImage>
                </NextLink>
              </ChakraLink>
            </Box>
            <Box>
              <ChakraLink asChild variant="underline">
                <NextLink
                  href="https://www.instagram.com/osobeautifulreentry/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChakraImage asChild w={{ base: "200px", md: "300px" }}>
                    <NextImage
                      src="/assets/partners/oh-so-beautiful-logo.webp"
                      alt="Oh So Beautiful Reentry"
                      width={300}
                      height={300}
                    />
                  </ChakraImage>
                </NextLink>
              </ChakraLink>
            </Box>
          </Stack>
        </Box>
      </Container>
    </VStack>
  );
}