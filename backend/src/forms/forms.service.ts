import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import {PrismaService} from '../../prisma/prisma.service';
import { UpdateGateway } from 'src/update.gateway';


export interface Form {
  id: number;
  title: string;
  description: string | null;  
  userId: number | null;       
  createdAt: Date;
}
@Injectable()
export class FormsService {
  constructor( private prisma: PrismaService,
    private readonly updateGateway: UpdateGateway,
  ){}
  

  //crea formulario con los datos ingresados
  async createForm(data: CreateFormDto) {
    const createdForm = await this.prisma.form.create({
      data: {
        title: data.title,
        description: data.description,
        user: {
          connect: { id: data.userId },  
        },
      },
    });
    const message = "Fomulario Creado: ";
    this.updateGateway.sendFormUpdate(createdForm, message);
    return createdForm;  

  }
  
  //Busca todos los legajos del id del usuario (userId)
  async findAll(userId: number) : Promise<Form[]> {
    const forms = await this.prisma.form.findMany({
      where: { userId : userId },
    });
  
    return forms;
  }
  //Muestra un legajo de un id correspondiente
  async findOne(id: number) {
    const forms = await this.prisma.form.findUnique({
      where: {id}, 
    });
    return  forms;
  }

  //recibe id y id de usuario y busca un legajo del usuario (userId) con el idForm ingresado
  async findOneFromUser(id: number, userId:number) {
    const forms = await this.prisma.form.findFirst({
      where: {
        AND: [
          { userId: userId },
          { id }, 
        ],
      },
    });
    return forms;
  }


  // Recibe id y data a modificar(datos opcionales) y modifica los datos del legajo correspondiente

  async update(formId: number, updateFormDto: UpdateFormDto): Promise<Form> {
    try {
      // Verifica si el formulario existe
      const form = await this.prisma.form.findUnique({
        where: { id: formId },
      });
  
      if (!form) {
        throw new NotFoundException('Formulario no encontrado');
      }
  
      // Actualiza el formulario y devuelve el resultado completo
      const updatedForm = await this.prisma.form.update({
        where: { id: formId },
        data: updateFormDto,
      });
  
      const message = "Formulario Actualizado: ";
      this.updateGateway.sendFormUpdate(updatedForm, message); // Envia el formulario completo
  
      return updatedForm; // Devuelve el formulario actualizado completo
    } catch (error) {
      // Manejo de errores específico
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error al actualizar el formulario');
    }
  }
  

  
  
  

//borra legajo según el id recibido
// form.service.ts

async remove(formId: number): Promise<Form> {
  try {
    const form = await this.prisma.form.findUnique({
      where: { id: formId },
    });

    if (!form) {
      throw new NotFoundException('Formulario no encontrado');
    }

    const message = "Formulario Eliminado: ";
    this.updateGateway.sendFormUpdate(form, message);

    return await this.prisma.form.delete({
      where: { id: formId },
    });
  } catch (error) {
    throw new InternalServerErrorException('Error al eliminar el formulario');
  }
}


  async UpdateFormUser(id:number, userId:number){
    await this.prisma.form.update({
      where: {id},
      data: {userId},
      
    });
    return `agregaste el legajo #${id} al usuario #${userId}`;
}

}