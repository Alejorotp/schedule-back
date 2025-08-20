import { Injectable } from '@nestjs/common';

import { CreateCursoDto, UpdateCursoDto } from './crud-curso.dto';

@Injectable()
export class CursoService {
  private cursos: {
    id: number;
    nrc: string;
    asignatura_id: number;
    profesor_id?: number;
  }[] = [];

  findAll() {
    return this.cursos;
  }

  findOne(id: number) {
    return this.cursos.find((curso) => curso.id === id) || null;
  }

  create(data: CreateCursoDto) {
    const nuevo = { id: Date.now(), ...data };
    this.cursos.push(nuevo);
    return nuevo;
  }

  update(id: number, data: UpdateCursoDto) {
    const index = this.cursos.findIndex((curso) => curso.id === id);
    if (index === -1) return null;
    this.cursos[index] = { ...this.cursos[index], ...data };
    return this.cursos[index];
  }

  remove(id: number) {
    const index = this.cursos.findIndex((curso) => curso.id === id);
    if (index === -1) return null;
    const eliminado = this.cursos[index];
    this.cursos.splice(index, 1);
    return eliminado;
  }
}
