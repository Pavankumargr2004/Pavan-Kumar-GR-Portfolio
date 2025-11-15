import React from 'react';

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  githubUrl: string;
}

export interface Certification {
    title: string;
    organization: string;
    description: string;
    linkText: string;
    link: string;
}

export interface Achievement {
    title: string;
    organization: string;
    description: string;
    linkText: string;
    link: string;
}

export interface Extracurricular {
    title: string;
    organization: string;
    description: string;
    linkText: string;
    link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}