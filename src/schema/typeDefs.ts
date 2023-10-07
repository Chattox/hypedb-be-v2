export const typeDefs = `#graphql
  type Query {
    games: [Game]
    gamesByProperty(property: String!, value: String!): [Game]
  }

  type Game {
    name: String!
    genre: String
    releaseDate: String!
    linkUrl: String!
    description: String
    hypeScore: Int!
    dateAdded: String
    dateUpdated: String
  }
`;
