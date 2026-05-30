"use client";

import {
  Accordion,
  Card,
  Span,
} from "@chakra-ui/react";
import { Icon } from "../ui/icons/icon";
import { faqItems } from "@/data/services";

export default function FaqItem() {
  return (
    <Card.Root w="100%" maxW="4xl" variant="outline">
      <Card.Body>
        <Accordion.Root collapsible >
          {faqItems.map((item) => {
            const { index, question, answer } = item;
            return (
              <Accordion.Item key={index} value={index}>
                <Accordion.ItemTrigger py={4}>
                  <Span flex="1" textAlign="left" fontWeight="medium" textStyle="lg">
                    {question}
                  </Span>
                  {/* The parent trigger automatically handles standard open/close states, 
                      but if you are using a custom icon, it stays here */}
                  <Icon name="Plus" size={4} />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent pb={4}>
                  <Accordion.ItemBody color="fg.muted" lineHeight="tall">{answer}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </Card.Body>
    </Card.Root>
  );
}