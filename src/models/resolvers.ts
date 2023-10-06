export const resolvers = {
  Query: {
    games: () => games,
  },
};

const games = [
  {
    name: 'test',
    releaseDate: 2024,
    linkUrl: 'test.com',
    hypeScore: 5,
  },
  {
    name: 'test 2',
    releaseDate: 'date',
    linkUrl: 'test2.com',
    hypeScore: 9,
  },
];
