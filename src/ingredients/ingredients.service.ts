import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ingredient } from './ingredient.model';

@Injectable()
export class IngredientsService {
  constructor(@InjectModel(Ingredient) private ingredientModel: typeof Ingredient) {}

  async getAllIngredients() {
    return this.ingredientModel.findAll();
  }
}