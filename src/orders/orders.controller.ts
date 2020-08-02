import { OrderDTO } from './dto/order.dto';
import { OrdersService } from './orders.service';
import { Controller } from '@nestjs/common';
import {
  Get,
  Res,
  HttpStatus,
  Post,
  Request,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('/create')
  async addCustomer(@Res() res, @Body() orderDTO: OrderDTO) {
    const order = await this.ordersService.addOrder(orderDTO);
    return res.status(HttpStatus.OK).json({
      message: 'order has been created successfully',
      order,
    });
  }

  @Get()
  async getOrders(@Request() req, @Res() res) {
    const orders = await this.ordersService.getOrders(req);
    return res.status(HttpStatus.OK).json(orders);

    //return this.ordersService.getOrders(area);
  }

  @Put('/update')
  async updateCustomer(
    @Res() res,
    @Query('orderID') orderID,
    @Body() orderDTO: OrderDTO,
  ) {
    const customer = await this.ordersService.updateorder(orderID, orderDTO);
    if (!customer) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'order has been successfully updated',
      customer,
    });
  }

  @Delete('/delete')
  async deleteOrder(@Res() res, @Query('orderID') orderID) {
    const order = await this.ordersService.deleteOrder(orderID);
    if (!order) throw new NotFoundException('order does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'order has been deleted',
      order,
    });
  }
}
