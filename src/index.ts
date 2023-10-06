import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './models/typeDefs';

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

const resolvers = {
  Query: {
    games: () => games,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
