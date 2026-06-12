
import type React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  features?: string[];
  techStack?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface TeamMember {
  imageUrl: string;
  name: string;
  role: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
