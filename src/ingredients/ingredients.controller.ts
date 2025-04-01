import { Controller, Get } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { Ingredient } from './ingredient.model';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  async getAllIngredients(): Promise<Ingredient[]> {
    return this.ingredientsService.getAllIngredients();
  }
}