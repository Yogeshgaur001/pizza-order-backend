import { Controller, Get, Post, Body, Query, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post('add')
  addToCart(@Body() body) {
    return this.cartService.addToCart(body.userId, body.pizzaDetails);
  }

  @Get()
  getCartItems(@Query('userId') userId: string) {
    return this.cartService.getCartItems(userId);
  }

  @Delete('delete/:userId')
  deleteCartItems(@Param('userId') userId: string) {
    return this.cartService.deleteCartItems(userId);
  }
}