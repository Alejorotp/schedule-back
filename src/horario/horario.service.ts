import { Injectable } from '@nestjs/common';

@Injectable()
export class HorarioService {
  findAll(): Promise<any[]> {
    // Lógica para obtener horarios
    return Promise.resolve([]);
  }
}
