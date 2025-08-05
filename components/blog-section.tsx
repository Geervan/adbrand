"use client"

import { motion } from "framer-motion"
import { BlogCard } from "@/components/blog-card"

export function BlogSection() {
  const blogPosts = [
    {
      title: "How AI Can Automate Your Campaigns",
      description:
        "Discover the power of AI automation in modern marketing campaigns and how it can transform your advertising strategy.",
      readTime: "5 min read",
      category: "Automation",
    },
    {
      title: "10x Your CTR with Smart Ad Copy",
      description:
        "Learn proven techniques and AI-powered strategies to dramatically improve your click-through rates and campaign performance.",
      readTime: "7 min read",
      category: "Optimization",
    },
    {
      title: "Getting Started with ADmyBRAND AI",
      description:
        "A comprehensive guide to setting up your first AI-powered marketing campaign and maximizing your results from day one.",
      readTime: "10 min read",
      category: "Getting Started",
    },
  ]

  return (
    <section id="resources" className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Resources & Guides</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Learn how to maximize your marketing potential with our expert guides and resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
