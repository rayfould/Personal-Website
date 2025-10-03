import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern, interactive portfolio built with Astro and React featuring dynamic typing animations, interactive terminal interface, skill-based project filtering, and custom pixel canvas components. Includes particle.js background effects, frosted glass UI elements, and responsive design across all breakpoints.',
    tags: ['JavaScript', 'React', 'HTML/CSS', 'Astro', 'Git', 'Tailwind CSS', 'TypeScript'],
    category: 'Web Development',
    date: '2025-10',
    status: 'in-progress',
    featured: true,
    progress: 95,
    github: 'https://github.com/rayfould/Personal-Website',
    link: 'https://rudolfrissling.com',
    image: '/images/logo/rdy_logo_white.png',
    imageScale: 0.6
  },
  {
    id: 'coursebranch',
    title: 'CourseBranch',
    description: 'Visual course planning platform enabling students to track major progress and requirements through interactive tree diagrams. Features user reviews for courses and professors, prerequisite mapping, and semester planning tools. Makes course registration more intuitive with accessible progress visualization.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'Git',],
    category: 'Full-Stack Development',
    date: '2024-09',
    status: 'in-progress',
    featured: true,
    progress: 15,
    github: 'https://github.com/rayfould/coursebranch',
    link: 'https://coursebranch.com',
    image: '/images/logo/CourseBranch_logo.png',
    imageScale: 1.3
  },
  {
    id: 'ventaura',
    title: 'Ventaura',
    description: 'Personalized event recommendations platform built with C# backend integrating 5+ APIs, Python DDQL ranking algorithm, and React frontend. Led 3-developer team achieving 10,000+ daily requests with 45% faster data retrieval and sub-second ranking for 1,000+ events.',
    tags: ['C#', '.NET Core', 'Python', 'React', 'PostgreSQL', 'HTML/CSS', 'PyTorch', 'FastAPI', 'Node.js', 'Git', 'Supabase'],
    category: 'Full-Stack Development',
    date: '2024-12',
    status: 'completed',
    featured: true,
    progress: 100,
    github: 'https://github.com/rayfould/Ventaura',
    link: 'https://ventaura.co',
    image: '/images/logo/ventaura_logo.png',
    imageScale: 1.3
  },
  {
    id: 'muse',
    title: 'Muse',
    description: 'Creative community mobile app for post uploads and interaction. Built with Kotlin and Jetpack Compose featuring Supabase backend with threaded comments and discovery algorithm. Reduced storage costs by 70% and improved engagement by 35%.',
    tags: ['Kotlin', 'Jetpack Compose', 'PostgreSQL', 'Git', 'Supabase'],
    category: 'Mobile Development',
    date: '2024-08',
    status: 'in-progress',
    featured: true,
    progress: 90,
    github: 'https://github.com/rayfould/Muse',
    link: 'https://muse-app.com',
    image: '/images/logo/muse_logo.png',
    imageScale: 0.5
  },
  {
    id: 'nl2sql-engine',
    title: 'QueryMind NL2SQL Engine',
    description: 'Advanced natural language to SQL conversion engine with vector database integration achieving 85% query accuracy. Parses conversational input and maps natural language to complex database schemas. Built scalable query processing pipeline handling multiple database types. Confidential - developed for company currently using in production. Happy to discuss architecture and approach.',
    tags: ['Python', 'FastAPI', 'SQL', 'Git'],
    category: 'AI/ML',
    date: '2025-07',
    status: 'completed',
    featured: true,
    progress: 100,
    confidential: true,
    image: '/images/logo/nl2sql_logo.png',
    imageScale: 0.7
  },
  {
    id: 'gmail-ai-automation',
    title: 'Gmail AI Automation Platform',
    description: 'Production-ready Google Workspace automation for Lawyer.com enabling complete Gmail management through natural language interfaces. Architected automated email composition and intelligent sorting/filtering. Built scalable GCP backend with Firestore and Cloud Run achieving 99.5% uptime, reducing manual data entry by 60%. Confidential - developed for company currently using in production. Happy to discuss architecture and approach.',
    tags: ['Python', 'FastAPI', 'Git'],
    category: 'AI/ML & Integration',
    date: '2025-08',
    status: 'completed',
    featured: true,
    progress: 100,
    confidential: true,
    image: '/images/logo/gmail_logo.png',
    imageScale: 0.6
  }
];

