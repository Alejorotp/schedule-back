import { Controller, Get } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';

@Controller('asignaturas')
export class AsignaturaController {
  constructor(private readonly asignaturaService: AsignaturaService) {}

  @Get()
  findAll() {
    return this.asignaturaService.findAll();
  }
}
