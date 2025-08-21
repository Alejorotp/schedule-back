
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto, UpdateCursoDto } from './crud-curso.dto';
import { PrismaService } from '../prisma/prisma.service';

enum day_of_week {
  lun = 'lun',
  mar = 'mar',
  mie = 'mie',
  jue = 'jue',
  vie = 'vie',
  sab = 'sab',
  dom = 'dom',
}

@Injectable()
export class CursoService {
  constructor(private PrismaService: PrismaService) {}

  async create(createCursoDto: CreateCursoDto) {
    console.log('DATA RECIBIDA:', createCursoDto);
    return this.PrismaService.curso.create({
      data: {
        nrc: createCursoDto.nrc,
        periodo: createCursoDto.periodo,
        asignatura_id: createCursoDto.asignatura_id,
        profesor: createCursoDto.profesor,
        salon: createCursoDto.salon,
        horarios: {
          createMany: {
            data: createCursoDto.horarios?.map(horario => ({
              day: horario.day as day_of_week,
              hora_de_inicio: horario.hora_de_inicio,
              hora_final: horario.hora_final,
            })) || [],
          },
        },
      },
      include: {
        horarios: true,
      },
    });
  }

  async findAll() {
    return this.PrismaService.curso.findMany({
      include: {
        asignatura: true,
        horarios: true,
      },
    });
  }
}
