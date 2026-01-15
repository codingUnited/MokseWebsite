"use client";

import type { ReactNode } from "react";
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
    <Card.Root variant="outline" w={"sm"} h={"xs"}>
      <Card.Body>
        <Avatar.Root my={4} boxSize={12}>
          <Icon name={icon} size={6} />
        </Avatar.Root>
        <Card.Title className={poppins.className}>{title}</Card.Title>
        <Text>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
}
