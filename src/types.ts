export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'web' | 'mobile' | 'ai' | 'design';
  image: string;
  demoUrl?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  client: string;
  role: string;
  duration: string;
  challenge: string;
  solution: string;
  highlights: string[];
  galleryImages: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  level: number; // 1-10
  color: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
}
