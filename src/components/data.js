/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable quotes */

const projectDetails = [
  {
    id: 19,
    title: "Choice Roulette",
    description:
      "A fun little app that allows you to add options and then randomly select one of them. Made with React.",
    image: require("../assets/projects/pj19 - choice.png"),
    link: "https://github.com/alexpuente0/choice_roulette",
  },
  {
    id: 18,
    title: "Raul Sergio - Master Hair Stylist",
    description:
      "A personal website for Raul Sergio, a World Class Master Hair Stylist. It showcases his work and allows users to request appointments.",
    image: require("../assets/projects/pj17 - raulsergio.png"),
    link: "https://github.com/alexpuente0/raul_sergio",
  },
  {
    id: 17,
    title: "Family Calendar",
    description:
      "A web app to prevent scheduling clashes and coordinate my family's commitments.",
    image: require("../assets/projects/pj16 - calfam.png"),
    link: "https://github.com/alexpuente0/calendario-familiar",
  },
  // {
  //   id: 16,
  //   title: 'Rent-A-Green',
  //   description:
  //     'This application allow users to book an appointment to test an electric car.
  //   The homepage is a showcase of the available vehicles. You can add new cars, view the
  //   details of each one, and book an appointment for renting a car, among other features.
  //   This App is made with React with a propietary RoR API.',
  //   image: 'https://i.imgur.com/0Z0Z7Zu.png',
  //   link: 'https://github.com/alexpuente0/final-capstone-frontend',
  // },
  {
    id: 15,
    title: "Budget Wizard",
    description:
      "An object-based personal finance Mobile App where each user can log in and register their expenses in different categories or groups.",
    image: require("../assets/projects/pj15 - bgwz.png"),
    link: "https://github.com/alexpuente0/budget_wizard",
  },
  {
    id: 14,
    title: "Recipes App",
    description:
      "An object-based personal Recipe app where each user can log in and enter their recipes while using an ingredients inventory and a shopping list for the missing ones. Made with Ruby on Rails",
    image: require("../assets/projects/pj14 - recp.png"),
    link: "https://github.com/alexpuente0/recipes_rails",
  },
  {
    id: 13,
    title: "Blog Page",
    description:
      "Generic Blog website created using Ruby on Rails. After LogIn, user can create posts, as well as comment and like posts by other users. This App can also be used as an API to post a comment or get a post's info.",
    image: require("../assets/projects/pj13 - blog.png"),
    link: "https://github.com/alexpuente0/rails_blog",
  },
  // {
  //   id: 12,
  //   title: 'Item List',
  //   description:
  //     'An object-based personal list where you can save your favorite thing information ordered by author, lables and genre.',
  //   image: require('../assets/projects/'),
  //   link: 'https://github.com/alexpuente0/list_of_things',
  // },
  // {
  //   id: 11,
  //   title: 'School Library',
  //   description:
  //     'This is a school library app, created using OOP on Ruby, a tool to record what books are in the library and who borrows them.
  //      This app allows you to add books, students, teachers, save a record of who borrowed each book and when.',
  //   image: '../assets/projects/pj11 - school_library.png',
  //   link: 'https://github.com/alexpuente0/school_library_ruby',
  // },
  {
    id: 10,
    title: "Air Quailty Monitor",
    description:
      "Single Page app made with React using a Global Air Quality API. It allows the user to search for a city and get the current air quality index.",
    image: require("../assets/projects/pj10 - airQ.png"),
    link: "https://github.com/alexpuente0/air-quality-monitor",
  },
  {
    id: 9,
    title: "Space Traveler's Hub",
    description:
      "This React WebApp allows the user to book rockets and sign up for missions from the SpaceX API.",
    image: require("../assets/projects/pj9 - rocket.png"),
    link: "https://github.com/alexpuente0/react-spacex",
  },
  {
    id: 8,
    title: "BookStore CMS",
    description:
      "This project its a Single Page Application to keep track of which books you've started or finished reading. Information is stored on an external API.",
    image: require("../assets/projects/pj8 - store.png"),
    link: "https://github.com/alexpuente0/bookstore-react",
  },
  {
    id: 7,
    title: "MathMagicians",
    description:
      "This project its a Single Page Application which includes a homepage, an interactive calculator and a math-related quote. Made with React",
    image: require("../assets/projects/pj7 - math.png"),
    link: "https://github.com/alexpuente0/mathmagicians",
  },
  {
    id: 6,
    title: "Leaderboard",
    description:
      "A simple little fun 'game' where you submit your name and get assigned a random Score. The scores are listed in descending order on a leaderboard, and you can see the top 10 scores or scroll down for the rest. Data is stored in an API.",
    image: require("../assets/projects/pj6 - lead.png"),
    link: "https://github.com/alexpuente0/Leaderboard",
  },
  {
    id: 5,
    title: "To-do List",
    description:
      "An interactive list of tasks where you can add tasks, mark them as complete and edit them. Made with Javascript.",
    image: require("../assets/projects/pj5 - todo.png"),
    link: "https://github.com/alexpuente0/todo_list",
  },
  {
    id: 4,
    title: "Awesome Books",
    description:
      "This Single Page Application was built using Javascript, HTML and CSS. It allows the user to add and remove books from a list. Book list is saved in local storage.",
    image: require("../assets/projects/pj4 - awbk.png"),
    link: "https://github.com/alexpuente0/awesome_books_es6",
  },
  {
    id: 3,
    title: "Unlimited Love Launch Party",
    description:
      "This is a fan-made website celebrating the mock-launch party for the 2022 album 'Unlimited Love' by the Red Hot Chili Peppers. Most of the assets were made by me using photoshop.",
    image: require("../assets/projects/pj3 - ulov.png"),
    link: "https://github.com/alexpuente0/Capstone_festival",
  },
  // {
  //   id: 2,
  //   title: "My First Portfolio",
  //   description:
  //     "This is a generic portfolio website. It was built as an assignment using basic HTML, CSS and Javascript. Was based off a generic Figma template. It was a great learning experience, as it helped me translate from UI/UX design to a functional website.",
  //   image: require("../assets/projects/pj2 - port.png"),
  //   link: "https://github.com/alexpuente0/My-Portfolio",
  // },
  {
    id: 1,
    title: "Bombay Bicicle Club - Challenge Page",
    description:
      "The very first website i made, its a fanpage for the band Bombay Bicycle Club. It is made only using HTML and CSS, and its quite simple. It was created as a challenge, and the time to complete the project was limited to 2 hours or less",
    image: require("../assets/projects/pj1 -bombay.png"),
    link: "http://github.com/alexpuente0/challenges",
  },
];

export default projectDetails;
