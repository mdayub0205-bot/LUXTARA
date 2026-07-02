
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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

const interests = [
  'Website Development',
  'AI Solutions & Automation',
  'Custom Web Applications',
  'Digital Strategy & Consulting',
  'UI/UX Design',
  'Full Project Discussion',
]

export default function Contact() {
  const { contact, company } = LUXTARA_CONFIG

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', company: '',
    interest: [], message: '',
  })
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const toggleInterest = (item) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest.includes(item)
        ? prev.interest.filter((i) => i !== item)
        : [...prev.interest, item],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        service: formData.interest.join(', '),
        budget: '',
        details: formData.message,
      }
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (response.ok) {
        setStatus('success')
        setMessage('Thank you. Your inquiry has been received. We will respond within 24 hours.')
        setFormData({ firstName: '', lastName: '', email: '', company: '', interest: [], message: '' })
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Failed to send. Please check your connection and try again.')
    }
  }

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-24 lg:mb-32 max-w-3xl"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroItem}
            className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6"
          >
            Initiate Contact
          </motion.h1>
          <motion.p variants={heroItem} className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            We engage selectively with ambitious businesses and AI ventures. Please provide details regarding your inquiry, and our studio directors will respond promptly.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Form */}
          <FadeUp className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <label className="input-label" htmlFor="firstName">First Name <span className="text-primary">*</span></label>
                  <input
                    className="input-field"
                    id="firstName" name="firstName"
                    type="text" required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="input-label" htmlFor="lastName">Last Name (Optional)</label>
                  <input
                    className="input-field"
                    id="lastName" name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <label className="input-label" htmlFor="email">Corporate Email <span className="text-primary">*</span></label>
                  <input
                    className="input-field"
                    id="email" name="email"
                    type="email" required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="input-label" htmlFor="company">Organization <span className="text-primary">*</span></label>
                  <input
                    className="input-field"
                    id="company" name="company"
                    type="text" required
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="input-label mb-4 block">Area of Interest  <span className="text-primary">*</span></label>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {interests.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className="flex items-center gap-2 cursor-pointer group min-h-[44px] py-1"
                    >
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        formData.interest.includes(item)
                          ? 'border-primary'
                          : 'border-outline-variant group-hover:border-primary'
                      }`}>
                        {formData.interest.includes(item) && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">
                        {item}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="input-label" htmlFor="message">Project Details</label>
                <textarea
                  className="input-field resize-none"
                  id="message" name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full md:w-auto bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-4 hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 border border-secondary/30 bg-secondary-container/20">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <p className="font-body-md text-body-md text-secondary">{message}</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 border border-error/30 bg-error-container/30">
                  <span className="material-symbols-outlined text-error text-lg">error</span>
                  <p className="font-body-md text-body-md text-error">{message}</p>
                </div>
              )}
            </form>
          </FadeUp>

          {/* Info */}
       <FadeUp delay={0.15} className="lg:col-span-4">
  <div className="bg-surface-container-lowest hairline-border p-8 h-full flex flex-col">
    <h3 className="font-headline-lg text-headline-lg text-primary mb-8">Headquarters</h3>

    <div className="mb-8">
      <div className="font-label-sm text-label-sm text-outline mb-2">LOCATION</div>
      <address className="font-body-md text-body-md text-on-surface-variant not-italic">
        Luxtara Digital Studio<br />
        {company.location}<br />
        India
      </address>
    </div>

    <div className="mb-8">
      <div className="font-label-sm text-label-sm text-outline mb-2">DIRECT LINE</div>
      <a
        href={`tel:${contact.phone?.replace(/\s/g, '')}`}
        className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
      >
        {contact.phone}
      </a>
    </div>

    <div className="mb-8">
      <div className="font-label-sm text-label-sm text-outline mb-2">GENERAL INQUIRIES</div>
      <a
        href={`mailto:${contact.email}`}
        className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
      >
        {contact.email}
      </a>
    </div>

    {/* Working with Luxtara Section */}
    <div>
      
      <div className="grid grid-cols-1 gap-4">
        <div>
          <div className="font-label-sm text-label-sm text-outline mb-2">AVERAGE RESPONSE</div>
          <div className="font-body-md text-body-md text-on-surface-variant font-medium">&lt; 24 Hours</div>
        </div>
        <div>
          <div className="font-label-sm text-label-sm text-outline mb-2">PROJECT CONSULTATION</div>
          <div className="font-body-md text-body-md text-on-surface-variant font-medium">Free</div>
        </div>
        <div>
          <div className="font-label-sm text-label-sm text-outline mb-2">REMOTE COLLABRATION</div>
          <div className="font-body-md text-body-md text-on-surface-variant font-medium">Worldwide</div>
        </div>
        <div>
          <div className="font-label-sm text-label-sm text-outline mb-2">AVAILABILITY</div>
          <div className="font-body-md text-body-md text-on-surface-variant font-medium">Open for New Projects</div>
        </div>
      </div>
    </div>
  </div>
</FadeUp>
        </div>
      </main>

      <Footer />
    </>
  )
}