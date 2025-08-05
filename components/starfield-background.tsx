"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      const numStars = Math.floor((canvas.width * canvas.height) / 8000) // Density based on area

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.5 + 0.1,
        })
      }

      starsRef.current = stars
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // Update star position
        star.y += star.speed
        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))

        // Reset star if it goes off screen
        if (star.y > canvas.height) {
          star.y = -star.size
          star.x = Math.random() * canvas.width
        }

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${star.opacity * 0.6})`
        ctx.fill()

        // Add subtle glow
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${star.opacity * 0.1})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createStars()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createStars()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" style={{ background: "transparent" }} />

      {/* Additional CSS-based particles for extra depth */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#8b5cf6]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
