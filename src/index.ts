import { connect, connection } from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import '../env';
import { typeDefs, resolvers } from './schema';

connect(process.env.DB_CON_STRING || '').catch((err) => {
  console.log(err);
});
connection.once('open', () => {
  console.log('Connected to database');
});

const server = new ApolloServer({ typeDefs, resolvers });
const port = parseInt(process.env.PORT || '4000');

startStandaloneServer(server, { listen: { port: port } }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
