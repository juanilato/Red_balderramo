import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';

// update DTO no usado

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
