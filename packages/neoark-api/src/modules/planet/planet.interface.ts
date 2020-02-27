import { Document } from 'mongoose';

export interface Planet extends Document {
  readonly name: string;
}
