"use client";
import { HeaderTemplate, PageBuilder, SectionTemplate } from '@/components/page-builder/template';
import { Button, Link as ChakraLink, Text, Image, HStack, Heading, List } from "@chakra-ui/react";
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
                            width={1080} //300w // 768w  // 1536 
                            height={683}
                        />
                    </Image>
                    <Heading size={"4xl"}>Navigator's Network</Heading>
                    <Text>Navigator’s Network is launching as a collaboration platform for organizations that want to improve access, coordination, and real-world outcomes.</Text>
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
                    <Text>Navigator’s Network connects:</Text>

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
                            width={949}
                            height={1024}
                        />
                    </Image>
                </HStack>
            </SectionTemplate>

            <SectionTemplate>
                <HStack>
                    <Image asChild alt="">
                        <NextImage
                            src="/assets/navigators-network/top-view-convo.webp"
                            alt="Top view of co-workers talking"
                            width={757}
                            height={1024}
                        />
                    </Image>
                    <Heading size={'4xl'}>Launching Soon — Now Onboarding Partners</Heading>
                    <Text>We are actively building the platform and onboarding early partners.</Text>
                    <Text>Organizations that sign up now will receive:</Text>
                    <List.Root>
                        <List.Item>Early access opportunities</List.Item>
                        <List.Item>Partnership details</List.Item>
                        <List.Item>Feature updates as they go live</List.Item>
                        <List.Item>Shared resource announcements</List.Item>
                    </List.Root>
                </HStack>
            </SectionTemplate>

            <SectionTemplate>
                <HStack>
                    <Heading size={'4xl'}>Get In Touch</Heading>
                    <Text>Christiana “Sunshine” Longway</Text>
                    <Text>Sunshine@mokse.org</Text>
                    <Button>
                        {/*BUTTON GOES TO TOP OF PAGE */}
                        <Text color={'black'}>Launching April 23rd, 2026</Text>

                    </Button>
                    <Image asChild alt="">
                        <NextImage
                            src='/assets/navigators-network/women-holding-map.webp'
                            alt='Women holding map'
                            width={768}
                            height={772}
                        />
                    </Image>
                </HStack>
            </SectionTemplate>

        </PageBuilder >

    )
}