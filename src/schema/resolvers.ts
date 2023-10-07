import { Game } from '../mongo';
import { parseDate } from '../utils';

export const resolvers = {
  Query: {
    games: async () => await Game.find(),
    gamesByProperty: async (parent, args) => await Game.find({ [args.property]: args.value }),
  },
  Mutation: {
    addGame: async (parent, args) => {
      console.log(args);
      const newGame = new Game({
        name: args.game.name,
        genre: args.game.genre,
        releaseDate: parseDate(args.game.releaseDate),
        linkUrl: args.game.linkUrl,
        description: args.game.description,
        hypeScore: args.game.hypeScore,
      });

      return await newGame.save().then((savedGame) => savedGame);
    },
  },
};
