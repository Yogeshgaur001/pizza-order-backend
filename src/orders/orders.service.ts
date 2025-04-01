import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderModel: typeof Order) {}

  async placeOrder(userId: number, orderDetails: string) {
    return this.orderModel.create({ userId, orderDetails });
  }

  async getOrdersByUser(userId: number) {
    return this.orderModel.findAll({ where: { userId } });
  }
}