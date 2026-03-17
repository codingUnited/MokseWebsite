import {
  Container,
  Box,
  Text,
  Stack,
  AbsoluteCenter,
  VStack,
  Heading,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { poppins } from "../ui/fonts";

export function HeaderTemplate({
  title,
  image,
  imageHeight,
  imageLabel,
  description,
  direction,
}: {
  title?: string;
  image?: string;
  imageHeight?: string;
  imageLabel?: string;
  description?: string;
  direction?: "row" | "column";
}) {
  return (
    <Box
      position="relative"
      w={"100%"}
      h={imageHeight ?? "58vh"}
      bgImage={`url(${image})`}
      bgSize={"cover"}
      backgroundPosition={"center"}
      bgRepeat={"no-repeat"}
      aria-label={`${imageLabel} Image`}
    >
      <AbsoluteCenter
        textAlign="center"
        bg="rgba(0, 0, 0, 0.4)"
        w={"100%"}
        h={"100%"}
        alignItems={"center"}
      >
        <SimpleGrid columns={2} gap={6}>
          <VStack direction={direction} w={"75%"} pl={16}>
            <Heading as={"h1"} p={2} alignItems={"left"}>
              <Text
                textStyle={"7xl"}
                className={poppins.className}
                // textAlign={"start"}
                textTransform={"capitalize"}
                overflow={"hidden"}
                wordBreak={"none"}
                verticalAlign={"baseline"}
                _light={{ color: "white" }}
              >
                {title}
              </Text>
            </Heading>
            <Container fluid>
              <Text _light={{ color: "white" }}>{description}</Text>
            </Container>
          </VStack>
        </SimpleGrid>
      </AbsoluteCenter>
    </Box>
  );
}
export function BodyTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Container maxW={"7xl"} h={"100%"}>
      <VStack gapY={8} w={"100%"}>
        {children}
      </VStack>
    </Container>
  );
}
export function SectionTemplate({
  title,
  description,
  direction,
  children,
}: {
  title?: string;
  description?: string;
  direction?: "row" | "column";
  children: React.ReactNode;
}) {
  return (
    <>
      <Container direction={direction} fluid>
        <Heading as="h2">
          <Text
            textStyle={"5xl"}
            className={poppins.variable}
            textAlign={"center"}
            textWrapStyle={"balance"}
            verticalAlign={"baseline"}
            wordWrap={"normal"}
          >
            {title}
          </Text>
        </Heading>
      </Container>
      <Text textStyle={"md"} textAlign={"center"}>
        {description}
      </Text>
      {children}
    </>
  );
}

export function PageBuilder({
  direction,
  children,
}: Readonly<{
  direction?: "row" | "column";
  children: React.ReactNode;
}>) {
  return (
    <Stack direction={direction ?? "column"} w={"100%"}>
      {children}
    </Stack>
  );
}

/** 
* @param linkTo The URL to link to  
* @param props The props for the text element
* @param displayText The text to display
*/
export function LinkBuilder(
  { linkTo, props, displayText }
    : Readonly<{
      linkTo: string;
      props: React.ComponentProps<typeof Text>
      displayText: string;
    }>) {
  return <Link asChild>
    <NextLink href={linkTo}>
      <Text {...props}>{displayText}</Text></NextLink>
  </Link>;
}