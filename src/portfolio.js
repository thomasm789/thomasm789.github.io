// Website related settings
const settings = {
  isSplash: false // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Thomas' Portfolio",
  description: "XXXX",
  og: {
    title: "Thomas Mason Portfolio",
    type: "website",
    url: "https://tmason.uk/"
  }
};

//Home Page
const greeting = {
  title: "Hello There!",
  logo_name: "ThomasMason",
  nickname: "",
  subTitle:
  '"I\'m an experienced and respected Head of Engineering with 15+ years in software engineering and 5+ years in management. I empower teams to build scalable, impactful products and solutions that drive business growth."',
  resumeLink: "https://github.com/thomasm789",
  githubProfile: "https://github.com/thomasm789"
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/thomasm789",
  // linkedin: "https://www.linkedin.com/in/tmason-developer/",
  {
    name: "Github",
    link: "https://github.com/thomasm789",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717" // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tmason-developer/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5" // Reference https://simpleicons.org/?q=linkedin
  }
];

const skills = {
  data: [
  {
    title: "Software Delivery",
    fileName: "TeamworkDeliveryImg",
    skills: [
      "⚡ I lead agile teams and champion iterative delivery, I believe in regular sprint cycles, fast feedback loops, and a focus on quality to help me and my teams continually improve.",
      "⚡ I design and implement CI/CD pipelines to automate testing, building, and deployment. This helps deliver software quickly, safely and consistently.",
      "⚡ I bring development, operations and business teams together to streamline how we work, improve communication and build solutions that deliver real value."
    ],
    softwareSkills: [
      {
        skillName: "Jenkins",
        fontAwesomeClassname: "simple-icons:jenkins",
        style: { color: "#D24939" }
      },
      {
        skillName: "Git",
        fontAwesomeClassname: "simple-icons:git",
        style: { color: "#F05032" }
      },
      {
        skillName: "GitHub",
        fontAwesomeClassname: "simple-icons:github",
        style: { color: "#181717" }
      },
      {
        skillName: "GitHub Actions",
        fontAwesomeClassname: "simple-icons:githubactions",
        style: { color: "#2088FF" }
      },
      {
        skillName: "Bitbucket",
        fontAwesomeClassname: "simple-icons:bitbucket",
        style: { color: "#0052CC" }
      },
      {
        skillName: "Jira",
        fontAwesomeClassname: "simple-icons:jira",
        style: { color: "#0052CC" }
      },
      {
        skillName: "Confluence",
        fontAwesomeClassname: "simple-icons:confluence",
        style: { color: "#0052CC" }
      }
    ]
  },
  {
    title: "Software Development and Cloud",
    fileName: "CloudInfraImg",
    skills: [
      "⚡ I design and deploy applications across AWS, GCP and Azure. I optimise for scalability, resilience and cost.",
      "⚡ I build robust end-to-end systems using Python, PHP and JavaScript. That includes powerful APIs and responsive UIs.",
      "⚡ I specialise in cloud-native development with containerisation, microservices and serverless to enable rapid and modern delivery."
    ],
    softwareSkills: [
      { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws", style: { color: "#FF9900" } },
      { skillName: "GCP", fontAwesomeClassname: "simple-icons:googlecloud", style: { color: "#4285F4" } },
      { skillName: "Azure", fontAwesomeClassname: "simple-icons:microsoftazure", style: { color: "#0089D6" } },
      { skillName: "Python", fontAwesomeClassname: "simple-icons:python", style: { color: "#3776AB" } },
      { skillName: "PHP", fontAwesomeClassname: "simple-icons:php", style: { color: "#777BB4" } },
      { skillName: "MySQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
      { skillName: "Terraform", fontAwesomeClassname: "simple-icons:terraform", style: { color: "#7B42BC" } },
      { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#1488C6" } },
      { skillName: "Kubernetes", fontAwesomeClassname: "simple-icons:kubernetes", style: { color: "#326CE5" } },
      { skillName: "JetBrains", fontAwesomeClassname: "simple-icons:jetbrains", style: { color: "#000000" } },
      { skillName: "PyCharm", fontAwesomeClassname: "simple-icons:pycharm", style: { color: "#000000" } },
      { skillName: "PhpStorm", fontAwesomeClassname: "simple-icons:phpstorm", style: { color: "#000000" } },
      { skillName: "IntelliJ", fontAwesomeClassname: "simple-icons:intellijidea", style: { color: "#000000" } },
    ]
  },
  {
    title: "Leadership in Engineering & Technology Strategy",
    fileName: "DataScienceImg",
    skills: [
      "⚡ I lead cross-functional teams to deliver ambitious programmes of work that move the business forward.",
      "⚡ I define technology strategies and align roadmaps with the outcomes that matter most to the organisation.",
      "⚡ I help engineering teams grow and adapt, scaling effectively as technologies and priorities change."
    ],
    softwareSkills: []
  },
  {
    title: "Mentorship & Team Development",
    fileName: "TeamworkImg",
    skills: [
      "⚡ I build a culture where engineers thrive. Collaboration, learning and curiosity are all encouraged.",
      "⚡ I mentor individuals across different levels, supporting both technical growth and leadership potential.",
      "⚡ I build inclusive, high-performing teams that solve tough problems and support one another."
    ],
    softwareSkills: []
  },
  {
    title: "Innovation & Modernisation",
    fileName: "DesignImg",
    skills: [
      "⚡ I lead the modernisation of legacy systems and workflows, introducing automation, security and scalability.",
      "⚡ I focus on outcomes, making sure every solution is robust, elegant and aligned to business priorities.",
      "⚡ I champion a Cloud First approach, enabling agility and resilience through modern architecture."
    ],
    softwareSkills: []
  }
]

};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B"
      },
      profileLink: "https://leetcode.com/layman_brother/"
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/layman_brother"
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638"
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919"
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB"
      },
      profileLink: "http://codeforces.com/profile/layman_brother"
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/laymanbrother"
    }
  ]
};

const communities_conferences = {
  communities_conferences: [
    {
      title: "EngineeringX",
      subtitle: "Community",
      alt_name: "EngineeringX",
      duration: "2021 - Present",
      descriptions: [
        "I engage with EngineeringX to explore and embed engineering excellence across teams and organisations. Discussions centre around practical maturity models, delivery health, and frameworks like DORA, SPACE, and Team Topologies. It’s a space for engineering leaders to reflect on how technical strategy, team structure, and cultural practices drive long-term effectiveness. I regularly contribute thoughts on sustainable delivery, quality at scale, and building environments where engineers can do their best work."
      ],
      website_link: "https://engineeringx.org/"
    },
    {
      title: "DevOps Dining",
      subtitle: "Networking Series",
      alt_name: "DevOps Dining",
      duration: "2022 - Present",
      descriptions: [
        "DevOps Dining brings together technology leaders in an informal, off-the-record setting to explore modern approaches to software delivery, cloud adoption, and platform engineering. I attend regularly to engage in candid conversations around scaling DevOps practices, improving developer experience, and accelerating innovation. It’s a space where honest dialogue, shared challenges, and a great meal combine to create genuinely valuable peer learning."
      ]
      // website_link: "https://www.indiana.edu/",
    },
    {
      title: "CTO Craft",
      subtitle: "Community & Conference",
      alt_name: "CTO Craft",
      duration: "2022 - Present",
      descriptions: [
        "CTO Craft is one of the most valuable spaces I’ve found for engineering leadership. Through the Campus community and London conferences, I connect with other technology leaders to share experiences on everything from scaling teams and shaping culture to managing delivery, hiring, and influencing strategy. I regularly take part in roundtables, AMAs, and peer-led sessions that challenge my thinking and help me refine how I lead. It’s a rare space that balances practical advice with strategic depth."
      ],
      website_link: "https://ctocraft.com/"
    },
    {
      title: "London Python",
      subtitle: "Meetup Community",
      alt_name: "London Python",
      duration: "2022 - Present",
      descriptions: [
        "London Python is a regular fixture in my calendar for staying close to the evolving Python ecosystem. The meetups offer a practical mix of talks and community discussion, covering everything from backend frameworks and data pipelines to tooling and testing. It’s a great place to exchange ideas with fellow engineers and keep up with how others are applying Python at scale."
      ],
      website_link: "https://www.meetup.com/LondonPython"
    },
    {
      title: "PHP London",
      subtitle: "Meetup Community",
      alt_name: "PHP London",
      duration: "2013 - Present",
      descriptions: [
        "PHP London has been part of my journey since my early days in software development. I still attend to stay current with the language and its modern ecosystem—especially as many large systems continue to rely on it. Topics range from frameworks like Laravel to performance tuning, legacy modernisation, and cloud integration. It’s a friendly, experienced community with a strong engineering mindset."
      ],
      website_link: "https://www.meetup.com/phplondon"
    },
    {
      title: "Laracon",
      subtitle: "Conference",
      alt_name: "Laracon",
      duration: "2018 - Present",
      descriptions: [
        "Laracon brings together the best of the Laravel and broader PHP ecosystem in one place. I attend to stay connected with the latest updates to the framework and to see how others are using it to build fast, elegant, and scalable applications. The talks strike a great balance between architectural thinking and hands-on development. It's also a rare chance to meet the community behind the tools I’ve worked with for over a decade."
      ],
      website_link: "https://laracon.eu/"
    }
  ]
};


const work_experiences = {
  work_experiences: [
    {
      title: "Work",
      descriptions: [
        "I’ve led engineering efforts across a range of domains—spanning software development, cloud infrastructure, and media platforms. My most recent role involved overseeing the technology strategy and operations of a global digital distribution platform, delivering services at scale to millions of users. From hands-on architecture to team leadership and roadmap execution, my work is centred around enabling sustainable, secure, and impactful technology outcomes."
      ]
    },
    {
      title: "Internships",
      descriptions: [
        "Early in my career, I took on internships that gave me exposure to both technical and commercial aspects of large organisations. From contributing to data-led projects in financial services to supporting software delivery in retail tech, these experiences shaped my approach to solving problems in practical, customer-focused ways. They also sparked my interest in bridging the gap between business strategy and technical implementation."
      ]
    },
    {
      title: "Volunteering",
      descriptions: [
        "Giving back to the tech community has always been important to me. I’ve been involved with open-source projects, supported developer communities, and helped organise events to share ideas and grow connections. Whether mentoring junior engineers or contributing code, I value the relationships and learning that come from volunteer work—and see it as a key part of staying grounded and giving back."
      ]
    }
  ]
};

const recommendations = {
  recommendations: [
    {
      name: "Rajeev Chourasia",
      role: "Head of Solution and Strategy (UK&I)",
      company: "Tata Consultancy Services",
      quote:
        "I had the pleasure of working with Tom and was impressed by his technical expertise. Tom fostered a collaborative environment with my consulting and transformation team on ground and consistently delivered technical solutions that aligned with business needs. His ability to manage complex projects while motivating others makes him an outstanding manager. I highly recommend Tom to any organisation seeking a strategic and results-driven senior manager or head of department in technology and engineering space.",
      avatar_path: "rajeev.jpeg",
      color_code: "#F5F5F5"
    },
    {
      name: "Guillaume Bentaieb",
      role: "Senior Partner Engineer",
      company: "Google - YouTube",
      quote:
        "It was a pleasure collaborating with Thomas during his time as Head of Engineering at WildBrain, where I was his technical counterpart at YouTube. Thomas stands out as being in the top 5% of professionals I've had the opportunity to work with. His sharp intellect, dedication, and exceptional team leadership make him an outstanding recommendation.",
      avatar_path: "guillaume.jpeg",
      color_code: "#F5F5F5"
    },
    {
      name: "Nicola Ciobotaru",
      role: "Paid Media/Ad Operations Account Lead",
      company: "WildBrain",
      quote:
        "I had the pleasure of working alongside Tom Mason for almost eight years at WildBrain. While we were in different teams, Tom’s reputation in the Tech Team always stood out—he was known for his fantastic skills, reliability, and dedication. He was also a very supportive colleague and a great friend throughout our time together. Any team would be lucky to have him.",
      avatar_path: "nicola.jpeg",
      color_code: "#F5F5F5"
    }
  ]
};

// Experience Page
const experience = {
  title: "Key Skills",
  subtitle: "Engineering, Leadership, Strategy and Community",
  description:
    "Over the past decade, I’ve led engineering teams and built technology solutions that support high-scale digital operations and media distribution. I’ve worked across software, platform, and data engineering, defining technical strategy, improving systems, and aligning delivery with business goals.\n" +
    "\n" +
    "My leadership style is hands-on, focused on clarity, sustainability, and helping teams perform at their best. I enjoy building healthy engineering cultures, where standards are high, autonomy is respected, and collaboration drives outcomes.\n" +
    "\n" +
    "Outside of work, I stay engaged with the tech community through mentorship, open-source contributions, and regular attendance at industry conferences. I believe in sharing knowledge, learning from others, and staying curious.",
  header_image_path: "education.svg",
  sections: [
  ]
};

// Projects Page
const projectsHeader = {
  title: "Open Source",
  description:
    "In my own time, I enjoy contributing to open source, particularly in the smart home and automation space. I build innovative tools that bring together cloud infrastructure and edge devices to create seamless and intuitive experiences. These projects give me the opportunity to explore new technologies, experiment with ideas, and share practical solutions with the wider community.",
  avatar_image_path: "projects_image.svg"
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "Whether you'd like to discuss a potential opportunity, collaborate on a project, or just talk tech, I'd love to hear from you. Feel free to get in touch or connect with me on LinkedIn. I’m always open to thoughtful conversations around engineering, leadership, and building great technology."
  }
};

const technologies = {
  languages: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "simple-icons:html5",
      style: {
        color: "#E34F26"
      }
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fa-css3",
      style: {
        color: "#1572B6"
      }
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "simple-icons:sass",
      style: {
        color: "#CC6699"
      }
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "simple-icons:javascript",
      style: {
        backgroundColor: "#000000",
        color: "#F7DF1E"
      }
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "simple-icons:react",
      style: {
        color: "#61DAFB"
      }
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
      style: {
        color: "#339933"
      }
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "simple-icons:npm",
      style: {
        color: "#CB3837"
      }
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "simple-icons:yarn",
      style: {
        color: "#2C8EBB"
      }
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "simple-icons:php",
      style: {
        color: "#777BB4"
      }
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "simple-icons:python",
      style: {
        color: "#3776AB"
      }
    },
    {
      skillName: "Composer",
      fontAwesomeClassname: "simple-icons:composer",
      style: {
        color: "#885630"
      }
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "simple-icons:gnubash",
      style: {
        color: "#4EAA25"
      }
    },
    {
      skillName: "JSON",
      fontAwesomeClassname: "simple-icons:json",
      style: {
        color: "#02569B"
      }
    }
  ],
  frameworks: [
    {
      skillName: "Django",
      fontAwesomeClassname: "simple-icons:django",
      style: {
        color: "#092E20"
      }
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "simple-icons:flask",
      style: {
        color: "#000000"
      }
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "simple-icons:laravel",
      style: {
        color: "#FF2D20"
      }
    },
    {
      skillName: "Laravel Nova",
      fontAwesomeClassname: "simple-icons:laravelnova",
      style: {
        color: "#252D37"
      }
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "simple-icons:bootstrap",
      style: {
        color: "#563D7C"
      }
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "simple-icons:tailwindcss",
      style: {
        color: "#38B2AC"
      }
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: "simple-icons:jquery",
      style: {
        color: "#0769AD"
      }
    },
  ],
  cloudPlatforms: [

  ],
  databases: [
    {
      skillName: "MySQL",
      fontAwesomeClassname: "simple-icons:mysql",
      style: {
        color: "#4479A1"
      }
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "simple-icons:postgresql",
      style: {
        color: "#336791"
      }
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "simple-icons:mongodb",
      style: {
        color: "#47A248"
      }
    },
  ],
  devops_cicd_observability: [
    {
      skillName: "Docker",
      fontAwesomeClassname: "simple-icons:docker",
      style: {
        color: "#2496ED"
      }
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "simple-icons:kubernetes",
      style: {
        color: "#326CE5"
      }
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "simple-icons:jenkins",
      style: {
        color: "#D24939"
      }
    },
    {
      skillName: 'Terraform',
      fontAwesomeClassname: "simple-icons:terraform",
      style: {
        color: "#7B42BC"
      }
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "simple-icons:ansible",
      style: {
        color: "#E0522D"
      }
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "simple-icons:prometheus",
      style: {
        color: "#E6522D"
      }
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "simple-icons:grafana",
      style: {
        color: "#F46800"
      }
    }
  ],
  hostingPlatforms: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "simple-icons:amazonaws",
      style: {
        color: "#FF9900"
      }
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "simple-icons:googlecloud",
      style: {
        color: "#4285F4"
      }
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "simple-icons:microsoftazure",
      style: {
        color: "#0089D6"
      }
    },
  ],
  tools: [
    {
      skillName: 'Jira',
      fontAwesomeClassname: "simple-icons:jirasoftware",
      style: {
        color: "#0052CC"
      }
    },
    {
      skillName: 'Confluence',
      fontAwesomeClassname: "simple-icons:confluence",
      style: {
        color: "#0052CC"
      }
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "simple-icons:postman",
      style: {
        color: "#FF6C37"
      }
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "simple-icons:figma",
      style: {
        color: "#F24E1E"
      }
    },
       {
      skillName: "Git",
      fontAwesomeClassname: "simple-icons:git",
      style: {
        color: "#F05032"
      }
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "simple-icons:github",
      style: {
        color: "#181717"
      }
    },
  ],
  analytics_and_data: [
    {
      skillName: "Pandas",
      fontAwesomeClassname: "simple-icons:pandas",
      style: {
        color: "#150458"
      }
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "simple-icons:numpy",
      style: {
        color: "#013243"
      }
    },
  ],
  machine_learning: [
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "simple-icons:tensorflow",
      style: {
        color: "#FF6F20"
      }
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "simple-icons:pytorch",
      style: {
        color: "#EE4C2C"
      }
    },
  ],
  data_engineering: [
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "simple-icons:apache",
      style: {
        color: "#E25A1C"
      }
    },
    {
      skillName: "Apache Kafka",
      fontAwesomeClassname: "simple-icons:kafka",
      style: {
        color: "#231F20"
      }
    },
    {
      skillName: "Apache Airflow",
      fontAwesomeClassname: "simple-icons:apacheairflow",
      style: {
        color: "#017CEE"
      }
    },
  ],
}

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  communities_conferences,
  work_experiences,
  recommendations,
  experience,
  projectsHeader,
  contactPageData,
  technologies
};
