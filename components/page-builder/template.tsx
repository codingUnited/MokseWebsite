import {
  Container,
  Box,
  Text,
  Stack,
  VStack,
  Heading,
  Link,
  Center,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { poppins } from "../ui/fonts";

export function HeaderTemplate({
  title,
  titleLocation = 75,
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
  imageHeight?: any; // Changed to 'any' to accept Chakra responsive objects like { base: "40vh", md: "58vh" }
  imageLabel?: string;
  description?: string;
  direction?: "row" | "column";
  children?: React.ReactNode;
}) {
  return (
    <Box
      position="relative"
      w={"100%"}
      h={imageHeight ?? { base: "40vh", md: "58vh" }}
      bgImage={`url(${image})`}
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
        px={{ base: 4, md: 16 }}
      >
        <VStack
          direction={direction}
          // On mobile, take up 100% of space. On desktop, respect the titleLocation percentage.
          w={{ base: "100%", md: `${titleLocation}%` }}
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          gap={4}
        >
          <Heading as={"h1"}>
            <Text
              textStyle={{ base: "4xl", md: "7xl" }}
              className={poppins.className}
              textTransform={"capitalize"}
              overflow={"hidden"}
              wordBreak={"normal"}
              verticalAlign={"baseline"}
              color={"white"}
            >
              {title}
            </Text>
          </Heading>
          <Text color={"white"} textStyle={{ base: "md", md: "lg" }}>
            {description}
          </Text>
        </VStack>
      </Center>
    </Box>
  );
}

export function BodyTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Container maxW={"7xl"} h={"100%"} px={{ base: 4, md: 8 }}>
      <VStack gapY={8} w={"100%"}>
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
    <Box as="section" w="100%" py={{ base: 8, md: 12 }}>
      {/* Removed the invalid 'direction' prop from Container */}
      <Container fluid px={{ base: 4, md: 8 }}>
        <VStack gap={4} mb={8}>
          {title && (
            <Heading as="h2">
              <Text
                textStyle={{ base: "3xl", md: "5xl" }}
                className={poppins.variable}
                textAlign={"center"}
                textWrapStyle={"balance"}
                verticalAlign={"baseline"}
                wordWrap={"normal"}
              >
                {title}
              </Text>
            </Heading>
          )}
          {description && (
            <Text textStyle={"md"} textAlign={"center"} maxW="3xl">
              {description}
            </Text>
          )}
        </VStack>

        {/* Applied the requested direction strictly to the children via Stack */}
        <Stack
          direction={{ base: "column", md: direction }}
          w="100%"
          alignItems="center"
        >
          {children}
        </Stack>
      </Container>
    </Box>
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