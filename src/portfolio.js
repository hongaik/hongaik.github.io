/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hong Aik",
  title: "Hi all, I'm Hong Aik",
  subTitle: emoji(
    "I'm a Senior Data Analyst working for the Ministry of Manpower in Singapore. Passionate with all things data, with an exceptional interest in NLP!"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hongaik",
  linkedin: "https://www.linkedin.com/in/hongaikgoh",
  gmail: "goh.hongaik@gmail.com",
  medium: "https://goh-hongaik.medium.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I specialise in helping stakeholders make data-driven decisions through interactive dashboards and machine learning",
  skills: [
    //emoji(
    //  "⚡ "
    //),
    //emoji("⚡ "),
    //emoji(
    //  "⚡ "
    //)
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fas fa-chart-line"
    },
      ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "General Assembly",
      logo: require("./assets/images/ga.png"),
      subHeader: "Data Science Immersive",
      duration: "Sep 2021 - Apr 2022",
      desc: ""
    },
    {
      schoolName: "National Technological University",
      logo: require("./assets/images/ntu.jpg"),
      subHeader: "Postgraduate Diploma in Education",
      duration: "Aug 2016 - Feb 2017",
      desc: ""
    },
    {
      schoolName: "National University of Singapore",
      logo: require("./assets/images/nus_logo.jpg"),
      subHeader: "Bachelor of Science in Chemistry",
      duration: "Aug 2012 - Aug 2016",
      desc: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Google", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Natural Language Processing",
      progressPercentage: "70%"
    },
    {
      Stack: "Dashboarding",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Data Analyst",
      company: "Ministry of Manpower",
      companylogo: require("./assets/images/mom.jpg"),
      date: "Mar 2020 – Present",
      desc: "Supporting MOM and whole-of-government in data-driven policymaking",
    },
    {
      role: "Science Educator",
      company: "Ministry of Education",
      companylogo: require("./assets/images/moe.png"),
      date: "Feb 2017 – Mar 2020",
      desc: "Lead ICT initiatives for better student learning outcomes"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Data Science Immersive Graduate",
      subtitle:
        "DSI is an intensive 6-month journey in Python for Data Science and Machine Learning, including concepts for model deployment.",
      image: require("./assets/images/ga.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13BJtELeLg_zIfnVNBvTj1myRZYqpiOvT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Exemplary MOMer Award",
      subtitle:
        "",
      image: require("./assets/images/mom.jpg")
    },
    {
      title: "Text Classification App",
      subtitle:
        "Trained a model in a semi-supervised fashion to predict topics associated with a given service feedback",
      image: require("./assets/images/service.png"),
      footerLink: [
        {
          name: "Click to see the app",
          url: "https://huggingface.co/spaces/hongaik/service_text_classification"
        }
      ]
    },
    {
      title: "Wordle Solver App",
      subtitle: "Built an app to solve all Wordle puzzles within 4 - 5 tries!",
      image: require("./assets/images/wordle.webp"),
      footerLink: [
        {
          name: "Click to see the app",
          url: "https://share.streamlit.io/hongaik/my-projects/main/Cheat_Wordle/wordle.py"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all"
  
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
