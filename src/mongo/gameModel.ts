import { model } from 'mongoose';
import { IGame, gameSchema } from './gameSchema';

export const Game = model<IGame>('Game', gameSchema);
