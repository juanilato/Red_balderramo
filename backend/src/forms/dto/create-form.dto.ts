// create-form.dto.ts
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';


//Valida la clase ingresante donde se indica tipo y datos a ingresar (obligatorios y no vacíos)
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
