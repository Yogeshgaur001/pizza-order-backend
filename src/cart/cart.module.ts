import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart } from './cart.model';

@Module({
  imports: [SequelizeModule.forFeature([Cart])],
  providers: [CartService],
  controllers: [CartController],
  exports: [CartService],
})
export class CartModule {}