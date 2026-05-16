"use client";
import { HeaderTemplate, PageBuilder, SectionTemplate } from '@/components/page-builder/template';
import { Button, Link as ChakraLink, Text, Image as ChakraImage, Stack, Center, VStack, Box, Heading, List, Card } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

export default function NavigatorsNetwork() {
    return (
        <PageBuilder>
            <HeaderTemplate
                title="Navigators Network"
                imageHeight={{ base: "40vh", md: "52.1vh" }}
                image="/assets/navigators-network/background.webp"
                imageLabel="Navigators Network Hero"
                description='A Connected Hub for Stronger Community Support “Find Your Way”'
            />

            {/* SECTION 1: Intro */}
            <SectionTemplate>
                <Stack direction={{ base: "column", md: "row" }} gap={{ base: 8, md: 12 }} align="center">
                    <Box w={{ base: "100%", md: "50%" }}>
                        <ChakraImage asChild borderRadius="md" overflow="hidden">
                            <NextImage
                                src="/assets/navigators-network/partners-shaking-hands.webp"
                                alt="Navigators Network Background"
                                width={575}
                                height={383}
                                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                            />
                        </ChakraImage>
                    </Box>
                    <VStack w={{ base: "100%", md: "50%" }} align="flex-start" gap={6}>
                        <Heading size={{ base: "3xl", md: "4xl" }}>Navigator&apos;s Network</Heading>
                        <Text textStyle={{ base: "md", md: "lg" }}>
                            Navigator&apos;s Network is launching as a collaboration platform for organizations that want to improve access, coordination, and real-world outcomes.
                        </Text>
                        <Button colorScheme="blue" size="lg">
                            <ChakraLink asChild _hover={{ textDecoration: "none" }}>
                                <NextLink href="https://forms.office.com/Pages/ResponsePage.aspx?id=ek_Mq-3o7UmR4e2p9bxT6nRWmhssVxdCt8_vzCmu28ZUMkMwTFBIT09VMDVEVlpMOVlHU0NGVUVCWi4u" target="_blank">
                                    <Text color="black" fontWeight="medium">Get Launch Updates</Text>
                                </NextLink>
                            </ChakraLink>
                        </Button>
                    </VStack>
                </Stack>
            </SectionTemplate>

            {/* SECTION 2: Built for Organizations */}
            <SectionTemplate>
                <Stack direction={{ base: "column-reverse", md: "row" }} gap={{ base: 8, md: 16 }} align="center">
                    {/* Grouped the text and lists together so they form one half of the layout */}
                    <VStack w={{ base: "100%", md: "50%" }} align="flex-start" gap={6}>
                        <Heading size={{ base: "3xl", md: "4xl" }}>
                            Built for Organizations That Want to Work Better Together
                        </Heading>

                        <Box>
                            <Text fontWeight="bold" mb={2}>Navigator&apos;s Network connects:</Text>
                            <List.Root ps={5} spaceY={1}>
                                <List.Item>Service providers</List.Item>
                                <List.Item>Government and community agencies</List.Item>
                                <List.Item>Community-focused businesses</List.Item>
                            </List.Root>
                        </Box>

                        <Box>
                            <Text fontWeight="bold" mb={2}>So they can:</Text>
                            <List.Root ps={5} spaceY={1}>
                                <List.Item>Share reliable referral pathways</List.Item>
                                <List.Item>Coordinate support across systems</List.Item>
                                <List.Item>Work from the same playbook</List.Item>
                            </List.Root>
                        </Box>
                    </VStack>

                    <Box w={{ base: "100%", md: "50%" }}>
                        <ChakraImage asChild borderRadius="md" overflow="hidden">
                            <NextImage
                                src="/assets/navigators-network/women-shaking-hands-outside.webp"
                                alt="Women shaking hands"
                                width={550}
                                height={593}
                                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                            />
                        </ChakraImage>
                    </Box>
                </Stack>
            </SectionTemplate>

            {/* SECTION 3: Launching Soon */}
            <SectionTemplate>
                <Card.Root variant="unstyled" w="full">
                    <Stack direction={{ base: "column", md: "row" }} gap={{ base: 8, md: 16 }} align="center">
                        <Box w={{ base: "100%", md: "50%" }}>
                            <ChakraImage asChild borderRadius="md" overflow="hidden">
                                <NextImage
                                    src="/assets/navigators-network/top-view-convo.webp"
                                    alt="Top view of co-workers talking"
                                    width={550}
                                    height={743}
                                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                                />
                            </ChakraImage>
                        </Box>

                        <VStack w={{ base: "100%", md: "50%" }} align="flex-start" gap={6}>
                            <Heading size={{ base: "3xl", md: "4xl" }} fontWeight={700}>
                                Launching Soon — Now Onboarding Partners
                            </Heading>
                            <Text textStyle="lg" fontWeight="medium" color="fg.muted">
                                We are actively building the platform and onboarding early partners.
                            </Text>

                            <Box>
                                <Text textStyle="lg" mb={3}>Organizations that sign up now will receive:</Text>
                                <List.Root ps={5} spaceY={2}>
                                    <List.Item>Early access opportunities</List.Item>
                                    <List.Item>Partnership details</List.Item>
                                    <List.Item>Feature updates as they go live</List.Item>
                                    <List.Item>Shared resource announcements</List.Item>
                                </List.Root>
                            </Box>
                        </VStack>
                    </Stack>
                </Card.Root>
            </SectionTemplate >

            {/* SECTION 4: Get In Touch */}
            <SectionTemplate>
                <Card.Root variant="unstyled" w="full">
                    <Stack direction={{ base: "column", md: "row" }} gap={{ base: 8, md: 16 }} align="center">
                        <VStack w={{ base: "100%", md: "50%" }} align="flex-start" gap={6}>
                            <Heading size={{ base: "4xl", md: "6xl" }}>Get In Touch</Heading>

                            <VStack align="flex-start" gap={2}>
                                <Text fontWeight="bold" fontSize="xl" color="#6E7180">
                                    Christiana "Sunshine" Longway
                                </Text>
                                <Text textStyle="lg" color="#6E7180">
                                    Sunshine@mokse.org
                                </Text>
                            </VStack>

                            <Button bg="#43c0b3" color="white" size="lg" mt={4} _hover={{ bg: "#359c91" }}>
                                Launching April 23rd, 2026
                            </Button>
                        </VStack>

                        <Box w={{ base: "100%", md: "50%" }}>
                            <ChakraImage asChild borderRadius="md" overflow="hidden">
                                <NextImage
                                    src='/assets/navigators-network/women-holding-map.webp'
                                    alt='Women holding map'
                                    width={600}
                                    height={603}
                                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                                />
                            </ChakraImage>
                        </Box>
                    </Stack>
                </Card.Root>
            </SectionTemplate>
        </PageBuilder>
    );
}