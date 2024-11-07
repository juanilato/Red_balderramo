// create-user.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

//Valida la clase ingresante donde se indica tipo y datos a ingresar (obligatorios y no vacíos)
export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    usuario!: string; 


    @IsString()
    @IsNotEmpty()
    password!: string;  
 

    @IsString()
    @IsNotEmpty()
    rol!: string;    
}
