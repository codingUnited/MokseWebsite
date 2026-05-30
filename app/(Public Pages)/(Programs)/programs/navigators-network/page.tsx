"use client";
import {
    HeaderTemplate,
    PageBuilder,
    SectionTemplate,
} from "@/components/page-builder/template";
import {
    Button,
    Link as ChakraLink,
    Text,
    Image,
    Stack,
    VStack,
    Heading,
    List,
    Container,
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

export default function NavigatorsNetwork() {
    return (
        <PageBuilder>
            <HeaderTemplate
                title="Navigators Network"
                image="/assets/navigators-network/background.webp"
                imageLabel="Navigators Network Hero"
                description={'A Connected Hub for Stronger Community Support — "Find Your Way"'}
            />

            {/* Intro section */}
            <SectionTemplate>
                <Container fluid maxW={{ base: "100%", xl: "container.xl" }} px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }}>
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        align={"center"}
                        gap={{ base: 8, md: 10, lg: 14 }}
                    >
                        <Image asChild alt="" w={{ base: "100%", lg: "50%" }} maxW={{ base: "500px", lg: "100%" }} mx={"auto"}>
                            <NextImage
                                src="/assets/navigators-network/partners-shaking-hands.webp"
                                alt="Partners shaking hands"
                                width={575}
                                height={383}
                                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                            />
                        </Image>
                        <VStack
                            align={{ base: "center", lg: "flex-start" }}
                            gap={4}
                            w={{ base: "100%", lg: "50%" }}
                        >
                            <Heading
                                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                Navigator&apos;s Network
                            </Heading>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                Navigator&apos;s Network is launching as a collaboration platform for
                                organizations that want to improve access, coordination, and
                                real-world outcomes.
                            </Text>
                            <Button
                                size={{ base: "md", md: "lg" }}
                                bg={"teal.focusRing"}
                                mt={2}
                            >
                                <ChakraLink asChild>
                                    <NextLink
                                        href={
                                            "https://forms.office.com/Pages/ResponsePage.aspx?id=ek_Mq-3o7UmR4e2p9bxT6nRWmhssVxdCt8_vzCmu28ZUMkMwTFBIT09VMDVEVlpMOVlHU0NGVUVCWi4u"
                                        }
                                    >
                                        <Text color={"white"}>Get Launch Updates</Text>
                                    </NextLink>
                                </ChakraLink>
                            </Button>
                        </VStack>
                    </Stack>
                </Container>
            </SectionTemplate>

            {/* Built for organizations section */}
            <SectionTemplate>
                <Container fluid maxW={{ base: "100%", xl: "container.xl" }} px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }}>
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        align={"center"}
                        gap={{ base: 8, md: 10, lg: 14 }}
                    >
                        <VStack
                            align={{ base: "center", lg: "flex-start" }}
                            gap={4}
                            w={{ base: "100%", lg: "50%" }}
                            order={{ base: 2, lg: 1 }}
                        >
                            <Heading
                                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                Built for Organizations That Want to Work Better Together
                            </Heading>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                Navigator&apos;s Network connects:
                            </Text>
                            <List.Root pl={{ base: 5, lg: 0 }} alignSelf={{ base: "flex-start", lg: "stretch" }}>
                                <List.Item>Service providers</List.Item>
                                <List.Item>Government and community agencies</List.Item>
                                <List.Item>Community-focused businesses</List.Item>
                            </List.Root>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                So they can:
                            </Text>
                            <List.Root pl={{ base: 5, lg: 0 }} alignSelf={{ base: "flex-start", lg: "stretch" }}>
                                <List.Item>Share reliable referral pathways</List.Item>
                                <List.Item>Coordinate support across systems</List.Item>
                                <List.Item>Work from the same playbook</List.Item>
                            </List.Root>
                        </VStack>
                        <Image asChild alt="" w={{ base: "100%", lg: "50%" }} maxW={{ base: "500px", lg: "100%" }} mx={"auto"} order={{ base: 1, lg: 2 }}>
                            <NextImage
                                src="/assets/navigators-network/women-shaking-hands-outside.webp"
                                alt="Women shaking hands"
                                width={550}
                                height={593}
                                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                            />
                        </Image>
                    </Stack>
                </Container>
            </SectionTemplate>

            {/* Launching soon section */}
            <SectionTemplate>
                <Container fluid maxW={{ base: "100%", xl: "container.xl" }} px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }}>
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        align={"center"}
                        gap={{ base: 8, md: 10, lg: 14 }}
                    >
                        <Image asChild alt="" w={{ base: "100%", lg: "45%" }} maxW={{ base: "500px", lg: "100%" }} mx={"auto"}>
                            <NextImage
                                src="/assets/navigators-network/top-view-convo.webp"
                                alt="Top view of co-workers talking"
                                width={550}
                                height={743}
                                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                            />
                        </Image>

                        <VStack
                            align={{ base: "center", lg: "flex-start" }}
                            gap={4}
                            w={{ base: "100%", lg: "55%" }}
                        >
                            <Heading
                                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                fontWeight={700}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                Launching Soon — Now Onboarding Partners
                            </Heading>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                We are actively building the platform and onboarding early partners.
                            </Text>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                Organizations that sign up now will receive:
                            </Text>
                            <List.Root pl={{ base: 5, lg: 0 }} alignSelf={{ base: "flex-start", lg: "stretch" }}>
                                <List.Item>Early access opportunities</List.Item>
                                <List.Item>Partnership details</List.Item>
                                <List.Item>Feature updates as they go live</List.Item>
                                <List.Item>Shared resource announcements</List.Item>
                            </List.Root>
                        </VStack>
                    </Stack>
                </Container>
            </SectionTemplate>

            {/* Get in touch section */}
            <SectionTemplate>
                <Container fluid maxW={{ base: "100%", xl: "container.xl" }} px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }}>
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        align={"center"}
                        gap={{ base: 8, md: 10, lg: 14 }}
                    >
                        <VStack
                            align={{ base: "center", lg: "flex-start" }}
                            gap={4}
                            w={{ base: "100%", lg: "50%" }}
                            order={{ base: 2, lg: 1 }}
                        >
                            <Heading
                                size={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                Get In Touch
                            </Heading>
                            <Text
                                color={"gray.500"}
                                fontSize={{ base: "md", md: "lg" }}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                Christiana &quot;Sunshine&quot; Longway
                            </Text>
                            <ChakraLink
                                href="mailto:Sunshine@mokse.org"
                                color={"teal.focusRing"}
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                            >
                                Sunshine@mokse.org
                            </ChakraLink>
                            <Button bg={"teal.focusRing"} size={{ base: "md", md: "lg" }} mt={2}>
                                <Text color={"white"}>Launching April 23rd, 2026</Text>
                            </Button>
                        </VStack>

                        <Image asChild alt="" w={{ base: "100%", lg: "50%" }} maxW={{ base: "500px", lg: "100%" }} mx={"auto"} order={{ base: 1, lg: 2 }}>
                            <NextImage
                                src="/assets/navigators-network/women-holding-map.webp"
                                alt="Women holding map"
                                width={600}
                                height={603}
                                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                            />
                        </Image>
                    </Stack>
                </Container>
            </SectionTemplate>
        </PageBuilder>
    );
}
