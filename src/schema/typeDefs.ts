export const typeDefs = `#graphql
  type Query {
    games: [Game]
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
    "This is parsed into an actual date object for entry into database"
    specificDate: String
    generalDate: String
    yearDate: Int
  }
`;
