import { ApiProperty } from '@nestjs/swagger';
// import { Model } from 'sequelize';
import { Column, DataType, Table ,Model} from 'sequelize-typescript';

interface BotAtrr {
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  status: boolean;
}

@Table({ tableName: 'Bot' })
export class Bot extends Model<Bot, BotAtrr> {
  @ApiProperty({ example: 1, description: 'UNIQUE ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1223455,
    description: 'user id',
  })
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
  })
  user_id: number;

  @ApiProperty({
    example: 'Username',
    description: 'user name',
  })
  @Column({
    type: DataType.STRING,
  })
  username: string;

  @ApiProperty({
    example: 'Jon',
    description: 'user first name',
  })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({
    example: 'Doe',
    description: 'user last name',
  })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({
    example: '+998908150412',
    description: 'user phone number',
  })
  @Column({
    type: DataType.STRING,
  })
  phone_number: string;

  @ApiProperty({
    example: 'false',
    description: 'user status',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  status: boolean;
}
