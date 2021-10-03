/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Arijit Goswami",
  title: "Hi all, I'm Arijit",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 currently studying in college but having an passion of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "/",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arijit-2001",
  linkedin: "https://www.linkedin.com/in/arijit-goswami-04a276209/",
  gmail: "arijitgoswami031@gmail.com",
  //codechef: "https://www.facebook.com/saad.pasta7",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Google-Cloud"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
  
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    
    {
      skillName: "google-cloud",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hem Sheela Model School",
      logo: require("./assets/images/unnamed.png"),
      subHeader: "Higher Secondary level of schooling",
      duration: "2005 - 2019",
    },
    {
      schoolName: "Techno Main Salt Lake",
      logo: require("./assets/images/ti.jpg"),
      subHeader: "Bachelor of Technology in ECE",
      duration: "2019 - 2023",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "SOME PERSONAL PROJECTS THAT I HAVE CREATED IN THESE PAST YEARS",
  projects: [
    {
      image: require("./assets/images/b1.svg"),
      projectName: "BigO SearchEngine",
      projectDesc: "I have build a Search Engine which is interactive and very efficient also shows the search reasult timing, to design the frontend with the help of React.js, I have used the Context API to pass data through the component tree, also GOOGLE Search API which is a custom search JSON API that allows you to get web search results in JSON format.",
      footerLink: [
        {
          name: "Visit GIt Repo",
          url: "https://github.com/arijit-2001/Search-Engine1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/z.jpg"),
      projectName: "Zoomish",
      projectDesc: "I have developed a video chat application in ReactJs using webRTC and socket.io where two users can connect only when unique calling ID is being shared between then, here the frontend part is build using React.js, in the backend part webRTC is used to support video, voice, and generic data to be sent between peers and to build the connection between the peers Socket.io is used and for overall server side programming Node.js is used",
      footerLink: [
        {
          name: "Visit GIt Repo",
          url: "https://github.com/arijit-2001/Zoomish"
        }
      ]
    },
    {
      image: require("./assets/images/cloud.jpg"),
      projectName: "Cloud-Drive",
      projectDesc: "I have developed a cloud storage depo where we can upload, download images,videos etc using ReactJs, Node.js, Express and Firebase, Here Firebase is used for database to store file/folder metadata, and supports multiple databases to store the file chunks, the frontend part is developed using React.js and the server side programming is done by using Node.js and Express",
      footerLink: [
        {
          name: "Visit GIt Repo",
          url: "https://github.com/arijit-2001/cloud-drive1"
        }
      ]
    },
    {
      image: require("./assets/images/co.jpg"),
      projectName: "Covid19 Tracker",
      projectDesc: "I have developed a very inetractive Covid19 tracker using only ReactJs where i have added many cool features so that the data can be viewed in a chart form using react-chartjs-2 and also used API to fetch the data of the recent covid cases from a dataset. Overall this a cool frontend interactive project",
      footerLink: [
        {
          name: "Visit GIt Repo",
          url: "https://github.com/arijit-2001/covid.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications that I have acheived !",

  achievementsCards: [
    {
      title: "Edge Flawless Coding Competition",
      subtitle:
        "Secured 2nd position in this inter-college coding competiton held in our college",
      image: require("./assets/images/EDGE2021.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1pkUW82ai-BRVKJkTcxwckw9hWT6Wd0XA/view?usp=sharing"
        }
      ]
    },
    {
      title: "MYWBUT TELOS2021 TECH-FUNDZ",
      subtitle:
        "I aimed to built a smart adaptive surveillance and monitoring system, that i named “Secure-Us” developed for enhancing as well as increasing the security and the transportation system of the areas it’s been implemented. I developed this project idea and secred a 11th rank.",
      image: require("./assets/images/t.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1juyYkWIb9LzJgELrB2q_sMuEwQPitgvD/view?usp=sharing"
        }
      ]
    },

    {
      title: "Intra Flawless Coding Competition",
      subtitle: "Secured 2nd position in this intra-college coding competiton held in our college",
      image: require("./assets/images/c.svg"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1ehguqTl1ZSxvEtms4KFF9xuQanFzhBfi/view?usp=sharing"},
      ]
    },
    {
      title: "Google Cloud Facilitors Program",
      subtitle: "Completed the Ultimate Milestone",
      image: require("./assets/images/g.png"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1Z_8_rIWpyKUFjeI7GhzglJAWlHIbQakP/view?usp=sharing"},
      ]
    },
    {
      title: "Codechef Profile",
      subtitle: "I am a 4 star coder in codechef and i have a rating of 1825 to know more about my performance in the competitions please see my codechef profile",
      image: require("./assets/images/cc.jpg"),
      footerLink: [
        {name: "Profile-Url", url: "https://www.codechef.com/users/arijitgoswami1"},
      ]
    },
    {
      title: "Hackerank Profile",
      subtitle: "I am a 6 star in Hackerank and have a global rank of 658 in problem solving to know more in details please see my hackerank profile",
      image: require("./assets/images/h.png"),
      footerLink: [
        {name: "Profile-Url", url: "https://www.hackerrank.com/arijitgoswami031?hr_r=1"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
  display: false // Set false to hide this section, defaults to true
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
  display: false// Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Please contact me if you find my resume fit for your work",
  number: "+91-6295677321",
  email_address: "arijitgoswami031@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
