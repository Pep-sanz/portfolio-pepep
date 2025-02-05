import { IProjectItem } from '@/types/projects';

export const projectItems: IProjectItem[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    description:
      'A personal portfolio website to showcase projects and skills.',
    image: '/images/portfolio.png',
    link_demo: 'https://example.com/portfolio',
    link_github: 'https://github.com/pep-sanz/jadwal-solat',
    stacks: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    content:
      'This project highlights my ability to create responsive and user-friendly designs with modern frameworks.',
    is_show: true,
    is_featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce App',
    slug: 'ecommerce-app',
    description:
      'A fully functional e-commerce platform with payment integration.',
    image: '/images/ecommerce.png',
    link_demo: 'https://example.com/ecommerce',
    link_github: 'https://github.com/pep-sanz/jadwal-solat',
    stacks: ['Next.js', 'Chakra UI', 'Stripe API'],
    content:
      'An e-commerce application featuring dynamic product listings, cart management, and secure payment gateways.',
    is_show: true,
    is_featured: false,
  },
  {
    id: 3,
    title: 'Blog Platform',
    slug: 'blog-platform',
    description:
      'A blogging platform with markdown support and user authentication.',
    image: '/images/blog.png',
    link_demo: 'https://example.com/blog',
    link_github: 'https://github.com/pep-sanz/jadwal-solat',
    stacks: ['Node.js', 'Express', 'MongoDB', 'React'],
    content:
      'A platform designed for bloggers to create, edit, and publish their content seamlessly.',
    is_show: true,
    is_featured: true,
  },
  {
    id: 4,
    title: 'Chat Application',
    slug: 'chat-application',
    description: 'A real-time chat application with WebSocket integration.',
    image: '/images/chat.png',
    link_demo: null,
    link_github: 'https://github.com/pep-sanz/jadwal-solat',
    stacks: ['React Native', 'Firebase', 'WebSocket'],
    content:
      'This app enables real-time communication with support for group chats and multimedia messages.',
    is_show: true,
    is_featured: false,
  },
  {
    id: 5,
    title: 'Task Management Tool',
    slug: 'task-management-tool',
    description: 'A productivity tool for task tracking and collaboration.',
    image: '/images/task.png',
    link_demo: 'https://example.com/task-tool',
    link_github: null,
    stacks: ['Vue.js', 'Pinia', 'Tailwind CSS'],
    content:
      'This tool simplifies task management for individuals and teams, featuring intuitive drag-and-drop functionality.',
    is_show: false,
    is_featured: false,
  },
];
