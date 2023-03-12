import { cancion } from "./cancion";

/**
 * Clase disco
 */
export class disco {
  /**
   * Constructor por defecto
   * @param nombre Nombre del disco.
   * @param ano Año de lanzamiento.
   * @param canciones Conjunto de canciones.
   */
  constructor(
    private nombre: string,
    private ano: number,
    private canciones: cancion[]
  ) {}

  get getNombre(): string {
    return this.nombre;
  }

  set setNombre(nombre_: string) {
    this.nombre = nombre_;
  }

  get getAno(): number {
    return this.ano;
  }

  set setAno(ano_: number) {
    this.ano = ano_;
  }

  get getCanciones(): cancion[] {
    return this.canciones;
  }

  set setCanciones(canciones_: cancion[]) {
    this.canciones = canciones_;
  }


  /**
   * Función que calcula la duración de un disco en base a la suma de las duraciones de cada disco.
   * @returns duración del disco en minutos.
   */
  duracionDisco(): number {
    let duracion = 0;
    this.canciones.forEach((element) => {
      duracion += element.getDuracion;
    });
    return duracion;
  }

  /**
   * Función que calcula el número de reproducciones del disco en base a la suma del número de reproducciones de cada canción.
   * @returns número de reproducciones total
   */
  numeroReproduccionesDisco(): number {
    let numero_reproducciones_total = 0;
    this.canciones.forEach((element) => {
      numero_reproducciones_total += element.getNumeroReproducciones;
    });
    return numero_reproducciones_total;
  }

  /**
   * Función que calcula el número de discos de un disco.
   * @returns Número de discos.
   */
    numerocanciones(): number {
      return this.canciones.length;
    }
}



/**
 * Clase discografía
 */
export class discografia {
  /**
   * Constructor por defecto
   * @param discos Conjunto de discos.
   */
  constructor(
    public discos: disco[]
  ) {}

}
