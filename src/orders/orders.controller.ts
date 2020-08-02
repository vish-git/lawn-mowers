import { OrderDTO } from './dto/order.dto';
import { OrdersService } from './orders.service';
import { Controller } from '@nestjs/common';
import {
  Get,
  Res,
  HttpStatus,
  Post,
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
}
