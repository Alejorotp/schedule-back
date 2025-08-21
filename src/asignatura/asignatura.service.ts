import { Injectable } from '@nestjs/common';
import { CreateAsignaturaDto } from './crud-asignatura.dto';
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
    console.log('Fetching all asignaturas');
    return this.PrismaService.asignatura.findMany();
  }
}
