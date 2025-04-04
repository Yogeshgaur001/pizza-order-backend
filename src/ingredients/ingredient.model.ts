import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';

@Table
export class Ingredient extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number; 

  @Column
  name: string;

  @Column({
    type: DataType.FLOAT, // ✅ Use FLOAT to allow decimal values
    allowNull: false,
  })
  price: number;
}