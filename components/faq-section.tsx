"use client"

import { motion } from "framer-motion"
import { FAQAccordion } from "@/components/faq-accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How does ADmyBRAND AI generate ad copy?",
      answer:
        "Our AI uses advanced natural language processing models trained on millions of high-performing ad campaigns. It analyzes your brand voice, target audience, and campaign objectives to generate compelling copy that converts.",
    },
    {
      question: "Can I customize the AI-generated content?",
      answer:
        "All AI-generated content can be edited and customized to match your specific needs. You can also train the AI to better understand your brand voice and preferences over time.",
    },
    {
      question: "Which advertising platforms does ADmyBRAND support?",
      answer:
        "We support all major advertising platforms including Google Ads, Facebook Ads, Instagram, LinkedIn, Twitter, TikTok, and more. You can manage campaigns across multiple platforms from a single dashboard.",
    },
    {
      question: "How quickly can I see results?",
      answer:
        "Most customers see improvements in their campaign performance within the first week. Significant ROI improvements typically occur within 30 days as the AI learns and optimizes your campaigns.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can test the platform and see results before committing to a paid plan.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide comprehensive support including email support for all plans, priority support for Professional plans, and dedicated account managers for Enterprise customers. We also offer extensive documentation and video tutorials.",
    },
  ]

  return (
    <section className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <FAQAccordion faqs={faqs} />
        </motion.div>
      </div>
    </section>
  )
}
