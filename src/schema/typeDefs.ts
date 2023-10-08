export const typeDefs = `#graphql
  type Query {
    games: [Game]
    gamesByProperty(property: String!, value: String!): [Game]
  }

  type Mutation {
    addGame(game: GameInput!): Game
    updateGame(game: UpdateGameInput!): Game
    deleteGame(gameName: String!): Boolean
  }

  type Game {
    name: String!
    genre: String
    releaseDate: ReleaseDate!
    linkUrl: String!
    description: String
    hypeScore: Int!
    createdAt: String
    updatedAt: String
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
    description: String
    hypeScore: Int!
  }

  input UpdateGameInput {
    originalName: String!
    updatedGame: UpdateGamePropsInput!
  }

  input UpdateGamePropsInput {
    name: String
    genre: String
    releaseDate: ReleaseDateInput
    linkUrl: String
    description: String
    hypeScore: Int
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
