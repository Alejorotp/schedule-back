
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto, UpdateCursoDto } from './crud-curso.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CursoService {
  constructor(private PrismaService: PrismaService) {}

  async create(data: CreateCursoDto) {
    return this.PrismaService.curso.create({
      data,
    });
  }

  async findAll() {
    return this.PrismaService.curso.findMany();
  }

  async findOne(id: number) {
    const curso = await this.PrismaService.curso.findUnique({
      where: { id },
    });
    if (!curso) {
      throw new NotFoundException(`Curso con id ${id} no encontrado`);
    }
    return curso;
  }

  async update(id: number, data: UpdateCursoDto) {
    const curso = await this.PrismaService.curso.findUnique({
      where: { id },
    });
    if (!curso) {
      throw new NotFoundException(`Curso con id ${id} no encontrado`);
    }
    return this.PrismaService.curso.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const curso = await this.PrismaService.curso.findUnique({
      where: { id },
    });
    if (!curso) {
      throw new NotFoundException(`Curso con id ${id} no encontrado`);
    }
    return this.PrismaService.curso.delete({
      where: { id },
    });
  }
}
