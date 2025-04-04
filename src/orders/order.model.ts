import { Table, Column, Model, ForeignKey, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table
export class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  userId: string;

  @Column({
    type: DataType.JSONB,
  })
  orderDetails: object;
}