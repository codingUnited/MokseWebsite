"use client";
import { PageBuilder, SectionTemplate } from "@/components/page-builder/template";
import {
    Box,
    Button,
    Card,
    Center,
    Container,
    Flex,
    HStack,
    SimpleGrid,
    Stack,
    Tabs,
    Tag,
    VStack,
    Image,
    Heading,
    Text,
    Link as ChakraLink,
} from "@chakra-ui/react";
import NavigatorsNetwork from "./navigators-network/page";
import StopTheStigma from "./stop-the-stigma/page";
import NextImage from "next/image";
import NextLink from "next/link";
import { Icon } from "@/components/ui/icons/icon";

type ProgramCard = {
    value: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    tags: string[];
};

const programs: ProgramCard[] = [
    {
        value: "Stop-The-Stigma",
        title: "Stop The Stigma",
        description:
            "Our annual conference centered on the stigma of disability and incarceration — amplifying voices, stories, and inclusive design.",
        image: "/assets/stop-the-stigma/EFCO STS.webp",
        imageAlt: "Stop The Stigma logo",
        tags: ["Conference", "Advocacy"],
    },
    {
        value: "Navigators-Network",
        title: "Navigators Network",
        description:
            "A collaboration platform connecting service providers, agencies, and community-focused businesses to improve access and coordination.",
        image: "/assets/navigators-network/EFCO BookShire.png",
        imageAlt: "Navigators Network logo",
        tags: ["Platform", "Partnerships"],
    },
];

export default function Programs() {
    return (
        <PageBuilder>
            <Tabs.Root
                defaultValue="Programs"
                orientation="horizontal"
                variant={"outline"}
            >
                <Flex direction={"column"} gap={0} w={"100%"}>
                    <Tabs.List
                        minW={"100%"}
                        overflowX={"auto"}
                        flexShrink={0}
                        py={2}
                        px={2}
                    >
                        <Tabs.Trigger
                            value="Programs"
                            _selected={{ bg: "teal.focusRing", color: "white" }}
                        >
                            All Programs
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="Stop-The-Stigma"
                            _selected={{ bg: "teal.focusRing", color: "white" }}
                        >
                            Stop The Stigma
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="Navigators-Network"
                            _selected={{ bg: "teal.focusRing", color: "white" }}
                        >
                            Navigators Network
                        </Tabs.Trigger>
                    </Tabs.List>

                    <Box flex={1} minW={0} w={"100%"}>
                        <Tabs.Content value="Programs" p={0}>
                            <Container fluid maxW={{ base: "100%", xl: "container.xl" }} py={{ base: 8, md: 12 }} px={{ base: 4, md: 8 }}>
                                <SectionTemplate
                                    title={"Programs"}
                                    description={
                                        "Discover our innovative programs designed to empower and support justice-impacted individuals on their journey to reintegration and success."
                                    }
                                >
                                    <SimpleGrid
                                        columns={{ base: 1, sm: 2, lg: 2, xl: 3 }}
                                        gap={{ base: 4, md: 6 }}
                                        mt={{ base: 6, md: 10 }}
                                        w={"100%"}
                                    >
                                        {programs.map((p) => (
                                            <Card.Root
                                                key={p.value}
                                                borderWidth="0.5px"
                                                borderRadius="md"
                                                shadow="sm"
                                                w={"100%"}
                                                h={"100%"}
                                                overflow={"hidden"}
                                            >
                                                <Center bg={"gray.50"} p={{ base: 4, md: 6 }} h={{ base: "140px", md: "160px" }}>
                                                    <Image asChild>
                                                        <NextImage
                                                            src={p.image}
                                                            alt={p.imageAlt}
                                                            width={240}
                                                            height={80}
                                                            style={{ objectFit: "contain", maxHeight: "100%", width: "auto" }}
                                                        />
                                                    </Image>
                                                </Center>

                                                <Card.Body p={{ base: 4, md: 5 }} gap={3}>
                                                    <Heading as={"h3"} size={{ base: "md", md: "lg" }}>
                                                        {p.title}
                                                    </Heading>
                                                    <Text fontSize={{ base: "sm", md: "md" }} color={"gray.600"}>
                                                        {p.description}
                                                    </Text>
                                                    <HStack gap={2} wrap={"wrap"}>
                                                        {p.tags.map((t) => (
                                                            <Tag.Root key={t} size={"md"}>
                                                                <Tag.Label>{t}</Tag.Label>
                                                            </Tag.Root>
                                                        ))}
                                                    </HStack>
                                                </Card.Body>

                                                <Card.Footer p={{ base: 4, md: 5 }} pt={0}>
                                                    <Button
                                                        bg={"teal.focusRing"}
                                                        size={{ base: "sm", md: "md" }}
                                                        w={"100%"}
                                                    >
                                                        <ChakraLink asChild>
                                                            <NextLink href={`/programs/${p.value.toLowerCase()}`}>
                                                                <Text color={"white"}>Learn More</Text>
                                                                <Icon name={"ArrowRight"} size={4} />
                                                            </NextLink>
                                                        </ChakraLink>
                                                    </Button>
                                                </Card.Footer>
                                            </Card.Root>
                                        ))}
                                    </SimpleGrid>
                                </SectionTemplate>
                            </Container>
                        </Tabs.Content>

                        <Tabs.Content value="Stop-The-Stigma" p={0}>
                            <StopTheStigma />
                        </Tabs.Content>

                        <Tabs.Content value="Navigators-Network" p={0}>
                            <NavigatorsNetwork />
                        </Tabs.Content>
                    </Box>
                </Flex>
            </Tabs.Root>
        </PageBuilder>
    );
}
