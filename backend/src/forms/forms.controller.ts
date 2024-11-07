import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  //Crea el legajo correspondiente
  @Post('/create')
  async create(@Body() createFormDto: CreateFormDto) {
    return this.formsService.createForm(createFormDto);
  }

  //Muestra todos los legajos del usuario (userId)
  @Get(':userId')
  async findAll(@Param('userId') userId: string) {
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
  async updateFormUser(@Param('id')id: string, @Param('userId') userId: string){
    const parsedUserId = parseInt(userId, 10);
    const parsedFormId = parseInt(id, 10);
    return this.formsService.UpdateFormUser(+parsedFormId, parsedUserId);  
  }

  // Ruta para actualizar un formulario
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    const parsedFormId = parseInt(id, 10);
    return this.formsService.update(+parsedFormId, updateFormDto);
  }

  // Ruta para eliminar un formulario
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const parsedFormId = parseInt(id, 10);
    return this.formsService.remove(+parsedFormId);  
  }
}
