"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, ExternalLink, Menu, X, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import ShaderBackground from "@/components/ui/shader-background"
import { InfiniteMarquee } from "@/components/infinite-marquee"
import { SpotlightCard } from "@/components/spotlight-card"
import { Timeline } from "@/components/timeline"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const projects = [
    {
      title: "Project Liz",
      description: "A responsive, visually immersive fan website dedicated to Liz from IVE.",
      tech: ["HTML", "CSS", "Responsive Design"],
      image: "/project-liz.png",
      link: "https://projectliz.netlify.app",
      github: "https://github.com/Justinnnn15/Project-Liz",
    },
    {
      title: "PCNEST",
      description: "A PC building utility helping users choose compatible components for their builds.",
      tech: ["JavaScript", "Logic", "Compatibility Algorithms"],
      image: "/pcnest.png",
      link: "https://pcnest.netlify.app",
      github: "https://github.com/Justinnnn15/PCBUILDER",
    },
  ]

  const languagesSkills = ["JavaScript", "Python", "C++", "Java", "HTML", "CSS"]
  const frameworksSkills = ["React", "Next.js", "Node.js", "AWS", "Git", "Google Cloud"]

  const timelineEvents = [
    {
      title: "Computer Engineering Student",
      description: "Currently pursuing a degree at a leading institution in Cebu",
    },
    {
      title: "Full-Stack Development Journey",
      description: "Building expertise across frontend, backend, and cloud technologies",
    },
    {
      title: "Focusing on Cloud & Innovation",
      description: "Exploring AWS and modern development paradigms",
    },
  ]

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("justinian.aldevera@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <ShaderBackground color="#07eae6" backdropBlurAmount="sm" className="w-full h-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-4 md:p-6 lg:p-8 flex justify-between items-center backdrop-blur-sm bg-gray-950/30 border-b border-gray-800/50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-10">
          {["About", "Projects", "Skills", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-400 transition-all duration-300 text-base lg:text-lg font-medium relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-indigo-500/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden relative z-20 bg-gray-900/95 backdrop-blur-lg p-6 border-b border-gray-800/50"
        >
          {["About", "Projects", "Skills", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-4 hover:text-indigo-400 transition-colors text-lg font-medium border-b border-gray-800/30 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Justin Ian Aldevera
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium h-10 md:h-12">
              Engineering Ideas into Reality | Full-Stack Developer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed px-4 max-w-4xl mx-auto"
          >
            Computer Engineering student passionate about crafting innovative digital solutions that merge cutting-edge
            technology with exceptional user experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-full sm:w-auto px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white bg-transparent w-full sm:w-auto px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 md:py-28 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-20 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left Side: Bio and Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  As a dedicated Computer Engineering student based in Cebu City, I'm passionate about developing
                  innovative web applications and interactive systems that solve real-world problems and enhance user
                  experiences.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  My journey in technology is driven by curiosity and a commitment to continuous learning. I thrive on
                  transforming complex ideas into elegant, functional solutions that make a meaningful impact.
                </p>
              </div>
              <Timeline events={timelineEvents} />
            </motion.div>

            {/* Right Side: Profile Picture and Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Profile Picture */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-lg rounded-3xl p-2 border border-gray-700/50">
                  <Image
                    src="/dp.jpg"
                    alt="Justin Ian Aldevera"
                    width={400}
                    height={500}
                    className="w-full rounded-3xl object-cover"
                  />
                </div>
              </div>

              {/* Quick Facts Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Location", value: "Cebu City" },
                  { label: "Passion", value: "Gaming" },
                  { label: "Fuel", value: "Coffee" },
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 text-center"
                  >
                    <p className="text-sm text-gray-400">{fact.label}</p>
                    <p className="text-lg font-semibold text-indigo-300 mt-2">{fact.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 md:py-28 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-20 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <SpotlightCard>
                  <CardContent className="p-6 md:p-8">
                    <div className="h-40 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 md:px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm md:text-base font-medium border border-indigo-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-full sm:w-auto font-semibold"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:text-white hover:border-indigo-400 w-full sm:w-auto font-semibold bg-transparent"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 md:py-28 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-20 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Technical Expertise
          </motion.h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-indigo-400 mb-4">Languages</h3>
              <InfiniteMarquee items={languagesSkills} direction="left" speed={40} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-indigo-400 mb-4">Frameworks & Tools</h3>
              <InfiniteMarquee items={frameworksSkills} direction="right" speed={40} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 md:py-28 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Let's Collaborate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 md:mb-16 leading-relaxed px-4 max-w-4xl mx-auto"
          >
            I'm always excited to connect with fellow developers, potential collaborators, and innovative companies.
            Let's discuss how we can create something extraordinary together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-full sm:w-auto px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              onClick={handleCopyEmail}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Copy Email
                </>
              )}
            </Button>
            <div className="flex gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 hover:border-indigo-400 bg-transparent p-4 transition-all duration-300 hover:shadow-lg"
                onClick={() => window.open("https://github.com/Justinnnn15", "_blank")}
              >
                <Github className="w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 hover:border-indigo-400 bg-transparent p-4 transition-all duration-300 hover:shadow-lg"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 md:py-12 px-4 md:px-6 lg:px-8 border-t border-gray-800/50 backdrop-blur-sm bg-gray-950/30">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-base md:text-lg">
          <p>&copy; 2025 Justin Ian Aldevera. Crafted with passion using Next.js and Framer Motion</p>
        </div>
      </footer>
    </div>
  )
}
