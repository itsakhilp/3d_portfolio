import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    shopify,
    tripguide,
    utube,
    jobit,
    threejs,
    jobsearch,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React JS Developer",
      icon: web,
    },
    {
      title: "React Native Mobile App's",
      icon: mobile,
    },
    {
      title: "Next JS Developer",
      icon: web,
    },
    
    {
      title: "MERN STACK",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: docker,
    },

    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Test Yantra Software Solutions",
      icon: starbucks,
      iconBg:"#E6DEDD",
      date: "Jun 2021 - Sep 2021 ",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Test Yantra Software Solutions",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - March 2023",
      points: [
        "Developing and maintaining web applications using React.js, Next.js.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Proficient in Next.js for server-side rendering, routing , and API integration, enhancing performance and SEO.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
 
  const projects = [
    {
      name: "Job Search App",
      description:
       "React Native based mobile application",
       tags: [
        {
          name: "reactnative",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },
        {
          name: "jsearch-api",
          color: "pink-text-gradient",
        },
        
      ],
      image: jobsearch,
      source_code_link: "https://github.com/itsakhilp/native_job_search",
    },
    ,
    {
      name: "Promptopia",
      description:
       "Next14 Prompt Sharing Application",
       tags: [
        {
          name: "next14",
          color: "blue-text-gradient",
        },
        {
          name: "next auth",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "mongoDb",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/itsakhilp/nextjs_promptopia",
    },
    {
      name: "Youtube clone",
      description:
        // "Web-based video platform that allows users to search, watch videos rentals from various videos and channels, providing a convenient and efficient solution for video platform needs.",
       "Web-based video platform ",
       tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: utube,
      source_code_link: "https://github.com/itsakhilp/youtube_clone",
    },
    {
      name: "E-commerce",
      description:
        "Web-based shopping platform",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, projects };