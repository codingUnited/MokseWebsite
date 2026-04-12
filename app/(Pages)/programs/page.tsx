"use client";
import { BodyTemplate, HeaderTemplate, PageBuilder, SectionTemplate } from "@/components/page-builder/template";
import { Box, Button, Card, Center, Container, Flex, Float, HStack, Portal, ScrollArea, Stack, Tabs, Tag, VStack } from "@chakra-ui/react";
import NavigatorsNetwork from "./navigators-network/page";
import StopTheStigma from "./stop-the-stigma/page";

import { Tooltip } from "@/components/ui/tooltip";
import { Icon } from "@/components/ui/icons/icon";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";


export default function Programs() {
    const [showPrograms, setShowPrograms] = useState(true);
    return (
        <PageBuilder>
            <Card.Root>
                <HeaderTemplate
                    imageHeight="9vh"
                />
                <Tabs.Root defaultValue="Programs" orientation="vertical" variant={'outline'}>
                    <Flex direction={'row'} gap={0}>
                        <Tabs.List minW={'9vw'} hidden={!showPrograms}>
                            <Tabs.Trigger value="Programs" _selected={{
                                bg: "blue.500",
                                color: "white",
                            }}>
                                Programs
                            </Tabs.Trigger>
                            <Tabs.Trigger value="Stop-The-Stigma" _selected={{
                                bg: "blue.500",
                                color: "white",
                            }}>
                                Stop The Stigma
                            </Tabs.Trigger>
                            <Tabs.Trigger value="Navigators-Network" _selected={{
                                bg: "blue.500",
                                color: "white",
                            }}>
                                Navigators Network
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="Programs" p={0} position={'relative'}>
                            <Float placement={"top-start"} zIndex={1} offsetX={"48px"} offsetY={5}>
                                <Button onClick={() => setShowPrograms(!showPrograms)}>Programs</Button>
                            </Float>
                            <Container fluid>
                                <SectionTemplate
                                    title={"Programs"}
                                    description={"Discover our innovative programs designed to empower and support justice-impacted individuals on their journey to reintegration and success. Explore our range of services, resources, and opportunities to get involved and make a positive impact in your community."} >
                                    <ScrollArea.Root height={"4xl"} maxW={"full"} mt={8}>
                                        <ScrollArea.Viewport>
                                            <ScrollArea.Content spaceY="4" textStyle="sm">

                                                <Flex gapX={4} gapY={4}>
                                                    <Card.Root
                                                        borderWidth=".5px"
                                                        borderRadius="md"
                                                        shadow="xs"
                                                        flexDirection="column"
                                                        w={'xs'}
                                                        h={'sm'}
                                                    >
                                                        <Box boxSize={'xs'} bg={"blue.500"} />
                                                        <Card.Body p={4}>
                                                            <Stack>
                                                                <strong>Stop The Stigma</strong>
                                                                <Box fontSize="sm" color="gray.500">
                                                                    description
                                                                </Box>
                                                                <Stack direction={"row"} gap={2}>
                                                                    <Tooltip content={"test"}>
                                                                        <Tag.Root size={"lg"} maxW={"xs"}>
                                                                            <Tag.Label>
                                                                                Label
                                                                            </Tag.Label>
                                                                        </Tag.Root>
                                                                    </Tooltip>
                                                                    <Tag.Root size={"lg"} maxW={"xs"}>
                                                                        <Tag.Label>{"Category"}</Tag.Label>
                                                                    </Tag.Root>
                                                                </Stack>
                                                            </Stack>
                                                        </Card.Body>
                                                    </Card.Root>
                                                    <Card.Root
                                                        borderWidth=".5px"
                                                        borderRadius="md"
                                                        shadow="xs"
                                                        flexDirection="column"
                                                        w={'xs'}
                                                        h={'sm'}
                                                    >
                                                        <Box boxSize={'xs'} bg={"blue.500"} />
                                                        <Card.Body p={4}>
                                                            <Stack>
                                                                <strong>Navigators Network</strong>
                                                                <Box fontSize="sm" color="gray.500">
                                                                    description
                                                                </Box>
                                                                <Stack direction={"row"} gap={2}>
                                                                    <Tooltip content={"test"}>
                                                                        <Tag.Root size={"lg"} maxW={"xs"}>
                                                                            <Tag.Label>
                                                                                Label
                                                                            </Tag.Label>
                                                                        </Tag.Root>
                                                                    </Tooltip>
                                                                    <Tag.Root size={"lg"} maxW={"xs"}>
                                                                        <Tag.Label>{"Category"}</Tag.Label>
                                                                    </Tag.Root>
                                                                </Stack>
                                                            </Stack>
                                                        </Card.Body>
                                                    </Card.Root></Flex>
                                            </ScrollArea.Content>
                                        </ScrollArea.Viewport>
                                        <ScrollArea.Corner />
                                    </ScrollArea.Root>
                                </SectionTemplate>
                            </Container>
                        </Tabs.Content>
                        <Tabs.Content value="Navigators-Network" p={0} position={'relative'}>
                            <Float placement={"top-start"} zIndex={1} offsetX={"48px"} offsetY={5}>
                                <Button onClick={() => setShowPrograms(!showPrograms)} > Programs</Button>
                            </Float>
                            <ScrollArea.Root height={"4xl"} maxW="full">
                                <ScrollArea.Viewport>
                                    <ScrollArea.Content spaceY="1" textStyle="sm">
                                        <NavigatorsNetwork />
                                    </ScrollArea.Content>
                                </ScrollArea.Viewport>
                                <ScrollArea.Corner />
                            </ScrollArea.Root>
                        </Tabs.Content>
                        <Tabs.Content value="Stop-The-Stigma" position={'relative'} p={0} >
                            <Float placement={"top-start"} zIndex={1} offsetX={"48px"} offsetY={5}>
                                <Button onClick={() => setShowPrograms(!showPrograms)} > Programs</Button>
                            </Float>
                            <ScrollArea.Root height={"4xl"} maxW="full">
                                <ScrollArea.Viewport>
                                    <ScrollArea.Content spaceY="1" textStyle="sm" position={'relative'}>
                                        <StopTheStigma />
                                    </ScrollArea.Content>
                                </ScrollArea.Viewport>
                                <ScrollArea.Scrollbar>
                                    <ScrollArea.Thumb />
                                </ScrollArea.Scrollbar>
                                <ScrollArea.Corner />
                            </ScrollArea.Root>
                        </Tabs.Content>
                    </Flex >
                </Tabs.Root >
            </Card.Root>

        </PageBuilder>
    )
}