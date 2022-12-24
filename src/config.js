import arpita from "./assets/arpita.jpeg";
import emily from "./assets/emily.jpeg";
import fahey from "./assets/fahey.jpeg";

const experience = [
  {
    company: "Instil",
    dates: "2022 - Present",
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
    name: "Ryan Fahey",
    title: "Senior Technical Product Manager",
    displayText:
      "As Sunny's direct manager, Sunny made my job easy. Sunny has outstanding communication skills and a strong passion for technology, particularly front-end web development. During the time she reported to me, I watched Sunny grow her skills tremendously to the point where she was working on some of the most complex parts of our application.",
    image: fahey,
  },
  {
    name: "Emily Barbenza",
    title: "Senior Software Accessibility Engineer",
    displayText:
      "I had the pleasure of working with Sunny on numerous occasions. Sunny is a talented front-end developer and a skilled presenter who can command a room. I was personally able to attend one of her talks on CSS and learned some interesting new things about developing web applications from her presentation. Beyond her technical abilities, one of Sunny’s best qualities is her warm and positive personality. She really knows how to make a teammate feel included. Any company looking for an engineer would be lucky to have Sunny on their team.",
    image: emily,
  },
  {
    name: "Arpita Barbenza",
    title: "Data Science Lead",
    displayText:
      "Sunny and I worked together in different teams at Innova for 2 years. I found sunny extremely charming and pleasant, tackling all project work with dedication and smile. Her interpersonal skills were exemplary and appreciated by everyone who worked with her. Besides bringing positive energy to team, sunny is a take-charge person who can present creative ideas and most importantly communicate it very effectively. Sunny has passion for innovation when it comes to technology and her work reflects her passion and energy. Sunny was also extraordinarily helpful in other areas of the company such as Tech Talks and other company events. She is super fun to be around! She is motivated worker who is passionate about her work and takes pride in her work. She would be an excellent addition to any team and I wish her best for her future projects.",
    image: arpita,
  },
];

export { communityOutreach, education, experience, testimonials };
