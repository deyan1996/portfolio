import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  nitk,
  cluboard,
  cash_flow,
  freadom,
  bank,
  gdsc,
  iris,
  ecell,
  genesis,
  todo,
  graphql,
  portfolio,
  publiclab,
  zulip,
  cdc,
  evermore,
  lucidity,
  panonIT,
  university
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGoogle,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMaterialui,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiRust,
  SiVuedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAngular,
  SiAnchor,
  SiReactivex,
  SiJava,
  SiJira,
  SiTypescript,
  SiNodedotjs,
  SiCss3,
} from "react-icons/si";

import { DiAws, DiCss3, DiReact, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1K47Rrpp5ePkmYHZzrXxahFESZfiPNMUt";
export const repoLink = "https://github.com/deyan1996";

export const callToAction = "https://www.linkedin.com/in/dejan-petrovic-139b41246/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: university,
    title: "Jilin University, ChangChun",
    degree: "Bachelor of Technology",
    duration: "Apr 2013 - Sep 2016",
    content1: "Major: Computer of Science",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiJavascript,
        name: "Javascript",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiRust,
        name: "Rust",
      },
      {
        id: "pl-4",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiCplusplus,
        name: "C/C++",
      },
      {
        id: "pl-8",
        icon: SiJava,
        name: "Java",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-2",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "f-3",
        icon: SiVuedotjs,
        name: "Vue.js",
      },
      {
        id: "f-4",
        icon: SiAngular,
        name: "AngularJS",
      },      
      {
        id: "f-8",
        icon: DiReact,
        name: "React Native",
      },
      {
        id: "f-9",
        icon: SiAnchor,
        name: "Anchor",
      },
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiMongodb,
        name: "Mongodb",
      },
      {
        id: "t-3",
        icon: SiPostgresql,
        name: "PostgreSql",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: DiAws,
        name: "AWS",
      },
      {
        id: "t-6",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-7",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-9",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "t-8",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Evermore",
    logo: evermore,
    link: "https://weareevermore.com/",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "Sep 2019 - Aug 2022",
        content: [
          {
            text: "Worked on several web3 projects and wrote smart contracts in solidity, rust on Solana network.",
            link: "",
          },
          {
            text: "Developed frontend web and mobile applications by using React.js and Vue.js, React Native",
            link: "",
          },
          {
            text: "Integrated backend logics and API interfaces by using Node.js and as well as Database models with MongoDB",
            link: "",
          }
        ],
      },
    ],
  },
  {
    organisation: "Lucidity",
    logo: lucidity,
    link: "https://www.lucidity.io/",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "Mar 2018 - Aug 2019",
        content: [
          {
            text: "Mainly developed real time communications by using Socket.io and Node.js",
            link: "",
          },
          {
            text: "Curated over 50 website changes to increase the user flow and understanding of all platform capabilities and features",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "PanonIT",
    logo: panonIT,
    link: "https://cdc.nitk.ac.in/",
    positions: [
      {
        title: "Frontend Developer",
        duration: "Sep 2016 - Feb 2018",
        content: [
          {
            text: "Designed a business locator for food businesses with 4+ star ratings.",
            link: "",
          },
          {
            text: "Developed front-end with HTML, CSS, JavaScript, jQuery, Bootstrap and integrated with MySQL Database.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "instacart",
    link: "https://www.instacart.com/",
    image: cluboard,
    content:
      "A full-stack web application that operates a grocery delivery and pick-up service in the United States and Canada.",
    stack: [
      {
        id: "icon-1",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-2",
        icon: SiReact,
        name: "React.js"
      },
      {
        id: "icon-4",
        icon: SiTypescript,
        name: "TypeScript"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      },  
    ],
  },
  {
    id: "project-2",
    title: "Meta Lion Kingdom",
    link: "https://metalionkingdom.com",
    image: cash_flow,
    content:
      "A NFT site that allow users to make transactions with meta lion NFTs",
    stack: [
      {
        id: "icon-1",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-3",
        icon: SiRust,
        name: "Rust"
      },
      {
        id: "icon-2",
        icon: SiReact,
        name: "React.js"
      },
      {
        id: "icon-4",
        icon: SiMaterialui,
        name: "Material UI"
      },
    ],
  },
  {
    id: "project-3",
    title: "Grey Goose",
    link: "https://shop.greygoose.com",
    image: portfolio,
    content: "A E-Shop site built using Vue.js+Node.js+MongoDB stack",
    stack: [
      {
        id: "icon-1",
        icon: SiVuedotjs,
        name: "Vue.js"
      },
      {
        id: "icon-5",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB"
      },
    ],
  },
  {
    id: "project-4",
    title: "Modifi",
    link: "https://www.modifi.com",
    image: bank,
    content:
      "A digital trade finance site built using React and Tailwind.",
    stack: [
      {
        id: "icon-1",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-2",
        icon: SiReact,
        name: "React.js"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-4",
        icon: SiPostgresql,
        name: "PostgreSql"
      },
      {
        id: "icon-5",
        icon: SiTailwindcss,
        name: "Tailwind"
      },
    ],
  },
  {
    id: "project-5",
    title: "Market Cursos",
    link: "https://marketcursos.com/ ",
    image: freadom,
    content:
      "A mobile app Accredited Academy to offer Online Courses using React Native",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React Native"
      },
      {
        id: "icon-2",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-3",
        icon: SiMaterialui,
        name: "React Native Material UI"
      },
      {
        id: "icon-4",
        icon: SiCss3,
        name: "CSS"
      }
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Google Developer Student Club, NITK",
    title: "Executive Member",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    organisation: "Genesis, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/dejan-petrovic-139b41246/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/deyan1996",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:dejanpetrovickgy@gmail.com",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const aboutMe = {
    name: "Dejan Petrovic",
    tagLine: "Full Stack Developer & Blockchain Developer",
    intro: "A senior full stack & blockchain developer with around 6 years of experience."
}