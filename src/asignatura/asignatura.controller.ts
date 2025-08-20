
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
/*
  @Get()
  findAll() {
    return this.asignaturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.asignaturaService.findOne(id);
  }
*/
  @Post()
  create(@Body() data: CreateAsignaturaDto) {
    return this.asignaturaService.create(data);
  }
/*
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateAsignaturaDto,
  ) {
    return this.asignaturaService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.asignaturaService.remove(id);
  }*/
}
