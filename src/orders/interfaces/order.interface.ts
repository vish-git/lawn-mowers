import { Document } from 'mongoose';

export interface Order extends Document {
  readonly email: String;
  readonly area: Number;
  readonly price: Number;
  readonly created_at: Date;
}
