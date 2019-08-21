import images from '../../images/portfolio';

const portfolioData = [
  {
    title: 'beatscape',
    image: images.beatscape,
    description: `Allows a user to control all levels in a music composition. Allows a
        user to animate the sound levels for a dynamic 3D listening experience.`,
    tech: [
      'react',
      'Javascript',
      'React',
      'Node',
      'Postgresql',
      'AWS S3',
      'Web Audio API',
    ],
    liveURL: 'https://beatscape.netlify.com/',
    code: 'https://github.com/isaacdpierce/beatscape',
    codeServer: 'https://github.com/isaacdpierce/beatscape-server-knex',
  },
];

export default portfolioData;
