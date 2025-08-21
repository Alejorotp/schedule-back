export class CreateCursoDto {
  nrc: string;
  periodo: string;
  asignatura_id: number;
  profesor: string;
  salon: string;
  horarios?: {
    day: string;
    hora_de_inicio: string;
    hora_final: string;
  }[];
}

export class UpdateCursoDto {
  nrc?: string;
  periodo?: string;
  asignatura_id?: number;
  profesor?: string;
  salon?: string;
  horarios?: {
    day: string;
    hora_de_inicio: string;
    hora_final: string;
  }[];
}
