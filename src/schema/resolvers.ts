import { Game } from '../mongo';
import { parseDate } from '../utils';

export const resolvers = {
  Query: {
    games: async () => await Game.find(),
    gamesByProperty: async (parent, args) => {
      const games = await Game.find({ [args.property]: args.value });
      games.forEach((game) => {
        game.releaseDate = parseDate(game.releaseDate);
      });
      return games;
    },
  },
};
