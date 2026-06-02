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
    <VStack w={"100%"} maxW={"100vw"} overflowX={"hidden"}>
      <Box
        roundedBottomRight={{ base: "24px", md: "40px" }}
        w={"100%"}
        minH={{ base: "560px", md: "620px", lg: "720px" }}
        h={{ base: "auto", md: "92vh" }}
        py={{ base: "120px", md: "20vh" }}
        bgImage={"url('/assets/home/HeroImage.jpg')"}
        bgSize={"cover"}
        backgroundPosition={{ base: "center", md: "center" }}
        bgRepeat={"no-repeat"}
        bgColor={"rgba(0, 0, 0, 0.4)"}
        bgBlendMode={"multiply"}
        role="img"
        aria-label="Mokse hero image 1"
      >
        <SimpleGrid w={"100%"} h={"100%"} columns={1}>
          <VStack
            gap={{ base: 4, md: 5 }}
            px={{ base: 4, md: 8 }}
            align={{ base: "center", md: "flex-start" }}
            maxW={{ md: "container.xl" }}
            mx={"auto"}
            w={"100%"}
          >
            <Heading as={"h1"}
              size={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
              className={poppins.className}
              textTransform={"capitalize"}
              verticalAlign={"baseline"}
              textAlign={{ base: "center", md: "left" }}
              lineHeight={{ base: 1.25, md: 1.2 }}
              letterSpacing={"0.5px"}
              alignSelf={{ base: "center", md: "flex-start" }}
              _dark={{ color: "white" }}
              _light={{ color: "white" }}
              pl={{ base: 0, md: "60px", lg: "100px" }}
            >
              Empowering<br />
              change through<br />
              education and<br />
              advocacy
            </Heading>

            <Container px={{ base: 2, md: 0 }} pl={{ md: "60px", lg: "100px" }} maxW={{ base: "100%", md: "container.md" }}>
              <Text
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                _dark={{ color: "white" }}
                _light={{ color: "white" }}
                w={{ base: "100%", md: "60%" }}
              >
                We strive to break down barriers and stop the
                stigma associated with incarceration through
                consulting services, educational conferences,
                and business support programs.
              </Text>
            </Container>

            <Button
              alignSelf={{ base: "center", md: "flex-start" }}
              ml={{ md: "60px", lg: "100px" }}
              mt={{ base: 4, md: 6 }}
              bg={"teal.focusRing"}
              variant={"solid"}
              rounded={"md"}
              size={{ base: "md", md: "lg" }}
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

      <Container fluid px={{ base: 4, md: 8 }} maxW={{ base: "100%", xl: "container.xl" }}>
        <VStack>
          <Container pt={{ base: 12, md: 20, lg: 28 }} px={{ base: 0 }}>
            <Heading as="h2"
              size={{ base: "xl", sm: "2xl", md: "3xl" }}
              fontWeight={"bold"}
              className={poppins.className}
              textAlign={"center"}
              textWrapStyle={"balance"}
              verticalAlign={"baseline"}
              wordWrap={"normal"}>
              A Commitment To Empowerment
            </Heading>
          </Container>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            textAlign={"center"}
            maxW={{ base: "100%", md: "container.md" }}
            px={{ base: 2, md: 0 }}
          >
            To transform the lives of learners by providing accessible
            education, entrepreneurial support, and empowerment resources
            that foster personal and professional growth.
          </Text>
          <Button
            bg={"brand.Mturquoise"}
            variant="solid"
            rounded="md"
            size={{ base: "md", md: "lg" }}
            boxShadow={"0px 12px 24px -8px #3b4fe466"}
            mt={{ base: 3, md: 4 }}
            mb={{ base: 10, md: 16, lg: 24 }}
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
            pt={{ base: 4, md: 8 }}
            gap={{ base: 6, md: 8 }}
            w={"100%"}
            justifyItems={"center"}
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

      <Container
        bg={"brand.Mturquoise"}
        position={"relative"}
        mt={{ base: 12, md: 20, lg: 28 }}
        py={{ base: 10, md: 16 }}
        px={{ base: 6, md: 10 }}
        maxW={"100%"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "center" }}
          justify={"space-between"}
          gap={{ base: 8, md: 12 }}
        >
          <Box flex={"1"} maxW={{ base: "100%", md: "55%" }} order={{ base: 2, md: 1 }}>
            <Heading as={"h2"}>
              <Text textStyle={{ base: "xl", md: "2xl", lg: "3xl" }} >
                Make a Difference
              </Text>
              <Text textStyle={{ base: "xl", md: "2xl", lg: "3xl" }}>- Get Involved!</Text>
            </Heading>
            <Box pt={{ base: 3, md: 4 }} >
              <Text fontSize={{ base: "sm", md: "md" }}>
                Are you passionate about helping justice-impacted
                individuals? We need compassionate volunteers to assist in
                various roles, including mentorship, tutoring, and
                administrative support.
              </Text>
            </Box>
            <Button mt={{ base: 4, md: 6 }} size={{ base: "md", md: "lg" }}>
              Get Involved <Icon name={"ArrowRight"} />
            </Button>
          </Box>

          <Box
            position={"relative"}
            order={{ base: 1, md: 2 }}
            w={{ base: "260px", md: "300px", lg: "340px" }}
            h={{ base: "400px", md: "460px", lg: "500px" }}
            flexShrink={0}
          >
            <Box
              position={"absolute"}
              top={0}
              left={0}
              w={"100%"}
              h={"100%"}
              bgImage={"url('/home-backdrop-image.jpg')"}
              bgSize={"cover"}
              backgroundPosition={"center"}
              bgRepeat={"no-repeat"}
              rounded={"lg"}
              role="img"
              aria-label="Mokse hero image 1"
            />
            <Box
              position={"absolute"}
              top={{ base: "60px", md: "80px" }}
              left={{ base: "-30px", md: "-40px" }}
              w={"100%"}
              h={"100%"}
              bgImage={"url('/assets/home/Image-1-1.jpg')"}
              bgSize={"cover"}
              backgroundPosition={"center"}
              bgRepeat={"no-repeat"}
              rounded={"lg"}
              role="img"
              aria-label="Mokse hero image 2"
            />
          </Box>
        </Stack>
      </Container>

      <Container fluid centerContent px={{ base: 4, md: 8 }} maxW={{ base: "100%", xl: "container.xl" }} mt={{ base: 12, md: 16 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          pt={{ base: 4, md: 8 }}
          gap={{ base: 6, md: 8 }}
          w={"100%"}
          justifyItems={"center"}
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
          w={{ base: "60%", sm: "240px", md: "260px" }}
          minH={{ base: "48px", md: "56px" }}
          alignSelf={"center"}
          mt={{ base: 6, md: 8 }}
          mb={{ base: 10, md: 16 }}
          boxShadow={"0px 12px 24px -8px #3b4fe466"}>
          <ChakraLink asChild>
            <NextLink href="https://www.paypal.com/donate/?hosted_button_id=G46WV8T5NG85A">
              <Text _light={{ color: "white" }} fontSize={{ base: "md", md: "lg" }}>Donate</Text>
            </NextLink>
          </ChakraLink>
        </Button>
      </Container>
      <Container pb={{ base: 8, md: 14 }} px={{ base: 4, md: 8 }} maxW={{ base: "100%", lg: "container.xl" }} asChild>
        <Card.Root
          flexDirection={{ base: "column", md: "row" }}
          borderRadius={"0"}
          gap={{ base: 4, md: 6 }}
          bg="rgba(0, 0, 0, 0.0)"
          w={"100%"}
        >
          <Card.Body w={{ base: "100%", md: "50%" }} gap={4} p={0}>
            <Heading
              textStyle={{ base: "xl", sm: "2xl", md: "2xl", lg: "3xl" }}
              className={poppins.className}
              textAlign={{ base: "center", md: "left" }}
              verticalAlign={"baseline"}
              textTransform={"capitalize"}>
              Special Story: The three words that changed my life
            </Heading>
            <Card.Description
              fontSize={{ base: "sm", md: "md" }}
              textAlign={{ base: "center", md: "left" }}
            >
              Mokse is proud to share the TEDx talk of Dr. Matthews.
            </Card.Description>
          </Card.Body>

          <AspectRatio
            w={{ base: "100%", md: "50%" }}
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
