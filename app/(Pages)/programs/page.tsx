import { BodyTemplate, HeaderTemplate, PageBuilder, SectionTemplate } from "@/components/page-builder/template";
import { Card, Container, Flex, HStack, Tabs, VStack } from "@chakra-ui/react";


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
                                    <Tabs.Trigger value="projects">Stop The Stigma</Tabs.Trigger>
                                </Tabs.List>
                                <Tabs.Content value="Navigators-Network">
                                    Programs Info coming soon!
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