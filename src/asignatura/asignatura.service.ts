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

}
