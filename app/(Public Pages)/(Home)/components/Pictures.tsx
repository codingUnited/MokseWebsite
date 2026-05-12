import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";

export default function Pictures() {
    const ImageSrcs = ['/assets/home/IMG_1011-300x300.webp', '/assets/home/IMG_1012-300x300.webp', '/assets/home/IMG_1027-300x300.webp', '/assets/home/IMG_0995-300x300.webp']

    return (
        <Container fluid centerContent p={0}>
            <SimpleGrid
                columns={{ mobileS: 1, tablet: 4 }}
                gap={{ mobileS: 20, tablet: 8 }}
                pt={8}
                width="full"
            >
                <GridItem colSpan={{ mobileS: 1, tablet: 2 }} >
                    <Box
                        bgImage={"url('/assets/home/IMG_0997-1-1024x683.webp')"}
                        bgRepeat={{ mobileS: "no-repeat" }}
                        backgroundPosition={"center"}
                        bgSize={{ mobileS: "100%", tablet: "contain" }}
                        role="img"
                        aria-label="Mokse hero image 1"
                        rounded="md"

                        _portrait={{ h: { mobileS: "230px", tablet: "216px" }, w: { mobileS: "343px", tablet: "325px" } }}
                        _landscape={{ h: { mobileS: "100px", tablet: "100px" }, w: { mobileS: "230px", tablet: "216px" } }}

                    />
                </GridItem>
                <GridItem colSpan={{ mobileS: 1, tablet: 2 }}>
                    <Box
                        bgImage={"url('/assets/home/IMG_1004-1024x683.webp')"}
                        bgRepeat={{ mobileS: "no-repeat" }}
                        backgroundPosition={"center"}
                        bgSize={{ mobileS: "100%", tablet: "contain" }}
                        role="img"
                        aria-label="Mokse hero image 1"
                        rounded="md"
                        _portrait={{ h: { mobileS: "230px", tablet: "216px" }, w: { mobileS: "343px", tablet: "325px" } }}
                        _landscape={{ h: { mobileS: "343px", tablet: "325px" }, w: { mobileS: "230px", tablet: "216px" } }}

                    />
                </GridItem>

                {ImageSrcs.map((src, index) => (
                    <GridItem key={index} colSpan={{ mobileS: 1, tablet: 2 }}>
                        <Box
                            h={{ mobileS: "125%", tablet: "325px" }}
                            w={{ tablet: "325px" }}
                            aspectRatio={{ mobileS: "square" }}
                            bgImage={`url(${src})`}
                            bgRepeat={{ mobileS: "no-repeat" }}
                            backgroundPosition={"center"}
                            bgSize={{ mobileS: "cover", tablet: "contain" }}
                            role="img"
                            aria-label="Mokse hero image 1"
                            rounded="md"
                            _portrait={{ h: { mobileS: "125%", tablet: "325px" }, w: { tablet: "325px", } }}
                            _landscape={{ h: { tablet: "325px" }, w: { mobileS: "125%", tablet: "325px" } }}

                        />
                    </GridItem>
                ))}
            </SimpleGrid>
        </Container>
    )
}