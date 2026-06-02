import {
  Container,
  Box,
  Text,
  Stack,
  VStack,
  Heading,
  Link,
  Center,
  SimpleGrid,
  GridItem,
  // AbsoluteCenter removed in favor of Center
} from "@chakra-ui/react";
import NextLink from "next/link";
import { poppins } from "../ui/fonts";

export function HeaderTemplate({
  title,
  titleLocation = 75,
  titleAlignment = 1,
  image,
  imageHeight,
  imageLabel,
  description,
  direction = "column",
  children,
}: {
  title?: string;
  titleAlignment?: number; // Kept for backwards compatibility if used elsewhere
  titleLocation?: number;
  image?: string;
  imageHeight?: any;
  imageLabel?: string;
  description?: string;
  direction?: "row" | "column";
  children?: React.ReactNode;
}) {
  return (
    <Box
      position="relative"
      w={"100%"}
      h={imageHeight ?? { base: "40vh", sm: "44vh", md: "52vh", lg: "58vh" }}
      minH={imageHeight ? undefined : { base: "280px", md: "360px" }}
      bgImage={image ? `url(${image})` : undefined}
      bgSize={"cover"}
      backgroundPosition={"center"}
      bgRepeat={"no-repeat"}
      aria-label={`${imageLabel} Image`}
    >
      {children}
      {/* Replaced AbsoluteCenter with Center to better handle natural flex heights */}
      <Center
        bg="rgba(0, 0, 0, 0.4)"
        w={"100%"}
        h={"100%"}
        alignItems={"center"}
        px={{ base: 4, md: 8 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }} w={"100%"}>
          <GridItem colSpan={{ base: 1, md: titleAlignment }}>
            <VStack
              direction={direction}
              w={{ base: "100%", md: `${titleLocation}%` }}
              pl={{ base: 0, md: 8, lg: 16 }}
              align={{ base: "center", md: "flex-start" }}
            >
              <Heading as={"h1"} p={2} alignItems={"center"}>
                <Text
                  textStyle={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl", xl: "7xl" }}
                  className={poppins.className}
                  textAlign={{ base: "center", md: "start" }}
                  textTransform={"capitalize"}
                  overflow={"hidden"}
                  wordBreak={"normal"}
                  verticalAlign={"baseline"}
                  _light={{ color: "white" }}
                >
                  {title}
                </Text>
              </Heading>
              <Container fluid px={{ base: 2, md: 0 }}>
                <Text
                  textAlign={{ base: "center", md: "start" }}
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  _light={{ color: "white" }}
                >
                  {description}
                </Text>
              </Container>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Center>
    </Box >
  );
}

export function BodyTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Container maxW={{ base: "100%", md: "container.md", lg: "container.lg", xl: "7xl" }} px={{ base: 4, md: 6, lg: 8 }} h={"100%"}>
      <VStack gapY={{ base: 6, md: 8 }} w={"100%"}>
        {children}
      </VStack>
    </Container>
  );
}

export function SectionTemplate({
  title,
  description,
  direction = "column",
  children,
}: {
  title?: string;
  description?: string;
  direction?: "row" | "column";
  children: React.ReactNode;
}) {
  return (
    <>
      {title && (
        <Container direction={direction} fluid px={{ base: 2, md: 4 }}>
          <Heading as="h2">
            <Text
              textStyle={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
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
      )}
      {description && (
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} textAlign={"center"} px={{ base: 2, md: 4 }}>
          {description}
        </Text>
      )}
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
    <Stack direction={{ base: "column", md: direction ?? "column" }} w={"100%"}>
      {children}
    </Stack>
  );
}

/**
 * @param linkTo The URL to link to
 * @param props The props for the text element
 * @param displayText The text to display
 */
export function LinkBuilder({
  linkTo,
  props,
  displayText,
}: Readonly<{
  linkTo: string;
  props: React.ComponentProps<typeof Text>;
  displayText: string;
}>) {
  return (
    <Link asChild>
      <NextLink href={linkTo}>
        <Text {...props}>{displayText}</Text>
      </NextLink>
    </Link>
  );
}