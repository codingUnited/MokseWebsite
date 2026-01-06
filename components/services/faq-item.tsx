'use client';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '../ui/icons';
import { Button } from '@chakra-ui/react';

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
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </Button>
      {isOpen && <p>{answer}</p>}
    </article>
  );
}
