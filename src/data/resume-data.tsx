import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tristan Russell",
  initials: "TR",
  location: "Vancouver, Canada",
  locationLink: "https://www.google.com/maps/place/Vancouver",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "Hi, my name is Tristan Russell. I'm a driven and analytical UBC Cognitive Systems graduate with experience in software QA automation and machine learning. Committed to continuously learning new skills and delivering high quality solutions. Former Varsity Outdoor Club webmaster responsible for the club's website and email services.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://tristanrussell2000.github.io",
  contact: {
    email: "tristanrussell2000@gmail.com",
    tel: "+16047007869",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tristanrussell2000",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tristanrussell2000/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of British Columbia",
      degree: "Bachelor's Degree in Cognitive Systems - Computational Intelligence and Design",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "UBC ECE",
      link: "",
      badges: ["Course Project"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "Jan 2023",
      end: "Apr 2023",
      description:
        "Continued work on prostate cancer detection for a research project course by investigating the shortfalls of previously trained models
",
    },
    {
      company: "UBC ECE",
      link: "",
      badges: ["Coop Internship"],
      title: "Junior Software Engineer Co-op",
      logo: ClevertechLogo,
      start: "May 2022",
      end: "August 2022",
      description:
        "Responsible for a research project to build a cancer detection machine learning system",
    },
    {
      company: "Absolute Software,
      link: "https://bsgroup.eu/",
      badges: ["Coop Internship"],
      title: "Associate QA Test Developer",
      logo: JojoMobileLogo,
      start: "Jan 2020",
      end: "Dec 2020",
      description:
        "Worked in the QA Automation team, a cross-functional agile team that maintained automated test frameworks for a Java microservice web app managed with Kubernetes",
    },
  ],
  skills: [
    "Python",
    "Java",
    "Javascript",
    "SQL",
    "PyTorch",
    "HTML",
    "CSS",
    "Docker",
    "JIRA",
    "Numpy",
  ],
  projects: [
    {
      title: "UBC Varsity Outdoor Club",
      techStack: [
        "Student Club Webstite",
        "Webmaster",
        "PHP",
        "Wordpress",
        "MySQL",
        "Django",
        "Python",
      ],
      description: "Maintained the webstie for the UBC Outdoors Club",
      logo: ConsultlyLogo,
      link: {
        label: "ubc-voc.com",
        href: "https://ubc-voc.com/",
      },
    },    
  ],
} as const;
