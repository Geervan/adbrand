"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { TestimonialCard } from "@/components/testimonial-card"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "ADmyBRAND AI transformed our marketing completely. We saw a 300% increase in conversion rates within the first month. The AI-generated copy performs better than anything our team created manually.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
    },
    {
      quote:
        "The automation capabilities are incredible. What used to take our team 20 hours per week now takes 2 hours. The ROI improvement has been phenomenal - we're seeing 4x returns on our ad spend.",
      author: "Marcus Rodriguez",
      role: "Growth Manager",
      company: "ScaleUp Ventures",
    },
    {
      quote:
        "I was skeptical about AI-generated content, but ADmyBRAND proved me wrong. The copy feels human, converts well, and maintains our brand voice perfectly. It's like having a world-class copywriter on demand.",
      author: "Emily Watson",
      role: "CMO",
      company: "BrandForward",
    },
    {
      quote:
        "The multi-platform management feature is a game-changer. We can now run coordinated campaigns across Google, Facebook, and LinkedIn from one dashboard. Our efficiency has increased dramatically.",
      author: "David Kim",
      role: "Digital Marketing Lead",
      company: "GlobalReach Media",
    },
    {
      quote:
        "ADmyBRAND's AI doesn't just generate copy - it understands our audience. The targeting suggestions and optimization recommendations have helped us reach customers we never knew existed.",
      author: "Lisa Thompson",
      role: "Performance Marketing Manager",
      company: "E-commerce Plus",
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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Trusted by Marketers</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            See what marketing professionals are saying about ADmyBRAND AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
