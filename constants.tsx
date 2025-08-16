import React from 'react';
import type { ResumeData } from './types';

const mardocheeBedaData: ResumeData = {
  id: "mardochee-beda",
  name: "MARDOCHÉE BEDA",
  title: "INGENIEUR SECURITE INFORMATIQUE",
  gender: 'male',
  profile: "Ingenieur sécurité informatique orienté gouvernance sécurité, engagé dans la gestion des incidents, la veille proactive et la sensibilisation à la sécurité. Ayant une solide expérience en tant qu'analyste SOC.",
  contact: {
    phone: "+225 0576777581",
    email: "bedaggam@gmail.com",
    location: "Abidjan, Cote d'Ivoire",
    linkedin: {
      text: "Gnamien Ange BEDA",
      url: "https://www.linkedin.com/in/gnamien-ange-beda-mardochee-1b1b3b1b3"
    }
  },
  skills: [
    { title: "Cybersécurité", skills: [
      { name: "Wazuh", isKeySkill: true }, { name: "ELK", isKeySkill: true }, { name: "Snort" }, { name: "OpenVAS" }, { name: "Centreon" }, { name: "Wireshark", isKeySkill: true }
    ] },
    { title: "Réseaux & Systèmes", skills: [
      { name: "Routage WAN" }, { name: "Troubleshooting" }, { name: "SDN" }, { name: "Switching" }, { name: "Linux/Windows Server", isKeySkill: true }
    ] },
    { title: "Gouvernance", skills: [{ name: "ISO 27001", isKeySkill: true }, { name: "ISO 27002" }, { name: "ISO 27005" }] },
    { title: "Scripting", skills: [{ name: "powershell" }, { name: "Bash", isKeySkill: true }] },
    { title: "Développement Web", skills: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }] },
    { title: "Automatisation", skills: [{ name: "Ansible" }, { name: "GPO" }] }
  ],
  certifications: [
    { issuer: "Cybrary", title: "Offensive Security Operations", year: 2025 },
    { issuer: "Simplilearn", title: "Azure Fundamentals", year: 2025 },
    { issuer: "Fortinet", title: "FCP FortiGate 7.4 Operator", year: 2024 },
    { issuer: "Cybrary", title: "Defensive Security Operations", year: 2024 },
    { issuer: "Cybrary", title: "Security Engineering & Cyber Risk", year: 2024 },
    { issuer: "Simplilearn", title: "CISSP fin de cours", year: 2023 },
  ],
  experience: [
    {
      role: "Analyste SOC",
      company: "TALENTYS SC CYBERSECURITÉ",
      location: "VITIB",
      period: "Depuis Novembre 2023",
      startDate: "Nov 2023",
      tasks: [
        "Surveillance Continue des Systemes",
        "Analyse de log et détection d'incidents",
        "Implémentation de correctifs et renforcement de la posture sécurité",
        "Collaboration avec Equipe IT (Systeme, Sécurité Réseau)",
        "Veille sur les menaces (CVE, IOC)",
        "Rédaction de rapports, documentation de sécurité, sensibilisation"
      ]
    },
    {
      role: "Technicien Réseau",
      company: "DGTCP Tresor CI",
      location: "PLATEAU",
      period: "Juillet 2023 - Novembre",
      startDate: "Jul 2023",
      tasks: [
        "Déploiement de routeurs Cisco, gestion du routage et de la segmentation",
        "Assurer de la connectivité réseau et support technique",
        "Maintenance d' ordinateurs"
      ]
    },
    {
      role: "Developer Web, Responsable de Projet",
      company: "TECHNIX",
      location: "YOPOUGON - COCODY",
      period: "Mai 2023 - Aout 2023",
      startDate: "Mai 2023",
      tasks: [
        "Conception Web avec Flutterflow et Figma",
        "Gestion de projet de développement de site web",
        "Formation d'équipes en HTML, CSS, JavaScript",
        "Maintenance de systèmes informatique"
      ]
    }
  ],
  education: [
    {
      degree: "Master 1 SAS - Sécurité Administration des Systèmes",
      institution: "Université Polytechnique de Bingerville (UPB)",
      period: "2024 - 2025"
    },
    {
      degree: "Licence ASSRI - Administration des Systèmes & Sécurité des Réseaux Informatiques",
      institution: "ESATIC",
      period: "2020 - 2023"
    },
    {
      degree: "Baccalaureat Scientifique",
      institution: "Lycee Moderne",
      period: "2020"
    }
  ],
  languages: [
    { language: "Français", proficiency: "Langue maternelle" },
    { language: "Anglais", proficiency: "Courant" },
  ],
  interests: ["Lecture", "Fitness", "Manga", "Dessin"]
};

const aliceMartinData: ResumeData = {
  id: "alice-martin",
  name: "ALICE MARTIN",
  title: "CLOUD SECURITY & DEVOPS ENGINEER",
  gender: 'female',
  profile: "Cloud Security Engineer with a passion for automating and securing cloud infrastructure. Experienced in AWS and Azure, focusing on DevSecOps principles to integrate security into the CI/CD pipeline.",
  contact: {
    phone: "+33 6 12 34 56 78",
    email: "alice.martin@email.com",
    location: "Paris, France",
    linkedin: {
      text: "Alice Martin",
      url: "https://www.linkedin.com/in/alicemartin"
    }
  },
  skills: [
    { title: "Cloud Security", skills: [
      { name: "AWS (GuardDuty, IAM)", isKeySkill: true }, { name: "Azure Sentinel", isKeySkill: true }, { name: "Terraform", isKeySkill: true }, { name: "Docker" }, { name: "Kubernetes" }
    ] },
    { title: "DevSecOps", skills: [
      { name: "CI/CD" }, { name: "Jenkins" }, { name: "GitLab CI" }, { name: "SAST/DAST", isKeySkill: true }, { name: "SonarQube" }
    ] },
    { title: "Scripting", skills: [{ name: "Python", isKeySkill: true }, { name: "Go" }, { name: "Bash" }] },
    { title: "Compliance", skills: [{ name: "GDPR" }, { name: "PCI-DSS" }, { name: "SOC 2" }] },
  ],
  certifications: [
    { issuer: "AWS", title: "Certified Security - Specialty", year: 2024 },
    { issuer: "Microsoft", title: "Azure Security Engineer Associate", year: 2023 },
    { issuer: "HashiCorp", title: "Terraform Associate", year: 2023 },
  ],
  experience: [
    {
      role: "Senior Cloud Security Engineer",
      company: "CloudProtect Inc.",
      location: "Remote",
      period: "2021 - Present",
      startDate: "Jan 2021",
      tasks: [
        "Implemented and managed security controls in a multi-cloud environment.",
        "Developed security-as-code using Terraform and CloudFormation.",
        "Integrated security scanning tools into the CI/CD pipeline.",
        "Responded to and investigated cloud security incidents."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "TechSolutions",
      location: "Lyon, France",
      period: "2019 - 2021",
      startDate: "Jun 2019",
      tasks: [
        "Managed and automated application deployments.",
        "Maintained CI/CD pipelines and infrastructure on AWS.",
        "Collaborated with developers to improve system reliability."
      ]
    }
  ],
  education: [
    {
      degree: "Master's in Computer Science",
      institution: "INSA Lyon",
      period: "2017 - 2019"
    },
    {
      degree: "Bachelor's in Software Engineering",
      institution: "Université Claude Bernard Lyon 1",
      period: "2014 - 2017"
    }
  ],
  languages: [
    { language: "Français", proficiency: "Langue maternelle" },
    { language: "Anglais", proficiency: "Professionnel" },
  ],
  interests: ["Hiking", "Photography", "Open Source Contribution"]
};

const charlesDuboisData: ResumeData = {
  id: "charles-dubois",
  name: "CHARLES DUBOIS",
  title: "PENETRATION TESTER & RED TEAMER",
  gender: 'male',
  profile: "An Offensive Security Certified Professional (OSCP) with a knack for identifying and exploiting vulnerabilities. Specializes in network and web application penetration testing, and red team operations.",
  contact: {
    phone: "+1 514 987 6543",
    email: "charles.dubois@email.com",
    location: "Montreal, Canada",
    linkedin: {
      text: "Charles Dubois",
      url: "https://www.linkedin.com/in/charlesdubois"
    }
  },
  skills: [
    { title: "Offensive Security", skills: [
      { name: "Metasploit", isKeySkill: true }, { name: "Burp Suite", isKeySkill: true }, { name: "Nmap" }, { name: "Cobalt Strike", isKeySkill: true }, { name: "Active Directory Exploitation" }
    ] },
    { title: "Programming", skills: [{ name: "Python", isKeySkill: true }, { name: "C++" }, { name: "Assembly" }] },
    { title: "Reverse Engineering", skills: [{ name: "Ghidra" }, { name: "IDA Pro" }] },
    { title: "Forensics", skills: [{ name: "Volatility" }, { name: "Wireshark" }] },
  ],
  certifications: [
    { issuer: "Offensive Security", title: "OSCP", year: 2022 },
    { issuer: "eLearnSecurity", title: "eWPTXv2", year: 2023 },
    { issuer: "CREST", title: "CRT", year: 2021 },
  ],
  experience: [
    {
      role: "Penetration Tester",
      company: "SecureWorks",
      location: "Montreal, Canada",
      period: "2020 - Present",
      startDate: "Mar 2020",
      tasks: [
        "Conducted black-box and white-box penetration tests on web applications and corporate networks.",
        "Performed red team exercises to test client defenses.",
        "Wrote detailed reports outlining vulnerabilities and remediation steps.",
        "Developed custom exploit scripts and tools."
      ]
    },
    {
      role: "Security Analyst",
      company: "Global Bank Corp",
      location: "Toronto, Canada",
      period: "2018 - 2020",
      startDate: "Jul 2018",
      tasks: [
        "Monitored network traffic for suspicious activity.",
        "Analyzed malware and performed initial incident response.",
        "Assisted with vulnerability management and patching.",
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering, Information Security",
      institution: "Concordia University",
      period: "2014 - 2018"
    }
  ],
  languages: [
    { language: "Anglais", proficiency: "Maternelle" },
    { language: "Français", proficiency: "Courant" },
  ],
  interests: ["CTF Competitions", "Lock Picking", "Cryptocurrency Research"]
};

const elenaPetrovaData: ResumeData = {
  id: "elena-petrova",
  name: "ELENA PETROVA",
  title: "ANALYSTE EN CYBER-RENSEIGNEMENT",
  gender: 'female',
  profile: "Analyste en cyber-renseignement spécialisée dans le suivi des menaces persistantes avancées (APT). Experte en analyse de menaces géopolitiques, en renseignement open-source (OSINT) et dans le framework MITRE ATT&CK.",
  contact: {
    phone: "+44 20 7946 0958",
    email: "elena.petrova@email.co.uk",
    location: "Londres, Royaume-Uni",
    linkedin: {
      text: "Elena Petrova",
      url: "https://linkedin.com/in/elenapetrovact"
    }
  },
  skills: [
    { title: "Threat Intelligence", skills: [{ name: "MITRE ATT&CK", isKeySkill: true }, { name: "OSINT", isKeySkill: true }, { name: "Maltego" }, { name: "ThreatConnect" }, { name: "Règles YARA", isKeySkill: true }] },
    { title: "Analyse de Données", skills: [{ name: "Splunk" }, { name: "SQL" }, { name: "Python (Pandas)" }] },
    { title: "Géopolitique", skills: [{ name: "Acteurs de menaces Russes/Est-Européens", isKeySkill: true }] },
  ],
  certifications: [
    { issuer: "SANS Institute", title: "GCTI (GIAC Cyber Threat Intelligence)", year: 2023 },
    { issuer: "ThreatQuotient", title: "ThreatQ Certified Analyst", year: 2022 },
  ],
  experience: [
    {
      role: "Analyste en Cyber-Renseignement",
      company: "BAE Systems",
      location: "Londres, UK",
      period: "2021 - Présent",
      startDate: "Feb 2021",
      tasks: [
        "Suivi des campagnes APT ciblant les secteurs financiers et gouvernementaux.",
        "Production de rapports de renseignement exploitables pour les parties prenantes.",
        "Développement et maintenance d'un référentiel de TTP d'acteurs de menaces.",
      ]
    },
    {
      role: "Analyste de Sécurité Junior",
      company: "Darktrace",
      location: "Cambridge, UK",
      period: "2019 - 2021",
      startDate: "Sep 2019",
      tasks: [
        "Analyse des anomalies réseau à l'aide de la détection de menaces par IA.",
        "Investigation et triage des alertes de sécurité.",
      ]
    }
  ],
  education: [
    {
      degree: "MSc in War Studies",
      institution: "King's College London",
      period: "2018 - 2019"
    },
    {
      degree: "BA in International Relations",
      institution: "University of St Andrews",
      period: "2015 - 2018"
    }
  ],
  languages: [
    { language: "Anglais", proficiency: "Natif" },
    { language: "Russe", proficiency: "Natif" },
  ],
  interests: ["Échecs", "Histoire", "Politique Internationale"]
};


export const engineersData: ResumeData[] = [mardocheeBedaData, aliceMartinData, charlesDuboisData, elenaPetrovaData];


// ICONS
export const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
export const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
export const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
export const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
export const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
export const ExperienceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
export const EducationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>
);
export const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);
export const AddIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);
export const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);
export const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);