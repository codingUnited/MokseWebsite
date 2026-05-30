"use client";

import { Container, Card } from "@chakra-ui/react";
import {
  BodyTemplate,
  HeaderTemplate,
  PageBuilder,
} from "@/components/page-builder/template";
import Navigators from "./Navigators";


export default function SearchResources() {
  return (
    <PageBuilder>
      <HeaderTemplate
        title={"Resources"}
        imageHeight={{ base: "22vh", md: "28vh" }}
        titleAlignment={2}
        titleLocation={100}
      />
      <BodyTemplate>
        <Container fluid px={{ base: 0, md: 2 }} maxW={"100%"}>
          <Card.Root w={"100%"} overflowX={"auto"}>
            <Navigators />
          </Card.Root>
        </Container>
      </BodyTemplate>
    </PageBuilder>
  );
}
