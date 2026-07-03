/* eslint-disable global-require */

const icon = (path) => require(`../assets/ts/${path}`);

const stack = [
  {
    heading: 'Languages',
    items: [
      { name: 'HTML5', icon: icon('html.png') },
      { name: 'CSS3', icon: icon('css.png') },
      { name: 'JavaScript', icon: icon('javascript.png') },
      { name: 'TypeScript', icon: icon('typescript.png') },
      { name: 'Sass', icon: icon('sass.png') },
      { name: 'Ruby', icon: icon('ruby.png') },
    ],
  },
  {
    heading: 'Front End',
    items: [
      { name: 'React', icon: icon('react.png') },
      { name: 'Next.js', icon: icon('nextjs.png') },
      { name: 'Redux', icon: icon('redux.png') },
      { name: 'Bootstrap', icon: icon('bootstrap.png') },
      { name: 'Tailwind', icon: icon('tailwind.png') },
      { name: 'JQuery', icon: icon('jquery.png') },
      { name: 'Vite', icon: icon('vite.png') },
    ],
  },
  {
    heading: 'Back End',
    items: [
      { name: 'Rails', icon: icon('rails.png') },
      { name: 'Firebase', icon: icon('firebase.png') },
      { name: 'Rest API Integration', icon: icon('restapi.png') },
    ],
  },
  {
    heading: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: icon('postgres.png') },
      { name: 'MySQL', icon: icon('mysql.png') },
    ],
  },
  {
    heading: 'Testing',
    items: [
      { name: 'Jest', icon: icon('jest.png') },
      { name: 'Cypress', icon: icon('cypress.png') },
      { name: 'RSpec', icon: icon('rspec.png') },
      { name: 'TDD', icon: icon('tdd.png') },
      { name: 'CI/CD', icon: icon('cicd.png') },
    ],
  },
  {
    heading: 'DevOps & Cloud',
    items: [
      { name: 'Git', icon: icon('git.png') },
      { name: 'GitHub', icon: icon('github.png') },
      { name: 'Docker', icon: icon('docker.png') },
      { name: 'Google Cloud', icon: icon('google-cloud.png') },
      { name: 'Heroku', icon: icon('heroku.png') },
      { name: 'Netlify', icon: icon('netlify.png') },
    ],
  },
  {
    heading: 'Mobile',
    items: [
      { name: 'Expo', icon: icon('expo.png') },
      { name: 'React Native', icon: icon('react.png') },
    ],
  },
];

export default stack;
