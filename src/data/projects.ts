import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern web technologies for optimal performance.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Web Development',
    date: '2025-01',
    status: 'completed',
    featured: true,
    link: 'https://example.com',
    github: 'https://github.com/username/ecommerce'
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'Collaborative task management application with drag-and-drop interface, real-time updates, and team collaboration features.',
    tags: ['TypeScript', 'Next.js', 'Tailwind', 'Supabase'],
    category: 'Web Development',
    date: '2024-12',
    status: 'completed',
    featured: true,
    github: 'https://github.com/username/taskapp'
  },
  {
    id: 'project-3',
    title: 'AI Content Generator',
    description: 'Machine learning powered content generation tool that creates blog posts, social media content, and marketing copy using GPT models.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    category: 'AI/ML',
    date: '2024-11',
    status: 'in-progress',
    featured: false,
    link: 'https://example.com'
  },
  {
    id: 'project-4',
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with social sharing capabilities.',
    tags: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile Development',
    date: '2024-10',
    status: 'completed',
    featured: true,
    link: 'https://example.com',
    github: 'https://github.com/username/fitness'
  },
  {
    id: 'project-5',
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring dashboard with interactive maps, forecasts, and historical data visualization.',
    tags: ['Vue.js', 'D3.js', 'Weather API'],
    category: 'Web Development',
    date: '2024-09',
    status: 'completed',
    featured: false,
    github: 'https://github.com/username/weather'
  },
  {
    id: 'project-6',
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with multi-chain support, transaction history, and portfolio tracking features.',
    tags: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    category: 'Blockchain',
    date: '2024-08',
    status: 'in-progress',
    featured: true,
    github: 'https://github.com/username/wallet'
  },
  {
    id: 'project-7',
    title: 'DevOps Automation Tool',
    description: 'CI/CD pipeline automation tool that streamlines deployment processes and infrastructure management across multiple cloud providers.',
    tags: ['Go', 'Docker', 'Kubernetes', 'AWS'],
    category: 'DevOps',
    date: '2024-07',
    status: 'completed',
    featured: false,
    link: 'https://example.com',
    github: 'https://github.com/username/devops-tool'
  },
  {
    id: 'project-8',
    title: 'Social Media Analytics',
    description: 'Analytics platform for tracking social media engagement, sentiment analysis, and performance metrics across multiple platforms.',
    tags: ['Python', 'Django', 'Pandas', 'Chart.js'],
    category: 'Data Analytics',
    date: '2024-06',
    status: 'archived',
    featured: false,
    github: 'https://github.com/username/analytics'
  },
  {
    id: 'project-9',
    title: 'Real-Time Chat Application',
    description: 'WebSocket-based chat application with end-to-end encryption, file sharing, and group chat functionality.',
    tags: ['Node.js', 'Socket.io', 'MongoDB', 'React'],
    category: 'Web Development',
    date: '2024-05',
    status: 'completed',
    featured: true,
    link: 'https://example.com',
    github: 'https://github.com/username/chat'
  }
];

