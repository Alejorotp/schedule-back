import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHorarioDto, UpdateHorarioDto } from './crud-horario.dto';

@Injectable()
export class HorarioService {
  constructor(private PrismaService: PrismaService) {}

  async create(data: CreateHorarioDto) {
    return this.PrismaService.horario.create({
      data: {
        ...data,
        day: data.day as any, // Cast to enum type, or use Prisma.DayOfWeek if imported
      },
    });
  }

  async findAll() {
    return this.PrismaService.horario.findMany();
  }

  async findOne(id: number) {
    const horario = await this.PrismaService.horario.findUnique({
      where: { id },
    });
    if (!horario) {
      throw new NotFoundException(`Horario con id ${id} no encontrado`);
    }
    return horario;
  }

  async update(id: number, data: UpdateHorarioDto) {
    const horario = await this.PrismaService.horario.findUnique({
      where: { id },
    });
    if (!horario) {
      throw new NotFoundException(`Horario con id ${id} no encontrado`);
    }
    // Remove undefined properties from data before updating
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined)
    );
    return this.PrismaService.horario.update({
      where: { id },
      data: cleanedData,
    });
  }

  async remove(id: number) {
    const horario = await this.PrismaService.horario.findUnique({
      where: { id },
    });
    if (!horario) {
      throw new NotFoundException(`Horario con id ${id} no encontrado`);
    }
    return this.PrismaService.horario.delete({
      where: { id },
    });
  }
}
