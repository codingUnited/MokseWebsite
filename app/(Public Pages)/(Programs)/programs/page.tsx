"use client";
import { HeaderTemplate, PageBuilder, SectionTemplate } from "@/components/page-builder/template";
import { Box, Button, Center, Flex, Float, HStack, Stack, Tabs, Tag, ClientOnly, Image as ChakraImage, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import NavigatorsNetwork from "./navigators-network/page";
import StopTheStigma from "./stop-the-stigma/page";
import NextImage from "next/image";
import { Tooltip } from "@/components/ui/tooltip";
import { Icon } from "@/components/ui/icons/icon";
import { useState } from "react";

export default function Programs() {
    const [showPrograms, setShowPrograms] = useState(true);
    const orientation = useBreakpointValue<"horizontal" | "vertical">({
        base: "horizontal",
        md: "vertical",
    });

    return (
        <PageBuilder>
            {/* 1. Mobile First Header: Tall on phones, shorter on desktops */}
            <HeaderTemplate
                title="Our Programs"
                imageHeight={{ base: "15vh", md: "12vh", lg: "8vh" }}
            />

            {/* 2. Mobile First Wrapper: Auto height on phones to prevent scrolling bugs, fixed min-height on desktop */}
            <Flex w="full" minH={{ base: "auto", lg: "calc(100vh - 8vh)" }} bg="bg.muted">

                {/* 3. Mobile First Tabs: Horizontal on phones/tablets, Vertical only on large desktops */}
                <Tabs.Root
                    defaultValue="Programs"
                    orientation={orientation}
                    variant="line"
                    w="full"
                    display="flex"
                    flexDirection={{ base: "column", lg: "row" }}
                >
                    <Tabs.List
                        display="flex"
                        flexDirection={{ base: "row", lg: "column" }}

                        // Mobile: Always 100% width. Desktop: Animates between 280px and 0px.
                        w={{ base: "100%", lg: showPrograms ? "280px" : "0px" }}
                        minW={{ base: "100%", lg: showPrograms ? "280px" : "0px" }}

                        // Mobile: Always visible. Desktop: Fades out when closed.
                        opacity={{ base: 1, lg: showPrograms ? 1 : 0 }}

                        // Mobile: Standard padding. Desktop: Shrinks to 0 when closed.
                        p={{ base: 2, md: 4, lg: showPrograms ? 4 : 0 }}

                        // Mobile: Bottom border. Desktop: Right border.
                        borderRightWidth={{ base: "0px", lg: showPrograms ? "1px" : "0px" }}
                        borderBottomWidth={{ base: "1px", lg: "0px" }}
                        borderColor="border.subtle"
                        bg="bg.panel"

                        // Mobile: Allows native horizontal swiping. Desktop: Hides overflow for animation.
                        overflowX={{ base: "auto", lg: "hidden" }}
                        overflowY="hidden"

                        // Mobile: NO transition (prevents lag). Desktop: Smooth slide transition.
                        transition={{ base: "none", lg: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
                        gap={{ base: 4, lg: 2 }}
                    >
                        <Tabs.Trigger
                            value="Programs"
                            w={{ base: "auto", lg: "full" }}
                            justifyContent={{ base: "center", lg: "flex-start" }}
                            flexShrink={0} // CRITICAL: Prevents text from squishing on small phones
                            whiteSpace="nowrap"
                        >
                            All Programs
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="Stop-The-Stigma"
                            w={{ base: "auto", lg: "full" }}
                            justifyContent={{ base: "center", lg: "flex-start" }}
                            flexShrink={0}
                            whiteSpace="nowrap"
                        >
                            Stop The Stigma
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="Navigators-Network"
                            w={{ base: "auto", lg: "full" }}
                            justifyContent={{ base: "center", lg: "flex-start" }}
                            flexShrink={0}
                            whiteSpace="nowrap"
                        >
                            Navigators Network
                        </Tabs.Trigger>
                    </Tabs.List>

                    {/* MAIN CONTENT PANE */}
                    <Box
                        flex="1"
                        position="relative"
                        w="full"
                        bg="bg.canvas"
                        transition={{ base: "none", lg: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
                    >

                        {/* Universal Toggle Button - Hidden on mobile/tablet, only appears on large screens */}
                        <Float placement="top-start" offsetX={6} offsetY={6} display={{ base: "none", lg: "flex" }} zIndex={10}>
                            <Button
                                size="sm"
                                variant="surface"
                                boxShadow="sm"
                                onClick={() => setShowPrograms(!showPrograms)}
                            >
                                <Icon
                                    name="AngleRight"
                                    style={{ transform: showPrograms ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
                                />
                                {showPrograms ? "Collapse" : "Expand"} Menu
                            </Button>
                        </Float>

                        <Tabs.Content value="Programs" p={{ base: 4, md: 8, lg: 10 }} pt={{ lg: 20 }} h="full">
                            <Box maxW="7xl" mx="auto">
                                <SectionTemplate
                                    title="Programs"
                                    description="Discover our innovative programs designed to empower and support justice-impacted individuals on their journey to reintegration and success. Explore our range of services, resources, and opportunities to get involved and make a positive impact in your community."
                                >
                                    {/* 4. Mobile First Grid: 1 column on phones, 2 columns on tablets/desktops */}
                                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }} mt={{ base: 8, md: 10 }} w="full">

                                        {/* Program Card 1 */}
                                        <Box
                                            borderWidth="1px"
                                            borderColor="border.subtle"
                                            borderRadius="xl"
                                            shadow="sm"
                                            bg="bg.panel"
                                            w="full"
                                            overflow="hidden"
                                            transition="transform 0.2s, box-shadow 0.2s"
                                            _hover={{ transform: "translateY(-4px)", shadow: "md" }}
                                        >
                                            <Center bg="gray.100" p={6} minH={{ base: "120px", md: "140px" }}>
                                                <ClientOnly fallback={<Box boxSize="100px" bg="blue.500" />}>
                                                    <ChakraImage asChild>
                                                        <NextImage
                                                            src="/assets/stop-the-stigma/EFCO STS.webp"
                                                            alt="Stop The Stigma Logo"
                                                            width={180}
                                                            height={50}
                                                            style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
                                                        />
                                                    </ChakraImage>
                                                </ClientOnly>
                                            </Center>
                                            <Box p={{ base: 5, md: 6 }}>
                                                <Stack gap={3}>
                                                    <Box fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>Stop The Stigma</Box>
                                                    <Box fontSize={{ base: "sm", md: "md" }} color="fg.muted" lineClamp={3}>
                                                        An annual conference centered on the stigma of disability and incarceration.
                                                    </Box>
                                                    <HStack gap={2} mt={2} wrap="wrap">
                                                        <Tooltip content="Conference">
                                                            <Tag.Root size={{ base: "sm", md: "md" }} variant="subtle" colorPalette="blue">
                                                                <Tag.Label>Conference</Tag.Label>
                                                            </Tag.Root>
                                                        </Tooltip>
                                                        <Tag.Root size={{ base: "sm", md: "md" }} variant="outline">
                                                            <Tag.Label>Advocacy</Tag.Label>
                                                        </Tag.Root>
                                                    </HStack>
                                                </Stack>
                                            </Box>
                                        </Box>

                                        {/* Program Card 2 */}
                                        <Box
                                            borderWidth="1px"
                                            borderColor="border.subtle"
                                            borderRadius="xl"
                                            shadow="sm"
                                            bg="bg.panel"
                                            w="full"
                                            overflow="hidden"
                                            transition="transform 0.2s, box-shadow 0.2s"
                                            _hover={{ transform: "translateY(-4px)", shadow: "md" }}
                                        >
                                            <Center bg="gray.100" p={6} minH={{ base: "120px", md: "140px" }}>
                                                <ClientOnly fallback={<Box boxSize="100px" bg="blue.500" />}>
                                                    <ChakraImage asChild>
                                                        <NextImage
                                                            src="/assets/navigators-network/EFCO BookShire.png"
                                                            alt="Navigators Network Logo"
                                                            width={225}
                                                            height={50}
                                                            style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
                                                        />
                                                    </ChakraImage>
                                                </ClientOnly>
                                            </Center>
                                            <Box p={{ base: 5, md: 6 }}>
                                                <Stack gap={3}>
                                                    <Box fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>Navigators Network</Box>
                                                    <Box fontSize={{ base: "sm", md: "md" }} color="fg.muted" lineClamp={3}>
                                                        A collaboration platform for organizations that want to improve access and coordination.
                                                    </Box>
                                                    <HStack gap={2} mt={2} wrap="wrap">
                                                        <Tooltip content="Network">
                                                            <Tag.Root size={{ base: "sm", md: "md" }} variant="subtle" colorPalette="teal">
                                                                <Tag.Label>Network</Tag.Label>
                                                            </Tag.Root>
                                                        </Tooltip>
                                                        <Tag.Root size={{ base: "sm", md: "md" }} variant="outline">
                                                            <Tag.Label>Collaboration</Tag.Label>
                                                        </Tag.Root>
                                                    </HStack>
                                                </Stack>
                                            </Box>
                                        </Box>

                                    </SimpleGrid>
                                </SectionTemplate>
                            </Box>
                        </Tabs.Content>

                        {/* Sub-Components */}
                        <Tabs.Content value="Navigators-Network" p={0} h="full">
                            <Box h="full" overflowY="auto">
                                <NavigatorsNetwork />
                            </Box>
                        </Tabs.Content>

                        <Tabs.Content value="Stop-The-Stigma" p={0} h="full">
                            <Box h="full" overflowY="auto">
                                <StopTheStigma />
                            </Box>
                        </Tabs.Content>

                    </Box>
                </Tabs.Root>
            </Flex>
        </PageBuilder>
    );
}