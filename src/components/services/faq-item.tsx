'use client';

import { useState } from 'react';
import PlusIcon from './icons/plus-icon';
import MinusIcon from './icons/minus-icon';
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
