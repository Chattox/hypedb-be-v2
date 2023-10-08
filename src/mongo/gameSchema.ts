import { Schema } from 'mongoose';

export interface IGame {
  name: string;
  genre?: string;
  releaseDate: object;
  linkUrl: string;
  description?: string;
  hypeScore: number;
}

export const gameSchema = new Schema<IGame>(
  {
    name: { type: String, required: true, unique: true },
    genre: { type: String, required: false },
    releaseDate: { type: Object, required: true },
    linkUrl: { type: String, required: true },
    description: { type: String, required: false },
    hypeScore: { type: Number, required: true },
  },
  { timestamps: true }
);
