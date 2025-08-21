import { PrismaService } from '../../prisma/prisma.service';
import { CreateCursoDto, UpdateCursoDto } from '../crud-curso.dto';
// Define Curso type locally if not exported by @prisma/client
export type Curso = {
  id: number;
  nrc: string;
  periodo: string;
  asignatura_id: number;
  profesor: string | null;
  salon: string | null;
  // Add other fields as needed
};

// Define Horario type locally if not exported by @prisma/client
export type Horario = {
  day: string;
  hora_de_inicio: string;
  hora_final: string;
};

// The Abstract Class (Template)
export abstract class CursoPersistenceTemplate {
  protected prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  // This is the **Template Method**.
  // It defines the sequence of steps for the algorithm.
  public async execute(
    data: CreateCursoDto | UpdateCursoDto,
    id?: number,
  ): Promise<Curso & { horarios: Horario[] }> {
    // Step 1: Prepare the data structure for Prisma.
    // This step is concrete and shared by all subclasses.
    const prismaData = this.prepareData(data);

    // Step 2: Run the specific database query.
    // This step is abstract and must be implemented by subclasses.
    const result = await this.runQuery(prismaData, id);

    // Step 3: Return the result (can be extended if needed).
    return result;
  }

  // A concrete method, part of the template's structure.
  private prepareData(data: CreateCursoDto | UpdateCursoDto) {
    return {
      nrc: data.nrc,
      periodo: data.periodo,
      asignatura_id: data.asignatura_id,
      profesor: data.profesor,
      salon: data.salon,
      horarios: {
        // For updates, we clear existing schedules first.
        ...(data instanceof UpdateCursoDto && { deleteMany: {} }),
        createMany: {
          data:
            data.horarios?.map(h => ({
              day: h.day,
              hora_de_inicio: h.hora_de_inicio,
              hora_final: h.hora_final,
            })) || [],
        },
      },
    };
  }

  // An abstract method that subclasses must implement.
  protected abstract runQuery(
    data: any,
    id?: number,
  ): Promise<Curso & { horarios: Horario[] }>;
}

// Concrete Subclass for Creating a Curso
export class CreateCursoOperation extends CursoPersistenceTemplate {
  protected async runQuery(
    data: any,
  ): Promise<Curso & { horarios: Horario[] }> {
    console.log('Executing CREATE query via Template Method...');
    return this.prisma.curso.create({
      data,
      include: { horarios: true },
    });
  }
}

// Concrete Subclass for Updating a Curso
export class UpdateCursoOperation extends CursoPersistenceTemplate {
  protected async runQuery(
    data: any,
    id: number,
  ): Promise<Curso & { horarios: Horario[] }> {
    console.log(`Executing UPDATE query for ID ${id} via Template Method...`);
    // First, ensure the course exists (specific logic for update)
    const curso = await this.prisma.curso.findUnique({ where: { id } });
    if (!curso) {
      throw new Error(`Curso with ID ${id} not found`);
    }

    return this.prisma.curso.update({
      where: { id },
      data,
      include: { horarios: true },
    });
  }
}