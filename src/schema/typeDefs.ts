export const typeDefs = `#graphql
  type Query {
    games: [Game]
    gamesByProperty(property: String!, value: String!): [Game]
  }

  type Game {
    name: String!
    genre: String
    releaseDate: ReleaseDate!
    linkUrl: String!
    description: String
    hypeScore: Int!
    dateAdded: String
    dateUpdated: String
  }

  type ReleaseDate {
    date: String,
    displayString: String!
  }
`;
