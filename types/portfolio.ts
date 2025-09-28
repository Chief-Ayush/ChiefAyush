export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  subtitle: string;
  email: string;
  location: string;
  avatar?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  gradient: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  image: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  type: 'contribution' | 'speaking' | 'competition' | 'technical' | 'award';
}

export interface Social {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  experience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
  social: Social;
}