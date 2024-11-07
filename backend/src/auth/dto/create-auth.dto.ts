//create DTO no usado
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

//Dto para registro con los datos correspondientes (obligatorios)
export class CreateAuthDto {
    
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    usuario!: string; 


    
    @IsNotEmpty()
    @IsString()
    password!: string;  
 

    @IsString()
    @IsNotEmpty()
    rol!: string;    

}
