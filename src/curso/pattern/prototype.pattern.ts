enum day_of_week {
  lun = 'lun',
  mar = 'mar',
  mie = 'mie',
  jue = 'jue',
  vie = 'vie',
  sab = 'sab',
  dom = 'dom',
}

// Simple interface for Horario data
export interface HorarioData {
  day: day_of_week;
  hora_de_inicio: string;
  hora_final: string;
}

// The Prototype class
export class CursoPrototype {
  public nrc: string;
  public periodo: string;
  public profesor?: string;
  public salon?: string;
  public asignatura_id: number;
  public horarios: HorarioData[];

  constructor(
    nrc: string,
    periodo: string,
    asignatura_id: number,
    horarios: HorarioData[],
    profesor?: string,
    salon?: string,
  ) {
    this.nrc = nrc;
    this.periodo = periodo;
    this.asignatura_id = asignatura_id;
    this.horarios = horarios;
    this.profesor = profesor;
    this.salon = salon;
  }

  // The clone method is the core of the Prototype pattern.
  public clone(overrides: Partial<CursoPrototype>): CursoPrototype {
    // Create a new object by merging the current object's properties
    // with any overrides provided.
    const cloned = Object.create(this);

    cloned.nrc = overrides.nrc ?? this.nrc;
    cloned.periodo = overrides.periodo ?? this.periodo;
    cloned.profesor = overrides.profesor ?? this.profesor;
    cloned.salon = overrides.salon ?? this.salon;
    cloned.asignatura_id = overrides.asignatura_id ?? this.asignatura_id;
    cloned.horarios = overrides.horarios ?? [...this.horarios];

    return cloned;
  }
}
