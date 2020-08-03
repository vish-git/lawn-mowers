import * as mongoose from 'mongoose';

export const CouponSchema = new mongoose.Schema({
  code: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  discount: { type: String, require: true },
  discount_type: { type: String, require: true },
  expireDate: { type: Date, require: true, default: '' },
  isActive: { type: Boolean, require: true, default: true },
});

CouponSchema.pre('save', function(next) {
  console.log('inside coupon schema');
  let currentDate = new Date();
  let couponCode: String = '';
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 6; i++) {
    couponCode += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  this.code = couponCode;
  let date = new Date(); // Now
  this.expireDate = date.setDate(date.getDate() + 30); // Set now + 30 days as the new date

  next();
});

// CouponSchema.methods.coupongenerator = function() {
//   var coupon = '';
//   var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   for (var i = 0; i < 6; i++) {
//     coupon += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return coupon;
// };
