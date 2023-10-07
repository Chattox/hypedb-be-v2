import { Game } from '../mongo/gameModel';

export const resolvers = {
  Query: {
    games: async () => await Game.find(),
    gamesByProperty: async (parent, args) => await Game.find({ [args.property]: args.value }),
  },
};
