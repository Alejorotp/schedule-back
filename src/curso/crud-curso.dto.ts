export class CreateCursoDto {
  nrc: string;
  periodo: string;
  asignatura_id: number;
  profesor_id?: number;
}

export class UpdateCursoDto {
  nrc?: string;
  periodo?: string;
  asignatura_id?: number;
  profesor_id?: number;
}
