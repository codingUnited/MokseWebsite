"use client";
import {
  HeaderTemplate,
  PageBuilder,
  SectionTemplate,
} from "@/components/page-builder/template";
import {
  Input,
  Button,
  Card,
  Field,
  Fieldset,
  Container,
  HStack,
  Tabs,
  Text,
  List,
  SimpleGrid,
  Avatar,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Admin() {
  const auth = {
    userName: "D.Robinson",
    password: "admin123",
  };
  const [input, setInput] = useState({ userName: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthUser = (userName: string, password: string) => {
    if (userName !== auth.userName) {
      return (
        setIsAuthenticated(false),
        alert("Access denied: Invalid username")
      );
    }
    if (password !== auth.password) {
      return (
        setIsAuthenticated(false),
        alert("Access denied: Invalid password")
      );
    }
    setIsAuthenticated(true);
    alert("Access granted");
  };
  return (
    <PageBuilder>
      <HeaderTemplate imageHeight="8vh" />
      <SectionTemplate title="Admin Panel" direction="row">
        {!isAuthenticated && (
          <Card.Root width={"sm"} h={"sm"} size={"lg"} alignSelf={"center"}>
            <Card.Header>Admin Login</Card.Header>
            <Card.Body>
              <form action="submit">
                <Fieldset.Root>
                  <Fieldset.Content>
                    <Field.Root>
                      <Field.Label>Username</Field.Label>
                      <Input
                        type="text"
                        bg={"blue.500"}
                        value={input.userName}
                        onChange={(e) =>
                          setInput({ ...input, userName: e.target.value })
                        }
                      />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Password</Field.Label>
                      <Input
                        type="password"
                        bg={"blue.500"}
                        value={input.password}
                        onChange={(e) =>
                          setInput({ ...input, password: e.target.value })
                        }
                      />
                    </Field.Root>
                    <Field.Root>
                      <Button
                        onClick={() => {
                          console.log(input.userName);
                          console.log(input.password);
                          handleAuthUser(input.userName, input.password);
                        }}
                        alignSelf={"center"}
                        w={"3/4"}
                      >
                        Login
                      </Button>
                    </Field.Root>
                  </Fieldset.Content>
                </Fieldset.Root>
              </form>
            </Card.Body>
          </Card.Root>
        )}
        {isAuthenticated && (
          <Container h={"70vh"} fluid>
            <Card.Root direction={"row"} w={"full"}>
              <Card.Body asChild>
                <HStack p={0} m={0}>
                  <Tabs.Root
                    variant="line"
                    defaultValue="members"
                    orientation={"vertical"}
                    borderTopLeftRadius={8}
                    borderBottomLeftRadius={8}
                    w={"100%"}
                  >
                    <Tabs.List bg={"blue.800"} borderLeftRadius={8} p={0} m={0}>
                      <Tabs.Trigger value="members">Members</Tabs.Trigger>
                      <Tabs.Trigger borderRadius={0} value="projects">
                        Projects
                      </Tabs.Trigger>
                      <Tabs.Trigger value="tasks">Settings</Tabs.Trigger>
                    </Tabs.List>

                    <Card.Root asChild>
                      <Container fluid p={0}>
                        <Tabs.Content value="members">
                          <Card.Body>
                            Manage your team members and their roles here.
                            <Tabs.Root defaultValue="team">
                              <Tabs.List>
                                <Tabs.Trigger value="developers">
                                  Developers
                                </Tabs.Trigger>
                                <Tabs.Trigger value="team">Team</Tabs.Trigger>
                                <Tabs.Trigger value="boardMembers">
                                  Board Members
                                </Tabs.Trigger>
                              </Tabs.List>
                              <Tabs.Content value="developers">
                                <SimpleGrid>
                                  <Card.Root>
                                    <Avatar.Root alignSelf={"center"}>
                                      User
                                    </Avatar.Root>
                                    <Card.Body>
                                      Manage your developers
                                    </Card.Body>
                                  </Card.Root>
                                </SimpleGrid>
                              </Tabs.Content>
                              <Tabs.Content value="team">
                                Manage your projects
                              </Tabs.Content>
                              <Tabs.Content value="boardMembers">
                                Manage your tasks for freelancers
                              </Tabs.Content>
                            </Tabs.Root>
                          </Card.Body>
                        </Tabs.Content>
                        <Tabs.Content value="projects">
                          <Card.Body>
                            Manage your projects and their status here.
                          </Card.Body>
                        </Tabs.Content>
                        <Tabs.Content value="tasks">
                          <Card.Body>
                            Manage your tasks and their progress here.
                          </Card.Body>
                        </Tabs.Content>
                      </Container>
                    </Card.Root>
                  </Tabs.Root>
                </HStack>
              </Card.Body>
            </Card.Root>
          </Container>
        )}
      </SectionTemplate>
    </PageBuilder>
  );
}
