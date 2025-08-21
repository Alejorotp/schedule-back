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
// The Interface that both the core service and the decorator will implement.
export interface ICursoService {
  create(createCursoDto: CreateCursoDto): Promise<Curso & { horarios: Horario[] }>;
  findAll(): Promise<(Curso & { horarios: Horario[] })[]>;
  update(id: number, data: UpdateCursoDto): Promise<Curso & { horarios: Horario[] }>;
  clone(id: number, overrides: Partial<CreateCursoDto>): Promise<Curso & { horarios: Horario[] }>;
}

// The Decorator class
export class CursoServiceLoggerDecorator implements ICursoService {
  // It holds a reference to the object it decorates.
  private readonly cursoService: ICursoService;

  constructor(cursoService: ICursoService) {
    this.cursoService = cursoService;
  }

  // The following methods add logging before delegating the call.

  async create(createCursoDto: CreateCursoDto): Promise<Curso & { horarios: Horario[] }> {
    console.log(`[DECORATOR LOG] Attempting to create curso with NRC: ${createCursoDto.nrc}`);
    const startTime = Date.now();
    const result = await this.cursoService.create(createCursoDto);
    const duration = Date.now() - startTime;
    console.log(`[DECORATOR LOG] Curso created successfully in ${duration}ms.`);
    return result;
  }

  async findAll(): Promise<(Curso & { horarios: Horario[] })[]> {
    console.log('[DECORATOR LOG] Attempting to find all cursos...');
    const startTime = Date.now();
    const result = await this.cursoService.findAll();
    const duration = Date.now() - startTime;
    console.log(`[DECORATOR LOG] Found ${result.length} cursos in ${duration}ms.`);
    return result;
  }

  async update(id: number, data: UpdateCursoDto): Promise<Curso & { horarios: Horario[] }> {
    console.log(`[DECORATOR LOG] Attempting to update curso with ID: ${id}`);
    const startTime = Date.now();
    const result = await this.cursoService.update(id, data);
    const duration = Date.now() - startTime;
    console.log(`[DECORATOR LOG] Curso updated successfully in ${duration}ms.`);
    return result;
  }
  
  async clone(id: number, overrides: Partial<CreateCursoDto>): Promise<Curso & { horarios: Horario[] }> {
    console.log(`[DECORATOR LOG] Attempting to clone curso with ID: ${id}`);
    const startTime = Date.now();
    const result = await this.cursoService.clone(id, overrides);
    const duration = Date.now() - startTime;
    console.log(`[DECORATOR LOG] Curso cloned successfully in ${duration}ms. New ID: ${result.id}`);
    return result;
  }
}