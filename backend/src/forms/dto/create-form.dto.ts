// create-form.dto.ts
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateFormDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  @IsNotEmpty()
  userId!: number;
}
