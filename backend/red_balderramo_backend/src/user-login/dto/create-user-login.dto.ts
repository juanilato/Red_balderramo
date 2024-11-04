import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class CreateUserLoginDto {
  @IsEmail()
  email: string;

  @MinLength(6) // Proporciona un valor mínimo
  @MaxLength(20) // Proporciona un valor máximo
  password: string; // Define aquí los límites que consideres adecuados
}
