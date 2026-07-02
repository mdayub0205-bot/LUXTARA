
'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import { LUXTARA_CONFIG } from '@/config'

// const projectMeta = [
//   { impact: '5-Layer Diff Pipeline', architecture: 'Claude Vision + Playwright' },
//   { impact: 'Real-time Alerts',      architecture: 'RAG + WhatsApp API'         },
//   { impact: 'Full E-commerce',        architecture: 'React + MongoDB + Cloudinary' },
// ]

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Work() {
  const { projects } = LUXTARA_CONFIG

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Page Header */}
          <motion.section
            className="mb-12 md:mb-24 lg:mb-32"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={heroItem}
              className="font-display-lg text-display-lg-mobile md:text-display-md lg:text-display-lg text-balance mb-4 md:mb-6 max-w-4xl"
            >
              Selected Works &amp; Case Studies
            </motion.h1>
            <motion.p variants={heroItem} className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl">
              A curated archive of strategic interventions and technical deployments.
            </motion.p>
          </motion.section>

          {/* Projects */}
          <div className="space-y-16 md:space-y-0">
            {projects.map((project, i) => (
              <FadeUp key={project.title} delay={0}>
                <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter mb-16 md:mb-24 lg:mb-32">
                  {/* Image / Visual */}
                  <div className={`md:col-span-7 aspect-[16/10] md:aspect-[4/3] bg-surface-container-highest relative group overflow-hidden hairline-border ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-surface-container-lowest/90 px-2 py-1 font-label-sm text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {project.tags?.[0]}
                      </span>
                      {project.tags?.[1] && (
                        <span className="bg-surface-container-lowest/90 px-2 py-1 font-label-sm text-[10px]">
                          {project.tags[1]}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:col-span-5 flex flex-col justify-center pt-2 md:pt-0 ${i % 2 === 1 ? 'md:pr-8 md:order-1' : 'md:pl-8'}`}>
                    <h2 className="font-headline-lg text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-2">
                      {project.title}
                    </h2>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4 md:mb-6">
                      {project.client}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:mb-8 text-balance">
                      {project.description}
                    </p>

                    {/* Meta */}
                    

                    {/* Stack tags - Fixed for mobile */}
                    <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                      {(project.stack || []).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 border border-outline-variant font-label-sm text-[10px] uppercase text-on-surface-variant whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons - Fixed for mobile */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-4 py-3 hover:bg-on-surface-variant transition-colors"
                        >
                          View Project
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                      )}
                      <Link
                        href="/contact"
                        className={`flex-1 inline-flex items-center justify-center gap-2 font-label-sm text-label-sm uppercase border border-outline-variant px-4 py-3 hover:bg-surface-container transition-colors ${!project.url ? 'sm:flex-none sm:self-start' : ''}`}
                      >
                        Discuss This Project
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <div className="hairline-top pt-16 md:pt-24 text-center">
            <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant mb-6 md:mb-8">Have a project in mind?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-sm uppercase px-8 py-4 hover:bg-on-surface-variant transition-premium"
            >
              Start a Conversation
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
