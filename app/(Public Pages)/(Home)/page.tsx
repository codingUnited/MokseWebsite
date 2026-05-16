"use client";

import NextLink from "next/link";
import FeatureCard from "@/components/home/feature-card";
import { empowerment } from "@/data/empowerment";
import { getInvolved } from "@/data/get-involved";
import {
  Float,
  Container,
  Box,
  Text,
  Button,
  AbsoluteCenter,
  VStack,
  Heading,
  Link as ChakraLink,
  Center,
  SimpleGrid,
  GridItem,
  Stack,
  Card,
  Image as ChakraImage,
  HStack,
  AspectRatio,
  Grid,
} from "@chakra-ui/react";
import { poppins } from "@/components/ui/fonts";
// import { openSans } from "@/components/ui/fonts"; 
import { Icon } from "@/components/ui/icons/icon";
import Pictures from "./components/Pictures";

export default function Home() {
  return (
    <VStack w={{ base: "100%" }}>
      <Box
        roundedBottomRight={{ base: "40px" }}
        w={{ base: "100%" }}
        h={{ base: "98dvh", md: "92dvh" }}
        bgImage={"url('/assets/home/HeroImage.jpg')"}
        bgSize={{ base: "291%", md: "100%" }}
        backgroundPosition={{ base: "right bottom", md: "center" }}
        bgRepeat={{ base: "no-repeat" }}
        bgColor={{ base: "rgba(0, 0, 0, 0.4)" }}
        bgBlendMode={{ base: "multiply" }}
        role="img"
        aria-label="Mokse hero image 1"
      >
        <SimpleGrid w={{ base: "100%" }} h={{ base: "100%" }} pt={{ base: "28dvh", md: "12dvh" }} columns={{ base: 1 }}>
          <VStack gap={{ base: 5 }} >
            <Heading as={"h1"}
              size={{ base: "3xl", md: "6xl" }}
              className={poppins.className}
              textTransform={"capitalize"}
              verticalAlign={{ base: "baseline" }}
              textAlign={{ base: "center", md: "left" }}
              lineHeight={{ base: "1.48" }}
              letterSpacing={{ base: "1px" }}
              alignSelf={{ base: "normal", md: "start" }}
              _dark={{ color: "white" }}
              _light={{ color: "white" }} pl={{ base: 1, md: "100px" }}
            >
              Empowering<br />
              change through<br />
              education and<br />
              advocacy
            </Heading>

            <Container w={{ base: "container.xs", md: "container.md" }} >
              <Text
                textAlign={{ base: "center", md: "left" }}
                alignSelf={{ base: "center", }}
                _dark={{ color: "white" }}
                _light={{ color: "white" }}
                w={{ base: "100%", md: "40%" }}
              >
                We strive to break down barriers and stop the
                stigma associated with incarceration through
                consulting services, educational conferences,
                and business support programs.
              </Text>
            </Container>

            <Button justifySelf={{ base: "baseline", md: "start" }}
              mt={{ base: "5dvh" }}
              bg={"teal.focusRing"}
              variant={"solid"}
              rounded={"md"}
              size={{ base: "lg" }}
              boxShadow={"0px 12px 24px -8px #3b4fe466"}
            >
              <ChakraLink asChild
                _dark={{ color: "white" }}
                _light={{ color: "white" }}>
                <NextLink href="/services">
                  Learn More <Icon name={"ArrowRight"} size={4} />
                </NextLink>
              </ChakraLink>
            </Button>
          </VStack>
        </SimpleGrid>
      </Box>

      <Container fluid>
        <VStack>
          <Container pt={{ base: "15dvh" }}>
            <Heading as="h2"
              size={{ base: "2xl" }}
              fontWeight={"bold"}
              className={poppins.className}
              textAlign={"center"}
              textWrapStyle={"balance"}
              verticalAlign={"baseline"}
              wordWrap={"normal"}>
              A Commitment To Empowerment
            </Heading>
          </Container>
          <Text textStyle={"md"} textAlign={"center"}>
            To transform the lives of learners by providing accessible
            education, entrepreneurial support, and empowerment resources
            that foster personal and professional growth.
          </Text>
          <Button
            bg={"brand.Mturquoise"}
            variant="solid"
            rounded="md"
            size={{ base: "lg" }}
            boxShadow={"0px 12px 24px -8px #3b4fe466"}
            mt={{ base: "2dvh" }}
            mb={{ base: "15dvh" }}
          >
            <ChakraLink asChild>
              <NextLink href="/about">
                <Text >About Us</Text>
                <Icon name={"ArrowRight"} size={4} />
              </NextLink>
            </ChakraLink>
          </Button>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            row={{ base: 1, md: 2 }}
            pt={8}
            gap={8}
            css={{
              "& > *": {
                border: "0.5px solid rgba(0, 0, 0, 0.2)",
                boxShadow: "0px 12px 24px -8px #3b4fe466"
              }
            }}>
            {
              empowerment.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))
            }
          </SimpleGrid>
        </VStack>
      </Container >

      <Container bg={"brand.Mturquoise"} position={"relative"} h={{ base: "80dvh" }} mt={{ base: "36dvh" }}>
        <Float placement={"top-end"} offsetY={{ base: "90px" }} offsetX={{ base: "127px" }}>
          <ChakraImage
            // height={"53%"}
            // width={"325px"}
            src={"/dots.webp"}
            alt={"Mokse hero image"}
            pt={0}
            hideBelow={"md"}
          />
          <Box
            w={{ base: "255px" }}
            h={{ base: "392px" }}
            bgImage={{ base: "url('/home-backdrop-image.jpg')" }}
            bgSize={{ base: "contain" }}
            bgRepeat={{ base: "no-repeat" }}
            rounded={"lg"}
            bgBlendMode={{ base: "multiply" }}
            role="img"
            aria-label="Mokse hero image 1"
            position={"relative"}
          >
            <Float placement={"top-start"} offsetY={{ base: "118px" }} offsetX={{ base: "-32px" }}>
              <Box
                w={{ base: "255px" }}
                h={{ base: "392px" }}
                bgImage={{ base: "url('/assets/home/Image-1-1.jpg')" }}
                bgSize={{ base: "contain" }}
                bgRepeat={{ base: "no-repeat" }}
                rounded={"lg"}
                bgBlendMode={{ base: "multiply" }}
                role="img"
                aria-label="Mokse hero image 2" />
            </Float>
          </Box>
        </Float>

        <Container h={{ base: "46dvh" }} mt={{ base: "40dvh" }} >
          <HStack>
            <Heading as={"h2"}>
              <Text textStyle={"2xl"} >
                Make a Difference
              </Text>
              <Text textStyle={"2xl"}>- Get Involved!</Text>
            </Heading>
          </HStack>
          <Box pt={{ base: "2dvh" }} >
            <Text >
              Are you passionate about helping justice-impacted
              individuals? We need compassionate volunteers to assist in
              various roles, including mentorship, tutoring, and
              administrative support.
            </Text>
          </Box>
          <Button mt={{ base: "4dvh" }}
            size={{ base: "lg" }} h={{ base: "6dvh" }}>
            Get Involved <Icon name={"ArrowRight"} />
          </Button>
        </Container>
      </Container>

      <Container fluid centerContent>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          templateRows={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          pt={8}
          gap={8}
          css={{
            "& > *": {
              border: "0.5px solid rgba(0, 0, 0, 0.2)",
              boxShadow: "0px 12px 24px -8px #3b4fe466"
            }
          }}>
          {getInvolved.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </Grid>
        <Button
          bg={"brand.Mturquoise"}
          variant="solid"
          w={{ base: "45dvw", md: "20dvw" }}
          h={{ base: "8dvh" }}
          alignSelf={"center"}
          mt={{ base: 8 }}
          mb={{ base: 16 }}
          boxShadow={"0px 12px 24px -8px #3b4fe466"}>
          <ChakraLink asChild>
            <NextLink href="https://www.paypal.com/donate/?hosted_button_id=G46WV8T5NG85A">
              <Text _light={{ color: "white" }} textStyle={{ base: "lg" }}>Donate</Text>
            </NextLink>
          </ChakraLink>
        </Button>
      </Container>
      <Container pb={14} fluid asChild>
        <Card.Root
          flexDirection={{ base: "column", md: "row" }}
          gap={6}
          bg="rgba(0, 0, 0, 0.0)"
          p={10}
          maxW={{ base: "sm", md: "md", laptop: "4xl" }}
        >
          <Card.Body w={{ base: "100%", md: "100%" }} gap={4} p={0}>
            <Heading
              textStyle={{ base: "3xl" }}
              className={poppins.className}
              textAlign={"left"}
              verticalAlign={"baseline"}
              textTransform={"capitalize"}>
              Special Story: The three words that changed my life
            </Heading>
            <Card.Description>
              Mokse is proud to share the TEDx talk of Dr. Matthews.
            </Card.Description>
          </Card.Body>

          <AspectRatio
            maxW={{ base: "100%", md: "100%" }}
            minW={{ base: "100%", md: "100px" }}
            maxH={{ base: "450px", md: "100%" }}
            minH={{ base: "100%", md: "100px" }}
            ratio={16 / 9}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/p2q--KoXnXA?si=6mz92ZtuwqfrvnSZ"
              title="YouTube video player"
              allowFullScreen
            />
          </AspectRatio>
        </Card.Root>
      </Container >

      <Pictures />
    </VStack >
  );
}
