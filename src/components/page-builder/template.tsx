import { useBreakpointValue, Container, Box, Text, Stack, Button, AbsoluteCenter, VStack, Heading, Link as ChakraLink, Center, SimpleGrid, GridItem, Card, Image as ChakraImage } from '@chakra-ui/react';
import { poppins } from '../ui/fonts';



export function HeaderTemplate({ title, image, imageHeight, imageLabel, description, direction }: { title?: string; image?: string; imageHeight?: string; imageLabel?: string; description?: string; direction?: "row" | "column"; }) {
    return (
        <>
            <Box position="relative"
                w={"100%"}
                h={imageHeight ?? "58vh"}
                bgImage={`url(${image})`}
                bgSize={"cover"}
                backgroundPosition={"center"}
                bgRepeat={"no-repeat"}
                aria-label={`${imageLabel} Image`}
            >
                <AbsoluteCenter
                    textAlign="center"
                    bg="rgba(0, 0, 0, 0.4)"
                    w={"100%"}
                    h={"100%"}
                    alignItems={"center"}
                >
                    <SimpleGrid columns={2} gap={6}>
                        <Stack direction={direction} w={"75%"} pl={16}>
                            <Heading as={"h1"} p={2} >
                                <Text textStyle={"7xl"} className={poppins.className} textAlign={'start'} textTransform={'capitalize'} overflow={'hidden'} wordBreak={"none"} verticalAlign={'baseline'}
                                    _light={{ color: "white" }}>{title}
                                </Text>
                            </Heading>
                            <Text _light={{ color: "white" }}>
                                {description}
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </AbsoluteCenter>
            </Box>
        </>
    );
}
export function BodyTemplate({ children }: { children: React.ReactNode }) {
    return (
        <Container as={'main'} maxW={'7xl'} h={"100%"}>
            {children}
        </Container>
    );
}
export function SectionTemplate({ title, description, direction, children }: { title?: string; description?: string; direction?: "row" | "column"; children: React.ReactNode }) {
    return (
        <Stack as={"section"} direction={direction}>
            <Heading as="h3">{title}</Heading>
            <Text>
                {description}
            </Text>

            {children}
        </Stack>
    );
}




export function PageBuilder({ direction, children }: Readonly<{
    direction?: "row" | "column";
    children: React.ReactNode;
}>) {
    return (<Stack direction={direction} w={"100%"}>{children}</Stack>);
}