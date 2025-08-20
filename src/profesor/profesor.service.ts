import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './create-profesor.dto';

@Injectable()
export class ProfesorService {
  private profesores: { id: number; nombre: string }[] = [];

  findAll() {
    return this.profesores;
  }

  create(data: CreateProfesorDto) {
    const nuevo = { id: Date.now(), ...data };
    this.profesores.push(nuevo);
    return nuevo;
  }
}
