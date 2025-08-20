export class CreateSalonDto {
    nombre: string;
    ubicacion: string;
    capacidad: number;
}

export class UpdateSalonDto {
    nombre?: string;
    ubicacion?: string;
    capacidad?: number;
}