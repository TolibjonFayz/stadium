import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
