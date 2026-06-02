"use client";
// import Image from "next/image"; 
// import NextLink from "next/link";

import { IconName } from "../ui/icons/icon-registry";
import { Icon } from "../ui/icons/icon";
import { Card,  Heading, Text } from "@chakra-ui/react";
// import {Image as ChakraImage,} from "@chakra-ui/react";
// import { Link as ChakraLink, SimpleGrid } from "@chakra-ui/react";


interface SupportCardProps {
  icon: IconName;
  title: string;
  description: string;
  // image: string;
  // imageAlt: string;
  // iconLink: string;
}

export default function SupportCard({
  icon,
  title,
  description,
  // image,
  // imageAlt,
  // iconLink,
}: SupportCardProps) {
  return (
    <Card.Root
      w={"100%"}
      maxW={{ base: "100%", sm: "sm" }}
      minW={0}
      borderRadius={8}
      minH={{ base: "auto", md: "xs" }}
    >
      {/* <ChakraImage asChild borderTopRadius={8}>
        <Image src={image} alt={imageAlt} width={384} height={286} />
      </ChakraImage> */}
      <Card.Body height={{ base: "auto", md: "md" }} p={{ base: 4, md: 6 }}>
        {/* <ChakraLink asChild>
          <NextLink
            href={iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >     */}
        <Icon
          name={icon}
          bg={"teal.focusRing"}
          borderRadius={"lg"}
          p={{ base: 3, md: 4 }}
          boxSize={{ base: 12, md: 14 }}
        />
        {/* </NextLink>
        </ChakraLink>             */}
        <Heading as={"h4"} fontSize={{ base: "lg", md: "xl" }}>{title}</Heading>
        <Text paddingY={{ base: 3, md: 5 }} fontSize={{ base: "sm", md: "md" }}>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
} 
