"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight, Clock } from "lucide-react"

interface BlogCardProps {
  title: string
  description: string
  readTime: string
  category: string
}

export function BlogCard({ title, description, readTime, category }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full cursor-pointer group"
    >
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 h-full hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-[#8b5cf6]/30">
        <div className="mb-4">
          <span className="inline-block bg-[#8b5cf6]/20 text-[#8b5cf6] px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#8b5cf6] transition-colors">{title}</h3>

        <p className="text-[#9ca3af] leading-relaxed mb-6 flex-grow">{description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-[#6b7280] text-sm">
            <Clock className="w-4 h-4" />
            {readTime}
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 text-[#8b5cf6] font-semibold group-hover:text-white transition-colors"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}
