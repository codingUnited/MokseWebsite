"use client"
import NextImage from 'next/image';
import TeamMemberCard from '../../../components/about/team-member-card';
import { GemIcon } from '@/components/ui/icons';
import { executiveBoard, teamMembers } from '../../../data/team';
import {
  Container, Box, Text, AbsoluteCenter, VStack, HStack, Heading,
  Link as ChakraLink, SimpleGrid, Image as ChakraImage
} from '@chakra-ui/react';
import { poppins } from '../../../components/ui/fonts';
import NextLink from 'next/link';
import checkDeviceSize from '../../../components/ui/breakpoints';

export default function AboutUs() {

  const notMobileDevice = checkDeviceSize();
  return (

    <> {
      notMobileDevice ? (
        <VStack w={"100%"} >
          <Box position="relative"
            w={"100%"}
            h={"58vh"}
            bgImage={"url('/assets/about-us/about-HeroImage.webp')"}
            bgSize={"cover"}
            backgroundPosition={"center"}
            bgRepeat={"no-repeat"}

          //  alt="Mokse hero image"
          >
            <AbsoluteCenter
              textAlign="center"
              bg="rgba(0, 0, 0, 0.4)"
              w={"100%"}
              h={"100%"}
              alignItems={"center"}
            >
              <SimpleGrid columns={2} gap={6}>
                <VStack w={"75%"} pl={16}>
                  <Heading as={"h1"} p={2} >
                    <Text textStyle={"7xl"} className={poppins.className} textAlign={'start'} textTransform={'capitalize'} overflow={'hidden'} wordBreak={"none"} verticalAlign={'baseline'}
                      _light={{ color: "white" }}>About Us
                    </Text>
                  </Heading>
                  <Text _light={{ color: "white" }}>
                    Our organization strives to break down barriers and stop the stigma
                    associated with incarceration through technical assistance, consulting
                    services, educational conferences, and business support programs.
                  </Text>
                </VStack>
              </SimpleGrid>
            </AbsoluteCenter>
          </Box>


          {/* ABOUT US */}
          <Container as={'main'} maxW={'7xl'} h={"100%"}>
            <HStack as={"section"}>
              <article>
                <GemIcon />
                <Box>
                  <Heading as="h3">Vision</Heading>
                  <Text>
                    A society where all individuals have equal opportunities to thrive,
                    learn, and lead. Empowered to contribute positively to their
                    communities without the stigma or limitations from their past.
                  </Text>
                </Box>
              </article>

              <article>
                <GemIcon />
                <Box>
                  <Heading as="h3">Mission</Heading>
                  <Text>
                    To promote education, empowerment, and entrepreneurship among
                    incarcerated learners and individuals. Our organization strives to
                    break down barriers and stop the stigma associated with incarceration
                    through consulting services, educational conferences, and business
                    support programs.
                  </Text>
                </Box>
              </article>
            </HStack>


            <section>
              <Heading as="h2" textAlign={'center'} className={poppins.className} textStyle={'4xl'}>Executive Board Members</Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
                {executiveBoard.map((member) => (
                  <TeamMemberCard key={member.name} {...member} />
                ))}
              </SimpleGrid>
            </section>

            <section>
              <Heading as="h2" textAlign={'center'} className={poppins.className} textStyle={'4xl'}>Our Team</Heading>
              <SimpleGrid columns={[2, 3, 4]} gapY={10} gapX={16}>
                {teamMembers.map((member) => (
                  <TeamMemberCard key={member.name + member.email} {...member} />
                ))}
              </SimpleGrid>
            </section>

            <section>
              <Heading as="h2" textAlign={'center'} className={poppins.className} textStyle={'4xl'}>Our Partners</Heading>
              <Text textAlign={"center"} mt={4}>
                Join us in creating meaningful change through collaborative projects and
                shared resources.
              </Text>
              <HStack justifyContent={"center"} gap={16} mt={8}>
                <Box>
                  <ChakraLink asChild variant="underline">
                    <NextLink href="https://www.facebook.com/profile.php?id=61569163410278" target="_blank" rel="noopener noreferrer">
                      <ChakraImage asChild>
                        <NextImage src="/assets/partners/ht-logo.webp" alt="HT Partner" width={300} height={300} />
                      </ChakraImage>
                    </NextLink>
                  </ChakraLink>
                </Box>
                <Box>
                  <ChakraLink asChild variant="underline">
                    <NextLink href="https://www.instagram.com/osobeautifulreentry/" target="_blank" rel="noopener noreferrer">
                      <ChakraImage asChild>
                        <NextImage src="/assets/partners/oh-so-beautiful-logo.webp" alt="Oh So Beautiful Reentry" width={300} height={300} />
                      </ChakraImage>
                    </NextLink>
                  </ChakraLink>
                </Box>
              </HStack>
            </section>
          </Container>
        </VStack >

      ) : null
    }</>
  );
}
