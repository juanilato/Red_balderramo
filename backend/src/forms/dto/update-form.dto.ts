// update-form.dto.ts
import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateFormDto {
  @IsOptional()  
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional() 
  @IsInt()
  userId?: number;
}
