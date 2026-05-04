"use client";

// import { useState } from "react"; 
import {
  Accordion,
  // Button, 
  Card,
  // Container, 
  Span,
  Text,
} from "@chakra-ui/react";
import { Icon } from "../ui/icons/icon";
import { faqItems } from "@/data/services";
import { SectionTemplate } from "../page-builder/template";
// interface FaqItemProps {
//   index: string;
//   question: string;
//   answer: string;
// }

export default function FaqItem() {
  // const [isOpen, setIsOpen] = useState(false); 

  return (
    <SectionTemplate
      title="Frequently Asked Questions"
      description="Find Out How MoKse Supports Change"
    >
      <Card.Root minW={"100%"}>
        <Card.Header>
          <Text textStyle={"3xl"}>Frequently Asked Questions</Text>
        </Card.Header>
        <Card.Body>
          <Card.Root>
            <Card.Body>
              <Accordion.Root collapsible defaultValue={["0"]}>
                {faqItems.map((item) => {
                  const { index, question, answer } = item;
                  return (
                    <Accordion.Item key={index} value={item.index}>
                      <Accordion.ItemTrigger>
                        <Span flex="1">{question}</Span>
                        <Icon name="Plus" size={4} />
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent>
                        <Accordion.ItemBody>{answer}</Accordion.ItemBody>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  );
                })}
              </Accordion.Root>
            </Card.Body>
          </Card.Root>
        </Card.Body>
      </Card.Root>
    </SectionTemplate>
  );
}
