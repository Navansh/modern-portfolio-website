import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
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
    meta,
    starbucks,
    tesla,
    shopify,
    vrixam,
    forzero,
    jobit,
    tripguide,
    threejs,
    razorpay_clone,
    discord_clone,
    ecomm_website,
    pointsix,
    studynotion,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id : "projects",
      title : "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Web3 Developer",
      icon: backend,
    },
    {
      title: "JAVA Developer",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Vrixam Amritam",
      icon: vrixam,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Frontend Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full Stack Developer",
      company_name: "ForZero",
      icon: forzero,
      iconBg: "#E6DEDD",
      date: "July 2023 - August 2023",
      points: [
        "Developed the main website of ForZero using React.js and Tailwind CSS.",
        "Developed the backend of ForZero using Node.js and MongoDB. for catering to the needs of the website.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Optimized the website for better performance and SEO.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Navansh proved me wrong.",
      name: "Hrishita",
      designation: "Founder",
      company: "Vrixam Amritam",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Navansh does.",
      name: "Shashank",
      designation: "Founder",
      company: "ForZero",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Navansh optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Aman Gairola",
      designation: "Founder and CDO",
      company: "Say Design Studio",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "StudyNotion",
      description:
        " Dive into a world of interactive learning materials, from engaging videos to gamified quizzes. Tailoring education to your strengths and dreams. Enter immersive virtual classrooms for fun collaboration, while progress tracking ensure continuous growth.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },{
          name: "MongoDB",
          color: "blue-text-gradient",
        },
      ],
      image: studynotion,
      source_code_link: "https://github.com/Navansh/studynotion-edtech-web",
      live_link : "https://studynotion-edtech-project.vercel.app/"
    },
    {
      name: "PointSix NFT Utility",
      description:
        "an innovative platform that revolutionizes the NFT space by empowering users to create utilities for their NFT collections.With our platform, NFT holders can add practical value and functionality to their digital assets, making them more than just collectibles.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "metamask",
          color: "blue-text-gradient",
        }
      ],
      image: pointsix,
      source_code_link: "https://github.com/Navansh/utility",
      live_link : "https://www.pointsix.xyz/" 
    },
    {
      name: "Payment Gateway App",
      description:
        "It is the simplest and most powerful way to accept payments online. With this, you can accept payments from all major credit and debit cards, UPI, and popular mobile wallets, helping you scale your online business, without worrying about compliance",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: razorpay_clone,
      source_code_link: "https://github.com/Navansh/Razorpay_Frontend_Clone",
      live_link : "https://razorpay-frontend-clone.vercel.app/",
    },
    
    // {
    //   name: "PointSix NFT Utility Builder",
    //   description:
    //     "The Discord Clone project is a web-based application developed using HTML, CSS, and Tailwind. The aim of the project is to replicate the popular communication platform - Discord, with similar features and functionalities.",
    //   tags: [
    //     {
    //       name: "html",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: discord_clone,
    //   source_code_link: "https://github.com/Navansh/utility",
    //   live_link : "https://www.pointsix.xyz/" 
    // },
    
    // {
    //   name: "Ecommerce Website",
    //   description:
    //     "The Ecommerce Website project is a web-based application developed using React.js, Redux, and Tailwind. The aim of the project is to create an online store where users can browse products, add items to their shopping cart, and make purchases.",
    //   tags: [
    //     {
    //       name: "react.js",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "redux",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: ecomm_website,
    //   source_code_link: "https://github.com/Navansh/shopping-website-react",
    //   live_link : "https://shopping-website-react-1-iqbbbmy1x-navansh.vercel.app/"
    // },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };