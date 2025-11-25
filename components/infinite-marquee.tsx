"use client"

import { motion } from "framer-motion"

interface InfiniteMarqueeProps {
  items: string[]
  direction?: "left" | "right"
  speed?: number
}

export function InfiniteMarquee({ items, direction = "left", speed = 30 }: InfiniteMarqueeProps) {
  const duplicatedItems = [...items, ...items, ...items, ...items]
  const pixels = items.length * 140

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-6"
        animate={{ x: direction === "left" ? -pixels * 2 : pixels * 2 }}
        transition={{ duration: speed, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="min-w-max px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-full whitespace-nowrap font-medium text-indigo-300 hover:border-indigo-500/60 hover:from-indigo-600/40 hover:to-purple-600/40 transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
