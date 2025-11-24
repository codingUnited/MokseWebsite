'use client'

import type { ReactNode } from 'react';
import { Card, Avatar, Icon } from '@chakra-ui/react';

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
    <Card.Root>
      <Card.Header>
        <Avatar.Root my={4} boxSize={12}>
          <Icon >{icon}</Icon>
        </Avatar.Root>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <p>
          {description}
        </p>
      </Card.Body>
    </Card.Root >
  );
}