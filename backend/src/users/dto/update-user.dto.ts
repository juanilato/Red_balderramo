import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

//dto no usado

export class UpdateUserDto extends PartialType(CreateUserDto) {}
