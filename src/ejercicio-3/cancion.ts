/**
 * clase canción con sus atributos correspondientes.
 */
export class cancion {
  constructor(
    private nombre: string,
    private duracion: number,
    private generos: string[],
    private single: boolean,
    private numero_reproducciones: number
  ) {}

  /**
   * getter nombre
   */
  get getNombre(): string {
    return this.nombre;
  }

  /**
   * setter nombre
   */
  set setNombre(nombre_: string) {
    this.nombre = nombre_;
  }

  /**
   * getter duracion
   */
  get getDuracion(): number {
    return this.duracion;
  }

  /**
   * setter duracion
   */
  set setDuracion(duracion_: number) {
    this.duracion = duracion_;
  }

  /**
   * getter generos
   */
  get getGeneros(): string[] {
    return this.generos;
  }

  /**
   * setter generos
   */
  set setgeneros(generos_: string[]) {
    this.generos = generos_;
  }

  /**
   * getter single
   */
  get getSingle(): boolean{
    return this.single;
  }

  /**
   * setter single
   */
  set setSingle(single_: boolean) {
    this.single = single_;
  }

  /**
   * getter numero reproducciones
   */
  get getNumeroReproducciones(): number {
    return this.numero_reproducciones;
  }

  /**
   * setter numero reproducciones
   */
  set setNumeroReproducciones(numeroReproducciones_: number) {
    this.numero_reproducciones = numeroReproducciones_;
  }
}
