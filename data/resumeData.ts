export interface Experience {
  company: string;
  client?: string;
  role: string;
  project?: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
  current?: boolean;
}

export interface Project {
  title: string;
  client?: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  location?: string;
}

export interface Achievement {
  title: string;
  year: string;
  description?: string;
  badge?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  fullName: string;
  preferredName: string;
  title: string;
  headline: string;
  yearsOfExperience: number;
  bio: string[];
  location: string;
  email: string;
  status: string;
  resumeUrl: string;
  socials: SocialLink[];
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  achievements: Achievement[];
  certifications: Certification[];
  education: Education[];
}

export const resumeData: ResumeData = {
  name: "John Robert Cruda",
  fullName: "John Robert Peligro Cruda",
  preferredName: "Rob",
  title: "Software Engineer",
  headline: "Full-Stack Engineer with 9+ years of experience specializing in Node.js, Laravel, React, Vue.js, MongoDB, MySQL & GCP.",
  yearsOfExperience: 9,
  bio: [
    "I am a versatile Software Engineer with over 9 years of overall development experience (5+ in senior/enterprise roles) crafting high-traffic web applications, reactive user interfaces, and scalable backend services.",
    "Experienced in leading technical integrations for major enterprise clients—including Globe Telecom, Jollibee, KROMA Entertainment, Rappit, and 917Ventures—with deep expertise in Node.js, PHP/Laravel, React, Vue.js, NoSQL/MongoDB, and Google Cloud Platform (GCP)."
  ],
  location: "Philippines (Available for Remote Worldwide)",
  email: "johnrobertlamina@gmail.com",
  status: "Available for new opportunities",
  resumeUrl: "https://docs.google.com/document/d/1_16f_jJx8agdvmunT6sxl8PAtFFRDKR6/edit?usp=sharing",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/robertlamina",
      username: "robertlamina",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/john-robert-cruda",
      username: "johnrobertcruda",
      icon: "Linkedin"
    },
    {
      platform: "Email",
      url: "mailto:johnrobertlamina@gmail.com",
      username: "johnrobertlamina@gmail.com",
      icon: "Mail"
    }
  ],
  skills: [
    {
      category: "Backend & APIs",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "AdonisJS" },
        { name: "PHP" },
        { name: "Laravel" },
        { name: "RESTful APIs" },
        { name: "Microservices" }
      ]
    },
    {
      category: "Frontend Frameworks",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Vue.js (Vuex)" },
        { name: "Angular" },
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "Tailwind CSS & CSS3" }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "MongoDB" },
        { name: "MySQL" },
        { name: "NoSQL" },
        { name: "Redis" },
        { name: "Schema Migration Scripts" }
      ]
    },
    {
      category: "Cloud, DevOps & E-Commerce",
      skills: [
        { name: "GCP (Cloud Logging & Error Reporting)" },
        { name: "AWS (Cognito, CloudFront)" },
        { name: "Docker" },
        { name: "ArgoCD" },
        { name: "Git / CI/CD Pipelines" },
        { name: "Shopify (Admin & Storefront APIs)" },
        { name: "WordPress" }
      ]
    }
  ],
  experiences: [
    {
      company: "Yondu / NCS",
      client: "Globe Telecom",
      role: "Software Engineer (Node.js & Angular)",
      project: "PEDG L3 Application Support & Maintenance | GOR/GOL WEB & API",
      location: "Taguig / Remote",
      period: "August 2025 — Present",
      description: "Delivering L3 application support, performance monitoring, and production fixes for mission-critical telecom services.",
      highlights: [
        "Diagnosed and resolved complex production issues and performance bottlenecks in high-volume Node.js services.",
        "Conducted in-depth post-incident investigations, delivering detailed Root Cause Analyses (RCAs) to prevent recurrence.",
        "Leveraged Google Cloud Platform (GCP) Cloud Logging and Error Reporting to trace real-time distributed application behavior.",
        "Designed and executed zero-downtime MongoDB schema migration scripts and query optimizations.",
        "Managed smooth cross-environment deployments (Dev, Staging, UAT, Prod) upholding rigorous configuration stability."
      ],
      skills: ["Node.js", "Angular", "GCP", "MongoDB", "Error Reporting", "CI/CD"],
      current: true
    },
    {
      company: "Yondu / NCS",
      client: "Jollibee",
      role: "Software Engineer (Node.js & ReactJS)",
      project: "Jollibee Kids Party (JKP Online Booking Engine)",
      location: "Remote",
      period: "July 2024 — June 2025",
      description: "Architected interactive party customization wizards, dynamic pricing calculators, and capacity scheduling systems.",
      highlights: [
        "Built responsive ReactJS multi-step wizard UI for selecting cities, branches, party zones, and timeslots with data retention state management.",
        "Engineered real-time party package calculator with preset bundles (A, B, C, D) and 'Create Your Own' (CYO) dynamic meal builders.",
        "Developed Node.js scheduling engine to enforce branch capacity rules, adjoined room locks, and concurrent double-booking prevention.",
        "Engineered transactional 15-minute checkout session timers that dynamically hold slots and gracefully release inventory upon expiration.",
        "Integrated secure payment gateways (Credit Cards, Maya, QRPH) alongside asynchronous email confirmations."
      ],
      skills: ["React.js", "Node.js", "Payment Gateways (Maya/QRPH)", "State Management", "REST APIs"]
    },
    {
      company: "Yondu / NCS",
      client: "KROMA Entertainment",
      role: "Software Engineer (Node.js, ReactJS, Vue.js)",
      project: "PIE (Pilipino Interactive Entertainment)",
      location: "Remote",
      period: "March 2023 — March 2025",
      description: "Built real-time interactive overlays, live polling, and gamification modules synced with live television broadcast schedules.",
      highlights: [
        "Constructed high-performance ReactJS UI components overlaid directly on live HLS/Hype video streaming players without frame drops.",
        "Engineered rapid-fire buzzers, trivia wizards, and click-to-vote meters responsive to live commands pushed by production control rooms.",
        "Conducted strict performance profiling to eliminate UI lag and memory leaks during massive live audience data feeds.",
        "Utilized feature flags to deploy gamified blocks (Tamang Hinala, Mukhang Perya) in lockstep with broadcast timelines."
      ],
      skills: ["React.js", "Vue.js", "Node.js", "WebSockets", "Live Video Streaming (HLS)", "Performance Tuning"]
    },
    {
      company: "Yondu / NCS",
      client: "Rappit",
      role: "Software Engineer (Vue.js)",
      project: "Rappit Grocery Quick-Commerce Platform",
      location: "Remote",
      period: "October 2022 — March 2023",
      description: "Built high-speed grocery shopping interfaces, warehouse picking systems, and AWS-backed authentication.",
      highlights: [
        "Optimized Vue.js interfaces for instant catalog search and real-time inventory updates across 6,000+ grocery products.",
        "Managed Vuex multi-step checkout state enforcing location rules, minimum order values, and store item quotas.",
        "Developed internal store fulfillment dashboards for rapid picking, packing, and routing across local Puregold branches.",
        "Implemented AWS Cognito MFA user authentication and configured AWS CloudFront edge caching for optimized SPA delivery."
      ],
      skills: ["Vue.js", "Vuex", "AWS Cognito", "AWS CloudFront", "REST APIs"]
    },
    {
      company: "Yondu / NCS",
      client: "Purego",
      role: "Software Engineer (Shopify & Backend)",
      project: "Purego Grocery E-Commerce",
      location: "Remote",
      period: "May 2021 — October 2022",
      description: "Developed customized digital commerce features and real-time supermarket inventory synchronization.",
      highlights: [
        "Utilized Shopify Admin GraphQL API and Storefront API for grocery catalogue browsing and customized checkout workflows.",
        "Wrote custom Shopify Functions to enforce proximity delivery fees, promotional discounts, and localized delivery rules.",
        "Engineered real-time inventory synchronization connecting Shopify online storefronts with physical Puregold supermarket stocks."
      ],
      skills: ["Shopify GraphQL", "Shopify Functions", "JavaScript", "E-Commerce", "Webhooks"]
    },
    {
      company: "Yondu / NCS",
      client: "917Ventures",
      role: "Software Engineer (Laravel & Vue.js)",
      project: "Speedy Ticket (Event Ticketing Engine)",
      location: "Remote",
      period: "October 2022 — March 2023",
      description: "Built high-concurrency ticket purchasing, seat reservation maps, and role-based permissions.",
      highlights: [
        "Developed reactive Vue.js venue seat selector and tier pickers updating instantaneously based on real-time availability.",
        "Designed granular RBAC matrix with Spatie Laravel Permission separating buyers, organizers, scanning staff, and super admins.",
        "Architected Laravel REST APIs capable of handling high traffic spikes during peak on-sale windows without race conditions."
      ],
      skills: ["Laravel", "PHP", "Vue.js", "Spatie Permission (RBAC)", "MySQL"]
    },
    {
      company: "Halcyon Digital",
      role: "Backend Developer (Laravel)",
      project: "Modular Enterprise Boilerplate & Core APIs",
      location: "Remote",
      period: "2019 — 2021",
      description: "Architected modular Laravel application boilerplate accelerating enterprise software scaffolding.",
      highlights: [
        "Engineered standardized RESTful API structure with uniform JSON responses, global exception handlers, and DTOs.",
        "Enforced Clean Architecture patterns (Repositories, Services, Action Classes) to encourage loose coupling.",
        "Pre-configured polymorphic RBAC schemas and optimized database indexing baselines across MySQL and PostgreSQL."
      ],
      skills: ["Laravel", "PHP", "MySQL", "PostgreSQL", "Clean Architecture", "RBAC"]
    },
    {
      company: "FourPointZero",
      role: "Fullstack Developer",
      project: "Justpay.to & Financial Portals",
      location: "Manila / Remote",
      period: "2016 — 2018",
      description: "Implemented payment integration endpoints and interactive client dashboards.",
      highlights: [
        "Built standardized RESTful API endpoints and financial integration layers.",
        "Developed responsive Vue.js dashboards and admin monitoring views."
      ],
      skills: ["PHP", "JavaScript", "Vue.js", "Payment Gateways", "MySQL"]
    }
  ],
  projects: [
    {
      title: "Globe Telecom PEDG Support & Services",
      client: "Globe Telecom",
      tagline: "High-availability L3 support, MongoDB migrations, and GCP monitoring.",
      description: "Mission-critical L3 application support system ensuring 99.9% uptime for core telecom web and API services. Won Outstanding Project Winner 2025.",
      tags: ["Node.js", "Angular", "GCP Logging", "MongoDB", "Schema Migrations", "CI/CD"],
      featured: true
    },
    {
      title: "Jollibee Kids Party (JKP) Online Booking",
      client: "Jollibee",
      tagline: "Interactive booking engine with custom meal calculators and slot locking.",
      description: "End-to-end party package customizer with real-time room capacity locking, 15-minute transactional session timer, and multi-gateway payments (Maya/QRPH).",
      tags: ["React.js", "Node.js", "State Management", "Payment Gateways", "REST APIs"],
      featured: true
    },
    {
      title: "PIE Channel (Interactive Live Streaming)",
      client: "KROMA Entertainment",
      tagline: "Real-time interactive video overlays and synchronized live gamification.",
      description: "Interactive gaming and polling overlay atop live TV broadcasts with sub-second buzzer response, live trivia wizards, and zero-frame-drop rendering.",
      tags: ["React.js", "Vue.js", "Node.js", "HLS Streaming", "WebSockets", "Performance Tuning"],
      featured: true
    },
    {
      title: "Rappit Quick-Commerce Grocery Platform",
      client: "Rappit / Puregold",
      tagline: "E-commerce catalog search, warehouse routing, and AWS edge routing.",
      description: "High-traffic grocery shopping experience featuring 6,000+ item catalog indexing, automated store routing for picking/packing, and AWS Cognito MFA.",
      tags: ["Vue.js", "Vuex", "AWS Cognito", "AWS CloudFront", "REST APIs"],
      featured: true
    },
    {
      title: "Speedy Ticket Booking System",
      client: "917Ventures",
      tagline: "High-volume ticketing system with seat mapping and RBAC.",
      description: "Ticketing platform capable of handling peak on-sale surges without concurrency issues, featuring interactive seat selection and Spatie polymorphic RBAC.",
      tags: ["Laravel", "PHP", "Vue.js", "RBAC", "MySQL"],
      featured: false
    },
    {
      title: "Enterprise Reusable Microservices Boilerplate",
      client: "Halcyon Digital",
      tagline: "Modular backend starter architecture with standardized patterns.",
      description: "Production-ready Laravel foundation implementing Clean Architecture, unified response handlers, and pre-indexed database schemas.",
      tags: ["Laravel", "PHP", "MySQL", "Clean Architecture", "DTOs"],
      featured: false
    }
  ],
  achievements: [
    {
      title: "2025 Yondu Code Champion",
      year: "2025",
      description: "Recognized as the top code champion for technical excellence and engineering rigor.",
      badge: "Champion"
    },
    {
      title: "Outstanding Project Winner (PEDG Support)",
      year: "2025",
      description: "Awarded Outstanding Project for superior reliability and L3 support excellence on Globe Telecom services.",
      badge: "Winner"
    },
    {
      title: "Spot Awards (Multiple Quarters)",
      year: "2025 — 2026",
      description: "Awarded for exceptional contributions, incident resolution speed, and engineering support.",
      badge: "Spot Award"
    },
    {
      title: "AI Starter : Bronze Level",
      year: "2026",
      description: "Certified proficiency in applying AI tools and generative workflows to software engineering.",
      badge: "Certification"
    },
    {
      title: "Trend Setter & Gimme Five Awards",
      year: "Q1 2026",
      description: "Honored for driving innovation and positive collaborative momentum across engineering pods.",
      badge: "Excellence"
    }
  ],
  certifications: [
    {
      title: "NCII Computer Hardware Servicing",
      issuer: "TESDA",
      year: "2014",
      location: "Pasig, Philippines"
    }
  ],
  education: [
    {
      degree: "Information Computer Technology (ICT)",
      institution: "Southwestern Technical Institute of Business and Arts",
      period: "2013 — 2015",
      details: "Comprehensive foundation in computer systems, programming fundamentals, algorithms, and hardware architecture."
    }
  ]
};