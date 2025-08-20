export class CreateHorarioDto {
    day: string;
    hora_de_inicio: string;
    hora_fin: string;
    curso_id: number;
}

export class UpdateHorarioDto {
    day?: string;
    hora_de_inicio?: string;
    hora_fin?: string;
    curso_id?: number;
}