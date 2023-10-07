import { Game } from '../mongo/gameModel';

export const resolvers = {
  Query: {
    games: async () => await Game.find(),
  },
};
