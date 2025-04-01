import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './cart.model';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartModel: typeof Cart) {}

  async addToCart(userId: number, pizzaDetails: string) {
    return this.cartModel.create({ userId, pizzaDetails });
  }

  async getCartItems(userId: number) {
    return this.cartModel.findAll({ where: { userId } });
  }
}