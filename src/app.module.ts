import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { CursoModule } from './curso/curso.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AsignaturaModule, CursoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
