import Image from 'next/image';
import type { TeamMember } from '../../data/team';
import { Card, Text } from '@chakra-ui/react';
import { poppins } from '../ui/fonts';

export default function TeamMemberCard({ name, title, email, imagePath }: TeamMember) {
  return (
    <Card.Root width={300}  >
      <Image src={imagePath} alt={name} width={300} height={300} />


      <Card.Body >
        <Card.Header as={'h3'} textAlign={'center'} className={poppins.className} p={2} textStyle={'xl'}>
          {name}
        </Card.Header>
        <Card.Title textAlign={'center'} textStyle={'md'} >{title}
          {email &&
            <Card.Description textStyle={'md'} textAlign={'center'}>
              {email}
            </Card.Description>}
        </Card.Title>

      </Card.Body>

    </Card.Root>
  );
}
