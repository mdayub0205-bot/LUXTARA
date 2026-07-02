// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import Link from 'next/link'
// import { LUXTARA_CONFIG } from '@/config'

// export default function Home() {
//   const { company, stats, projects, services } = LUXTARA_CONFIG

//   const capabilities = [
//     {
//       icon: 'hub',
//       title: 'AI Engineering',
//       desc: 'Custom LLM pipelines, RAG systems, and intelligent automation — built for real production workflows, not demos.',
//       tag: 'Production Ready',
//     },
//     {
//       icon: 'code_blocks',
//       title: 'Web Development',
//       desc: 'High-performance web apps, e-commerce, SaaS dashboards, and CRMs — architected to scale and built to last.',
//       tag: 'Full Stack',
//     },
//     {
//       icon: 'architecture',
//       title: 'Digital Strategy',
//       desc: 'Shopify stores, WhatsApp automation, GST systems, and SMB digital infrastructure — solutions that actually work.',
//       tag: 'End-to-End',
//     },
//   ]

//   return (
//     <>
//       <Navbar />

//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-hairline overflow-hidden">
//           {/* Background image overlay */}
//           <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
//             <img
//               alt="Luxtara Studio"
//               className="w-full h-full object-cover grayscale object-top"
//               src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
//           </div>

//           <div className="relative z-10 max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter mt-16">
//             {/* Left: Heading + CTA */}
//             <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
//               <div className="inline-flex items-center space-x-2 mb-8 border border-hairline px-3 py-1 bg-surface/50 backdrop-blur w-fit">
//                 <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
//                 <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
//                   {company.location}
//                 </span>
//               </div>

//               <h1 className="font-display-lg text-display-md md:text-display-lg text-primary mb-8 max-w-3xl leading-tight">
//                 Architecting the Future of Digital Intelligence.
//               </h1>

//               <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
//                 {company.name} is a boutique {company.services} studio. We deploy bespoke digital solutions designed with mathematical precision — transforming complex problems into commanding competitive advantages.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-6">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center justify-center bg-primary text-on-primary font-label-sm uppercase px-8 py-4 hover:bg-on-surface-variant transition-premium"
//                 >
//                   Start a Project
//                 </Link>
//                 <Link
//                   href="/work"
//                   className="inline-flex items-center justify-center border border-hairline text-primary font-label-sm uppercase px-8 py-4 hover:bg-surface-container transition-premium"
//                 >
//                   View Our Work
//                 </Link>
//               </div>
//             </div>

//             {/* Right: Stats Panel */}
//             <div className="col-span-1 md:col-span-4 mt-16 md:mt-0 flex flex-col justify-end">
//               <div className="pt-8 pb-10 pl-8 space-y-12">
//                 {stats.map((stat, i) => (
//                   <div key={stat.label}>
//                     <p className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-widest">
//                       {stat.label}
//                     </p>
//                     <p className="font-display-md text-headline-lg text-primary">
//                       {stat.value}
//                     </p>
//                     <div className="w-full h-[2px] bg-surface-container mt-4 relative">
//                       <div
//                         className="absolute left-0 top-0 h-full bg-secondary"
//                         style={{ width: i === 0 ? '100%' : i === 1 ? '80%' : i === 2 ? '60%' : '100%' }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Capabilities Matrix */}
//         <section className="py-24 border-b border-hairline bg-surface-container-low">
//           <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
//             <div className="p-7 flex flex-col md:flex-row justify-between items-end mb-16 border-b border-hairline pb-8">
//               <div className="max-w-2xl">
//                 <h2 className="font-display-md text-headline-lg text-primary mb-4">Capabilities</h2>
//                 <p className="font-body-md text-body-md text-on-surface-variant">
//                   Deploying state-of-the-art architectures tailored to specific mandates.
//                 </p>
//               </div>
//               <Link
//                 href="/services"
//                 className="hidden md:inline-flex items-center text-primary font-label-sm uppercase hover:text-secondary transition-colors group mt-8 md:mt-0"
//               >
//                 All Services{' '}
//                 <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform text-base">
//                   arrow_forward
//                 </span>
//               </Link>
//             </div>

//             {/* Bento Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/30 border border-hairline">
//               {capabilities.map((cap) => (
//                 <div
//                   key={cap.title}
//                   className="bg-surface p-12 hover-card transition-premium flex flex-col justify-between min-h-[320px]"
//                 >
//                   <div>
//                     <span className="material-symbols-outlined text-secondary text-3xl mb-6 block">
//                       {cap.icon}
//                     </span>
//                     <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-4">
//                       {cap.title}
//                     </h3>
//                     <p className="font-body-md text-body-md text-on-surface-variant">{cap.desc}</p>
//                   </div>
//                   <div className="mt-8">
//                     <span className="inline-block px-2 py-1 border border-hairline font-label-sm text-[10px] uppercase text-on-surface-variant">
//                       {cap.tag}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//        {/* Selected Work — High Contrast Dark Section */}
// <section className="py-24 bg-primary text-on-primary">
//   <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
//     <div className="mb-16">
//       <h2 className="font-display-md text-headline-lg mb-4 text-on-primary">Selected Work</h2>
//       <div className="w-24 h-px bg-secondary" />
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
//       {projects.slice(0, 2).map((project, i) => (
//         <div key={project.title} className={`group cursor-pointer ${i === 1 ? 'md:mt-24' : ''}`}>
//           <div className="relative overflow-hidden aspect-[4/3] mb-6 border border-on-surface-variant/30 bg-primary-container group">
//             {/* Project Image */}
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             {/* Overlay on hover */}
//             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur px-3 py-1 border border-on-surface-variant/50">
//               <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-primary">
//                 {project.tags[0]}
//               </span>
//             </div>
//           </div>
//           <h3 className="font-display-md text-headline-lg-mobile md:text-headline-lg mb-2 text-on-primary">
//             {project.title}
//           </h3>
//           <p className="font-label-md text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
//             {project.client}
//           </p>
//           <p className="font-body-md text-body-md text-on-primary/80">{project.description}</p>
//         </div>
//       ))}
//     </div>

//     <div className="mt-24 text-center">
//       <Link
//         href="/work"
//         className="inline-flex items-center justify-center border border-on-surface-variant text-on-primary font-label-sm uppercase px-8 py-4 hover:bg-on-primary hover:text-primary transition-premium"
//       >
//         View Full Archive
//       </Link>
//     </div>
//   </div>
// </section>

//         {/* Manifesto */}
// <section className="py-32 border-b border-hairline bg-surface relative overflow-hidden">
//   <div
//     className="absolute inset-0 opacity-[0.03] pointer-events-none"
//     style={{
//       backgroundImage: 'radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)',
//       backgroundSize: '32px 32px',
//     }}
//   />
//   <div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10">
//     <span className="material-symbols-outlined text-secondary text-4xl mb-8 block">architecture</span>
//     <h2 className="font-display-md text-headline-lg md:text-display-md text-primary mb-8 leading-tight">
//       We do not build software.<br />We construct digital experiences.
//     </h2>
//     <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-12 max-w-3xl mx-auto">
//       In an era of generic solutions, {company.name} operates on the principle of bespoke engineering. Our methodology is rooted in absolute transparency, technical rigor, and uncompromising quality. We partner with businesses who demand architectures that perform silently, scale flawlessly, and drive real results.
//     </p>
//     <div className="inline-block border border-hairline bg-surface-container-lowest px-12 py-8 mb-12">
//       <p className="font-label-md text-label-md uppercase tracking-widest text-primary mb-2">The Standard</p>
//       <p className="font-display-md text-headline-lg text-secondary">Zero Compromise.</p>
//     </div>
    
//     <div>
//       <Link
//         href="/contact"
//         className="inline-flex items-center justify-center bg-primary text-on-primary font-label-sm uppercase px-8 py-4 hover:bg-on-surface-variant transition-premium"
//       >
//         Book a Consultation
//       </Link>
//     </div>
//   </div>
// </section>
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
import { LUXTARA_CONFIG } from '@/config'

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Home() {
  const { company, stats, projects } = LUXTARA_CONFIG

  const capabilities = [
    {
      icon: 'hub',
      title: 'AI Engineering',
      desc: 'Custom LLM pipelines, RAG systems, and intelligent automation — built for real production workflows, not demos.',
      tag: 'Production Ready',
    },
    {
      icon: 'code_blocks',
      title: 'Web Development',
      desc: 'High-performance web apps, e-commerce, SaaS dashboards, and CRMs — architected to scale and built to last.',
      tag: 'Full Stack',
    },
    {
      icon: 'architecture',
      title: 'Digital Strategy',
      desc: 'Shopify stores, WhatsApp automation, GST systems, and SMB digital infrastructure — solutions that actually work.',
      tag: 'End-to-End',
    },
  ]

  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-hairline overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
            <img
              alt="Luxtara Studio"
              className="w-full h-full object-cover grayscale object-top"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
          </div>

          <div className="relative z-10 max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter mt-16">
            {/* Left: Heading + CTA */}
            <motion.div
              className="col-span-1 md:col-span-8 flex flex-col justify-center"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={heroItem} className="inline-flex items-center space-x-2 mb-8 border border-hairline px-3 py-1 bg-surface/50 backdrop-blur w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  {company.location}
                </span>
              </motion.div>

              <motion.h1
                variants={heroItem}
                className="font-display-lg text-display-lg-mobile md:text-display-md lg:text-display-lg text-primary mb-6 md:mb-8 max-w-3xl leading-tight"
              >
                Architecting the Future of Digital Intelligence.
              </motion.h1>

              <motion.p variants={heroItem} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
                {company.name} is a boutique {company.services} studio. We deploy bespoke digital solutions designed with mathematical precision — transforming complex problems into commanding competitive advantages.
              </motion.p>

              <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary text-on-primary font-label-sm uppercase px-8 py-4 hover:bg-on-surface-variant transition-premium"
                >
                  Start a Project
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center border border-hairline text-primary font-label-sm uppercase px-8 py-4 hover:bg-surface-container transition-premium"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Stats Panel */}
            <FadeUp delay={0.2} className="col-span-1 md:col-span-4 mt-16 md:mt-0 flex flex-col justify-end">
              <div className="pt-8 pb-10 md:pl-8 md:border-l md:border-hairline space-y-8 md:space-y-12">
                {stats.map((stat, i) => (
                  <div key={stat.label}>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-widest">
                      {stat.label}
                    </p>
                    <p className="font-display-md text-headline-lg text-primary">
                      {stat.value}
                    </p>
                    <div className="w-full h-[2px] bg-surface-container mt-4 relative">
                      <motion.div
                        className="absolute left-0 top-0 h-full bg-secondary"
                        initial={{ width: 0 }}
                        animate={{ width: i === 0 ? '100%' : i === 1 ? '80%' : i === 2 ? '60%' : '100%' }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 + i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Capabilities Matrix */}
        <section className="py-16 md:py-24 border-b border-hairline bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            
            {/* Header */}
            <div className="p-7 flex flex-col md:flex-row justify-between items-end mb-16 border-b border-hairline pb-8">
              <div className="max-w-2xl">
                <h2 className="font-display-md text-headline-lg text-primary mb-4">Capabilities</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Deploying state-of-the-art architectures tailored to specific mandates.
                </p>
              </div>
              
              {/* Desktop only - All Services link */}
              <Link
                href="/services"
                className="hidden md:inline-flex items-center text-primary font-label-sm uppercase hover:text-secondary transition-colors group mt-8 md:mt-0"
              >
                All Services{' '}
                <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform text-base">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/30 border border-hairline">
              {capabilities.map((cap, i) => (
                <FadeUp
                  key={cap.title}
                  delay={i * 0.1}
                  className="bg-surface card-mobile-pad hover-card transition-premium flex flex-col justify-between min-h-[280px] md:min-h-[320px]"
                >
                  <div>
                    <span className="material-symbols-outlined text-secondary text-3xl mb-6 block">
                      {cap.icon}
                    </span>
                    <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-4">
                      {cap.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{cap.desc}</p>
                  </div>
                  <div className="mt-8">
                    <span className="inline-block px-2 py-1 border border-hairline font-label-sm text-[10px] uppercase text-on-surface-variant">
                      {cap.tag}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Mobile only - All Services button */}
            <div className="mt-8 md:hidden text-center">
              <Link
                href="/services"
                className="inline-flex items-center text-primary font-label-sm uppercase hover:text-secondary transition-colors group"
              >
                All Services{' '}
                <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
              </Link>
            </div>

          </div>
        </section>

        {/* Selected Work — High Contrast Dark Section */}
        <section className="py-16 md:py-24 bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-16">
              <h2 className="font-display-md text-headline-lg mb-4 text-on-primary">Selected Work</h2>
              <div className="w-24 h-px bg-secondary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {projects.slice(0, 2).map((project, i) => (
                <FadeUp key={project.title} delay={i * 0.15}>
                  <div className={`group cursor-pointer ${i === 1 ? 'md:mt-24' : ''}`}>
                    <div className="relative overflow-hidden aspect-[4/3] mb-6 border border-on-surface-variant/30 bg-primary-container">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur px-3 py-1 border border-on-surface-variant/50">
                        <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-primary">
                          {project.tags?.[0]}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-display-md text-headline-lg-mobile md:text-headline-lg mb-2 text-on-primary">
                      {project.title}
                    </h3>
                    <p className="font-label-md text-label-md text-on-primary/70 uppercase tracking-widest mb-4">
                      {project.client}
                    </p>
                    <p className="font-body-md text-body-md text-on-primary/80">{project.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <div className="mt-24 text-center">
              <Link
                href="/work"
                className="inline-flex items-center justify-center border border-on-surface-variant text-on-primary font-label-sm uppercase px-8 py-4 hover:bg-on-primary hover:text-primary transition-premium"
              >
                View Full Archive
              </Link>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-16 md:py-32 border-b border-hairline bg-surface relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
          <FadeUp>
            <div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-8 block">architecture</span>
              <h2 className="font-display-md text-headline-lg md:text-display-md text-primary mb-8 leading-tight">
                We do not build software.<br />We construct digital experiences.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-12 max-w-3xl mx-auto">
                In an era of generic solutions, {company.name} operates on the principle of bespoke engineering. Our methodology is rooted in absolute transparency, technical rigor, and uncompromising quality. We partner with businesses who demand architectures that perform silently, scale flawlessly, and drive real results.
              </p>
              <div className="inline-block border border-hairline bg-surface-container-lowest px-12 py-8 mb-12">
                <p className="font-label-md text-label-md uppercase tracking-widest text-primary mb-2">The Standard</p>
                <p className="font-display-md text-headline-lg text-secondary">Zero Compromise.</p>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary text-on-primary font-label-sm uppercase px-8 py-4 hover:bg-on-surface-variant transition-premium"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </FadeUp>
        </section>
      </main>

      <Footer />
    </>
  )
}