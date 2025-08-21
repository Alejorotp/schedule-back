// src/asignatura/asignatura.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAsignaturaDto, UpdateAsignaturaDto } from './crud-asignatura.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AsignaturaService {
  constructor(private PrismaService: PrismaService) {}

  async create(data: CreateAsignaturaDto) {
    console.log('DATA RECIBIDA:', data);
    return this.PrismaService.asignatura.create({
      data: data,
    });
  }
  
  async findAll() {
    return this.PrismaService.asignatura.findMany();
  }

  async findOne(id: number) {
    const asignatura = await this.PrismaService.asignatura.findUnique({
      where: { id },
    });
    if (!asignatura) {
      throw new NotFoundException(`Asignatura con id ${id} no encontrada`);
    }
    return asignatura;
  }

  async update(id: number, data: UpdateAsignaturaDto) {
    const asignatura = await this.PrismaService.asignatura.findUnique({
      where: { id },
    });
    if (!asignatura) {
      throw new NotFoundException(`Asignatura con id ${id} no encontrada`);
    }
    return this.PrismaService.asignatura.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const asignatura = await this.PrismaService.asignatura.findUnique({
      where: { id },
    });
    if (!asignatura) {
      throw new NotFoundException(`Asignatura con id ${id} no encontrada`);
    }
    return this.PrismaService.asignatura.delete({
      where: { id },
    });
  }
}
