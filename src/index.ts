import { connect } from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import '../env';
import { typeDefs, resolvers } from './schema';

connect(process.env.DB_CON_STRING || '')
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log(err);
  });

const server = new ApolloServer({ typeDefs, resolvers });
const port = parseInt(process.env.PORT || '4000');

startStandaloneServer(server, { listen: { port: port } }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
