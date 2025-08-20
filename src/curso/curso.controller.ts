import { Controller, Get } from '@nestjs/common';
import { CursoService } from './curso.service';

@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }
}
