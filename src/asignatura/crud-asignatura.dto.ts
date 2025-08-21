export class CreateAsignaturaDto {
    nombre: string;
    descripcion: string;
    creditos: number;
    departamento: string;
}

export class UpdateAsignaturaDto {
    nombre?: string;
    descripcion?: string;
    creditos?: number;
    departamento?: string;
}