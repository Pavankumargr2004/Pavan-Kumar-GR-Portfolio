import React from 'react';
import type { EducationItem, Project, Certification, SkillCategory, Achievement, Extracurricular } from './types';

export const GITHUB_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15-.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export const LINKEDIN_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const EMAIL_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

export const X_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
);

export const INSTAGRAM_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

export const DISCORD_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.317 4.482a1.859 1.859 0 0 0-1.666-.423l-.018.01L15.42 6.528a11.236 11.236 0 0 0-3.418-.463 11.236 11.236 0 0 0-3.418.463L5.37 4.07a1.859 1.859 0 0 0-1.666.423 1.838 1.838 0 0 0-.547 1.341c0 .06.01.11.01.16a13.313 13.313 0 0 0 2.21 6.845 14.15 14.15 0 0 0 6.632 5.688l.278.139a.78.78 0 0 0 .723 0l.278-.139a14.15 14.15 0 0 0 6.632-5.688 13.313 13.313 0 0 0 2.21-6.845c0-.05.01-.1.01-.16a1.838 1.838 0 0 0-.547-1.341zM8.47 13.003a2.138 2.138 0 0 1-2.222-2.054c0-1.137.985-2.053 2.222-2.053s2.222.916 2.222 2.053a2.138 2.138 0 0 1-2.222 2.054zm7.06 0a2.138 2.138 0 0 1-2.222-2.054c0-1.137.985-2.053 2.222-2.053s2.222.916 2.222 2.053a2.138 2.138 0 0 1-2.222 2.054z"/></svg>
);

export const KAGGLE_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M18.333 13.333h-5L10 16.667h3.333l1.25 2.5h-5L5.833 12.5l3.75-6.667h5l-1.25 2.5h-3.333L10 10h5z"/></svg>
);

export const GOOGLE_DEV_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m12 12-8-8"/><path d="M20 4h-6v6l-4 4 4 4v6h6v-6l-4-4 4-4z"/></svg>
);


export const PORTFOLIO_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"></path></svg>
);

export const GITHUB_LINK_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15-.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export const CERTIFICATE_ICON = (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m15 5 4 4"></path><path d="M13 7.41a2 2 0 0 1 2.83 0L20.41 12a2 2 0 0 1 0 2.83l-4.58 4.58a2 2 0 0 1-2.83 0L7.59 13.83a2 2 0 0 1 0-2.83L13 5.41a2 2 0 0 1 0-2.83L13 7.41Z"></path><path d="M2 20h.01"></path><path d="M6.5 15.5h.01"></path><path d="m12 10 2 2"></path><path d="m7 15 2 2"></path><path d="m12 5 2 2"></path></svg>
);

export const MENU_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
);

export const CLOSE_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
);

export const SUN_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
);

export const MOON_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);

export const SEND_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
);


export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Dayananda Sagar University',
    degree: 'Computer Science and Engineering',
    duration: 'Present',
    gpa: '9.05',
  },
  {
    institution: 'SDC Independent PU College',
    degree: 'PUC',
    duration: 'Completed',
    gpa: '9.3',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'WebbSight',
    subtitle: 'NASA Space Apps Challenge (Global Nominee)',
    description: 'Developed an interactive multimedia platform that transforms James Webb Space Telescope (JWST) data into immersive visuals, soundscapes, and VR experiences. Features include space-themed storytelling, interactive games, and a VR journey through galaxies and nebulae.',
    githubUrl: 'https://github.com/Pavankumargr2004/Webb-Sight',
  },
  {
    title: 'CosmoConnect',
    subtitle: 'Space Education Platform',
    description: 'Interactive platform teaching children space concepts using NASA’s real-time data and visualizations.',
    githubUrl: 'https://github.com/Pavankumargr2004/cosmoconnect.git',
  },
  {
    title: 'Aura Wellness',
    subtitle: 'AI Wellness Assistant',
    description: 'AI-powered wellness assistant supporting healthcare professionals with stress and burnout monitoring.',
    githubUrl: 'https://github.com/Pavankumargr2004/HackVerse_Aura_Wellness.git',
  },
  {
    title: 'Stock Data Pipeline',
    subtitle: 'End-to-End Data Engineering',
    description: 'An end-to-end data pipeline using Apache Airflow orchestrated in Docker, with PostgreSQL for storage. Automated ingestion, transformation, and scheduling of stock market data using Python.',
    githubUrl: 'https://github.com/Pavankumargr2004/Stock_data_Pipeline-.git',
  },
  {
    title: '3D Game Development Demo',
    subtitle: 'Python Game Simulation',
    description: 'Developed a 3D game simulation demo in Python, showcasing static and interactive 3D rendering using Matplotlib and Plotly. Implemented player movement, enemy AI, and collision detection logic to demonstrate fundamental game development concepts without a game engine.',
    githubUrl: 'https://github.com/Pavankumargr2004/Python-Projects',
  },
  {
    title: 'Diabetes Prediction Model',
    subtitle: 'Machine Learning',
    description: 'Built an ML model to predict whether a patient is diabetic based on medical attributes using the PIMA Indian Diabetes Dataset. Preprocessed data with StandardScaler and trained a Support Vector Machine (SVM) classifier.',
    githubUrl: 'https://github.com/Pavankumargr2004/Basic-Ml-Projects',
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
    {
        title: 'Nasa International Space Apps Challenge Global Nominee',
        organization: 'NASA',
        description: 'Selected as a global nominee in the NASA International Space Apps Challenge for the project "WebbSight".',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1-elal49iHs_SGI37Pn32XeDtENHpc7RQ/view?usp=drive_link',
    },
    {
        title: 'Nasa International Space Apps Challenge Local Award Winner',
        organization: 'NASA',
        description: 'Achieved the local winner award in the NASA International Space Apps Challenge, showcasing innovative use of space data.',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1Wf9usfL7KAedXfOIMaEmT6DwMisgsH9k/view?usp=sharing',
    },
    {
        title: 'TechFusion Hackverse (Runners Up)',
        organization: 'Hackverse',
        description: 'Secured the runner-up position in the TechFusion 24-hour hackathon by developing an innovative tech solution.',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1EIGj8sDynP5khKpdX3q5V_Pq_fcrvDD8/view?usp=sharing',
    },
    {
        title: 'UDAYA 1.0 Intra-DSI Hackathon (3rd Place)',
        organization: 'Dayananda Sagar Institutions',
        description: 'Achieved third place in the UDAYA 1.0 hackathon, competing against teams within the institution.',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1xuILqI2gsyEaqcYxL9G8_7LOOhK3I0x8/view?usp=drive_link',
    },
];

export const CERTIFICATIONS_DATA: Certification[] = [
    {
        title: 'Oracle Cloud Infrastructure Certified DevOps Professional',
        organization: 'Oracle',
        description: 'Learned advanced DevOps and cloud deployment techniques using Oracle Cloud Infrastructure.',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1cFAYfwpwMgEAj2Yt0sqdyekYJO2KmNo8/view?usp=drivesdk',
    },
    {
        title: 'Oracle Cloud Infrastructure Certified Generative AI Professional',
        organization: 'Oracle',
        description: 'Learned to design, train, and integrate Generative AI models using industry-standard tools and practices.',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1DKXM-E6m4azh2Mg-G1_W8urXAURZE4fO/view?usp=drive_link',
    },
    {
        title: 'Cisco Networking Academy',
        organization: 'Cisco',
        description: 'Completed foundational training in computer networking concepts, protocols, and configurations.',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1e_dI7mz0FA-4-30rxRD6E79APeODBYBd/view?usp=drive_link',
    },
    {
        title: 'Introduction to Information Technology and AWS Cloud',
        organization: 'AWS & Coursera',
        description: 'Completed foundational training on IT concepts, AWS cloud services, and cloud computing fundamentals.',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1A22cTIBK01JZieRA_vmjq6hGqQHsOrai/view?usp=drive_link',
    },
];

export const EXTRACURRICULAR_DATA: Extracurricular[] = [
    {
        title: 'Contributor at Winter of Code Social (WOCS)',
        organization: 'Code Social',
        description: 'Contributed to open-source projects and collaborated with the Code Social community.',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1A-x3dAnhrvPtJJd-Y7-JyfP6pbaU2nDT/view?usp=drive_link',
    },
    {
        title: 'Platinum Attendee at Microsoft Cloud and AI Bootcamp',
        organization: 'Microsoft',
        description: 'Engaged in intensive sessions on cloud computing and AI technologies, earning a platinum attendee status.',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1QdcskLPSIDyYmoKco35x_NqVfWXwUSzs/view?usp=drive_link',
    },
    {
        title: 'IBM TechXchange Dev Day: AI Automation Unpacked',
        organization: 'IBM',
        description: 'Attended a technical event focused on AI-driven automation, exploring the latest tools and strategies from IBM.',
        linkText: 'Certificate',
        link: 'https://drive.google.com/file/d/1TPOqDipQiQ4ccxiYzy1P5E5UHvTUJl6K/view?usp=drive_link',
    },
    {
        title: 'Participated in Viksit Bharath Quiz',
        organization: 'Government of India',
        description: 'Participated in a national-level quiz aimed at promoting awareness about India\'s development and heritage.',
        linkText: '',
    },
];

export const SKILLS_DATA: SkillCategory[] = [
    {
        title: 'Languages',
        skills: ['C', 'Python', 'Java', 'HTML5', 'CSS3', 'JavaScript' ,'TypeScript'],
    },
    {
        title: 'Frameworks',
        skills: ['ReactJS', 'NodeJS', 'TailwindCSS', 'Bootstrap', 'Django'],
    },
    {
        title: 'Developer Tools',
        skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'Vercel', 'Netlify', 'Firebase', 'Docker','Figma' , 'Canva' ,'WordPress'],
    },
    {
        title: 'Databases',
        skills: ['MongoDB', 'MySQL'],
    },
    {
        title: 'AI Tools',
        skills: ['Google AI Studio', 'Replit', 'Claude', 'Cursor AI', 'qoder' ,'Wix' ,'Emergent'],
    },
    {
        title: 'Soft Skills',
        skills: ['Communication', 'Time Management', 'Project Management', 'Leadership'],
    }
];

export const SOCIAL_LINKS = [
    { name: 'Email', icon: EMAIL_ICON, url: 'mailto:pavankumargr1904@gmail.com' },
    { name: 'LinkedIn', icon: LINKEDIN_ICON, url: 'https://www.linkedin.com/in/Pavan-Kumar-GR/' },
    { name: 'GitHub', icon: GITHUB_ICON, url: 'https://github.com/Pavankumargr2004' },
    { name: 'Google Developers', icon: GOOGLE_DEV_ICON, url: 'https://g.dev/Pavankumargr1904' },
    { name: 'Kaggle', icon: KAGGLE_ICON, url: 'https://www.kaggle.com/pavankumargr19' },
    { name: 'Discord', icon: DISCORD_ICON, url: 'https://discord.com/channels/pavankuamrgr2004_52286' },
    { name: 'Instagram', icon: INSTAGRAM_ICON, url: 'https://www.instagram.com/pavan_kumar_g_r_6' },
    { name: 'X', icon: X_ICON, url: 'https://x.com/pavan192004' },
];
