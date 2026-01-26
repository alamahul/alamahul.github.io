import { LucideIcon } from 'lucide-react';

export type Language = 'id' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url: string;
}