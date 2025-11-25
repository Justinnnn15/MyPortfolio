"use client"

import { motion } from "framer-motion"

interface TimelineEvent {
  title: string
  description?: string
  icon?: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4"
        >
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2" />
            {index < events.length - 1 && (
              <div className="w-0.5 h-20 bg-gradient-to-b from-indigo-500/50 to-transparent mt-2" />
            )}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-indigo-400">{event.title}</h4>
            {event.description && <p className="text-gray-400 text-sm mt-1">{event.description}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
