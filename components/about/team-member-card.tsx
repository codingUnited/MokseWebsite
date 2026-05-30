import Image from 'next/image';
import type { TeamMember } from '../../data/team';
import { Card } from '@chakra-ui/react';
// import { Text } from '@chakra-ui/react';
import { poppins } from '../ui/fonts';

export default function TeamMemberCard({ name, title, email, imagePath }: TeamMember) {
  return (
    <Card.Root width={"100%"} maxW={{ base: "320px", sm: "280px", md: "300px" }}  >
      <Image
        src={imagePath}
        alt={name}
        width={300}
        height={300}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />


      <Card.Body p={{ base: 3, md: 4 }}>
        <Card.Header
          as={'h3'}
          textAlign={'center'}
          className={poppins.className}
          p={0}
          fontSize={{ base: "lg", md: "xl" }}
        >
          {name}
        </Card.Header>
        <Card.Title textAlign={'center'} fontSize={{ base: "sm", md: "md" }} >{title}
          {email &&
            <Card.Description fontSize={{ base: "sm", md: "md" }} textAlign={'center'} wordBreak={"break-word"}>
              {email}
            </Card.Description>}
        </Card.Title>

      </Card.Body>

    </Card.Root>
  );
}
