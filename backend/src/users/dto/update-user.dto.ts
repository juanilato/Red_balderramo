// update-user.dto.ts
import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @IsOptional()
    usuario?: string; 


    @IsString()
    @IsOptional()
    password?: string;  
 

}
