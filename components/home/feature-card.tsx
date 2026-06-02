"use client";

import { Card, Avatar, Text } from "@chakra-ui/react";
import { Icon } from "../ui/icons/icon";
import { poppins } from "../ui/fonts";
import { IconName } from "../ui/icons/icon-registry";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: IconName;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <Card.Root
      variant="outline"
      w={"100%"}
      maxW={{ base: "100%", sm: "sm", md: "md" }}
      minH={{ base: "auto", md: "xs" }}
    >
      <Card.Body p={{ base: 4, md: 6 }}>
        <Avatar.Root my={{ base: 2, md: 4 }} boxSize={{ base: 10, md: 12 }}>
          <Icon name={icon} size={6} />
        </Avatar.Root>
        <Card.Title className={poppins.className} fontSize={{ base: "lg", md: "xl" }}>{title}</Card.Title>
        <Text fontSize={{ base: "sm", md: "md" }}>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
}