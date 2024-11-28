import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, InternalServerErrorException,UseGuards } from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; 
import {Roles} from './decorators/roles.decorators'
import { RolesGuard } from './guards/roles.guard';

export interface Form {
  id: number;
  title: string;
  description: string | null;  
  userId: number | null;       
  createdAt: Date;
}

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  //Crea el legajo correspondiente (permite la creación a rol jefe, 
  // Usa JwtAuthGuard para seguridad de que cookie esta creada y 
  //RolesGuard para seguridad que rol cumple con el solicitado)
  @Post('/create')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('jefe')
  async create(@Body() createFormDto: CreateFormDto) {
    return this.formsService.createForm(createFormDto);
  }

  //Muestra todos los legajos del usuario (userId)
  @Get(':userId')
  async findAll(@Param('userId') userId: string): Promise<Form[]> {
    const parsedUserId = parseInt(userId, 10);
    return this.formsService.findAll(parsedUserId);  
  }

  //Permite ver un formulario en particular
  @Get('view/:id')
  async showForm(@Param('id') id:string){
    const parsedFormId = parseInt(id, 10);
    return this.formsService.findOne(parsedFormId);
  }

  //Muestra el formulario con (id) del usuario (userId)
  @Get(':userId/:id')
  async findOne(@Param('id') id: string, @Param('userId') userId: string) {
    const parsedUserId = parseInt(userId, 10);
    const parsedFormId = parseInt(id, 10);
    return this.formsService.findOneFromUser(+parsedFormId, parsedUserId);  
  }


  //ruta para asignar un formulario a un usuario
  @Patch(':userId/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('jefe')
  async updateFormUser(@Param('id')id: string, @Param('userId') userId: string){
    const parsedUserId = parseInt(userId, 10);
    const parsedFormId = parseInt(id, 10);
    return this.formsService.UpdateFormUser(+parsedFormId, parsedUserId);  
  }

// Ruta para actualizar un formulario
@Patch('/:id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('jefe')
async update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
  const parsedFormId = parseInt(id, 10);

  try {
    const updatedForm = await this.formsService.update(parsedFormId, updateFormDto);
    return updatedForm;
  } catch (error) {
    if (error instanceof NotFoundException) {
      throw error;
    }

    // Aseguramos que error es de tipo Error para acceder a message
    const err = error as Error;
    throw new InternalServerErrorException(err.message || "Error al actualizar el formulario");
  }
}


// Ruta para eliminar un formulario

@Delete('/:id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('jefe')
async remove(@Param('id') id: string) {
const parsedFormId = parseInt(id, 10);

try {
  const deletedForm = await this.formsService.remove(parsedFormId);
  return { message: "Formulario eliminado exitosamente", form: deletedForm };
} catch (error) {
  if (error instanceof NotFoundException) {
    throw error;
  }

  // Convertimos error a Error para acceder a message
  const err = error as Error;
  throw new InternalServerErrorException(err.message || "Error al eliminar el formulario");
}
}

}