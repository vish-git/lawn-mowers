import { CouponDTO } from './dto/create-coupon.dto';
import { Coupon } from './interfaces/coupon.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CouponService {
  constructor(
    @InjectModel('Coupon') private readonly couponModel: Model<Coupon>,
  ) {}

  coupongenerator() {
    var coupon = '';
    var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 6; i++) {
      coupon += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return coupon;
  }
  async addCoupon(couponDTO: CouponDTO): Promise<Coupon> {
    const newCoupon = await this.couponModel(couponDTO);
    return newCoupon.save();
  }

  async getCoupon(couponcode): Promise<Coupon> {
    const customers = await this.couponModel.findOne({ code: couponcode });
    return customers;
  }
}
