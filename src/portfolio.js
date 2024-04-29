/* Change this file to get your personal Porfolio */
// https://simpleicons.org/ refer icons from here
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ratish's Portfolio",
  description:
    "Greetings my fellow beings! A helpful Developer, with a passion for Cloud Solutions and Software Engineering.",
  og: {
    title: "Ratish Jha Portfolio",
    type: "website",
    url: "https://ratish11.github.io/ratishjha.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Ratish Jha",
  logo_name: "Ratish Jha",
  nickname: "RJ",
  subTitle:
    "Greetings my fellow beings! A helpful Developer, with a passion for Cloud Solutions and Software Engineering.",
  resumeLink:
    "https://onedrive.live.com/view.aspx?resid=DDD4A7032A56AF94!5110&authkey=!AKTjAmsnsi8qoi4",
  portfolio_repository: "https://github.com/ratish11/ratishjha.github.io",
  githubProfile: "https://github.com/ratish11/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ratish11",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ratish11/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/<userid>",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:ratishjha47@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/<X id>>",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
];

const skills = {
  data: [
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platform",
        "⚡ Hosting and maintaining Cloud Infrastructure on AWS Cloud.",
        "⚡ Deploying Complex application on different kind of Compute Options.",
        "⚡ Building Solutions for Cloud based applications.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "DevOps",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building Robust CI/CD pipelines for sustained deployments.",
        "⚡ Curating Zero-Downtime Pipelines for zero impact on business.",
        "⚡ Creating scaleable solutions for continuous scalibility.",
      ],
      softwareSkills: [
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "fa-gitlab",
          style: {
            color: "#FC6D26",
          },
        },
        {
          skillName: "Nexus",
          fontAwesomeClassname: "simple-icons:sonatype",
          style: {
            color: "#1B1C30",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Shell Script",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#4EAA25",
          },
        },
        {
          skillName: "apachegroovy",
          fontAwesomeClassname: "simple-icons:apachegroovy",
          style: {
            color: "#4298B8",
          },
        },
      ],
    },
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building applications for refining development skills and self learning.",
        "⚡ Implementing distributed computing algorithms.",
        "⚡ Building Full stack application for Employee Analytics System.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NodeJs",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "ML Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing Deep Learning model LookingGlass2.0 for The Hoarfrost Lab.",
        "⚡ Working on Biological Data of Bacterial and Archaeal Taxonomy Genome from the GTDB.",
        "⚡ Pre-Training for Masked Token predition and transfer learning.",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },

    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/ratish-jha/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The University of Georgia",
      subtitle: "M.S. in Computer Science",
      logo_path: "uga_logo.png",
      alt_name: "The University of Georgia",
      duration: "Aug, 2022 - May, 2024",
      descriptions: [
        "⚡ I have a diversified courses structure with Core Computing subjects along with Cloud and AI systems. They include Algorithms, DataBase Systems, Distributed Computing System, Machine Learning, Advance topics in Computer Science which included NLP and Generative AI, etc.",
        "⚡ Apart from this, I have also been a research assistant for The Hoarfrost Lab. As part of it, I have worked on creating advance version of LookingGlass which was based on Transformer architecture.",
        "⚡ During my time at university, I was also associated with Forestory department. As part of it, I have worked on creating videos of Forest area for Virtual Forest Lab as Augumented relaity project.",
      ],
      website_link: "https://www.uga.edu/",
    },
    {
      title: "Rajiv Gandhi Institiute of Technology, Mumbai University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "rgit_logo.webp",
      alt_name: "RGIT",
      duration: "Jul 2015 - May 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning for Hand Gesture Detection.",
      ],
      website_link: "https://www.mctrgit.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Developer - Associate",
      subtitle: "- AWS Training",
      logo_path: "aws-certified-developer-associate.png",
      certificate_link:
        "https://cp.certmetrics.com/amazon/en/public/verify/credential/1aee5f9274eb4c46916751a5b2b0273e",
      alt_name: "Amazon Web Services",
      color_code: "#00000009",
    },
    {
      title: "Ultimate AWS Certified Solutions Architect Associate SAA-C03",
      subtitle: "- Stephane Maarek",
      logo_path: "saa_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b40457be-d521-43e9-8e53-9fdfe6c150e4/",
      alt_name: "solutions architech",
      color_code: "#00000009",
    },
    {
      title: "Cloud Developer",
      subtitle: "- UpGrad KnowledgeHut",
      logo_path: "upgrad_logo.jpg",
      certificate_link: "",
      alt_name: "UpGrad",
      color_code: "#00000009",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Assistantships",
  description:
    "I have professional experience in the corporate and academic settings.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "DevOps Engineer",
          company: "Zycus Infotech.",
          company_url: "https://www.zycus.com/",
          logo_path: "zycus_logo.webp",
          duration: "July 2019 - July 2022",
          location: "Mumbai, MH, India",
          description:
            "• Enhanced service redirection for 100s of services using ALB in a newly created production environment to enhance efficiency & streamline operations • Curated content distribution process using AWS S3, developing a pipeline for upload & migration to a different S3 bucket in a separate region, accelerating transfer speed by 27% • Engineered application deployment pipeline with tools like Jenkins, GoCD, Ansible and Terraform achieving zero downtime and expedite deployment process by 60%. • Spawned, upgraded and maintained Nexus, Jenkins, GitLab on EC2 servers for CI/CD pipelines with Integration on EBS, EFS as filesystem and S3 for the Blob store for Nexus Resository with Intelligent Tiering keeping uptime greater than 95%. • Slashed System Failure Time by 8% through debugging and analysis of System Failures in the Production environment, enhancing system reliability and uptime. • Boosted Operational Efficiency by implementation of a collaborative Continuous Integration process using production data for machine learning models led to a 10% increase in operational efficiency and faster innovation cycles.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Assistantships",
      experiences: [
        {
          title: "Research Assiatant - ML Developer",
          company: "The Hoarfrost Lab, Marine Science, University of Georgia.",
          company_url: "https://www.hoarfrostlab.com/",
          logo_path: "hoarfrost_logo.png",
          duration: "May 2022 - May 2024",
          location: "Athens, GA, USA",
          description:
            "• Spearheaded the development of LookingGlass 2.0, a cutting-edge Deep Learning(LLM) model designed to encode contextually-aware, functionally, and evolutionarily relevant representations of Short DNA reads. • Increased the efficiency of the prediction by 17% on the LookingGlass v1.0.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "HAND-GESTURE-RECOGNITION-SYSTEM-USING-DEEP-LEARNING",
      name: "HAND GESTURE RECOGNITION SYSTEM USING DEEP LEARNING",
      createdAt: "2019-08-02T00:00:00Z",
      description:
        "Paper published in International Journal of Advances in Electronics and Computer Science.",
      url:
        "http://www.iraj.in/journal/journal_file/journal_pdf/12-587-156922936217-20.pdf",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "self.JPG",
    description:
      " You can message me through my email or on linkedin, I will reply within 24 hours. I can help you with AWS, CLoud Solutions, ML.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    // title: "Address",
    // subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    // locality: "San Jose",
    // country: "USA",
    // region: "California",
    // postalCode: "95129",
    // streetAddress: "Saratoga Avenue",
    // avatar_image_path: "address_image.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
