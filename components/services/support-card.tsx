"use client";
import Image from "next/image";
import NextLink from "next/link";

import { IconName } from "../ui/icons/icon-registry";
import { Icon } from "../ui/icons/icon";
import { Card, Image as ChakraImage, Heading, Text } from "@chakra-ui/react";
import { Link as ChakraLink, SimpleGrid } from "@chakra-ui/react";


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
    <Card.Root maxW={"sm"} minW={"xs"} borderRadius={8} minH={"xs"}>
      {/* <ChakraImage asChild borderTopRadius={8}>
        <Image src={image} alt={imageAlt} width={384} height={286} />
      </ChakraImage> */}
      <Card.Body height={"md"}>
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
          p={4}
          boxSize={14}
        // position={"absolute"}
        // right={10}
        // top={255}
        />
        {/* </NextLink>
        </ChakraLink>             */}
        <Heading as={"h4"}>{title}</Heading>
        <Text paddingY={5}>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
} 
