import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';
import { CreateAsignaturaDto, UpdateAsignaturaDto } from './crud-asignatura.dto';

@Controller('asignaturas')
export class AsignaturaController {
  constructor(private readonly asignaturaService: AsignaturaService) {}

  @Get()
  findAll() {
    return this.asignaturaService.findAll();
  }
  
  @Post()
  create(@Body() data: CreateAsignaturaDto) {
    return this.asignaturaService.create(data);
  }
}
