# LUXTARA Studio Website

A premium dark luxury website for LUXTARA — a digital studio at the intersection of high-end aesthetics and cutting-edge AI technology.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Resend** (Email API)
- **Lucide React** (Icons)

## Pages

- **Home** — Hero, Services, Stats, Selected Work, Built Different
- **Services** — Service offerings, Process Timeline, CTA
- **Work** — Portfolio case studies
- **About** — Studio story, Founder, Core Values
- **Contact** — Contact form with Resend email integration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` and add your Resend API key and recipient email.

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Email Setup (Resend)

1. Create an account at [resend.com](https://resend.com)
2. Generate an API key
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Verify your domain or use the onboarding email address for testing

## Build for Production

```bash
npm run build
```

For static export, the site is built to the `out/` directory.

## Design System

- **Colors**: Pure Black foundation with Gold (#C9A84C) accents
- **Typography**: EB Garamond (Editorial), Space Grotesk (Structural), Inter (Functional)
- **Shapes**: Strictly sharp (0px border radius)
- **Elevation**: 1px borders and tonal layering — no shadows
