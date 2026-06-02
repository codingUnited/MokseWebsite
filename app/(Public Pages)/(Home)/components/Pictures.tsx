import { Box, Center, Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

export default function Pictures() {
    const ImageSrcs = ['/assets/home/IMG_1011-300x300.webp', '/assets/home/IMG_1012-300x300.webp', '/assets/home/IMG_1027-300x300.webp', '/assets/home/IMG_0995-300x300.webp']

    return (
        <Container fluid px={{ base: 4, md: 8 }} maxW={{ base: "100%", xl: "container.xl" }} pb={{ base: 8, md: 12 }} asChild >
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 4 }}
                gap={{ base: 4, md: 8 }}
            >
                <GridItem colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Center>
                        <Box
                            w={"100%"}
                            maxW={{ base: "100%", md: "100%" }}
                            aspectRatio={4 / 3}
                            bgImage={"url('/assets/home/IMG_0997-1-1024x683.webp')"}
                            bgRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            bgSize={"cover"}
                            role="img"
                            aria-label="Mokse hero image 1"
                            rounded="md"
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={{ base: 1, sm: 2, md: 2 }}>
                    <Center>
                        <Box
                            w={"100%"}
                            maxW={{ base: "100%", md: "100%" }}
                            aspectRatio={4 / 3}
                            bgImage={"url('/assets/home/IMG_1004-1024x683.webp')"}
                            bgRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            bgSize={"cover"}
                            role="img"
                            aria-label="Mokse hero image 2"
                            rounded="md"
                        />
                    </Center>

                </GridItem>

                {ImageSrcs.map((src, index) => (
                    <GridItem key={index} colSpan={{ base: 1, md: 1 }} >
                        <Center>
                            <Box
                                w={"100%"}
                                aspectRatio={1}
                                bgImage={`url(${src})`}
                                bgRepeat={"no-repeat"}
                                backgroundPosition={"center"}
                                bgSize={"cover"}
                                role="img"
                                aria-label="Mokse gallery image"
                                rounded="md"
                            />
                        </Center>

                    </GridItem>
                ))}
            </SimpleGrid>
        </Container>
    )
}