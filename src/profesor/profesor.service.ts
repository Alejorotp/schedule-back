import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfesorDto, UpdateProfesorDto } from './crud-profesor.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfesorService {
  constructor(private PrismaService: PrismaService) {}

  async create(data: CreateProfesorDto) {
    return this.PrismaService.profesor.create({
      data,
    });
  }

  async findAll() {
    return this.PrismaService.profesor.findMany();
  }

  async findOne(id: number) {
    const profesor = await this.PrismaService.profesor.findUnique({
      where: { id },
    });
    if (!profesor) {
      throw new NotFoundException(`Profesor con id ${id} no encontrado`);
    }
    return profesor;
  }

  async update(id: number, data: UpdateProfesorDto) {
    const profesor = await this.PrismaService.profesor.findUnique({
      where: { id },
    });
    if (!profesor) {
      throw new NotFoundException(`Profesor con id ${id} no encontrado`);
    }
    return this.PrismaService.profesor.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const profesor = await this.PrismaService.profesor.findUnique({
      where: { id },
    });
    if (!profesor) {
      throw new NotFoundException(`Profesor con id ${id} no encontrado`);
    }
    return this.PrismaService.profesor.delete({
      where: { id },
    });
  }
}
