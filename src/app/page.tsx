'use client'

import NextLink from 'next/link';
import FeatureCard from "@/components/home/feature-card";
import { empowerment } from "@/data/empowerment";
import { getInvolved } from "@/data/get-involved";
import { useBreakpointValue, Container, Box, Text, Button, AbsoluteCenter, VStack, Heading, Link as ChakraLink, Center, SimpleGrid, GridItem, Stack, Card, Image as ChakraImage } from '@chakra-ui/react';
import { RiArrowRightLine } from 'react-icons/ri';
import { poppins } from '@/components/ui/fonts';


export default function Home() {
  const current = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  return (
    <>
      {
        current !== "base" && current !== "sm" ? (
          <VStack w={"100%"} >
            <Box position="relative"
              w={"100%"}
              h={"100vh"}
              bgImage={"url('/HeroImage.jpg')"}
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
                <VStack>
                  <Heading as={"h1"} p={2} >
                    <Text textStyle={"7xl"} className={poppins.variable} textAlign={'left'} overflow={'hidden'} wordBreak={"break-word"} verticalAlign={'top'}
                      _light={{ color: "white" }}>Empowering Change Through Education And Advocacy
                    </Text>
                  </Heading>
                  <Text _light={{ color: "white" }}>
                    We strive to break down barriers and stop the stigma associated with
                    incarceration through consulting services, educational conferences, and business support programs.
                  </Text>
                  <Button bg={'teal.focusRing'} variant="solid" rounded="md" size={'xl'}>
                    <ChakraLink asChild>
                      <NextLink href="/services">
                        Learn More <RiArrowRightLine />
                      </NextLink>
                    </ChakraLink>
                  </Button>
                </VStack>
              </AbsoluteCenter>
            </Box>


            <Container maxW={'7xl'} h={"100vh"}>
              <VStack gapY={8} w={"100%"}>
                <Container w={"md"}>
                  <Heading as="h2">
                    <Text textStyle={'5xl'} className={poppins.variable} textAlign={'center'} textWrapStyle={'balance'} verticalAlign={'baseline'} wordWrap={'normal'}>
                      A Commitment To Empowerment
                    </Text>
                  </Heading>
                </Container>
                <Text textStyle={"md"} textAlign={'center'}>To transform the lives of learners by providing accessible education, entrepreneurial
                  support, and empowerment resources that foster personal and professional growth.
                </Text>
                <Button bg={'teal.focusRing'} variant="solid" rounded="md" size={'xl'} mb={8}>
                  <ChakraLink asChild>
                    <NextLink href="/about-us">
                      <Text mr={4}>About Us</Text><RiArrowRightLine />
                    </NextLink>
                  </ChakraLink>
                </Button>
                <Center>
                  <SimpleGrid columns={[2, null, 2]} row={[2, null, 2]} gapX={8} gapY={16} w={'3xl'}>
                    {empowerment.map((f) => (
                      <FeatureCard key={f.title} {...f} />
                    ))}
                  </SimpleGrid>
                </Center>
              </VStack>

            </Container>
            <Container bg={'teal.solid'} h={'46vh'} fluid my={"25vh"}>
              <Card.Root flexDirection={'row'} size={'sm'} h={"100%"} ml={"25vh"} bg="rgba(0, 0, 0, 0)" border={0}>
                <Box
                  position="relative"
                  borderRadius={'xl'}
                  w={"350px"}
                  h={"55vh"}
                  bgImage={"url('/backdrop-image.jpg')"}
                  bgSize={"cover"}
                  backgroundPosition={"center"}
                  bgRepeat={"no-repeat"}

                //  alt="Mokse hero image"
                >
                  <AbsoluteCenter
                    bg="rgba(0, 0, 0, 0)"
                    w={"100%"}
                    h={"100%"}
                  >
                    <Box
                      position="relative"
                      borderRadius={'lg'}
                      top={"-88px"}
                      left={"-125px"}
                      w={"350px"}
                      h={"55vh"}
                      bgImage={"url('/Image-1-1.jpg')"}
                      bgSize={"cover"}
                      backgroundPosition={"center"}
                      bgRepeat={"no-repeat"}

                      zIndex={1}
                    //  alt="Mokse hero image"
                    >
                      <AbsoluteCenter
                        bg="rgba(0, 0, 0, 0.1)"
                        w={"100%"}
                        h={"100%"}
                      >

                      </AbsoluteCenter>
                    </Box>
                  </AbsoluteCenter>

                </Box>
                <Card.Body w={"25px"}>
                  <Container _light={{ color: "white" }}>
                    <h3>Make a Difference – Get Involved!</h3>
                    <p>Are you passionate about helping justice-impacted individuals?
                      We need compassionate volunteers to assist in various roles, including
                      mentorship, tutoring, and administrative support.</p>
                    <Button >Get Involved</Button>
                  </Container>

                </Card.Body>

              </Card.Root>

            </Container>
            <Stack>
              <Stack direction={'row'}>{getInvolved.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
              </Stack>
              <Button colorPalette="teal" variant="solid" size={'xl'}>
                <ChakraLink asChild>
                  <NextLink href="/services">
                    <Text _light={{ color: "white" }}>Donate</Text>
                  </NextLink>
                </ChakraLink>
              </Button>
            </Stack>



            <Container w={'7xl'} pb={14} asChild>
              <Center>
                <Card.Root flexDirection="row" justifyContent={'space-between'} borderRadius={'0'} gap={6} w={"95%"} bg="rgba(0, 0, 0, 0.0)" border={0} p="0" m="0">
                  <Card.Body>
                  </Card.Body>
                  <Stack direction={'column'} w={'sm'}>
                    <Container fluid p={12}>
                      <Heading>
                        <Text textStyle={'4xl'} className={poppins.variable} textAlign={'left'} verticalAlign={'baseline'} wordWrap={'break-word'}>
                          Special Story: The Three Words That Changed My Life
                        </Text>
                      </Heading>
                      <Card.Description>Mokse is proud to share the TEDx talk of Dr. Matthews.</Card.Description>
                    </Container>
                  </Stack>
                  <Box asChild>
                    <iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/p2q--KoXnXA?si=6mz92ZtuwqfrvnSZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                  </Box>


                </Card.Root>
              </Center>

            </Container>

            <Container w={'7xl'}>

              <SimpleGrid columns={[null, 4, 4]} gapX={6} gapY={6}>
                <GridItem colSpan={2}>
                  <ChakraImage rounded="md"

                    width="100%"

                    aspectRatio={3 / 2}
                    fit="contain"
                    src="IMG_0997-1-1024x683.webp" alt=""
                  />
                </GridItem>

                <GridItem colSpan={2}>
                  <ChakraImage rounded="md"
                    height="100%"
                    width="100%"
                    fit="contain"
                    src="IMG_1004-1024x683.webp" alt="" />
                </GridItem>

                <GridItem colSpan={1}><ChakraImage rounded="md"
                  height="100%"
                  width="100%"
                  fit="contain"
                  src="IMG_1011-300x300.webp" alt="" /></GridItem>


                <GridItem colSpan={1}><ChakraImage rounded="md"
                  height="100%"
                  width="100%"
                  fit="contain"
                  src="IMG_1012-300x300.webp" alt="" /></GridItem>


                <GridItem colSpan={1}><ChakraImage rounded="md"
                  height="100%"
                  width="100%"
                  fit="contain"
                  src="IMG_1027-300x300.webp" alt="" /></GridItem>


                <GridItem colSpan={1}><ChakraImage rounded="md"
                  height="100%"
                  width="100%"
                  fit="contain"
                  src="IMG_0995-300x300.webp" alt="" /></GridItem>


              </SimpleGrid>
            </Container>

          </VStack >
        ) : (
          <VStack>
            <Box
              position="relative"
              w="100vw"
              h="82vh"
              bgImage="url('/HeroImage.jpg')"
              bgSize="cover"
              backgroundPosition="right"
              bgRepeat="no-repeat"

              m={-2}
            >
              <AbsoluteCenter
                textAlign="center"
                bg="rgba(0, 0, 0, 0.4)"
                w={"100%"}
                h={"100%"}
                alignItems={"center"}
              >
                <VStack>
                  <Heading as={"h1"} p={2} justifyContent={'end'}>
                    <Text textStyle={"4xl"}>Empowering Change Through Education And Advocacy</Text>
                  </Heading>
                  <p>We strive to break down barriers and stop the stigma associated with
                    incarceration through consulting services, educational conferences, and business support programs.</p>
                  <Button colorPalette="teal" variant="solid">
                    <ChakraLink asChild>
                      <NextLink href="/services">
                        <Text  >Learn More</Text><RiArrowRightLine />
                      </NextLink>
                    </ChakraLink>
                  </Button>
                </VStack>
              </AbsoluteCenter>
            </Box>
            <Box bg={'white'}>
              <Box>
                <Heading as={"h2"}>
                  <Text textStyle={"2xl"}  >A Commitment to Empowerment</Text>
                </Heading>
                <Text  >To transform the lives of learners by providing accessible education, entrepreneurial
                  support, and empowerment resources that foster personal and professional growth.</Text>
                <ChakraLink asChild>
                  <NextLink href="/about-us">
                    <Button colorPalette="teal" variant="solid">
                      About Us <RiArrowRightLine />
                    </Button>
                  </NextLink>
                </ChakraLink>
              </Box>
              <Center p={4}>
                {empowerment.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </Center>
            </Box>
            {/* <Box>
              <img src="/Image-1-1.jpg" alt="College students" />
              <h3>Make a Difference – Get Involved!</h3>
              <p>Are you passionate about helping justice-impacted inBoxiduals?
                We need compassionate volunteers to assist in various roles, including
                mentorship, tutoring, and administrative support.</p>
              <button>Get Involved</button>
            </Box>
            <Box>
              <Box>
                {getInvolved.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </Box>
              <button>Donate</button>
            </Box>
            <Box>
              <h2>special story: The Three Words That Change My Life.</h2>
              <p>Mokse is proud to share the TEDx talk of Dr. Matthews.</p>
              <Box>
                <iframe src="https://www.youtube.com/embed/p2q--KoXnXA" frameBorder="0"></iframe>
              </Box>
            </Box>
            <Box>
              <img src="IMG_0997-1-1024x683.webp" alt="" />
              <img src="IMG_1004-1024x683.webp" alt="" />
            </Box>
            <Box>
              <img src="IMG_1011-300x300.webp" alt="" />
              <img src="IMG_1012-300x300.webp" alt="" />
              <img src="IMG_1027-300x300.webp" alt="" />
              <img src="IMG_0995-300x300.webp" alt="" />
            </Box> */}
          </VStack >
        )
      }

    </>
  );
}
