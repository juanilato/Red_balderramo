import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { IsString,IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
// update DTO no usado

//Dto para login con los datos correspondientes (opcionales)
export class UpdateAuthDto extends PartialType(CreateAuthDto) {
    @IsString()
    @IsNotEmpty()
    usuario!: string; 


    @IsString()
    @IsNotEmpty()
    password!: string;  
 }
