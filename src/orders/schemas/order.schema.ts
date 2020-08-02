import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  email: String,
  area: Number,
  price: Number,
  created_at: { type: Date, default: Date.now },
  discount_applied: String,
});
