import { Document } from 'mongoose';

export interface Coupon extends Document {
  readonly code: String;
  readonly description: String;
  readonly discount: String;
  readonly expireDate: Date;
  readonly isActive: Boolean;
}
