import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './cart.model';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartModel: typeof Cart) {}

  async addToCart(userId: string, pizzaDetails: object) {
    return this.cartModel.create({ userId, pizzaDetails });
  }

  async getCartItems(userId: string) {
    return this.cartModel.findAll({ where: { userId } });
  }

  async deleteCartItems(userId: string) {
    return this.cartModel.destroy({ where: { userId } });
  }
}