"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { User, Bot } from "lucide-react"

interface Message {
  id: number
  type: "user" | "ai"
  content: string
  isTyping?: boolean
}

export function TypingChatBlock() {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { type: "user" as const, content: "Write ad copy for wireless headphones" },
    {
      type: "ai" as const,
      content:
        "Hear the future — 360° sound redefined. 🔊\n\nExperience crystal-clear audio with our premium wireless headphones. Advanced noise cancellation meets all-day comfort.",
    },
    { type: "user" as const, content: "Make it more emotional and urgent" },
    {
      type: "ai" as const,
      content:
        "Don't let another moment pass in silence. 🎵\n\nTransform your world with sound so pure, so immersive, you'll forget you're wearing headphones. Limited time: Feel the music, not the noise.",
    },
    { type: "user" as const, content: "Perfect! Generate 3 more variations" },
    {
      type: "ai" as const,
      content:
        '✨ Here are 3 powerful variations:\n\n1. "Escape the ordinary. Embrace extraordinary sound."\n2. "Your soundtrack to success starts here."\n3. "Wireless freedom. Limitless possibilities."',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < conversation.length) {
        const newMessage = {
          id: currentStep,
          type: conversation[currentStep].type,
          content: conversation[currentStep].content,
          isTyping: conversation[currentStep].type === "ai",
        }

        setMessages((prev) => [...prev, newMessage])

        // Remove typing indicator after a delay for AI messages
        if (newMessage.type === "ai") {
          setTimeout(() => {
            setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, isTyping: false } : msg)))
          }, 2000)
        }

        setCurrentStep((prev) => prev + 1)
      } else {
        // Reset conversation
        setTimeout(() => {
          setMessages([])
          setCurrentStep(0)
        }, 3000)
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [currentStep])

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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">AI in Action</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Watch our AI create compelling ad copy in real-time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-black/40 backdrop-blur-xl border border-[#8b5cf6]/30 p-8 shadow-2xl shadow-purple-500/20">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-[#9ca3af] text-sm ml-4">ADmyBRAND AI Terminal</span>
            </div>

            <div className="space-y-6 min-h-[400px]">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`flex gap-4 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "ai" && (
                      <div className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}

                    <div className={`max-w-[80%] ${message.type === "user" ? "order-1" : ""}`}>
                      <div
                        className={`p-4 rounded-2xl ${
                          message.type === "user" ? "bg-white/10 text-white ml-auto" : "bg-[#8b5cf6]/20 text-white"
                        }`}
                      >
                        {message.isTyping ? (
                          <div className="flex items-center gap-2">
                            <span>Generating</span>
                            <motion.div
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                              className="flex gap-1"
                            >
                              <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                              <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                              <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                            </motion.div>
                          </div>
                        ) : (
                          <p className="whitespace-pre-line">{message.content}</p>
                        )}
                      </div>
                    </div>

                    {message.type === "user" && (
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
