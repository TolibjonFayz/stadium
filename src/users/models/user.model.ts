import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserAtrrs {
  first_name: string;
  last_name: string;
  username: string;
  hashed_password: string;
  telegram_link: string;
  email: string;
  phone: string;
  user_photo: string;
  birthday: Date;
  is_owner: boolean;
  is_active: boolean;
  hashed_refresh_token: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserAtrrs> {
  @ApiProperty({ example: 1, description: 'UNIQUE ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Sobir', description: 'Foydalanuvchi ismi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({ example: 'Bobirov', description: 'Foydalanuvchi familiyasi' })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({ example: 'user1', description: 'Foydalanuvchi nomi' })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  username: string;

  @ApiProperty({
    example: 'http://tme/kimdir',
    description: 'Foydalanuvchi telegrami',
  })
  @Column({
    type: DataType.STRING,
  })
  telegram_link: string;

  @ApiProperty({
    example: 'password',
    description: 'Foydalanuvchi paroli',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @ApiProperty({
    example: 'email@gmail.com',
    description: 'Foydalanuvchi elektron pochtasi',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: '912145787',
    description: 'Foydalanuvchi telefoni',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: 'user photo link',
    description: 'Foydalanuvchi rasmi',
  })
  @Column({
    type: DataType.STRING,
  })
  user_photo: string;

  @ApiProperty({
    example: '01.01.2000',
    description: 'Foydalanuvchi tug`ilgan sanasi',
  })
  @Column({
    type: DataType.DATE,
  })
  birthday: Date;

  @ApiProperty({
    example: 'false',
    description: 'Foydalanuvchi egasi yoki yo`qligi',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_owner: boolean;

  @ApiProperty({
    example: 'false',
    description: 'Foydalanuvchi tasdiqlangan holati',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({
    example: 'token',
    description: 'Foydalanuvchi tasdiqlangan holati',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @Column({
    type: DataType.STRING,
  })
  activation_link: string;
}
