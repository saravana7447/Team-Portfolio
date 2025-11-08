export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  education: string;
  experience: string[];
  projects: Project[];
  contact: Contact;
  certifications?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Contact {
  email: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  leetcode?: string;
}