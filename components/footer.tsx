"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Integrations"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Compliance"],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="bg-[#0a0f1a] border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left side - Brand and Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">ADmyBRAND AI</h3>
              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-md">
                Revolutionizing marketing with AI-powered automation. Create, optimize, and scale your campaigns like
                never before.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Stay Updated</h4>
              <div className="flex gap-3">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-[#6b7280] focus:border-[#8b5cf6]"
                />
                <Button className="bg-[#8b5cf6] hover:bg-[#8b5cf6]/80 px-6">Subscribe</Button>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-[#8b5cf6]/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side - Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[#9ca3af] hover:text-white transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[#6b7280] text-sm">© 2025 ADmyBRAND AI. All rights reserved.</p>
          <p className="text-[#6b7280] text-sm">Built with ❤️ for Marketers Worldwide</p>
        </motion.div>
      </div>
    </footer>
  )
}
