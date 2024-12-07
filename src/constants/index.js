import project1_1 from "../assets/projects/project-1_1.png";
import project1_2 from "../assets/projects/project-1_2.png";

export const HERO_CONTENT = `
  I'm a developer passionate about leveraging data to create valuable, impactful products. My work lies at the intersection of engineering and innovation, blending thoughtful planning with robust development to craft solutions that deliver value and meet user needs.<br/><br/>
  Currently, I’m a Software Engineer at Hyperscalers contributing to the design, development, and testing of both front-end and back-end components for a cluster management system. My work focuses on ensuring the platform meets accessibility standards and best practices, delivering an inclusive and seamless user experience.<br/><br/>
  Beyond my current role, I’m constantly exploring ideas that address real-world needs, combining data engineering and data science to build meaningful, data-driven solutions.<br/><br/>
  In my spare time, I like hiking, reading, and playing tennis.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer Intern",
    company: "Hyperscalers Inc.",
    description: `Design, develop and optimize a high-performance cluster management system for both frontend and backend. I contribute to developing REST APIs with Flask and implement real-time visualizations to monitor hyper-performance computing resources, including GPU and memory usage, ensuring efficient resource management.`,
    technologies: ["Vue.js", "Flask", "Slurm", "Prometheus", "ECharts"],
  },
  {
    year: "2016 - 2018",
    role: "Technical Product Manager",
    company: "Hong Kong Lehui",
    description: `Collaborated with cross-functional teams including developers, data analysts, product managers, and sales teams to implement best practices in digital advertising platforms. Translated business requirements into technical solutions, prioritized features, and leveraged data insights to guide product strategy, ensuring the platform was scalable, user-friendly, and met customer needs.`,
    technologies: ["Python", "Pandas", "Mysql"],
  },
  {
    year: "2015 - 2016",
    role: "Technical Support",
    company: "Avazu Holding",
    description: `Interacted with customers to quickly identify and resolve technical issues, providing timely and accurate support, which resulted in highly satisfactory customer experiences. Contributed to product design and documentation, helping improve user experience and internal resources.`,
    technologies: ["Python", "Trello"],
  },
  {
    year: "2014 - 2015",
    role: "Full Stack Developer",
    company: "Dofun Network",
    description: `Developed and styled interactive web applications for WiFi portals across diverse environments, including public transport, office elevators, and hotels. Designed and implemented robust database structures and backend support using Django and MySQL, ensuring seamless functionality and efficient data management.`,
    technologies: ["HTML/CSS", "jQuery", "Django", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Cluster Management System",
    image: [
      {
        src:project1_1, 
        title:'Dashboard Page',
        description: 'Dashboard with a variety of charts',
      },
      {
        src:project1_2, 
        title:'Line charts',
        description: 'Line charts updated in real-time',
      }
    ],
    description:
      "A fully functional high-performance computing resource management system with capabilities for dynamically adding or removing nodes, clusters, and storage. It supports real-time resource usage visualization through a variety of interactive charts, including gauges, line charts, bar charts, and more, enabling efficient monitoring and management.",
    technologies: ["Vue.js", "TailwindCSS", "Flask", "Ehcarts", "Slurm", "Prometheus", "REST"],
  }
];

export const PUBLICATION = [
  {
    date: "07 October 2024",
    Authors: "Jie Song, Charini Nanayakkara and Peter Christen",
    title: "Privately evaluating sensitive population record linkage without ground truth data",
    Journal: "International Journal of Data Science and Analytics",
    description: `With our method we first build an estimated ground truth using publicly available data sets, which allows us to then measure the linkage quality obtained on sensitive population data.`,
    technologies: ["Privacy preserving evaluation", "Bloom filters", "Cluster Matching", "Group Linkage", "Sensitive data", "Population data"],
  }
];

export const CONTACT = {
  address: "Broadbent St, Scullin ACT 2614",
  phoneNo: "+61 4135 916 48 ",
  email: "jies_2408@126.com",
};
