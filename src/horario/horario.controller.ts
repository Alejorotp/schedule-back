import { Controller, Get } from '@nestjs/common';
import { HorarioService } from './horario.service';

@Controller('horarios')
export class HorarioController {
  constructor(private readonly horarioService: HorarioService) {}

  @Get()
  findAll(): Promise<any[]> {
    return this.horarioService.findAll();
  }
}
