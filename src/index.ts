import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

const typeDefs = readFileSync('./gameSchema.graphql', { encoding: 'utf-8' });

const games = [
  {
    name: 'Test',
    releaseDate: { yearDate: 2023 },
    linkUrl: 'test.com',
  },
];

const resolvers = {
  Query: {
    games: () => games,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at ${url}`);
