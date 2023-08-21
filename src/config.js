import arpita from "./assets/arpita.jpeg";
import camden from "./assets/camden.jpg";
import ed from "./assets/ed.jpg";
import emily from "./assets/emily.jpeg";
import fahey from "./assets/fahey.jpeg";
import spencer from "./assets/spencer.jpg";



const experience = [
  {
    company: "Instil",
    dates: "2022 - 2023",
    title: "Frontend Software Engineer",
    url: "https://www.instil.io/",
    experience: [
      "Lead frontend development of new user-focused solutions and features from creating and presenting technical plans to implementation in collaboration with a 7-person development team.",
      "Build and enhance the UI of a CRM used to manage nonprofit donations, events, and campaigns using React & Material UI.",
      "Develop and deploy new features to enable donor management, real-time reporting, and data analytics.",
      "Successfully propose architectural solutions and provide detailed technical feedback during design and code reviews.",
      "Transformed the product layout and introduced a slide-out navigation system to streamline user flows.",
      "Migrated Material UI from v4 to v5 and resolved breaking changes to ensure zero downtime and maintain productivity.",
    ],
  },
  {
    company: "Eastridge Workforce Solutions",
    dates: "2020 - 2022",
    title: "Frontend Engineer",
    url: "https://www.eastridge.com/",
    experience: [
      "Rewrote a legacy Ember recruitment application from Ember to React using Material UI, TypeScript, Styled Components, and React Query to optimize navigation and modernize the codebase.",
      "Led the React Router upgrade from v5 to v6 and the Material UI migration from v4 to v5 to improve customizability.",
      "Implemented and customized a suite of buttons, tables, and forms to ensure a consistent product and brand experience.",
    ],
  },
  {
    company: "Verogen",
    dates: "2018 - 2019",
    title: "Software Engineer",
    url: "https://verogen.com/",
    experience: [
      "Designed, developed, and deployed frontend features for a next-generation forensics analysis platform.",
      "Ported features for an existing project from AngularJS to Angular 2+ while maintaining functionality",
      "Optimized the user experience by creating interactive displays and improving core interactions and navigation.",
      "Implemented a central navigation point and optimized result displays to increase user efficiency and productivity.",
    ],
  },
  {
    company: "InnovaSystems International, LLC",
    dates: "2016 - 2018",
    title: "Software Engineer",
    url: "https://www.innovasi.com/",
    experience: [
      "Developed a Learning Management system for the US Navy that teachers and students in boot camp used to track training and readiness using AngularJS, TypeScript, SQL, and C#.",
      "Rewrote an existing application to enable instructors to quickly create and administer scorecards for grading students.",
      "Consulted with a team of 8 engineering staff to evaluate software interfaces, define technical specifications, and develop performance requirements in alignment with user needs.",
    ],
  },
  {
    company: "Integrated Default Solutions",
    dates: "2014 - 2016",
    title: "Web Application Developer",
    url: "https://www.idsolutions-inc.com/",
    experience: [
      "Designed and implemented fullstack web applications linked to firm-wide SQL databases for clients in a mortgage law firm.",
      "Built the parent company website to increase lead generation, drive customer acquisition, and expand brand awareness.",
    ],
  },
];

const communityOutreach = [
  {
    company: "Girl Develop It",
    dates: "2014 - 2016",
    title: "Instructor",
    url: "https://girldevelopit.com/",
    experience: [
      "Led bi-weekly workshops on front-end web development, spanning HTML, CSS, JavaScript, and jQuery, for up to 50 women transitioning to careers in web programming.",
    ],
  },
  {
    company: "The LEAGUE of Amazing Programmers",
    dates: "2014 - 2016",
    title: "Java Instructor",
    url: "https://www.jointheleague.org/",
    experience: [
      "Taught weekly classes on creating and styling websites using HTML and CSS for 5 middle and high school students.",
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
    name: "Spencer Carney",
    title: "Senior Software Engineer",
    displayText:
      "Dependable, eager, and always willing to learn and grow; that's how I would describe Sunny Datko. Collaborating with her has been an immense pleasure. She is an excellent sounding board when deliberating over decisions. She is always willing to help out with important tasks that others shy away from. When new standards are set, she motivates both herself and her colleagues to embrace them. Watching her take on new challenges without any hesitancy, and then succeed at them, has been one of the recent highlights of my career. Any team that needs a hard-hitting front-end engineer would be remiss to pass up on bringing her onboard.",
    image: spencer,
  },
  {
    name: "Camden Lee",
    title: "Senior Software Engineer",
    displayText:
      "I had had the privilege to work closely alongside Sunny at Instil. She showed the ability to dive into challenges and find solutions, driving our team towards success. One of Sunny's standout qualities is her self-motivation and proactive nature when it comes to working within a team and solving technical problems. I would jump at the opportunity to work with Sunny again and any organization would be lucky to have her.",
    image: camden,
  },
  {
    name: "Edward Kim",
    title: "Head of Data and R&D",
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
      "Sunny and I worked together in different teams. I found sunny extremely charming and pleasant, tackling all project work with dedication and smile. Her interpersonal skills were exemplary and appreciated by everyone who worked with her. Besides bringing positive energy to team, Sunny is a take-charge person who can present creative ideas and communicate it effectively. She would be an excellent addition to any team and I wish her best for her future projects.",
    image: arpita,
  },
];

export { communityOutreach, education, experience, testimonials };
