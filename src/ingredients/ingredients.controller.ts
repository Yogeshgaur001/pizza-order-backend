import { Controller, Get, Post, Body } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { Ingredient } from './ingredient.model';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  async getAllIngredients(): Promise<Ingredient[]> {
    return this.ingredientsService.getAllIngredients();
  }

  @Post('create')
  async createIngredient(@Body('name') name: string, @Body('price') price: number): Promise<Ingredient> {
    return this.ingredientsService.createIngredient(name, price);
  }
}