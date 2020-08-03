import { CouponDTO } from './dto/create-coupon.dto';
import { CouponService } from './coupon.service';
import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';

@Controller('coupon')
export class CouponController {
  constructor(private couponService: CouponService) {}
  @Post('/create')
  async addCustomer(@Res() res, @Body() couponDTO: CouponDTO) {
    const coupon = await this.couponService.addCoupon(couponDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Coupon has been created successfully',
      coupon,
    });
  }
  @Get('coupon/:code')
  async getCustomer(@Res() res, @Param('code') couponcode) {
    const coupon = await this.couponService.getCoupon(couponcode);
    if (!coupon) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json(coupon);
  }
}
