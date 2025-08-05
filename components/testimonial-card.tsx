"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }} className="h-full">
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 h-full hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
        <Quote className="w-8 h-8 text-[#8b5cf6] mb-6" />

        <blockquote className="text-[#9ca3af] text-lg leading-relaxed mb-6">"{quote}"</blockquote>

        <div className="border-t border-white/10 pt-6">
          <div className="font-semibold text-white text-lg">{author}</div>
          <div className="text-[#8b5cf6] font-medium">{role}</div>
          <div className="text-[#6b7280] text-sm">{company}</div>
        </div>
      </Card>
    </motion.div>
  )
}
