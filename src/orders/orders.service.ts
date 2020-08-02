import { JwtService } from '@nestjs/jwt';
import { Order } from './interfaces/order.interface';
import { OrderDTO } from './dto/order.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
    private readonly jwtService: JwtService,
  ) {}

  userDetails: any;
  async addOrder(orderDTO: OrderDTO): Promise<Order> {
    const newOrder = await this.orderModel(orderDTO);
    return newOrder.save();
  }

  async getOrders(req) {
    const username = this.getUser(req);
    return await this.orderModel.find({ email: username });
  }

  getUser(req) {
    let token = req.headers.authorization.split(' ');
    let userObject = this.jwtService.decode(token[1]);
    return userObject['email'];
  }
  // Delete a customer
  async deleteOrder(orderID): Promise<any> {
    const deletedOrder = await this.orderModel.findByIdAndRemove(orderID);
    return deletedOrder;
  }

  async updateorder(orderID, orderDTO: OrderDTO): Promise<Order> {
    const updatedOrder = await this.orderModel.findByIdAndUpdate(
      orderID,
      orderDTO,
      { new: true },
    );
    return updatedOrder;
  }
}
