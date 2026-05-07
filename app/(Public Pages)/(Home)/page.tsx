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
    <VStack w={{ mobile: "100dvw" }}>
      <Box
        roundedBottomRight={{ mobile: "40px" }}
        w={{ mobile: "100dvw" }}
        h={{ mobile: "98dvh" }}
        bgImage={"url('/assets/home/HeroImage.jpg')"}
        bgSize={{ mobile: "291%" }}
        backgroundPosition={{ mobile: "right bottom" }}
        bgRepeat={{ mobile: "no-repeat" }}
        bgColor={{ mobile: "rgba(0, 0, 0, 0.4)" }}
        bgBlendMode={{ mobile: "multiply" }}
        role="img"
        aria-label="Mokse hero image 1"
      // alt="Mokse hero image"
      >
        <SimpleGrid w={{ mobile: "100%" }} h={{ mobile: "100%" }} pt={{ mobile: "28dvh" }} columns={{ mobile: 1 }}>
          <VStack gap={{ mobile: 5 }} >
            <Heading as={"h1"}
              size={{ mobile: "3xl" }}
              className={poppins.className}
              textTransform={"capitalize"}
              verticalAlign={"baseline"}
              textAlign={{ mobile: "center" }}
              lineHeight={{ mobile: "1.48" }}
              letterSpacing={{ mobile: "1px" }}
              alignSelf={{ mobile: "normal", tablet: "start" }}
              _dark={{ color: "white" }}
              _light={{ color: "white" }} pl={1}
            >
              Empowering<br />
              change through<br />
              education and<br />
              advocacy
            </Heading>

            <Container w={{ mobile: "container.xs" }} >
              <Text
                textAlign={{ mobile: "center" }}
                alignSelf={{ mobile: "center" }}
                _dark={{ color: "white" }}
                _light={{ color: "white" }}
              >
                We strive to break down barriers and stop the
                stigma associated with incarceration through
                consulting services, educational conferences,
                and business support programs.
              </Text>
            </Container>

            <Button justifySelf={{ mobile: "baseline" }}
              mt={{ mobile: "5dvh" }}
              bg={"teal.focusRing"}
              variant={"solid"}
              rounded={"md"}
              size={{ mobile: "lg" }}
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
          <Container pt={{ mobile: "15dvh" }}>
            <Heading as="h2"
              size={{ mobile: "2xl" }}
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
            size={{ mobile: "lg" }}
            boxShadow={"0px 12px 24px -8px #3b4fe466"}
            mt={{ mobile: "2dvh" }}
            mb={{ mobile: "15dvh" }}
          >
            <ChakraLink asChild>
              <NextLink href="/about">
                <Text >About Us</Text>
                <Icon name={"ArrowRight"} size={4} />
              </NextLink>
            </ChakraLink>
          </Button>
          <SimpleGrid
            columns={{ mobile: 1, tablet: 2 }}
            row={{ mobile: 1, tablet: 2 }}
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

      <Container bg={"brand.Mturquoise"} position={"relative"} h={{ mobile: "80dvh" }} mt={{ mobile: "36dvh" }}>
        <Float placement={"top-end"} offsetY={"90px"} offsetX={"127px"}>
          <ChakraImage
            // height={"53%"}
            // width={"325px"}
            src={"/dots.webp"}
            alt={"Mokse hero image"}
            pt={0}
            hideFrom={"mobile"}
          />
          <Box
            w={{ mobile: "255px" }}
            h={{ mobile: "392px" }}
            bgImage={{ mobile: "url('/home-backdrop-image.jpg')" }}
            bgSize={{ mobile: "contain" }}
            bgRepeat={{ mobile: "no-repeat" }}
            rounded={"lg"}
            bgBlendMode={{ mobile: "multiply" }}
            role="img"
            aria-label="Mokse hero image 1"
            position={"relative"}
          >
            <Float placement={"top-start"} offsetY={{ mobile: "118px" }} offsetX={{ mobile: "-32px" }}>
              <Box
                w={{ mobile: "255px" }}
                h={{ mobile: "392px" }}
                bgImage={{ mobile: "url('/assets/home/Image-1-1.jpg')" }}
                bgSize={{ mobile: "contain" }}
                bgRepeat={{ mobile: "no-repeat" }}
                rounded={"lg"}
                bgBlendMode={{ mobile: "multiply" }}
                role="img"
                aria-label="Mokse hero image 2" />
            </Float>
          </Box>
        </Float>

        <Container h={{ mobile: "46dvh" }} mt={{ mobile: "40dvh" }} >
          <HStack>
            <Heading as={"h2"}>
              <Text textStyle={"2xl"} >
                Make a Difference
              </Text>
              <Text textStyle={"2xl"}>- Get Involved!</Text>
            </Heading>
          </HStack>
          <Box pt={{ mobile: "2dvh" }} >
            <Text >
              Are you passionate about helping justice-impacted
              individuals? We need compassionate volunteers to assist in
              various roles, including mentorship, tutoring, and
              administrative support.
            </Text>
          </Box>
          <Button mt={{ mobile: "4dvh" }}
            size={{ mobile: "lg" }} h={{ mobile: "6dvh" }}>
            Get Involved <Icon name={"ArrowRight"} />
          </Button>
        </Container>
      </Container>

      <Container fluid centerContent>
        <SimpleGrid
          columns={{ mobile: 1, tablet: 2 }}
          row={{ mobile: 1, tablet: 2 }}
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
          w={{ mobile: "45dvw" }}
          h={{ mobile: "8dvh" }}
          alignSelf={"center"}
          mt={{ mobile: 8 }}
          mb={{ mobile: 16 }}
          boxShadow={"0px 12px 24px -8px #3b4fe466"}>
          <ChakraLink asChild>
            <NextLink href="https://www.paypal.com/donate/?hosted_button_id=G46WV8T5NG85A">
              <Text _light={{ color: "white" }} textStyle={{ mobile: "lg" }}>Donate</Text>
            </NextLink>
          </ChakraLink>
        </Button>
      </Container>
      <Container pb={14} fluid asChild>
        <Card.Root
          flexDirection={{ mobile: "column" }}
          borderRadius={"0"}
          gap={6}
          bg="rgba(0, 0, 0, 0.0)"
          w={{ mobile: "sm" }}
        >
          <Card.Body w={{}}>
            <Heading
              textStyle={{ mobile: "3xl" }}
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
            maxW={{ mobile: "100%" }} maxH={{ mobile: "450px" }} ratio={16 / 9}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/p2q--KoXnXA?si=6mz92ZtuwqfrvnSZ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </AspectRatio>
        </Card.Root>
      </Container >

      <Container fluid centerContent>
        <SimpleGrid columns={{ mobile: 1 }} gap={20} pt={8}>
          <GridItem colSpan={{ mobile: 1 }}>
            <Box
              h={{ mobile: "230px" }}
              w={{ mobile: "343px" }}
              bgImage={"url('/assets/home/IMG_0997-1-1024x683.webp')"}
              bgRepeat={{ mobile: "no-repeat" }}
              backgroundPosition={"center"}
              bgSize={{ mobile: "100%" }}
              role="img"
              aria-label="Mokse hero image 1"
              rounded="md"
            />
          </GridItem>
          <GridItem colSpan={{ mobile: 1 }}>
            <Box
              h={{ mobile: "230px" }}
              w={{ mobile: "343px" }}
              bgImage={"url('/assets/home/IMG_1004-1024x683.webp')"}
              bgRepeat={{ mobile: "no-repeat" }}
              backgroundPosition={"center"}
              bgSize={{ mobile: "100%" }}
              role="img"
              aria-label="Mokse hero image 1"
              rounded="md"
            />
          </GridItem>
          <GridItem colSpan={{ mobile: 1 }}>
            <Center
              w={{ mobile: "343px" }}
              h={{ mobile: "230px" }}>
              <Box
                h={{ mobile: "125%" }}
                aspectRatio={{ mobile: "square" }}
                bgImage={"url('/assets/home/IMG_1011-300x300.webp')"}
                bgRepeat={{ mobile: "no-repeat" }}
                backgroundPosition={"center"}
                bgSize={{ mobile: "cover" }}
                role="img"
                aria-label="Mokse hero image 1"
                rounded="md"
              />
            </Center>
          </GridItem>
          <GridItem colSpan={{ mobile: 1 }}>
            <Center
              w={{ mobile: "343px" }}
              h={{ mobile: "230px" }}>
              <Box
                h={{ mobile: "125%" }}
                aspectRatio={{ mobile: "square" }}
                bgImage={"url('/assets/home/IMG_1012-300x300.webp')"}
                bgRepeat={{ mobile: "no-repeat" }}
                backgroundPosition={"center"}
                bgSize={{ mobile: "cover" }}
                role="img"
                aria-label="Mokse hero image 1"
                rounded="md"
              />
            </Center>
          </GridItem>
          <GridItem colSpan={{ mobile: 1 }}>
            <Center
              w={{ mobile: "343px" }}
              h={{ mobile: "230px" }}>
              <Box
                h={{ mobile: "125%" }}
                aspectRatio={{ mobile: "square" }}
                bgImage={"url('/assets/home/IMG_1027-300x300.webp')"}
                bgRepeat={{ mobile: "no-repeat" }}
                backgroundPosition={"center"}
                bgSize={{ mobile: "cover" }}
                role="img"
                aria-label="Mokse hero image 1"
                rounded="md"
              />
            </Center>
          </GridItem>
          <GridItem >
            <Center
              w={{ mobile: "343px" }}
              h={{ mobile: "230px" }}>
              <Box
                h={{ mobile: "125%" }}
                aspectRatio={{ mobile: "square" }}
                bgImage={"url('/assets/home/IMG_0995-300x300.webp')"}
                bgRepeat={{ mobile: "no-repeat" }}
                backgroundPosition={"center"}
                bgSize={{ mobile: "cover" }}
                role="img"
                aria-label="Mokse hero image 1"
                rounded="md"
              />
            </Center>
          </GridItem>
        </SimpleGrid>
      </Container>
    </VStack >
  );
}
