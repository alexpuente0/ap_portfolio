/* eslint-disable global-require */

const icon = (path) => require(`../assets/ts/${path}`);

const stack = [
  {
    heading: 'Languages & Markup',
    items: [
      { name: 'HTML', icon: icon('html.png') },
      { name: 'CSS', icon: icon('css.png') },
      { name: 'JavaScript', icon: icon('javascript.png') },
      { name: 'Sass', icon: icon('sass.png') },
      { name: 'Ruby', icon: icon('ruby.png') },
    ],
  },
  {
    heading: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: icon('react.png') },
      { name: 'Redux', icon: icon('redux.png') },
      { name: 'Rails', icon: icon('rails.png') },
      { name: 'Bootstrap', icon: icon('bootstrap.png') },
      { name: 'Tailwind', icon: icon('tailwind.png') },
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
      { name: 'RSpec', icon: icon('rspec.png') },
      { name: 'Jest', icon: icon('jest.png') },
    ],
  },
  {
    heading: 'Version Control',
    items: [
      { name: 'Git', icon: icon('git.png') },
      { name: 'GitHub', icon: icon('github.png') },
    ],
  },
  {
    heading: 'Deployment',
    items: [
      { name: 'Heroku', icon: icon('heroku.png') },
      { name: 'Netlify', icon: icon('netlify.png') },
      { name: 'Docker', icon: icon('docker.png') },
    ],
  },
];

export default stack;
