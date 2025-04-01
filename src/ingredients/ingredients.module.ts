import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { Ingredient } from './ingredient.model';

@Module({
  imports: [SequelizeModule.forFeature([Ingredient])],
  providers: [IngredientsService],
  controllers: [IngredientsController],
  exports: [IngredientsService],
})
export class IngredientsModule {}