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

import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './create-profesor.dto';
import { UpdateProfesorDto } from './update-profesor.dto';

@Controller('profesores')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Get()
  findAll() {
    return this.profesorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.profesorService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateProfesorDto) {
    return this.profesorService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateProfesorDto,
  ) {
    return this.profesorService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.profesorService.remove(id);
  }
}
