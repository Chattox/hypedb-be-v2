export const typeDefs = `#graphql
  type Query {
    games: [Game]
    gamesByProperty(property: String!, value: String!): [Game]
  }

  type Mutation {
    addGame(game: GameInput!): Game
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
    dateString: String!
    displayString: String!
  }

  input GameInput {
    name: String!
    genre: String
    releaseDate: ReleaseDateInput!
    linkUrl: String!
    hypeScore: Int!
  }

  input ReleaseDateInput {
    dateType: DateInputTypes!
    dateString: String!
  }

  enum DateInputTypes {
    specific
    quarter
    year
    custom
  }
`;
