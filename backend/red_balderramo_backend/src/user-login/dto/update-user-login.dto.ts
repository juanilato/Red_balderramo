import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLoginDto } from './create-user-login.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserLoginDto extends PartialType(CreateUserLoginDto) {
  @IsNotEmpty()
  name: string;
}
