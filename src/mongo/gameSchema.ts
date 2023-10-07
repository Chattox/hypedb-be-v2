import { Schema } from 'mongoose';

export interface IGame {
  name: string;
  genre?: string;
  releaseDate: string | object;
  linkUrl: string;
  description?: string;
  hypeScore: number;
  dateAdded?: object;
  dateUpdated?: object;
}

export const gameSchema = new Schema<IGame>({
  name: { type: String, required: true, unique: true },
  genre: { type: String, required: false },
  releaseDate: { type: Schema.Types.Mixed, required: true },
  linkUrl: { type: String, required: true },
  description: { type: String, required: false },
  hypeScore: { type: Number, required: true },
  dateAdded: { type: Object, required: false },
  dateUpdated: { type: Object, required: false },
});