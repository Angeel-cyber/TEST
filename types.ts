export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: {
    text: string;
    url: string;
  };
}

export interface Skill {
  name: string;
  isKeySkill?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: number;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  tasks: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface ResumeData {
  id: string;
  name: string;
  title: string;
  profile: string;
  gender: 'male' | 'female';
  contact: ContactInfo;
  skills: SkillCategory[];
  certifications: Certification[];
  experience: Experience[];
  education: Education[];
  languages: { language: string; proficiency: string }[];
  interests: string[];
}