import './globals.css'

export const metadata = {
  title: 'LUXTARA — Digital Luxury Studio',
  description: 'A premium studio at the intersection of high-end aesthetics and cutting-edge AI technology. We engineer digital experiences with technical elegance.',
  keywords: 'web development, AI integration, digital strategy, luxury design, studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Geist:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background antialiased min-h-screen selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
      </body>
    </html>
  )
}
