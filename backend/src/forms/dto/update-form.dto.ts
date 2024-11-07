// update-form.dto.ts
import { IsOptional, IsString, IsInt } from 'class-validator';

//Valida la clase ingresante donde se indica tipo y datos a cambiar (opcionales)
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
