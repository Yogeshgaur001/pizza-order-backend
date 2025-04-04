import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<User> {  // ✅ Ensure Model<User> is specified
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4, // ✅ Automatically generate UUID
    primaryKey: true,
  })
  declare id: string; // ✅ Use 'declare' to prevent override errors

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;
}
