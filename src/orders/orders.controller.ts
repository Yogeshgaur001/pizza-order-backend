import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './order.model';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async placeOrder(@Body() orderData: { userId: number; orderDetails: string }): Promise<Order> {
    return this.ordersService.placeOrder(orderData.userId, orderData.orderDetails);
  }

  @Get(':userId')
  async getOrders(@Param('userId') userId: number): Promise<Order[]> {
    return this.ordersService.getOrdersByUser(userId);
  }
}