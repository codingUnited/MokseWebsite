"use client";
import { HeaderTemplate, PageBuilder, SectionTemplate } from '@/components/page-builder/template';
import { Button, Link as ChakraLink, Text, Image, HStack, Center, VStack, Box, Heading, List, Card } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

export default function NavigatorsNetwork() {
    return (
        <PageBuilder>
            <HeaderTemplate
                title="Navigators Network"
                imageHeight={"52.1vh"}
                image="/assets/navigators-network/background.webp"
                imageLabel="Navigators Network Hero"
                description="A Connected Hub for Stronger Community Support “Find Your Way”"
            />
            <SectionTemplate>
                <HStack>
                    <Image asChild alt="">
                        <NextImage
                            src="/assets/navigators-network/partners-shaking-hands.webp"
                            alt="Navigators Network Background"
                            width={575} // start was 1024 //300w // 768w  // 1536 
                            height={383} // start 683
                        />
                    </Image>
                    <Heading size={"4xl"}>Navigator&apos;s Network</Heading>
                    <Text>Navigator&apos;s Network is launching as a collaboration platform for organizations that want to improve access, coordination, and real-world outcomes.</Text>
                    <Button>
                        <ChakraLink asChild>
                            <NextLink href={"https://forms.office.com/Pages/ResponsePage.aspx?id=ek_Mq-3o7UmR4e2p9bxT6nRWmhssVxdCt8_vzCmu28ZUMkMwTFBIT09VMDVEVlpMOVlHU0NGVUVCWi4u"}>
                                <Text color={'black'}>Get Launch Updates</Text>
                            </NextLink>
                        </ChakraLink>
                    </Button>
                </HStack>
            </SectionTemplate>
            <SectionTemplate>
                <HStack>
                    <Heading size={'4xl'}>Built for Organizations That Want to Work Better Together</Heading>
                    <Text>Navigator&apos;s Network connects:</Text>
                    <List.Root>
                        <List.Item>Service providers</List.Item>
                        <List.Item>Government and community agencies</List.Item>
                        <List.Item>Community-focused businesses</List.Item>
                    </List.Root>
                    <Text>So they can:</Text>
                    <List.Root>
                        <List.Item>Share reliable referral pathways</List.Item>
                        <List.Item>Coordinate support across systems</List.Item>
                        <List.Item>Work from the same playbook</List.Item>
                    </List.Root>
                    <Image asChild alt="">
                        <NextImage
                            src="/assets/navigators-network/women-shaking-hands-outside.webp"
                            alt="Women shaking hands"
                            width={550}
                            height={593}
                        />
                    </Image>
                </HStack>
            </SectionTemplate>
            <SectionTemplate>
                <Center>
                    <Card.Root gap={40} flexDirection={"row"} border={0}>
                        <Image asChild alt="">
                            <NextImage
                                src="/assets/navigators-network/top-view-convo.webp"
                                alt="Top view of co-workers talking"
                                width={550}
                                height={743}
                            />
                        </Image>

                        <Center>
                            <VStack>
                                <Heading size={'4xl'} maxWidth={"500px"} fontWeight={700}>
                                    Launching Soon — Now Onboarding Partners
                                </Heading>
                                <Card.Title>We are actively building the platform and onboarding early partners.</Card.Title>

                                <VStack w={"full"} gap={5} alignItems={'left'}><Card.Description textStyle={"lg"}>
                                    Organizations that sign up now will receive:
                                    <VStack w={"full"} gap={5} alignItems={"self-start"}>
                                        <List.Root>
                                            <List.Item>Early access opportunities</List.Item>
                                            <List.Item>Partnership details</List.Item>
                                            <List.Item>Feature updates as they go live</List.Item>
                                            <List.Item>Shared resource announcements</List.Item>
                                        </List.Root>
                                    </VStack>
                                </Card.Description></VStack>

                            </VStack>
                        </Center>

                    </Card.Root>
                </Center>

            </SectionTemplate >

            <SectionTemplate>
                <Center>
                    <Card.Root gap={40} flexDirection={"row"} border={0}>
                        <Center>
                            <VStack>
                                <Heading size={"6xl"}>Get In Touch</Heading>
                                <VStack w={"full"} gap={5} alignItems={'left'}>
                                    <Card.Title color={"#6E7180"}>Christiana "Sunshine" Longway</Card.Title>
                                    <Card.Description color={"#6E7180"} textStyle={"lg"}>Sunshine@mokse.org</Card.Description>
                                    <Button bg={'#43c0b3'}>
                                        {/*BUTTON GOES TO TOP OF PAGE */}
                                        Launching April 23rd, 2026
                                    </Button>
                                </VStack>

                            </VStack>
                        </Center>

                        <Image asChild alt="">
                            <NextImage
                                src='/assets/navigators-network/women-holding-map.webp'
                                alt='Women holding map'
                                width={600}
                                height={603}
                            />
                        </Image>
                    </Card.Root>
                </Center>

            </SectionTemplate>
        </PageBuilder >

    )
}