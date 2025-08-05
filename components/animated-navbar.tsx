"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Features", "Pricing", "Resources", "About"]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <motion.div
        className={`transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-[#0a0f1a]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-lg shadow-black/20"
            : "bg-[#0a0f1a]/40 backdrop-blur-md border border-white/5 rounded-full px-8 py-4"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center justify-between max-w-4xl">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`font-bold text-white transition-all duration-300 ${isScrolled ? "text-lg" : "text-xl"}`}
          >
            ADmyBRAND AI
          </motion.div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center transition-all duration-300 ${
              isScrolled ? "space-x-6 ml-8" : "space-x-8 ml-12"
            }`}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  color: "#ffffff",
                }}
                className="text-[#9ca3af] hover:text-white transition-all duration-200 text-sm font-medium relative group"
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-4"
            >
              <Button
                className={`bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] hover:from-[#7c3aed] hover:to-[#0891b2] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 ${
                  isScrolled ? "px-4 py-2 text-sm rounded-full" : "px-6 py-2.5 text-sm rounded-full"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden ml-8">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0a0f1a]/95 backdrop-blur-xl border-l border-white/10 w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="text-xl font-bold text-white mb-4">ADmyBRAND AI</div>
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-[#9ca3af] hover:text-white transition-colors text-lg font-medium py-2 px-4 rounded-lg hover:bg-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <Button className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] hover:from-[#7c3aed] hover:to-[#0891b2] text-white w-full mt-6 rounded-full py-3">
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
