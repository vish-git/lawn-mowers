import { CustomerModule } from './customer/customer.module';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { QuoteModule } from './quote/quote.module';
import { CouponModule } from './coupon/coupon.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vish:vish@cluster0.u78lr.mongodb.net/customer-app?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
    CustomerModule,
    UsersModule,
    AuthModule,
    OrdersModule,
    QuoteModule,
    CouponModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
