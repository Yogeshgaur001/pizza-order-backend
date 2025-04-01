import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Ingredient extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number; 

  @Column
  name: string;

  @Column
  price: number;
}