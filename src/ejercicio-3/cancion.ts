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

  get getNombre(): string {
    return this.nombre;
  }

  set setNombre(nombre_: string) {
    this.nombre = nombre_;
  }

  get getDuracion(): number {
    return this.duracion;
  }

  set setDuracion(duracion_: number) {
    this.duracion = duracion_;
  }

  get getGeneros(): string[] {
    return this.generos;
  }

  set setgeneros(generos_: string[]) {
    this.generos = generos_;
  }

  get getSingle(): boolean{
    return this.single;
  }

  set setSingle(single_: boolean) {
    this.single = single_;
  }

  get getNumeroReproducciones(): number {
    return this.numero_reproducciones;
  }

  set setNumeroReproducciones(numeroReproducciones_: number) {
    this.numero_reproducciones = numeroReproducciones_;
  }
}
