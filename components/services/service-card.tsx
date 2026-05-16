"use client";
import Image from "next/image";
import NextLink from "next/link";

import { IconName } from "../ui/icons/icon-registry";
import { Icon } from "../ui/icons/icon";
import { Box, Card, Float, Heading, Link as ChakraLink } from "@chakra-ui/react";

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
      w="100%"
      borderRadius="lg"
      overflow="hidden"
      variant="outline"
    >
      <Box position="relative" w="100%" aspectRatio={4 / 3}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />

        <Float placement="bottom-end" offsetX={6} offsetY={0}>
          <ChakraLink asChild>
            <NextLink href={iconLink}>
              <Icon
                name={icon}
                bg={"teal.focusRing"}
                color="white"
                borderRadius={"lg"}
                p={4}
                boxSize={14}
                boxShadow="md"
                aria-label={`Learn more about ${title}`}
                _hover={{ transform: "scale(1.05)", transition: "all 0.2s" }}
              />
            </NextLink>
          </ChakraLink>
        </Float>
      </Box>

      <Card.Body pt={10} pb={6} gap={4}>
        <Heading as={"h4"} textStyle="xl" fontWeight="semibold">
          {title}
        </Heading>
        <Card.Description textStyle="md" color="fg.muted" lineHeight="tall">
          {description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}