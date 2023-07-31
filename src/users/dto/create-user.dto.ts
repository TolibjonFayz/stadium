import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ example: 'Sobir', description: 'Foydalanuvchi nomi' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'kimdorov', description: 'asjdn' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ example: 'user1', description: 'Foydalanuvchi nomi' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'password', description: 'Foydalanuvchi paroli' })
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'confirm_password',
    description: 'Foydalanuvchi paroli',
  })
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  @MinLength(6)
  confirm_password: string;

  @ApiProperty({
    example: 'kimdir@gmail.com',
    description: 'Foydalanuvchi email pochtasi',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '+9968484654564',
    description: 'Foydalanuvchi telefon raqami',
  })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({
    example: '2000.01.01',
    description: 'Foydalanuvchi tug`ilgan sanasi',
  })
  @IsNotEmpty()
  birthday: Date;
}
