import arpita from "../assets/arpita.jpeg";
import camden from "../assets/camden.jpg";
import ed from "../assets/ed.jpg";
import emily from "../assets/emily.jpeg";
import jon from "../assets/jon.jpg";
import fahey from "../assets/fahey.png";
import spencer from "../assets/spencer.jpg";
import orel from "../assets/orel.jpg";
import adar from "../assets/adar.png";

const experience = [
  {
    company: "Drata",
    note: "acquired SafeBase",
    url: "https://drata.com/",
    roles: [
      {
        title: "Staff Software Engineer",
        dates: "August 2025 - Present",
        points: [
          "Replaced SafeBase's legacy Bootstrap/SCSS with a unified Material UI design system — a scalable foundation for theming, dark mode, and reusable UI patterns.",
          "Expanded shared frontend systems across the Trust Center platform, improving developer velocity, accessibility, and visual consistency.",
        ],
      },
    ],
  },
  {
    company: "SafeBase",
    url: "https://safebase.io/",
    roles: [
      {
        title: "Principal Software Engineer",
        dates: "February 2025 - August 2025",
        points: [
          "Drove frontend architecture and design-system initiatives across the Trust Center, establishing patterns for consistency, maintainability, and scalability.",
          "Partnered with product and design to translate complex security workflows into intuitive user experiences.",
        ],
      },
      {
        title: "Lead Frontend Engineer",
        dates: "September 2023 - February 2025",
        points: [
          "Led frontend engineering for the Trust Center, defining technical standards, UI architecture, and shared component strategy.",
          "Drove adoption of Material UI and modern frontend practices, improving productivity, accessibility, and visual consistency.",
        ],
      },
    ],
  },
  {
    company: "Instil",
    url: "https://www.instil.io/",
    roles: [
      {
        title: "Frontend Software Engineer",
        dates: "February 2022 - August 2023",
        points: [
          "Architected and refined the UI of a nonprofit CRM used to manage nonprofit donations, events, and campaigns using React & Material UI.",
        ],
      },
    ],
  },
  {
    company: "Eastridge Workforce Solutions",
    url: "https://www.eastridge.com/",
    roles: [
      {
        title: "Frontend Engineer",
        dates: "March 2020 - January 2022",
        points: [
          "Rewrote a legacy Ember recruitment application from Ember to React using Material UI, TypeScript, Styled Components, and React Query to optimize navigation and modernize the codebase.",
        ],
      },
    ],
  },
  {
    company: "Verogen",
    url: "https://verogen.com/",
    roles: [
      {
        title: "Software Engineer",
        dates: "January 2018 - December 2019",
        points: [
          "Designed and developed frontend features for a next-generation forensics analysis platform.",
        ],
      },
    ],
  },
  {
    company: "InnovaSystems International, LLC",
    url: "https://www.innovasi.com/",
    roles: [
      {
        title: "Software Engineer",
        dates: "June 2016 - January 2018",
        points: [
          "Developed a Learning Management System (LMS) for the US Navy that teachers and students in boot camp used to track training and readiness using AngularJS, TypeScript, SQL, and C#.",
        ],
      },
    ],
  },
  {
    company: "Integrated Default Solutions",
    url: "https://www.idsolutions-inc.com/",
    roles: [
      {
        title: "Software Engineer",
        dates: "January 2014 - June 2016",
        points: [
          "Designed and implemented fullstack web applications linked to firm-wide SQL databases for clients in a mortgage law firm.",
        ],
      },
    ],
  },
];

const education = [
  {
    company: "California State University San Marcos",
    dates: "2014 - 2016",
    experience: ["Bachelor of Science in Business Administration - Cum Laude"],
  },
];

const testimonials = [
  {
    name: "Adar Arnon",
    title: "Co-founder & CTO",
    displayText:
      "Sunny is the kind of engineer who elevates everyone around her. As our lead frontend engineer, she prove better practices and conventions across the team, dramatically improved our Ux, and built the foundation that enabled the rest of engineering to ship with high velocity. She combines strong technical judgment with a real eye for user experience — a rare and valuable combination.",
    image: adar,
  },
  {
    name: "Orel Regev",
    title: "Technical Product Lead",
    displayText:
      "Working with Sunny has been a wonderful experience, and her leadership and ownership skills significantly contribute to our team's success. She effectively identifies areas for improvement and fearlessly leads necessary changes, addressing even the most challenging tech and design debts. Sunny's clear communication fosters a collaborative atmosphere, making our work together a pleasure. I value her dedication and the genuine impact she brings to our team.",
    image: orel,
  },

  {
    name: "Spencer Carney",
    title: "Engineering Manager",
    displayText:
      "Dependable, eager, and always willing to learn and grow; that's how I would describe Sunny Datko. Collaborating with her has been an immense pleasure. She is an excellent sounding board when deliberating over decisions. She is always willing to help out with important tasks that others shy away from. When new standards are set, she motivates both herself and her colleagues to embrace them. Watching her take on new challenges without any hesitancy, and then succeed at them, has been one of the recent highlights of my career. Any team that needs a hard-hitting front-end engineer would be remiss to pass up on bringing her onboard.",
    image: spencer,
  },
  {
    name: "Camden Lee",
    title: "Senior Software Engineer",
    displayText:
      "I had the privilege to work closely alongside Sunny at Instil. She showed the ability to dive into challenges and find solutions, driving our team towards success. One of Sunny's standout qualities is her self-motivation and proactive nature when it comes to working within a team and solving technical problems. I would jump at the opportunity to work with Sunny again and any organization would be lucky to have her.",
    image: camden,
  },
  {
    name: "Jon Jandoc",
    title: "Senior Software Engineer",
    displayText:
      "Sunny has the chops to take on whatever frontend challenges you throw at her. What makes her special is her ability to identify a technical challenge, collaborate on a direction forward, and then dive in with an upbeat and infectious enthusiasm. Every interaction was always a joy and I'd eagerly jump at an opportunity to work with her again in the future.",
    image: jon,
  },
  {
    name: "Edward Kim",
    title: "Vice President of Software Engineering",
    displayText:
      "Sunny has been a great collaborator and a pleasure to work with. I've worked with her as her squad lead, and she has continued to impress me with strong communication, adaptability to changing requirements and strong ownership over both feature implementation and tech debt. Sunny's contributions have been strongly positive both technically and also culturally as a strong collaborator. I'd love to work with Sunny again!",
    image: ed,
  },
  {
    name: "Ryan Fahey",
    title: "Senior Technical Product Manager",
    displayText:
      "As Sunny's direct manager, Sunny made my job easy. Sunny has outstanding communication skills and a strong passion for technology, particularly front-end web development. During the time she reported to me, I watched Sunny grow her skills tremendously to the point where she was working on some of the most complex parts of our application. I would be more than happy to work with her on a team again if given the chance.",
    image: fahey,
  },
  {
    name: "Emily Barbenza",
    title: "Senior Software Accessibility Engineer",
    displayText:
      "I had the pleasure of working with Sunny on numerous occasions. Sunny is a talented front-end developer and a skilled presenter who can command a room. I was personally able to attend one of her talks on CSS and learned some interesting new things about developing web applications from her presentation. Beyond her technical abilities, one of Sunny’s best qualities is her warm and positive personality. Any company looking for an engineer would be lucky to have Sunny on their team.",
    image: emily,
  },
  {
    name: "Arpita Parmar",
    title: "Data Science Lead",
    displayText:
      "Sunny and I worked together in different teams. I found Sunny extremely charming and pleasant, tackling all project work with dedication and smile. Her interpersonal skills were exemplary and appreciated by everyone who worked with her. Besides bringing positive energy to team, Sunny is a take-charge person who can present creative ideas and communicate it effectively. She would be an excellent addition to any team and I wish her best for her future projects.",
    image: arpita,
  },
];

export { education, experience, testimonials };
