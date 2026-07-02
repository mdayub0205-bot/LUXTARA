import Link from 'next/link'
import { LUXTARA_CONFIG } from '@/config'

export default function Footer() {
  const { company, contact } = LUXTARA_CONFIG

  return (
    <footer className="bg-black w-full border-t border-white/10 pb-safe">
      <div className="grid grid-cols-6 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
        {/* Brand */}
        <div className="col-span-6 md:col-span-4 flex flex-col justify-start gap-6 mb-8 md:mb-0">
          <Link href="/" className="inline-block hover:opacity-70 transition-opacity">
            <img
              src={company.logoFooter}
              alt={company.name}
              className="h-auto w-full max-w-[200px] object-contain"
            />
          </Link>
          <p className="font-label-sm text-label-sm text-white/60">
            © 2024 LUXTARA DIGITAL STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:col-span-1" />

        {/* Connect */}
        <div className="col-span-3 md:col-span-3 flex flex-col gap-4 mb-6 md:mb-0">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-white/60 mb-2">Connect</p>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
            className="font-body-md text-body-md text-white hover:text-[#6e5a14] transition-colors">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer"
            className="font-body-md text-body-md text-white hover:text-[#6e5a14] transition-colors">
            GitHub
          </a>
          <a href={`mailto:${contact.email}`}
            className="font-body-md text-body-md text-white hover:text-[#6e5a14] transition-colors">
            Email
          </a>
        </div>

        {/* Legal */}
        <div className="col-span-3 md:col-span-3 flex flex-col gap-4">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-white/60 mb-2">Legal</p>
          <Link href="#" className="font-body-md text-body-md text-white hover:text-[#6e5a14] transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="font-body-md text-body-md text-white hover:text-[#6e5a14] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}