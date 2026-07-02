// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import Link from 'next/link'

// const serviceDetails = [
//   {
//     icon: 'memory',
//     title: 'AI Engineering',
//     desc: 'Custom machine learning models and intelligent systems integration designed for complex enterprise workflows and data-heavy environments.',
//     metrics: [
//       { label: 'Production Deployments', value: '2+' },
//       { label: 'Processing Speed', value: '< 50ms' },
//       { label: 'Uptime', value: '99.9%' },
//     ],
//   },
//   {
//     icon: 'code_blocks',
//     title: 'Bespoke Development',
//     desc: 'Architecting scalable, high-performance web applications and digital platforms using modern tech stacks tailored to precise business logic.',
//     metrics: [
//       { label: 'Code Quality', value: 'Grade A' },
//       { label: 'Deployment', value: 'Automated' },
//       { label: 'Scalability', value: 'Infinite' },
//     ],
//   },
//   {
//     icon: 'architecture',
//     title: 'Digital Strategy',
//     desc: 'Comprehensive technological roadmapping and architectural planning to ensure long-term digital viability and competitive advantage.',
//     metrics: [
//       { label: 'Market Analysis', value: 'Deep' },
//       { label: 'Risk Mitigation', value: 'Proactive' },
//       { label: 'ROI Focus', value: 'Primary' },
//     ],
//   },
// ]

// const process = [
//   {
//     num: '1',
//     title: 'Discovery',
//     desc: 'Aligning objectives, defining technical constraints, and establishing a strategic roadmap tailored to your goals.',
//   },
//   {
//     num: '2',
//     title: 'Design',
//     desc: 'Crafting the visual language, structural wireframes, and architectural blueprints before a line of code is written.',
//   },
//   {
//     num: '3',
//     title: 'Build',
//     desc: 'Engineering the solution with clean code, modern frameworks, and robust AI integrations. Transparent throughout.',
//   },
//   {
//     num: '4',
//     title: 'Launch',
//     desc: 'Rigorous testing, deployment, and ongoing technical support to ensure sustained performance from day one.',
//   },
// ]

// export default function Services() {
//   return (
//     <>
//       <Navbar />

//       <main className="pt-24 pb-32">
//         {/* Hero */}
//         <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 md:pt-32 pb-16">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
//             <div className="md:col-span-8">
//               <h1 className="font-display-lg text-display-lg text-primary mb-6">
//                 Architecting Digital Excellence
//               </h1>
//               <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
//                 We engineer sophisticated digital solutions for ambitious businesses and innovative
//                 ventures. Our approach combines intellectual depth with technical rigor, delivering
//                 bespoke systems that drive measurable impact.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Services Grid */}
//         <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 border-t border-outline-variant/50">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
//             {serviceDetails.map((svc, i) => (
//               <article
//                 key={svc.title}
//                 className={`col-span-1 border border-outline-variant p-8 relative overflow-hidden group transition-colors duration-300 ${
//                   i !== 1
//                     ? 'bg-inverse-on-surface hover:bg-surface-container-lowest'
//                     : 'bg-surface-container-lowest'
//                 }`}
//               >
//                 {i !== 1 && (
//                   <div className="absolute top-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
//                 )}

//                 <div className="flex justify-between items-start mb-12">
//                   <span className="material-symbols-outlined text-primary text-4xl">{svc.icon}</span>
//                   {i === 0 && (
//                     <div className="flex items-center gap-2 px-3 py-1 border border-outline-variant rounded-full bg-surface-container-lowest">
//                       <div className="w-2 h-2 rounded-full bg-secondary" />
//                       <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
//                         Active
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">{svc.title}</h2>
//                 <p className="font-body-md text-body-md text-on-surface-variant mb-8 min-h-[6rem]">
//                   {svc.desc}
//                 </p>

//                 <div className="space-y-4 pt-6 border-t border-outline-variant/30">
//                   {svc.metrics.map((m) => (
//                     <div key={m.label} className="flex justify-between items-center">
//                       <span className="font-label-md text-label-md text-on-surface-variant">
//                         {m.label}
//                       </span>
//                       <span className="font-body-md text-body-md font-semibold text-primary">
//                         {m.value}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* Process — Horizontal Timeline */}
//         <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 border-t border-outline-variant/50">
//           {/* Header */}
//           <div className="mb-16">
//             <h2 className="font-display-md text-headline-lg text-primary mb-3">The Process</h2>
//             <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
//               A rigorous, transparent methodology designed to deliver exceptional results with{' '}
//               <span className="text-secondary">precision.</span>
//             </p>
//           </div>

//           {/* Numbers + connecting lines */}
//           <div className="flex items-center mb-12">
//             {process.map((step, i) => (
//               <div key={step.num} className="flex items-center flex-1">
//                 {/* Circle badge with number */}
//                 <div
//                   className="flex-shrink-0 w-10 h-10 rounded-full border border-secondary-fixed-dim bg-surface-container-low flex items-center justify-center"
//                 >
//                   <span
//                     className="text-secondary"
//                     style={{
//                       fontFamily: "'EB Garamond', serif",
//                       fontSize: '20px',
//                       lineHeight: '1',
//                       fontWeight: '400',
//                     }}
//                   >
//                     {step.num}
//                   </span>
//                 </div>
//                 {/* Connector line */}
//                 {i < process.length  && (
//                   <div className="flex-1 h-px bg-outline-variant mx-4" />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Titles + descriptions */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
//             {process.map((step) => (
//               <div key={step.title}>
//                 <h3 className="font-label-sm text-label-sm font-semibold text-primary mb-3 uppercase tracking-widest">
//                   {step.title}
//                 </h3>
//                 <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Ready to Build Something — Light bordered CTA */}
//         <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-8">
//           <div className="border border-outline-variant flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-12 py-16">
//             <h2
//               className="text-primary"
//               style={{
//                 fontFamily: "'EB Garamond', serif",
//                 fontSize: 'clamp(32px, 4vw, 56px)',
//                 fontWeight: '400',
//                 lineHeight: '1.15',
//                 letterSpacing: '-0.01em',
//               }}
//             >
//               Ready to Build Something?
//             </h2>
//             <Link
//               href="/contact"
//               className="flex-shrink-0 inline-flex items-center gap-3 border border-[#6e5a14] text-[#6e5a14] font-label-sm text-label-sm uppercase px-8 py-4 hover:bg-[#6e5a14]/10 hover:text-[#6e5a14] transition-all duration-300 group"
//             >
//               Start a Project
//               <span className="material-symbols-outlined text-base transform group-hover:translate-x-1 transition-transform duration-300">
//                 arrow_forward
//               </span>
//             </Link>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const serviceDetails = [
  {
    icon: 'memory',
    title: 'AI Engineering',
    desc: 'Custom machine learning models and intelligent systems integration designed for complex enterprise workflows and data-heavy environments.',
    metrics: [
      { label: 'Production Deployments', value: '2+' },
      { label: 'Processing Speed', value: '< 50ms' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    icon: 'code_blocks',
    title: 'Bespoke Development',
    desc: 'Architecting scalable, high-performance web applications and digital platforms using modern tech stacks tailored to precise business logic.',
    metrics: [
      { label: 'Code Quality', value: 'Grade A' },
      { label: 'Deployment', value: 'Automated' },
      { label: 'Scalability', value: 'Infinite' },
    ],
  },
  {
    icon: 'architecture',
    title: 'Digital Strategy',
    desc: 'Comprehensive technological roadmapping and architectural planning to ensure long-term digital viability and competitive advantage.',
    metrics: [
      { label: 'Market Analysis', value: 'Deep' },
      { label: 'Risk Mitigation', value: 'Proactive' },
      { label: 'ROI Focus', value: 'Primary' },
    ],
  },
]

const process = [
  {
    num: '1',
    title: 'Discovery',
    desc: 'Aligning objectives, defining technical constraints, and establishing a strategic roadmap tailored to your goals.',
  },
  {
    num: '2',
    title: 'Design',
    desc: 'Crafting the visual language, structural wireframes, and architectural blueprints before a line of code is written.',
  },
  {
    num: '3',
    title: 'Build',
    desc: 'Engineering the solution with clean code, modern frameworks, and robust AI integrations. Transparent throughout.',
  },
  {
    num: '4',
    title: 'Launch',
    desc: 'Rigorous testing, deployment, and ongoing technical support to ensure sustained performance from day one.',
  },
]

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-32">
        {/* Hero */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-10 md:pt-32 pb-10 md:pb-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="md:col-span-8">
              <motion.h1
                variants={heroItem}
                className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6"
              >
                Architecting Digital Excellence
              </motion.h1>
              <motion.p variants={heroItem} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                We engineer sophisticated digital solutions for ambitious businesses and innovative
                ventures. Our approach combines intellectual depth with technical rigor, delivering
                bespoke systems that drive measurable impact.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 border-t border-outline-variant/50">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {serviceDetails.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.12}>
                <article
                  className={`col-span-1 border border-outline-variant p-6 md:p-8 relative overflow-hidden group transition-colors duration-300 ${
                    i !== 1
                      ? 'bg-inverse-on-surface hover:bg-surface-container-lowest'
                      : 'bg-surface-container-lowest'
                  }`}
                >
                  {i !== 1 && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  )}

                  <div className="flex justify-between items-start mb-12">
                    <span className="material-symbols-outlined text-primary text-4xl">{svc.icon}</span>
                    {i === 0 && (
                      <div className="flex items-center gap-2 px-3 py-1 border border-outline-variant rounded-full bg-surface-container-lowest">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                          Active
                        </span>
                      </div>
                    )}
                  </div>

                  <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">{svc.title}</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                    {svc.desc}
                  </p>

                  <div className="space-y-4 pt-6 border-t border-outline-variant/30">
                    {svc.metrics.map((m) => (
                      <div key={m.label} className="flex justify-between items-center">
                        <span className="font-label-md text-label-md text-on-surface-variant">
                          {m.label}
                        </span>
                        <span className="font-body-md text-body-md font-semibold text-primary">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 border-t border-outline-variant/50">
          <div className="mb-16">
            <h2 className="font-display-md text-headline-lg text-primary mb-3">The Process</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
              A rigorous, transparent methodology designed to deliver exceptional results with{' '}
              <span className="text-secondary">precision.</span>
            </p>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="block md:hidden space-y-0">
            {process.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.15}>
                <div className="relative flex items-start gap-4 pb-8">
                  {i < process.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-outline-variant" />
                  )}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-secondary-fixed-dim bg-surface-container-low flex items-center justify-center z-10">
                    <span style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px', color: '#775a19' }}>
                      {step.num}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-label-sm text-label-sm font-semibold text-primary mb-2 uppercase tracking-widest">
                      {step.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="flex items-center mb-12">
              {process.map((step, i) => (
                <div key={step.num} className="flex items-center flex-1">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-secondary-fixed-dim bg-surface-container-low flex items-center justify-center">
                    <span
                      className="text-secondary"
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        fontSize: '20px',
                        lineHeight: '1',
                        fontWeight: '400',
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  {i < process.length && (
                    <div className="flex-1 h-px bg-outline-variant mx-4" />
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              {process.map((step) => (
                <div key={step.title}>
                  <h3 className="font-label-sm text-label-sm font-semibold text-primary mb-3 uppercase tracking-widest">
                    {step.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <FadeUp>
          <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-8">
            <div className="border border-outline-variant flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-6 py-10 md:px-12 md:py-16">
              <h2
                className="text-primary"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: '400',
                  lineHeight: '1.15',
                  letterSpacing: '-0.01em',
                }}
              >
                Ready to Build Something?
              </h2>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-3 border border-[#6e5a14] text-[#6e5a14] font-label-sm text-label-sm uppercase px-8 py-4 hover:bg-[#6e5a14]/10 hover:text-[#6e5a14] transition-all duration-300 group"
              >
                Start a Project
                <span className="material-symbols-outlined text-base transform group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </Link>
            </div>
          </section>
        </FadeUp>
      </main>

      <Footer />
    </>
  )
}