import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post('/create')
  async create(@Body() createFormDto: CreateFormDto) {
    return this.formsService.createForm(createFormDto);
  }

  @Get('/view/:userId')
  async findAll(@Param('userId') userId: string) {
    const parsedUserId = parseInt(userId, 10);
    return this.formsService.findAll(parsedUserId);  
  }

  @Get(':userId/:id')
  async findOne(@Param('id') id: string, @Param('userId') userId: string) {
    const parsedUserId = parseInt(userId, 10);
    const parsedFormId = parseInt(id, 10);
    return this.formsService.findOne(+parsedFormId, parsedUserId);  
  }

  // Ruta para actualizar un formulario
  @Put(':id')
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
