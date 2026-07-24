// Project
export interface Project {
  _id?: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  category: string;
  thumbnail_image?: string;
  gallery_images?: Array<{ url: string; order: number }>;
  technologies: string[];
  tags: string[];
  github_url?: string;
  demo_url?: string;
  completed_at?: Date;
  status: 'completed' | 'in_progress' | 'archived';
  featured: boolean;
  sort_order: number;
  published: boolean;
  view_count: number;
  created_at: Date;
  updated_at: Date;
}

// Testimonial
export interface Testimonial {
  _id?: string;
  author_name: string;
  author_role?: string;
  avatar_url?: string;
  quote: string;
  rating?: number;
  published: boolean;
  created_at: Date;
}

// Contact Submission
export interface ContactSubmission {
  _id?: string;
  name: string;
  email: string;
  message: string;
  status: 'unread' | 'read' | 'spam';
  ip_hash: string;
  submitted_at: Date;
}

// Skill
export interface Skill {
  _id?: string;
  name: string;
  category?: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  sort_order: number;
  created_at: Date;
  updated_at: Date;
}

// Service
export interface Service {
  _id?: string;
  title: string;
  description: string;
  icon_name?: string;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
}

// About Content
export interface AboutContent {
  _id?: string;
  title: string;
  bio: string;
  avatar_url?: string;
  updated_at: Date;
}

// Contact Info
export interface ContactInfo {
  _id?: string;
  email: string;
  phone?: string;
  github_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
  updated_at: Date;
}
