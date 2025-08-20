export class CreateAsignaturaDto {
    nombre: string;
    descripcion: string;
    creditos: number;
}

export class UpdateAsignaturaDto {
    nombre?: string;
    descripcion?: string;
    creditos?: number;
}