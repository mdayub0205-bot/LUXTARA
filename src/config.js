// LUXTARA CONFIG — Edit all your details here
// This is your single source of truth for the entire website

export const LUXTARA_CONFIG = {
  company: {
    name: "Luxtara",
    tagline: "Light of Stars",
    services: "Web · AI · Digital",
    location: "Madurai, Tamil Nadu",
    founded: "2024",
    logoNav: '/pdimages/navlogo.png',      // ← Navbar logo (dark/text color)
    logoFooter: '/pdimages/footerlogo.png',  // ← Footer logo (light/white)
  },

  founder: {
  name: "MD Ayub",
  title: "AI/ML Engineer & Full-Stack Developer",
  bio: "An AI/ML Engineer and Full-Stack Developer passionate about building modern web applications, AI-powered solutions, and innovative digital products. With a focus on clean engineering, scalable architecture, and exceptional user experiences, Ayub is committed to creating technology that empowers businesses and drives meaningful digital transformation.",
  community: "Madurai AI Community Speaker",
},

  contact: {
    email: "luxtarasolutions@gmail.com",
    phone: "+91 88077 09991",
    github: "https://github.com/luxtarasolutions",
    linkedin: "https://www.linkedin.com/in/luxtara/",
  },

  stats: [
    { value: "2+",   label: "Production AI Products" },
    { value: "5+",   label: "Clients Served"         },
    { value: "3",    label: "Core Service Domains"    },
    { value: "100%", label: "On-time Delivery"        },
  ],

  // the images has to be 4:3 aspect ratio
  projects: [
    {
      title: "ZK Clothes",
      tags: ["Fashion", "E-Commerce"],
      client: "ZK-Clothes",
      description: "A modern Shopify e-commerce store for a fashion brand, optimized for performance and SEO.",
      stack: ["Shopify","SEO"],
      image: '/pdimages/ZK-Clothes.png',
      url: 'https://zkclothes.in', 
    },
  
    {
      title: "Riyas Agencies",
      tags: ["Web","Bussiness"],
      client: "Riyas Agencies",
      description: "Designed and developed a modern business website to showcase products, strengthen the brand's online presence, and improve customer engagement.",
      stack: ["React", "Vite", "Cloudinary", "WhatsApp API", "Tailwind"],
      image: '/pdimages/Riyas.png',
      url: 'https://riyaz-agencies1.vercel.app/', 
    },
    // {
    //   title: "Riyas Agencies",
    //   tags: ["E-Commerce", "Web"],
    //   client: "Freelance — Madurai",
    //   description: "Full-stack furniture e-commerce with Cloudinary image uploads, admin dashboard, and a premium dark luxury editorial UI.",
    //   stack: ["React", "Vite", "Tailwind", "Express", "MongoDB", "Cloudinary"],
    //   image: '/pdimages/Zk-Clothes.png',
    //   url: 'https://your-live-project.com', 
    // },
  ],

  services: [
    {
      number: "01",
      title: "Web Development",
      description: "Custom websites, e-commerce, SaaS dashboards, and CRMs — built fast, built right.",
      stack: ["React", "Next.js", "Node.js", "MongoDB"],
    },
    {
      number: "02",
      title: "AI Integration",
      description: "LLM-powered chatbots, document automation, visual QA, and RAG pipelines.",
      stack: ["Python", "FastAPI", "LangChain", "Claude", "GPT"],
    },
    {
      number: "03",
      title: "Digital Solutions",
      description: "WhatsApp automation, GST systems, Shopify stores, and SMB digital infrastructure.",
      stack: ["Automation", "Shopify", "APIs"],
    },
  ],

  // Updated color theme — Quiet Luxury
  colors: {
    background:     "#f9f9f8",
    surface:        "#f3f4f3",
    surfaceElevated:"#eeeeed",
    border:         "#c6c6cd",
    borderLight:    "#e2e2e2",
    primary:        "#000000",
    primaryHover:   "#45464d",
    secondary:      "#775a19",
    text:           "#1a1c1c",
    textMuted:      "#45464d",
    textFaded:      "#76777d",
  },
}
