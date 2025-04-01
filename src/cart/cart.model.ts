import { Table, Column, Model, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table
export class Cart extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  pizzaDetails: string;
}