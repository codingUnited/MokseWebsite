"use client";
import Image from "next/image";
import { IconName } from "../ui/icons/icon-registry";
import { Icon } from "../ui/icons/icon";
import { Card, Image as ChakraImage, Heading } from "@chakra-ui/react";

interface ServiceCardProps {
  icon: IconName;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  image,
  imageAlt,
}: ServiceCardProps) {
  return (
    <Card.Root maxW={384} minW={342}>
      <ChakraImage asChild>
        <Image src={image} alt={imageAlt} width={384} height={285} />
      </ChakraImage>
      <Card.Body>
        <article>
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
          <h4>{title}</h4>
          <p>{description}</p>
        </article>
      </Card.Body>
    </Card.Root>
  );
}
