import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { OrderSchema } from './schemas/order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),

    JwtModule.register({
      secretOrPrivateKey: 'thisismykickasssecretthatiwilltotallychangelater',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
