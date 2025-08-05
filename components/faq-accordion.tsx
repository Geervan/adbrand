"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-2 hover:bg-white/10 transition-all duration-300"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[#8b5cf6] transition-colors py-6">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-[#9ca3af] text-base leading-relaxed pb-6">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
