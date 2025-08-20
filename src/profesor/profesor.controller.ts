import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './create-profesor.dto';

@Controller('profesores')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Get()
  findAll() {
    return this.profesorService.findAll();
  }

  @Post()
  create(@Body() data: CreateProfesorDto) {
    return this.profesorService.create(data);
  }
}
