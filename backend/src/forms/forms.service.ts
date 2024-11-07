import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import {PrismaService} from '../../prisma/prisma.service';


@Injectable()
export class FormsService {
  constructor(private prisma: PrismaService) {}


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
  
    return createdForm;  

  }
  
  //Busca todos los legajos del id del usuario (userId)
  async findAll(userId: number) {
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
  async update(id: number, data: UpdateFormDto) {
    this.prisma.form.update({
      where: {id},
      data,
    });
    return `Módificaste el legajo número #${id} `;
  }

//borra legajo según el id recibido
  async remove(id: number) {
    await this.prisma.form.delete({
      where: {id}
    });
    return `Borraste el legajo número #${id}`;
  }

  async UpdateFormUser(id:number, userId:number){
    await this.prisma.form.update({
      where: {id},
      data: {userId},
      
    });
    return `agregaste el legajo #${id} al usuario #${userId}`;
}

}