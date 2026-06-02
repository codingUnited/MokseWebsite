"use client";
import Image from "next/image";
import NextLink from "next/link";

import { IconName } from "../ui/icons/icon-registry";
import { Icon } from "../ui/icons/icon";
import { Box, Card, Float, Heading, Image as ChakraImage, Link as ChakraLink } from "@chakra-ui/react";

interface ServiceCardProps {
  icon: IconName;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  iconLink: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  image,
  imageAlt,
  iconLink,
}: ServiceCardProps) {
  return (
    <Card.Root
      w={"100%"}
      maxW={{ base: "100%", sm: "430px" }}
      minW={0}
      borderRadius={8}
      gapY={{ base: 4, md: 8 }}
      minH={{ base: "auto", md: 650 }}
      overflow={"hidden"}
    >
      <ChakraImage asChild borderTopRadius={8}>
        <Image
          src={image}
          alt={imageAlt}
          width={384}
          height={286}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </ChakraImage>
      <Card.Body height={{ base: "auto", md: 400 }} position={"relative"} p={{ base: 4, md: 6 }}>
        <ChakraLink asChild>
          <NextLink
            href={iconLink}
          >
            <Icon
              name={icon}
              bg={"teal.focusRing"}
              borderRadius={"lg"}
              p={{ base: 3, md: 4 }}
              boxSize={{ base: 12, md: 14 }}
              position={"absolute"}
              right={{ base: 4, md: 10 }}
              top={{ base: -8, md: -10 }}
            />
          </NextLink>
        </ChakraLink>
        <Heading as={"h4"} fontSize={{ base: "lg", md: "xl" }} mt={{ base: 6, md: 0 }}>{title}</Heading>
        <Card.Description fontSize={{ base: "sm", md: "md" }}>{description}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}