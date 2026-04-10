"use client";
import Image from "next/image";
import NextLink from "next/link";

import { IconName } from "../ui/icons/icon-registry";
import { Icon } from "../ui/icons/icon";
import { Card, Image as ChakraImage, Float, Heading } from "@chakra-ui/react";
import { Link as ChakraLink, SimpleGrid } from "@chakra-ui/react";

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
    <Card.Root maxW={430} minW={342} borderRadius={8} gapY={8} minH={650}>
      <ChakraImage asChild borderTopRadius={8}>
        <Image src={image} alt={imageAlt} width={384} height={286} />
      </ChakraImage>
      <Card.Body height={400}>
        <ChakraLink asChild>
          <NextLink
            href={iconLink}
          >
            <Float>
              <Icon
                name={icon}
                bg={"teal.focusRing"}
                borderRadius={"lg"}
                p={4}
                boxSize={14}
                position={"absolute"}
                right={10}
                top={255}
              />
            </Float>

          </NextLink>
        </ChakraLink>
        <Heading as={"h4"}>{title}</Heading>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
