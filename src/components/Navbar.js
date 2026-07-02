'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { LUXTARA_CONFIG } from '@/config'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/work',     label: 'Work'     },
  { href: '/about',    label: 'About'    },
  { href: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <header
      className={`bg-black/90 fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'shadow-sm border-white/20' : ''
      }`}
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Navbar Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="hover:opacity-70 transition-opacity duration-300 block">
            <img
              src={LUXTARA_CONFIG.company.logoNav}
              alt={LUXTARA_CONFIG.company.name}
              className="h-10 md:h-20 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-label-md text-label-md transition-colors hover:opacity-80 duration-300 pb-1 ${
                pathname === link.href
                  ? 'text-[#6e5a14] border-b-2 border-[#6e5a14]'
                  : 'text-white hover:text-[#6e5a14]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:block bg-[#6e5a14] text-white font-label-md text-label-md uppercase px-6 py-3 rounded hover:bg-white hover:text-black transition-colors duration-150"
        >
          Inquire
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#6e5a14] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col gap-2 px-margin-mobile py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-md text-label-md uppercase py-3 border-b border-white/10 transition-colors duration-200 ${
                  pathname === link.href ? 'text-[#6e5a14]' : 'text-white hover:text-[#6e5a14]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 bg-[#6e5a14] text-white font-label-md text-label-md uppercase px-6 py-3 text-center hover:bg-white hover:text-black transition-colors duration-150"
            >
              Inquire
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}