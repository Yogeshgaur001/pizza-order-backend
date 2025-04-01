import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number; // Use "declare" to prevent TypeScript errors

  @Column
  name: string;

  @Column({ unique: true })
  email: string;

  @Column
  password: string;
}