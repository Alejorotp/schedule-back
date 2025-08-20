import { Injectable } from '@nestjs/common';
import { CreateProfesorDto, UpdateProfesorDto } from './crud-profesor.dto';

@Injectable()
export class ProfesorService {
  private profesores: { id: number; nombre: string }[] = [];

  findAll() {
    return this.profesores;
  }

  findOne(id: number) {
    return this.profesores.find((prof) => prof.id === id) || null;
  }

  create(data: CreateProfesorDto) {
    const nuevo = { id: Date.now(), ...data };
    this.profesores.push(nuevo);
    return nuevo;
  }

  update(id: number, data: UpdateProfesorDto) {
    const index = this.profesores.findIndex((prof) => prof.id === id);
    if (index === -1) return null;
    this.profesores[index] = { ...this.profesores[index], ...data };
    return this.profesores[index];
  }

  remove(id: number) {
    const index = this.profesores.findIndex((prof) => prof.id === id);
    if (index === -1) return null;
    const eliminado = this.profesores[index];
    this.profesores.splice(index, 1);
    return eliminado;
  }
}
