import { Order } from './interfaces/order.interface';
import { OrderDTO } from './dto/order.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}
  async addOrder(orderDTO: OrderDTO): Promise<Order> {
    const newOrder = await this.orderModel(orderDTO);
    return newOrder.save();
  }
}
