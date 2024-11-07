// update-user.dto.ts
import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';


//crea clase donde se indica tipo y datos a cambiar (opcionales)
export class UpdateUserDto {

    @IsString()
    @IsOptional()
    usuario?: string; 


    @IsString()
    @IsOptional()
    password?: string;  
 

}
