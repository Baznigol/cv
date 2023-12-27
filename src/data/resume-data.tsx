import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";





export const RESUME_DATA = {
  name: "Richard Nicholas Basile",
  initials: "RB",
  location: "Morrisville, North Carolina",
  locationLink: "https://www.google.com/maps/place/Morrisville,+NC/@35.8329151,-78.8396159,13z/data=!3m1!4b1!4m6!3m5!1s0x89ac9265aefc41d7:0xe1bf2f033fa3ab3e!8m2!3d35.823483!4d-78.8255621!16zL20vMDEzaHk3?entry=ttu'", 
  about:
    "Inquisitive Learner and Communicational Leader",
  summary:
    "Motivated, efficient pre-law student, now interning at Cisco, providing analytical and professional writing and auditory skills to address problems in varying fields.",
  avatarUrl: '',
  personalWebsiteUrl: "https://www.linkedin.com/in/richard-basile-69a04423a/",
  contact: {
    email: "rnbasile@ncsu.edu",
    tel: "919-610-1854",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Baznigol",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/richard-basile-69a04423a/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/RichardBaznigol",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "North Carolina State University",
      degree: "Pre-Law",
      start: "2023",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Cisco",
      link: "https://www.cisco.com",
      badges: ["Internship"],
      title: "Intern",
      logo: '',
      start: "06/2024",
      end: "",
      description: "Your role and responsibilities at Cisco."
    },
    {
      company: "Carolina Family Estate Planning",
      link: "https://www.carolinafep.com",
      badges: ["Law Firm"],
      title: "Law Firm Intern",
      logo: '',
      start: "05/2022",
      end: "01/2023",
      description: "Orchestrated preparation of comprehensive meeting notes and engaged in cross-functional collaboration to streamline operational processes."
    },
    {
      company: "Alzheimer's Association",
      link: "https://www.alz.org",
      badges: ["Advocacy"],
      title: "Lead Legislative Advocate",
      logo: '',
      start: "01/2023",
      end: "Current",
      description: "Kept up to date on case progress and successfully communicated with Congresswoman Deborah Ross to sign on as a co-sponsor for the Comprehensive Care for Alzheimer's Act."
    },
    {
      company: "180 Degrees Consulting",
      link: "https://www.180dc.org",
      badges: ["Consulting"],
      title: "Business Analyst",
      logo: '',
      start: "09/2023",
      end: "Current",
      description: "Interacted with internal customers to understand business needs, translating them into requirements and project scopes."
    },
  ],
  skills: [
    "Technical/Professional Writing",
    "Business Plan Development",
    "Consulting",
    "Introductory Python 3",
    "QuickBooks (Certification)",
    "Microsoft Excel (Certification)",
  ],

  projects: [
    {
      title: "Appstractify",
      techStack: ["Data Science", "Machine Learning", "CSV Manipulation"],
      description: "Development of an app for interactive data science and machine learning education."
    },
    {
      title: "Alzheimer's Advocacy",
      techStack: ["Community Outreach", "Advocacy"],
      description: "Advocacy and awareness raising for Alzheimer's research and patient support."
    },
    {
      title: "Seasons Village Consulting",
      techStack: ["Consulting", "Nonprofit Strategy", "Community Support"],
      description: "Strategic consulting for a nonprofit supporting single mothers."
    }
  ],
} as const;
