"use client";
import Image from "next/image";
import { IconName } from "../ui/icons/icon-registry";
import { Icon } from "../ui/icons/icon";
import { Card, Image as ChakraImage, Heading } from "@chakra-ui/react";


interface SupportCardProps {
  icon: IconName;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function SupportCard({
  icon,
  title,
  description,
  image,
  imageAlt,
}: SupportCardProps) {
  return (
    <Card.Root maxW={430} minW={342} borderRadius={8} gapY={8} minH={650}>
          <ChakraImage asChild borderTopRadius={8}>
            <Image src={image} alt={imageAlt} width={384} height={286} />
          </ChakraImage>
          <Card.Body height={400}>
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
            <Heading as={"h4"}>{title}</Heading>
            <Card.Description>{description}</Card.Description>
          </Card.Body>
        </Card.Root>
  );
}
