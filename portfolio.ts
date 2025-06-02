import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Kritabh Kaushal",
  title: "Hi all, I'm Kritabh",
  description:
    "I'm a cybersecurity enthusiast and MCA student with hands-on experience in SIEM, intrusion detection, Linux hardening, and real-world threat detection projects. I’ve worked in cloud environments at Accenture and love building projects that solve real security problems.",
  resumeLink:
    "https://drive.google.com/file/d/18gUQgWUWLVPR_BWjS1FinnqyGGLacckq/view?usp=drive_link",
};

export const openSource = {
  githubUserName: "Kritabh13",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:Kritabhkaushal10@gmail.com",
  linkedin: "https://www.linkedin.com/in/kritabh-k-982b43122",
  github: "https://github.com/Kritabh13",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "PASSIONATE CYBERSECURITY PRACTITIONER AND LINUX ENTHUSIAST",
  data: [
    {
      title: "Cybersecurity & Threat Detection",
      lottieAnimationFile: "/lottie/skills/infra.json",
      skills: [
        emoji("⚡ Building and managing SIEM solutions with Splunk and ELK Stack"),
        emoji("⚡ Detecting network intrusions using Snort and firewall configurations"),
        emoji("⚡ Analyzing log data for anomalies and enhancing incident response"),
      ],
      softwareSkills: [
        {
          skillName: "SIEM (Splunk, ELK)",
          iconifyTag: "logos:splunk",
          imageUrl: "/img/apps/splunk-elk.png",
        },
        {
          skillName: "Snort IDS",
          iconifyTag: "logos:snort",
          imageUrl: "/img/icons/common/snort.webp",
        },
        {
          skillName: "UFW Firewall",
          iconifyTag: "logos:linux-tux",
          imageUrl: "/img/apps/ufw.png",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
          imageUrl: "/img/apps/python.png",
        },
        {
          skillName: "Linux",
          iconifyTag: "logos:linux",
          imageUrl: "/img/apps/ufw.png",
        },
        {
          skillName: "Bash",
          iconifyTag: "logos:gnu-bash",
          imageUrl: "/img/apps/bash.png",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  { Stack: "Cybersecurity & Threat Detection", progressPercentage: "85" },
  { Stack: "Programming (Python, Bash, C++)", progressPercentage: "70" },
  { Stack: "Linux & System Administration", progressPercentage: "80" },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Tezpur University",
    subHeader: "Master of Computer Applications (MCA)",
    duration: "April 2024 – 2026",
    desc: "Focused on system security, cloud infrastructure, and networking as part of my cybersecurity career path.",
    grade: "",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Packaged App Development Associate",
    company: "Accenture",
    companyLogo: "/img/icons/common/accenture.png",
    date: "June 2023 – February 2024",
    desc: `Worked in a cloud and Linux security environment. Assisted in vulnerability patching, monitored system security, and contributed to Azure Linux server hardening.`,
  },
];

export const projects: ProjectType[] = [
  {
   
  name: "SIEM with ELK Stack",
  desc: "Deployed and configured ELK Stack for real-time log analysis, integrated logs from various sources, and set up custom dashboards for threat detection.",
  github: "https://github.com/Kritabh13",
  linkedin:"https://www.linkedin.com/posts/activity-7283167858916761602-Dqr3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB5swbIBkOARZDMZfk_IDRyzOTaOWqa0_lk"
   ,// Update if you make a dedicated repo
  },
  {
    name: "Firewall on Kali Linux using UFW",
    desc: "Configured UFW rules to filter inbound/outbound traffic, implemented logging, allowlists, blocklists, and hardened system-level access.",
    github: "https://github.com/Kritabh13",
    linkedin:"https://www.linkedin.com/posts/activity-7280232545298870272-MOCW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB5swbIBkOARZDMZfk_IDRyzOTaOWqa0_lk",
     // Update if you make a dedicated repo
  },
  {
    name: "SIEM with Splunk Enterprise Security",
    desc: "Installed and configured Splunk for multi-source log ingestion and created custom dashboards and correlation rules to detect security incidents.",
    github: "https://github.com/Kritabh13",
    linkedin: "https://www.linkedin.com/posts/activity-7291421125710921728-8S-4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB5swbIBkOARZDMZfk_IDRyzOTaOWqa0_lk"
    , // Update if you make a dedicated repo
  },
  {
    name: "Intrusion Detection System (Snort++)",
    desc: "Implemented Snort-based IDS with custom rules, traffic monitoring, and attack simulations to validate alert generation and packet logging.",
    github: "https://github.com/Kritabh13", // Update if you make a dedicated repo
  },
];

export const feedbacks: FeedbackType[] = [];

export const seoData: SEODataType = {
  title: "Kritabh Kaushal",
  description: greetings.description,
  author: "Kritabh Kaushal",
  image: "https://avatars.githubusercontent.com/u/your-github-user-id.png", // Optional: replace with your GitHub avatar image
  url: "https://Kritabh13.github.io", // This will be your GitHub Pages link
  keywords: [
    "Kritabh Kaushal",
    "Cybersecurity Portfolio",
    "SIEM",
    "Snort",
    "Linux Security",
    "SOC Analyst Portfolio",
  ],
};
