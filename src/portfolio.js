/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jirakorn Sukmee",
  description: "Portfolio of Jirakorn Sukmee, a student from Hatyaiwittayalai",
  og: {
    title: "Jirakorn Sukmee",
    type: "website",
    url: "https://valkirus.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Jirakorn Sukmee",
  logo_name: "Jirakorn Sukmee",
  nickname: "",
  subTitle: "A student from Hatyaiwittayalai school",
  githubProfile: "https://github.com/Valkirus",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Valkirus",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:jirakorn.sukmee@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100069661025401",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gun.jirakorn/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=instagram
  }, //https://discord.gg/pNXExTsFps
  {
    name: "Discord",
    link: "https://discord.gg/pNXExTsFps",
    fontAwesomeIcon: "fa-discord", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "CAD Design",
      fileName: "IMG_9323.png",
      skills: [
        "Designed parts for a hexapod (borrowing some step files from Chipo Hexapod)",
        "Modeled 3d printed parts for school projects and household items",
      ],
    },

    {
      title: "Raspberry Pi & ROS 2",
      fileName: "hexapod-main.jpg",
      skills: [
        "Made a robot hexapod, using the Raspberry Pi 4B",
        "Worked on a digital twin within Gazebo",
        "LiDar Navigation using SLAM and Gazebo",
        "Modified the Chipo Hexapod to be ran on ROS 2",
      ],
    },

    {
      title: "Schematics & PCBs",
      fileName: "PCB.png",
      skills: [
        "Designed a PCB based on How To Mechatronic's RC Transmitter",
        "Fully tested and accurate within KiCAD",
        "Drawn a schematic to easily make PCBs",
      ],
    },
  ],
};

const about = {
  data: [
    {
      title: "About me",
      fileName: "about.png",
      about: [
        "Hi! My name is Jirakorn Sukmee. I like building robots.",
        "I'm interested in engineering. I fell in love with making robots, and probably have learnt a few things. I think...",
        "I can program in C++, C, Python, and JavaScript if I have to. I'm not that fluent, and need to use the documentation to get things done",
        "My hobbies are making fun robots. I hope to make a career out of it someday.",
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Tessaban 6 (Hatyai Dream Kindergarten",
      subtitle: "ระดับชั้นประถมศึกษาตอนปลาย (Middle School)",
      logo_path: "hdk.png",
      alt_name: "Hatyai Dream Kindergarten",
      duration: "2016 - 2019",
      descriptions: [
        "I was a competitive student here. I was selected to be the competitor at almost all of the English competitions. They teachers trusted me to win ",
      ],
      website_link: "https://www.hdk.ac.th/frontpage",
    },
    {
      title: "Hatyaiwittayalai School",
      subtitle: "ระดับชั้นมัธยมศึกษาตอนต้น (Lower Secondary School)",
      logo_path: "yw.png",
      alt_name: "Hatyaiwittayalai",
      duration: "2019 - 2024",
      descriptions: [
        "I studied in the English Program, to enchance my English skills even more. I also competeted in 3 EP Open House competitions. Which I learned Web Design, HTML, CS, Basic Javascript. Also Math and Science Project, which I greatly loved. I have ever since enjoyed both of the subjects even more and even continued to study it in High School",
      ],
      website_link: "https://www.hatyaiwit.ac.th/frontpage",
    },
    {
      title: "Hatyaiwittayalai School",
      subtitle: "ระดับชั้นมัธยมศึกษาตอนปลาย (High School)",
      logo_path: "yw.png",
      alt_name: "Hatyaiwittayalai",
      duration: "2021 - 2024",
      descriptions: [
        "I studied in the Math and Science program, my liking for science and enigeering rose higher than every here. I did projects did peaked my interests and managed to finish them somehow.",
      ],
      website_link: "https://www.hatyaiwit.ac.th/frontpage",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Gold Medal",
      subtitle: "การแข่งขันศิลปหัตถกรรมนักเรียน",
      subtitle2: "ระดับสหวิทยาเขต",
      logo_path: "goldRobotics.png",
      alt_name: "Robotics",
      color_code: "#82d1ce",
    },
    {
      title: "Gold Medal",
      subtitle: "การแข่งขันสิ่งประดิษฐ์และนวัตกรรม",
      subtitle2: "ระดับภูมิภาค",
      logo_path: "tsu.png",
      alt_name: "Invention",
      color_code: "#ffde73",
    },
    {
      title: "Participated",
      subtitle: "โครงงานคณิตศาสตร์",
      subtitle2: "ระดับประเทศ",
      logo_path: "ms1067-1424.png",
      alt_name: "Mathematics project",
      color_code: "#ac68b3",
    },

    {
      title: "Silver Medal",
      subtitle: "Academic Project",
      subtitle2: "ระดับประเทศ",
      logo_path: "YRU.png",
      alt_name: "YRU Project",
      color_code: "#ffcff2",
    },
    {
      title: "Second Place",
      subtitle: "School Innovation Project",
      subtitle2: "ระดับโรงเรียน",
      logo_path: "YW_second.png",
      alt_name: "YRU Project",
      color_code: "#ff8e80",
    },
    {
      title: "Passed the first round",
      subtitle: "Hackathon",
      subtitle2: "ระดับภูมิภาค",
      logo_path: "CBRight.png",
      alt_name: "CBright",
      color_code: "#a89eff",
    },
    {
      title: "เข้าร่วมกิจกรรม",
      subtitle: "เข้าร่วมตักบาตรพระ 10,000 รูป",
      subtitle2: "ระดับนานาชาติ",
      logo_path: "merit.png",
      alt_name: "merit",
      color_code: "#ffab9e",
    },
    {
      title: "Most Creative",
      subtitle: "ได้รับรางวัลชนะเลิศการประกวดพานไหว้ครู ประเภทสร้างสรรค์",
      subtitle2: "ระดับโรงเรียน",
      logo_path: "SchoolWinner.png",
      alt_name: "schoolwinner",
      color_code: "#ffbb96",
    },
    {
      title: "Partipated",
      subtitle: "ได้เข้าร่วมโครงการปลูกป่าชายเลน",
      logo_path: "forest.png",
      alt_name: "rain forest",
      color_code: "#ffcfb5",
    },
    {
      title: "Silver Medal",
      subtitle: "Web Design Competition EP Open House 2019",
      subtitle2: "ระดับภูมิภาค",
      logo_path: "WebDesign.png",
      alt_name: "web design",
      color_code: "#e4ffc2",
    },
    {
      title: "Silver Medal",
      subtitle: "Science Project EP Open House 2019",
      subtitle2: "ระดับภูมิภาค",
      logo_path: "sci-project.png",
      alt_name: "science project",
      color_code: "#c2efff",
    },
    {
      title: "Participated",
      subtitle: "Strong Anti-Corruption Campaign",
      logo_path: "strong.png",
      alt_name: "Strong-anti-corruption",
      color_code: "#ffde73",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Hobby & Academic Projects",
  description:
    "Heres my projects I made, some are more detailed and was used to compete in some competitions. While others are for fun. I build projects that spark my interests",
};

const experience = {
  title: "Experience",
  subtitle: "Leadership, Work and Internship",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Leadership",
      experiences: [
        {
          title: "Student Council Candidate",
          company: "YORWOR",
          company_url: "https://www.instagram.com/cordelia.official_",
          logo_path: "Cordelia.webp",
          duration: "November 2022 - Feburary 2023",
          location: "Hatyai, Songkhla, Thailand",
          description:
            "I was a member of the 35th student council candidate named 'Cordelia'. It was a pity that we didn't win but I still made a lot friends and have a gain experience with leadership arranging school activities for a short period of time.",
          color: "#111717",
        },
        {
          title: "STRONG Organization Participant",
          company: "STRONG",
          company_url: "https://www.nacc.go.th/",
          logo_path: "strong-logo.png",
          duration: "March 2023 - March 2023",
          location: "Sadao, Songkhla, Thailand",
          description:
            "I participated during it's campaign in Sadao. I was one of the represenatitves of my school to go take part in it. I learnt and changed my mind set about corruption in Thailand, it changed my view of Thailand and it's politics",
          color: "#111717",
        },
      ],
    },
    /*{
      title: "Work",
      work: false,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "morph1.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "morph1.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "morph1.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },*/
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me2.png",
    description:
      "If you're avaliable, come join my discord. If you don't have discord, I have Instagram, Facebook and Line, if you need to contact me. Choose Line or email, Line uses the same number as my phone number. I read these quite often compared to the rest. If you just want to chat, join the discord.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Hatyai, Songkhla, Thailand 90110",
    locality: "Hatyai",
    country: "Thailand",
    region: "California",
    postalCode: "90110",
    streetAddress: "863 Phetkaseam Rd.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "+66 083-651-6651",
    subtitle: "",
  },
};

export {
  about,
  certifications,
  contactPageData,
  degrees,
  experience,
  greeting,
  projectsHeader,
  seo,
  settings,
  skills,
  socialMediaLinks,
};
