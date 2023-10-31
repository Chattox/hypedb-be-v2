import { connect } from "mongoose";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import "../env";
import { typeDefs, resolvers } from "./schema";

const dbUrl =
  process.env.APP_ENV === "production"
    ? `mongodb+srv://${encodeURIComponent(
        process.env.DB_USERNAME
      )}:${encodeURIComponent(process.env.DB_PASSWORD)}${process.env.DB_URL}`
    : process.env.DB_URL;

connect(dbUrl || "", { dbName: process.env.DB_COLLECTION || undefined })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const server = new ApolloServer({ typeDefs, resolvers });
const port = parseInt(process.env.PORT || "4000");

startStandaloneServer(server, { listen: { port: port } }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
