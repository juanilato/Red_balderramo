// create-user.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    usuario!: string; 


    @IsString()
    @IsNotEmpty()
    password!: string;  
 

    @IsString()
    @IsNotEmpty()
    rol!: string;    
}
