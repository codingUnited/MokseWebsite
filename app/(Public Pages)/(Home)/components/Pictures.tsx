import { Box, Center, Container, GridItem, SimpleGrid } from "@chakra-ui/react";

export default function Pictures() {
    const ImageSrcs = ['/assets/home/IMG_1011-300x300.webp', '/assets/home/IMG_1012-300x300.webp', '/assets/home/IMG_1027-300x300.webp', '/assets/home/IMG_0995-300x300.webp']

    return (
        <Container fluid asChild >
            <SimpleGrid
                columns={{ base: 1, md: 4, }}
                gap={{ base: 20, md: 8 }}
            >
                <GridItem colSpan={{ base: 1, md: 2 }} justifySelf={"center"}>
                    <Box
                        bgImage={"url('/assets/home/IMG_0997-1-1024x683.webp')"}
                        bgRepeat={{ base: "no-repeat" }}
                        backgroundPosition={"center"}
                        bgSize={{ base: "100%", md: "contain" }}
                        role="img"
                        aria-label="Mokse hero image 1"
                        rounded="md"

                        _portrait={{ h: { base: "230px", md: "216px" }, w: { base: "343px", md: "325px" } }}
                        _landscape={{ h: { base: "100px", md: "100px" }, w: { base: "230px", md: "216px" } }}

                    />

                </GridItem>
                <GridItem colSpan={{ base: 1, md: 2 }}>
                    <Center>
                        <Box
                            bgImage={"url('/assets/home/IMG_1004-1024x683.webp')"}
                            bgRepeat={{ base: "no-repeat" }}
                            backgroundPosition={"center"}
                            bgSize={{ base: "100%", md: "contain" }}
                            role="img"
                            aria-label="Mokse hero image 1"
                            rounded="md"
                            _portrait={{ h: { base: "230px", md: "216px" }, w: { base: "343px", md: "325px" } }}
                            _landscape={{ h: { base: "343px", md: "325px" }, w: { base: "230px", md: "216px" } }}

                        />
                    </Center>

                </GridItem>

                {ImageSrcs.map((src, index) => (
                    <GridItem key={index} colSpan={{ base: 1, md: 2 }} >
                        <Center>
                            <Box
                                aspectRatio={{ base: "square" }}
                                bgImage={`url(${src})`}
                                bgRepeat={{ base: "no-repeat" }}
                                backgroundPosition={"center"}
                                bgSize={{ base: "cover", md: "contain" }}
                                role="img"
                                aria-label="Mokse hero image 1"
                                rounded="md"
                                _portrait={{ h: { base: "230px", md: "325px" }, w: { md: "325px", } }}
                                _landscape={{ h: { md: "325px" }, w: { base: "125%", md: "325px" } }}

                            />
                        </Center>

                    </GridItem>
                ))}
            </SimpleGrid>
        </Container>
    )
}