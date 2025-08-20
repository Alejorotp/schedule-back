import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfesorModule } from './profesor/profesor.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { CursoModule } from './curso/curso.module';
import { HorarioModule } from './horario/horario.module';
import { SalonModule } from './salon/salon.module';

@Module({
  imports: [ProfesorModule, AsignaturaModule, CursoModule, HorarioModule, SalonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
