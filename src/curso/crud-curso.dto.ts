export class CreateCursoDto {
  nrc: string;
  asignatura_id: number;
  profesor_id?: number;
}

export class UpdateCursoDto {
  nrc?: string;
  asignatura_id?: number;
  profesor_id?: number;
}
