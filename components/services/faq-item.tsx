"use client";

import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Icon } from "../ui/icons/icon";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <h5>{question}</h5>
        {isOpen ? <Icon name="Minus" /> : <Icon name="Plus" />}
      </Button>
      {isOpen && <p>{answer}</p>}
    </article>
  );
}
