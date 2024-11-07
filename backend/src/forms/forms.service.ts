import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import {PrismaService} from '../../prisma/prisma.service';


@Injectable()
export class FormsService {
  constructor(private prisma: PrismaService) {}

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
  

  async findAll(userId: number) {
    const forms = await this.prisma.form.findMany({
      where: { userId : userId },
    });
  
    return forms;
  }

  async findOne(id: number, userId:number) {
    this.prisma.form.findFirst({
      where: {
        AND: [
          { userId: userId },
          { id }, 
        ],
      },
    });
    return `Devolución legajo número #${id}`;
  }

  async update(id: number, data: UpdateFormDto) {
    this.prisma.form.update({
      where: {id},
      data,
    });
    return `Módificaste el legajo número #${id} `;
  }


  async remove(id: number) {
    this.prisma.form.delete({
      where: {id}
    });
    return `Borraste el legajo número #${id}`;
  }
}
