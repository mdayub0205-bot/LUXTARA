
'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'
import { LUXTARA_CONFIG } from '@/config'

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  const { company, founder, contact } = LUXTARA_CONFIG

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Hero */}
        <motion.section
          className="mb-16 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter items-end"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroItem}
            className="col-span-1 md:col-span-8 font-display-lg text-display-lg-mobile md:text-display-md lg:text-display-lg text-primary mb-6 md:mb-0"
          >
            Architectural Integrity.<br />
            Craftsmanship over Computation.
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="col-span-1 md:col-span-4 font-body-lg text-body-lg text-on-surface-variant"
          >
            We approach digital interface design with the rigor of architecture. Every interaction, every pixel, is placed with absolute intent.
          </motion.p>
        </motion.section>

        <div className="w-full hairline-border-b mb-12 md:mb-24" />

{/* Origin */}
        <FadeUp>
          <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16 md:mb-32" p-20>
            {/* Left: Quote + Established badge */}
            <div className="md:col-span-4 flex flex-col justify-between md:hairline-border-r md:pr-gutter mb-12 md:mb-0 pb-12 md:pb-0 border-b border-outline-variant/30 md:border-b-0">
              <div>
                <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-4">
                  Origins
                </h2>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-8">
                  Madurai to Global.
                </h3>
                <blockquote className="border-l-2 border-secondary pl-5 ">
                  <p className="font-display-lg text-headline-md md:text-headline-lg text-primary italic leading-snug">
                    "We don't just build websites. We build digital experiences."
                  </p>
                </blockquote>
              </div>
              <div className="mt-12 md:mt-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded hairline-border font-label-sm text-label-sm text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Established {company.founded}
                </span>
              </div>
            </div>

            {/* Center: minimal paragraph + Right: image */}
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="flex flex-col justify-center gap-6">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  {company.name} is a digital technology studio focused on crafting premium websites, custom web applications, AI solutions, and innovative digital products. Every project is built with thoughtful design, modern engineering, and a performance first approach delivering digital experiences that are elegant, scalable, and designed to help businesses thrive.
                </p>
             
              </div>

              <div className="relative h-[300px] md:h-auto w-full bg-surface-container hairline-border overflow-hidden group">
                <img
                  className="absolute inset-0 bg-cover bg-center w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?w=700&h=800&q=80&auto=format&fit=crop"
                  alt="Coding on screen displaying a website"
                />
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Founder */}
        <FadeUp>
          <section className="mb-16 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4">
              <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-4">Founder</h2>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-2">{founder.name}</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">{founder.title}</p>
              <div className="flex gap-4 flex-wrap">
                {/* <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-outline-variant px-4 py-2 font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">code</span>
                  GitHub
                </a> */}
                <a
                  href="https://www.linkedin.com/in/mdayub23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-outline-variant px-4 py-2 font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">person</span>
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{founder.bio}</p>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded hairline-border font-label-sm text-label-sm text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {founder.community}
                </span>
              </div>
            </div>
          </section>
        </FadeUp>

        <div className="w-full hairline-border-b mb-12 md:mb-24" />

        {/* Core Tenets Bento Grid */}
        <section className="mb-16 md:mb-32">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary">Core Tenets</h2>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              03 Principles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant/30 hairline-border p-px">
            {/* Tenet 1 */}
            <FadeUp delay={0} className="md:col-span-8">
              <div className="bg-surface card-mobile-pad flex flex-col justify-between min-h-[280px] md:min-h-[300px]">
                <div className="flex justify-between items-start mb-8">
                  <span className="material-symbols-outlined text-4xl text-primary">architecture</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">01</span>
                </div>
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Structural Rigor</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                    We build upon robust, unyielding foundations. Every interface is mapped with precision, ensuring scalability and enduring performance for every client engagement.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Tenet 2 */}
            <FadeUp delay={0.1} className="md:col-span-4">
              <div className="bg-surface-container-low card-mobile-pad flex flex-col justify-between min-h-[280px] md:min-h-[300px]">
                <div className="flex justify-between items-start mb-8">
                  <span className="material-symbols-outlined text-4xl text-primary">tune</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">02</span>
                </div>
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Quiet Aesthetics</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Restraint is our primary tool. We use negative space and subtle tonal shifts to guide focus, creating interfaces that feel authoritative yet effortless.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Tenet 3 */}
            <FadeUp delay={0.2} className="md:col-span-12">
              <div className="bg-surface card-mobile-pad flex flex-col md:flex-row justify-between items-start md:items-end min-h-[220px] md:min-h-[250px] relative overflow-hidden">
                <div className="z-10 max-w-2xl">
                  <div className="flex justify-between items-start mb-8 md:hidden">
                    <span className="material-symbols-outlined text-4xl text-primary">diamond</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">03</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Uncompromising Polish</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    We believe quality is felt. From the micro-interactions to the typography hierarchy, our execution is exhaustive, ensuring a premium experience at every touchpoint.
                  </p>
                </div>
                <div className="z-10 hidden md:block">
                  <span className="font-label-sm text-label-sm text-on-surface-variant mr-4">03</span>
                  <span className="material-symbols-outlined text-4xl text-primary align-middle">diamond</span>
                </div>
                <div
                  className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle at 100% 50%, #000000 0%, transparent 70%)' }}
                />
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}