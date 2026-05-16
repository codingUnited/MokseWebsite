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
      w="full"
      h="full" // Ensures cards in a grid stretch to the exact same vertical height
      overflow="hidden" // Prevents text from ever breaking out of the borders
    >
      <Card.Body gap={3} display="flex" flexDirection="column">
        {/* bg="transparent" removes the default gray circle if your icon already has color */}
        <Avatar.Root my={2} boxSize={12} bg="transparent">
          <Icon name={icon} size={8} color="teal.focusRing" />
        </Avatar.Root>

        <Card.Title className={poppins.className} textStyle="xl">
          {title}
        </Card.Title>

        {/* Added line height and muted color for better readability on long paragraphs */}
        <Text color="fg.muted" lineHeight="tall" flex="1">
          {description}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}