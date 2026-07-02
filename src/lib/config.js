export const personal = {
  name: "Amjuri Yaswanth",
  title: "Software Engineer",
  tagline: "Passionate Web Architect & Creative Developer",
  email: "yaswanthamjuri@gmail.com",
  phone: "+91 8688209206",
  location: "Andhra Pradesh, India",
  github: "https://github.com/Yash913212",
  linkedin: "https://linkedin.com/in/yaswanth-amjuri",
  cvPath: "/Amjuri_Yaswanth_Resume.pdf",
  cvFilename: "Amjuri_Yaswanth_Resume.pdf",
  description: [
    "With deep expertise in designing and engineering high-quality web products, I specialize in crafting accessible, responsive, and ultra-performant React applications.",
    "I love turning intricate technical challenges into smooth, intuitive user experiences. Guided by Vercel's philosophy, I strive for visual excellence, speed, and seamless interactivity in every codebase.",
  ],
};

export const navItems = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#contact" },
];

export const experience = [
  {
    id: 1,
    role: "AI & ML Intern",
    company: "Nisum Consulting",
    location: "On-site / Remote",
    period: "Jul 2025",
    type: "Internship",
    achievements: [
      "Worked on Machine Learning projects and models",
      "Collaborated with cross-functional teams to deliver business-aligned AI solutions",
    ],
  },
  {
    id: 2,
    role: "Full Stack Intern",
    company: "Technical Hub",
    location: "On-site / Remote",
    period: "May 2025 - Jun 2025",
    type: "Internship",
    achievements: [
      "Built responsive, production-ready websites using modern web technologies",
      "Improved overall page performance by 30% through asset and code optimization",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech. in Computer Science and Engineering",
    school: "Aditya College of Engineering and Technology",
    location: "Andhra Pradesh, India",
    period: "2023 - 2027",
    details: "CGPA: 8.56 (Current)",
  },
  {
    id: 2,
    degree: "Intermediate (12th)",
    school: "Sasi Junior College",
    location: "Andhra Pradesh, India",
    period: "2021 - 2023",
    details: "Completed higher secondary education with a strong foundation in sciences.",
  },
];

export const certifications = [
  {
    id: 1,
    title: "MongoDB Certified Associate Developer",
    organization: "MongoDB, Inc.",
    date: "April 2026",
    credentialId: "MDB6qy75hyg9o",
    image: "/certificates/mongodb.png"
  },
  {
    id: 2,
    title: "GitHub Foundations",
    organization: "Microsoft",
    date: "March 2026",
    credentialId: "6158A8BB4569173C",
    image: "/certificates/github.png"
  },
  {
    id: 3,
    title: "Oracle Certified Foundations Associate, Java",
    organization: "Oracle University",
    date: "May 2025",
    credentialId: "319621844JAVA8OJA",
    image: "/certificates/oracle.png"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Arjun Reddy",
    role: "Senior Engineering Manager",
    text: "Yaswanth is an exceptionally talented developer. His ability to architect complex systems while maintaining clean, readable code is remarkable. He consistently elevates the quality of our engineering team.",
    avatar: null,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Lead Product Designer",
    text: "An exceptional problem solver with a keen eye for UI/UX and performance optimization. Yaswanth bridges the gap between design and engineering seamlessly, delivering high-quality work ahead of schedule.",
    avatar: null,
  },
];

export const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "🔀" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Redis", icon: "🔴" },
  { name: "Express", icon: "⚡" },
  { name: "React Native", icon: "📱" },
];

export const projects = [
  {
    id: 4,
    title: "VitaNova Auth & Onboarding Core",
    description:
      "A secure multi-account authentication, onboarding, and profile orchestration engine built with post-login setup redirection, robust theme synchronizations, and sleek micro-animations.",
    image: "/projects/project4.webp",
    tags: ["React", "Supabase Auth", "Zustand", "TailwindCSS"],
    demoUrl: "https://vitanova-one.vercel.app/login",
    githubUrl: "https://github.com/Yash913212/Vitanova",
    metrics: {
      load: "250,000+ Active Auth Events",
      sla: "99.999% Session Resiliency",
      database: "Post-Login Profile Flow",
    },
  },
  {
    id: 1,
    title: "Multi-tenant SaaS Platform",
    description:
      "A comprehensive multi-tenant SaaS platform featuring tenant isolation, secure role-based access control, and scalable system architecture.",
    image: "/projects/project1.webp",
    tags: ["React.js", "Node.js", "MongoDB", "Auth0"],
    demoUrl: "https://github.com/Yash913212/Multi-tenant-saas",
    githubUrl: "https://github.com/Yash913212/Multi-tenant-saas",
    metrics: {
      load: "50,000 req/sec",
      sla: "99.99%",
      database: "PostgreSQL Isolation",
    },
  },
  {
    id: 2,
    title: "Oryx Data Analytics Dashboard",
    description:
      "A high-performance real-time data processing and analytics tool equipped with interactive dashboards and advanced D3 visualizations.",
    image: "/projects/project2.webp",
    tags: ["React", "TypeScript", "D3.js", "TailwindCSS"],
    demoUrl: "https://github.com/Yash913212/Oryx",
    githubUrl: "https://github.com/Yash913212/Oryx",
    metrics: {
      load: "1.2 GB/s streams",
      sla: "99.95%",
      database: "D3 Canvas Engine",
    },
  },
  {
    id: 3,
    title: "Async Payment Gateway",
    description:
      "A robust, PCI-compliant asynchronous payment gateway offering webhook streams, secure tokens, and detailed transaction logs.",
    image: "/projects/project3.webp",
    tags: ["Node.js", "Express", "Stripe API", "Redis"],
    demoUrl: "https://github.com/Yash913212/Async-payment-gateway",
    githubUrl: "https://github.com/Yash913212/Async-payment-gateway",
    metrics: {
      load: "Redis BullMQ Queue",
      sla: "99.999%",
      database: "Latency: <12ms",
    },
  },
];

export const skills = [
  { name: "React / Next.js", level: 90, category: "frontend", stats: { metric1: "Component Architecture", metric2: "State Management", metric3: "Performance Tuning" } },
  { name: "TypeScript", level: 85, category: "frontend", stats: { metric1: "Type Safety", metric2: "Generic Types", metric3: "Refactoring" } },
  { name: "Tailwind CSS", level: 95, category: "frontend", stats: { metric1: "Utility-First Design", metric2: "Responsive Layouts", metric3: "Design Systems" } },
  { name: "Node.js", level: 80, category: "backend", stats: { metric1: "Async Programming", metric2: "Event Loop", metric3: "REST APIs" } },
  { name: "PostgreSQL", level: 75, category: "backend", stats: { metric1: "Relational Design", metric2: "Query Optimization", metric3: "Data Integrity" } },
  { name: "MongoDB", level: 85, category: "backend", stats: { metric1: "NoSQL Modeling", metric2: "Aggregation Pipeline", metric3: "Schema Design" } },
  { name: "Docker", level: 70, category: "tools", stats: { metric1: "Containerization", metric2: "Microservices", metric3: "Environment Parity" } },
  { name: "Git / CI-CD", level: 90, category: "tools", stats: { metric1: "Version Control", metric2: "GitHub Actions", metric3: "Deployment Automation" } },
];

export const skillCategories = ["all", "frontend", "backend", "tools"];

export const site = {
  title: "Amjuri Yaswanth | Software Engineer",
  description:
    "Amjuri Yaswanth's portfolio - a high-performance developer portfolio built as an interactive hacker OS HUD telemetry interface.",
  url: "https://yaswanth-amjuri.dev",
  image: "/banner.png",
  preloaderOsVersion: "v2.0.33",
  preloaderLat: "16.8688° N",
  preloaderLon: "81.2092° E",
};
