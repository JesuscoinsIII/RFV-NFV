"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is RFV?",
    answer: "RFV (Regenerative Finance Vehicle) is a token that powers our sustainable vehicle-sharing and eco-tourism platform.",
  },
  {
    question: "How does staking work?",
    answer: "Staking RFV tokens allows you to earn rewards while supporting the platform's growth and sustainability initiatives.",
  },
  {
    question: "What are the benefits of holding RFV?",
    answer: "RFV holders can access vehicle rentals, participate in governance, and earn rewards through staking.",
  },
];

export function LearnFaq() {
  return (
    <section className="py-12">
      <div className="container max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}