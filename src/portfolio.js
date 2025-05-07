/* Change this file to get your personal Porfolio */

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
  '"I am a experienced Head of Engineering with 15+ years in software engineering and 5+ years in team leadership. I empower teams to build scalable, impactful products and solutions that drive business growth."',
    // '"I am a strategic technology leader with over 15 years of software engineering experience and more than 5 years leading high-performing teams. I combine deep technical expertise with a clear leadership approach to shape organisational growth. By aligning engineering with business goals and fostering a culture of collaboration and continuous improvement, I enable teams to thrive and deliver scalable, impactful solutions."',
  resumeLink: "https://github.com/thomasm789",
  // portfolio_repository: "https://github.com/thomasm789",
  githubProfile: "https://github.com/thomasm789"
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/thomasm789",
  // linkedin: "https://www.linkedin.com/in/tmason-developer/",
  // twitter: "https://x.com/thomasm789",

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
  // {
  //   name: "X-Twitter",
  //   link: "https://x.com/thomasm789",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
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
      // subtitle: "Community",
      // alt_name: "IIITDM Kurnool",
      // duration: "2016 - 2020",
      descriptions: [
        "I’ve led engineering efforts across a range of domains—spanning software development, cloud infrastructure, and media platforms. My most recent role involved overseeing the technology strategy and operations of a global digital distribution platform, delivering services at scale to millions of users. From hands-on architecture to team leadership and roadmap execution, my work is centred around enabling sustainable, secure, and impactful technology outcomes."
      ]
      // website_link: "http://iiitk.ac.in",
    },
    {
      title: "Internships",
      // subtitle: "Meet Up",
      // alt_name: "Indiana University Bloomington",
      // duration: "2021 - 2023",
      descriptions: [
        "Early in my career, I took on internships that gave me exposure to both technical and commercial aspects of large organisations. From contributing to data-led projects in financial services to supporting software delivery in retail tech, these experiences shaped my approach to solving problems in practical, customer-focused ways. They also sparked my interest in bridging the gap between business strategy and technical implementation."
      ]
      // website_link: "https://www.indiana.edu/",
    },
    {
      title: "Volunteering",
      // subtitle: "Community and Conference",
      // alt_name: "Indiana University Bloomington",
      // duration: "2021 - 2023",
      descriptions: [
        "Giving back to the tech community has always been important to me. I’ve been involved with open-source projects, supported developer communities, and helped organise events to share ideas and grow connections. Whether mentoring junior engineers or contributing code, I value the relationships and learning that come from volunteer work—and see it as a key part of staying grounded and giving back."
      ]
      // website_link: "https://www.indiana.edu/",
    }
  ]
};


const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599"
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099"
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899"
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199"
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199"
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199"
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899"
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099"
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC"
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499"
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099"
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499"
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
  title: "Experience",
  subtitle: "Engineering, Leadership, Strategy and Community",
  description:
    "Over the past decade, I’ve led engineering teams and built technology solutions that support high-scale digital operations and media distribution. I’ve worked across software, platform, and data engineering, defining technical strategy, improving systems, and aligning delivery with business goals.\n" +
    "\n" +
    "My leadership style is hands-on, focused on clarity, sustainability, and helping teams perform at their best. I enjoy building healthy engineering cultures, where standards are high, autonomy is respected, and collaboration drives outcomes.\n" +
    "\n" +
    "Outside of work, I stay engaged with the tech community through mentorship, open-source contributions, and regular attendance at industry conferences. I believe in sharing knowledge, learning from others, and staying curious.",
  header_image_path: "education.svg",
  // header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000"
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf"
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578"
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20"
        }
      ]
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000"
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26"
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5"
        }
      ]
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4"
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01"
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000"
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58"
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717"
        }
      ]
    }
  ]
};

// Projects Page
const projectsHeader = {
  title: "Open Source",
  description:
    "In my own time, I enjoy contributing to open source, particularly in the smart home and automation space. I build innovative tools that bring together cloud infrastructure and edge devices to create seamless and intuitive experiences. These projects give me the opportunity to explore new technologies, experiment with ideas, and share practical solutions with the wider community.",
  avatar_image_path: "projects_image.svg"
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg"
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653"
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/"
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/"
    }
  ]
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "Whether you'd like to discuss a potential opportunity, collaborate on a project, or just talk tech, I'd love to hear from you. Feel free to get in touch or connect with me on LinkedIn. I’m always open to thoughtful conversations around engineering, leadership, and building great technology."
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg"
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17"
  },
  phoneSection: {
    title: "",
    subtitle: ""
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
  certifications,
  recommendations,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  technologies
};
