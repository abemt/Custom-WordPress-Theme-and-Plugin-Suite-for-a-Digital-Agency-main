import React from 'react';
import type { Service, Project, TeamMember, Testimonial } from './types';

const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

const PaintBrushIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);

const MegaphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
  </svg>
);

export const Bars3Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);


export const SERVICES: Service[] = [
  {
    icon: <CodeBracketIcon className="h-8 w-8 text-teal-400" />,
    title: 'Headless WordPress & React',
    description: 'We build high-performance headless websites utilizing WPGraphQL, Next.js, and React.js for sub-second page speeds and rich interactivity.',
  },
  {
    icon: <PaintBrushIcon className="h-8 w-8 text-teal-400" />,
    title: 'Bespoke Theme Engineering',
    description: 'Custom WordPress Full Site Editing (FSE) block themes built from scratch. Clean markup, high speed, and zero bloat, designed to scale.',
  },
  {
    icon: <MegaphoneIcon className="h-8 w-8 text-teal-400" />,
    title: 'Advanced Plugin Development',
    description: 'Bespoke PHP plugin engineering utilizing WordPress core APIs, custom REST endpoints, and optimized database queries for complex solutions.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/wp-react/600/400',
    category: 'Headless WordPress',
    title: 'WP-GraphQL React Portal',
    description: 'A complete decoupled WordPress solution using Next.js, React, and GraphQL APIs to serve content lightning fast.',
    features: [
      'Sub-second page loading and server-side rendering (SSR)',
      'Optimized WPGraphQL schema queries with automatic persisted queries',
      'Modular Gutenberg blocks translated automatically to custom React components',
      'Dynamic incremental static regeneration (ISR) for instant updates',
      'Integrated React contact forms and live commenting engine'
    ],
    techStack: ['React', 'Next.js', 'GraphQL', 'PHP', 'WordPress API', 'Tailwind CSS'],
    demoUrl: './projects/wp-react-portal/index.html',
    githubUrl: 'https://github.com/abemt/Custom-WordPress-Theme-and-Plugin-Suite-for-a-Digital-Agency-main/tree/main/projects/wp-react-portal'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/woo-react/600/400',
    category: 'Headless WordPress',
    title: 'WooCommerce React SPA',
    description: 'An elegant, high-performance shopping app powered by WooCommerce APIs and a custom React frontend Checkout.',
    features: [
      'State-managed dynamic shopping cart and checkout pipeline',
      'Direct Stripe and PayPal checkout integration with client-side validation',
      'Faceted filtering system for products with instant reactive rendering',
      'User authentication, session persistence, and billing profile dashboard',
      'Optimized media delivery using local caching and WebP optimization'
    ],
    techStack: ['React', 'Redux Toolkit', 'WooCommerce REST API', 'Stripe API', 'Tailwind CSS'],
    demoUrl: './projects/woo-react-spa/index.html',
    githubUrl: 'https://github.com/abemt/Custom-WordPress-Theme-and-Plugin-Suite-for-a-Digital-Agency-main/tree/main/projects/woo-react-spa'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/seed/pressspeed/600/400',
    category: 'WordPress Plugins',
    title: 'PressSpeed Optimizer Plugin',
    description: 'A custom-developed WordPress performance plugin that minifies assets, lazy loads resources, and generates critical CSS.',
    features: [
      'Automated critical CSS path extraction for immediate page rendering',
      'WebP/AVIF automated image generation and dynamic injection',
      'Object and transient database query caching optimization',
      'Bespoke visual dashboard with detailed Web Vitals audit metrics',
      'REST API endpoints for trigger-based remote assets invalidation'
    ],
    techStack: ['PHP', 'WordPress Plugin API', 'JavaScript', 'CSS Parser', 'Vite'],
    demoUrl: './projects/pressspeed-plugin/index.html',
    githubUrl: 'https://github.com/abemt/Custom-WordPress-Theme-and-Plugin-Suite-for-a-Digital-Agency-main/tree/main/projects/pressspeed-plugin'
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/seed/gutenblocks/600/400',
    category: 'WordPress Plugins',
    title: 'Acme Gutenberg Blocks Suite',
    description: 'A custom suite of editorial blocks built using React in the WordPress block editor with optimized server-side PHP fallbacks.',
    features: [
      'Rich UI controls in the WordPress Admin built with React.js',
      'Flexible dynamic blocks with custom server-side rendering logic',
      'Configurable layouts utilizing WordPress block-json configurations',
      'Deep integration with WordPress theme styles and layout tools',
      'Translation-ready block settings for global localization'
    ],
    techStack: ['React', 'WordPress Block Editor API', 'PHP', 'Webpack', 'CSS Modules'],
    demoUrl: './projects/acme-blocks/index.html',
    githubUrl: 'https://github.com/abemt/Custom-WordPress-Theme-and-Plugin-Suite-for-a-Digital-Agency-main/tree/main/projects/acme-blocks'
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/seed/blocktheme/600/400',
    category: 'WordPress Themes',
    title: 'FlexPress Block Theme',
    description: 'A full site editing (FSE) block theme designed with minimal overhead, achieving perfect 100/100 PageSpeed scores.',
    features: [
      'Full compatibility with WordPress Site Editor and block templates',
      'Zero dependency CSS/JS for ultra-lightweight execution paths',
      'Pre-configured premium design patterns for sections and layouts',
      'Theme-json unified style configuration for global typography & spacing',
      'Fully keyboard accessible (a11y) and WCAG compliant markup'
    ],
    techStack: ['WordPress FSE', 'Gutenberg Theme JSON', 'HTML5', 'Tailwind CSS', 'PHP'],
    demoUrl: './projects/flexpress-theme/index.html',
    githubUrl: 'https://github.com/abemt/Custom-WordPress-Theme-and-Plugin-Suite-for-a-Digital-Agency-main/tree/main/projects/flexpress-theme'
  },
  {
    id: 6,
    imageUrl: 'https://picsum.photos/seed/wp-event/600/400',
    category: 'WordPress Themes',
    title: 'WP-EventHub Theme Portal',
    description: 'A premium WordPress theme supporting event booking, dynamic timetables, and custom registrations.',
    features: [
      'Interactive calendar frontend powered by a lightweight React widget',
      'Custom post types and taxonomies with optimized archive queries',
      'Automated email notifications and ticketing via PDF downloads',
      'Front-end event submission portal with verification checks',
      'Integration with Stripe and WooCommerce for payment checkouts'
    ],
    techStack: ['WordPress', 'PHP', 'React', 'WP REST API', 'Stripe API', 'Bootstrap'],
    demoUrl: './projects/wp-eventhub/index.html',
    githubUrl: 'https://github.com/abemt/Custom-WordPress-Theme-and-Plugin-Suite-for-a-Digital-Agency-main/tree/main/projects/wp-eventhub'
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { imageUrl: 'https://picsum.photos/seed/person1/400/400', name: 'Alex Johnson', role: 'Lead WordPress Architect' },
  { imageUrl: 'https://picsum.photos/seed/person2/400/400', name: 'Maria Garcia', role: 'Headless React Developer' },
  { imageUrl: 'https://picsum.photos/seed/person3/400/400', name: 'James Smith', role: 'PHP Core Specialist' },
  { imageUrl: 'https://picsum.photos/seed/person4/400/400', name: 'Priya Patel', role: 'Gutenberg Blocks Engineer' },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'We moved our enterprise news website to a headless WordPress setup built by this team. The speed is unbelievable and our core web vitals are perfect.', author: 'John Doe', company: 'CTO, TechPublishing' },
  { quote: 'The custom Gutenberg blocks suite they developed has streamlined our content creation. Editing pages feels modern, responsive, and incredibly easy.', author: 'Jane Smith', company: 'Content Director, DigitalFlow' },
  { quote: 'Their expertise in WooCommerce and API performance helped us build a decoupled cart checkout that increased our mobile conversion rates by 40%.', author: 'Sam Wilson', company: 'Founder, RetailTrend' },
];