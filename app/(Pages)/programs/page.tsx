import { BodyTemplate, HeaderTemplate, PageBuilder, SectionTemplate } from "@/components/page-builder/template";
import { Box, Card, Center, Container, Flex, HStack, ScrollArea, Stack, Tabs, Tag, VStack } from "@chakra-ui/react";
import NavigatorsNetwork from "./navigators-network/page";
import StopTheStigma from "./stop-the-stigma/page";

import { Tooltip } from "@/components/ui/tooltip";


export default function Programs() {
    return (
        <PageBuilder>
            <HeaderTemplate
                title={"Programs"}
                imageHeight={"30vh"}
                titleAlignment={2}
                titleLocation={100}
                description={"Discover our innovative programs designed to empower and support justice-impacted individuals on their journey to reintegration and success. Explore our range of services, resources, and opportunities to get involved and make a positive impact in your community."} />
            <Container fluid minW={'2xl'}>
                <Card.Root>

                    <Card.Body asChild>
                        <Flex direction={'row'} gap={0}>
                            <Tabs.Root defaultValue="Navigators-Network" orientation="vertical">
                                <Tabs.List >
                                    <Tabs.Trigger value="Navigators-Network">Navigators Network</Tabs.Trigger>
                                    <Tabs.Trigger value="Stop-The-Stigma">Stop The Stigma</Tabs.Trigger>
                                </Tabs.List>
                                <Tabs.Content value="Navigators-Network">
                                    <ScrollArea.Root height={"xl"} maxW="full">
                                        <ScrollArea.Viewport>
                                            <ScrollArea.Content spaceY="1" textStyle="sm">
                                                {/* <NavigatorsNetwork /> */}
                                                <Card.Root
                                                    borderWidth=".5px"
                                                    borderRadius="md"
                                                    shadow="xs"
                                                    flexDirection="row"
                                                >
                                                    <Center borderRadius="md">
                                                        <Box boxSize={120} bg={"blue.500"} />
                                                    </Center>
                                                    <Card.Body p={4}>
                                                        <Stack>
                                                            <strong>Title</strong>
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
                                            </ScrollArea.Content>
                                        </ScrollArea.Viewport>
                                        <ScrollArea.Scrollbar>
                                            <ScrollArea.Thumb />
                                        </ScrollArea.Scrollbar>
                                        <ScrollArea.Corner />
                                    </ScrollArea.Root>
                                </Tabs.Content>
                                <Tabs.Content value="Stop-The-Stigma">
                                    <ScrollArea.Root height={"xl"} maxW="full">
                                        <ScrollArea.Viewport>
                                            <ScrollArea.Content spaceY="1" textStyle="sm">
                                                <StopTheStigma />
                                            </ScrollArea.Content>
                                        </ScrollArea.Viewport>
                                        <ScrollArea.Scrollbar>
                                            <ScrollArea.Thumb />
                                        </ScrollArea.Scrollbar>
                                        <ScrollArea.Corner />
                                    </ScrollArea.Root>
                                </Tabs.Content>
                            </Tabs.Root >
                        </Flex >
                    </Card.Body>

                </Card.Root>
            </Container>
            {/* <BodyTemplate>
                

            </BodyTemplate> */}
        </PageBuilder>
    )
}