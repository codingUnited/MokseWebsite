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
} from "@chakra-ui/react";
import { poppins } from "@/components/ui/fonts";
// import { openSans } from "@/components/ui/fonts"; 
import { Icon } from "@/components/ui/icons/icon";

export default function Home() {
  return (
    <VStack w={{ mobileS: "100dvw" }}>
      <Box
        roundedBottomRight={{ mobileS: "40px" }}
        w={{ mobileS: "100dvw" }}
        h={{ mobileS: "98dvh" }}
        bgImage={"url('/assets/home/HeroImage.jpg')"}
        bgSize={{ mobileS: "291%" }}
        backgroundPosition={{ mobileS: "right bottom" }}
        bgRepeat={{ mobileS: "no-repeat" }}
        bgColor={{ mobileS: "rgba(0, 0, 0, 0.4)" }}
        bgBlendMode={{ mobileS: "multiply" }}
        role="img"
        aria-label="Mokse hero image 1"
      // alt="Mokse hero image"
      >
        <SimpleGrid w={{ mobileS: "100%" }} h={{ mobileS: "100%" }} pt={{ mobileS: "28dvh" }} columns={{ mobileS: 1 }}>
          <VStack gap={{ mobileS: 5 }} >
            <Heading as={"h1"}
              size={{ mobileS: "3xl" }}
              className={poppins.className}
              textTransform={"capitalize"}
              verticalAlign={"baseline"}
              textAlign={{ mobileS: "center" }}
              lineHeight={{ mobileS: "1.48" }}
              letterSpacing={{ mobileS: "1px" }}
              alignSelf={{ mobileS: "normal", tablet: "start" }}
              _dark={{ color: "white" }}
              _light={{ color: "white" }} pl={1}
            >
              Empowering<br />
              change through<br />
              education and<br />
              advocacy
            </Heading>

            <Container w={{ mobileS: "container.xs" }} >
              <Text
                textAlign={{ mobileS: "center" }}
                alignSelf={{ mobileS: "center" }}
                _dark={{ color: "white" }}
                _light={{ color: "white" }}
              >
                We strive to break down barriers and stop the
                stigma associated with incarceration through
                consulting services, educational conferences,
                and business support programs.
              </Text>
            </Container>

            <Button justifySelf={{ mobileS: "baseline" }}
              mt={{ mobileS: "5dvh" }}
              bg={"teal.focusRing"}
              variant={"solid"}
              rounded={"md"}
              size={{ mobileS: "lg" }}
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
          <Container pt={{ mobileS: "15dvh" }}>
            <Heading as="h2"
              size={{ mobileS: "2xl" }}
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
            size={{ mobileS: "lg" }}
            boxShadow={"0px 12px 24px -8px #3b4fe466"}
            mt={{ mobileS: "2dvh" }}
            mb={{ mobileS: "15dvh" }}
          >
            <ChakraLink asChild>
              <NextLink href="/about">
                <Text >About Us</Text>
                <Icon name={"ArrowRight"} size={4} />
              </NextLink>
            </ChakraLink>
          </Button>
          <SimpleGrid
            columns={{ mobileS: 1, tablet: 2 }}
            row={{ mobileS: 1, tablet: 2 }}
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

      <Container bg={"brand.Mturquoise"} position={"relative"} h={{ mobileS: "80dvh" }} mt={{ mobileS: "36dvh" }}>
        <Float placement={"top-end"} offsetY={"90px"} offsetX={"127px"}>
          <ChakraImage
            // height={"53%"}
            // width={"325px"}
            src={"/dots.webp"}
            alt={"Mokse hero image"}
            pt={0}
            hideFrom={"mobileS"}
          />
          <Box
            w={{ mobileS: "255px" }}
            h={{ mobileS: "392px" }}
            bgImage={{ mobileS: "url('/home-backdrop-image.jpg')" }}
            bgSize={{ mobileS: "contain" }}
            bgRepeat={{ mobileS: "no-repeat" }}
            rounded={"lg"}
            bgBlendMode={{ mobileS: "multiply" }}
            role="img"
            aria-label="Mokse hero image 1"
            position={"relative"}
          >
            <Float placement={"top-start"} offsetY={{ mobileS: "118px" }} offsetX={{ mobileS: "-32px" }}>
              <Box
                w={{ mobileS: "255px" }}
                h={{ mobileS: "392px" }}
                bgImage={{ mobileS: "url('/assets/home/Image-1-1.jpg')" }}
                bgSize={{ mobileS: "contain" }}
                bgRepeat={{ mobileS: "no-repeat" }}
                rounded={"lg"}
                bgBlendMode={{ mobileS: "multiply" }}
                role="img"
                aria-label="Mokse hero image 2" />
            </Float>
          </Box>
        </Float>

        <Container h={{ mobileS: "46dvh" }} mt={{ mobileS: "40dvh" }} >
          <HStack>
            <Heading as={"h2"}>
              <Text textStyle={"2xl"} >
                Make a Difference
              </Text>
              <Text textStyle={"2xl"}>- Get Involved!</Text>
            </Heading>
          </HStack>
          <Box pt={{ mobileS: "2dvh" }} >
            <Text >
              Are you passionate about helping justice-impacted
              individuals? We need compassionate volunteers to assist in
              various roles, including mentorship, tutoring, and
              administrative support.
            </Text>
          </Box>
          <Button mt={{ mobileS: "4dvh" }}
            size={{ mobileS: "lg" }} h={{ mobileS: "6dvh" }}>
            Get Involved <Icon name={"ArrowRight"} />
          </Button>
        </Container>
      </Container>

      <Container fluid centerContent>
        <SimpleGrid
          columns={{ mobileS: 1, tablet: 2 }}
          row={{ mobileS: 1, tablet: 2 }}
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
        </SimpleGrid>
        <Button
          bg={"brand.Mturquoise"}
          variant="solid"
          w={{ mobileS: "45dvw", tablet: "20dvw" }}
          h={{ mobileS: "8dvh" }}
          alignSelf={"center"}
          mt={{ mobileS: 8 }}
          mb={{ mobileS: 16 }}
          boxShadow={"0px 12px 24px -8px #3b4fe466"}>
          <ChakraLink asChild>
            <NextLink href="https://www.paypal.com/donate/?hosted_button_id=G46WV8T5NG85A">
              <Text _light={{ color: "white" }} textStyle={{ mobileS: "lg" }}>Donate</Text>
            </NextLink>
          </ChakraLink>
        </Button>
      </Container>
      <Container pb={14} fluid asChild>
        <Card.Root
          flexDirection={{ mobileS: "column", tablet: "row" }}
          borderRadius={"0"}
          gap={6}
          bg="rgba(0, 0, 0, 0.0)"
          w={{ mobileS: "sm", tablet: "md" }}
        >
          <Card.Body >
            <Heading
              textStyle={{ mobileS: "3xl" }}
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
            maxW={{ mobileS: "100%" }} maxH={{ mobileS: "450px" }} ratio={16 / 9}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/p2q--KoXnXA?si=6mz92ZtuwqfrvnSZ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </AspectRatio>
        </Card.Root>
      </Container >

      <Container fluid centerContent p={0}>
        <SimpleGrid columns={{ mobileS: 1, tablet: 4 }} gap={{ mobileS: 20, tablet: 8 }} pt={8} >
          <GridItem colSpan={{ mobileS: 1, tablet: 2 }} >
            <Box
              h={{ mobileS: "230px", tablet: "216px", laptop: "328px" }}
              w={{ mobileS: "343px", tablet: "325px", laptop: "493px" }}
              bgImage={"url('/assets/home/IMG_0997-1-1024x683.webp')"}
              bgRepeat={{ mobileS: "no-repeat" }}
              backgroundPosition={"center"}
              bgSize={{ mobileS: "100%", tablet: "contain" }}
              role="img"
              aria-label="Mokse hero image 1"
              rounded="md"
            />
          </GridItem>
          <GridItem colSpan={{ mobileS: 1, tablet: 2 }}>
            <Box
              h={{ mobileS: "230px", tablet: "216px", laptop: "328px" }}
              w={{ mobileS: "343px", tablet: "325px", laptop: "493px" }}
              bgImage={"url('/assets/home/IMG_1004-1024x683.webp')"}
              bgRepeat={{ mobileS: "no-repeat" }}
              backgroundPosition={"center"}
              bgSize={{ mobileS: "100%", tablet: "contain" }}
              role="img"
              aria-label="Mokse hero image 1"
              rounded="md"
            />
          </GridItem>
          <GridItem colSpan={{ mobileS: 1, tablet: 2 }}>
            <Box
              h={{ mobileS: "125%", tablet: "325px" }}
              w={{ tablet: "325px" }}
              aspectRatio={{ mobileS: "square" }}
              bgImage={"url('/assets/home/IMG_1011-300x300.webp')"}
              bgRepeat={{ mobileS: "no-repeat" }}
              backgroundPosition={"center"}
              bgSize={{ mobileS: "cover", tablet: "contain" }}
              role="img"
              aria-label="Mokse hero image 1"
              rounded="md"
            />
          </GridItem>
          <GridItem colSpan={{ mobileS: 1, tablet: 2 }}>
            <Box
              h={{ mobileS: "125%", tablet: "325px" }}
              w={{ tablet: "325px" }}
              aspectRatio={{ mobileS: "square" }}
              bgImage={"url('/assets/home/IMG_1012-300x300.webp')"}
              bgRepeat={{ mobileS: "no-repeat" }}
              backgroundPosition={"center"}
              bgSize={{ mobileS: "cover", tablet: "contain" }}
              role="img"
              aria-label="Mokse hero image 1"
              rounded="md"
            />
          </GridItem>
          <GridItem colSpan={{ mobileS: 1, tablet: 2 }}>
            <Box
              h={{ mobileS: "125%", tablet: "325px" }}
              w={{ tablet: "325px" }}
              aspectRatio={{ mobileS: "square" }}
              bgImage={"url('/assets/home/IMG_1027-300x300.webp')"}
              bgRepeat={{ mobileS: "no-repeat" }}
              backgroundPosition={"center"}
              bgSize={{ mobileS: "cover", tablet: "contain" }}
              role="img"
              aria-label="Mokse hero image 1"
              rounded="md"
            />
          </GridItem>
          <GridItem colSpan={{ mobileS: 1, tablet: 2 }}>
            <Box
              h={{ mobileS: "125%", tablet: "325px" }}
              w={{ tablet: "325px" }}
              aspectRatio={{ mobileS: "square" }}
              bgImage={"url('/assets/home/IMG_0995-300x300.webp')"}
              bgRepeat={{ mobileS: "no-repeat" }}
              backgroundPosition={"center"}
              bgSize={{ mobileS: "cover", tablet: "contain" }}
              role="img"
              aria-label="Mokse hero image 1"
              rounded="md"
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </VStack >
  );
}
