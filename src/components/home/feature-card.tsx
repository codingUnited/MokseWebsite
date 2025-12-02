'use client'

import type { ReactNode } from 'react';
import { Card, Avatar, Icon, Text } from '@chakra-ui/react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};


export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {

  return (
    <Card.Root variant="outline" w={'sm'} h={'xs'}>
      <Card.Body><Avatar.Root my={4} boxSize={12}>
        <Icon >{icon}</Icon>
      </Avatar.Root>
        <Card.Title>{title}</Card.Title>
        <Text>
          {description}
        </Text>
      </Card.Body>
    </Card.Root >
  );
}