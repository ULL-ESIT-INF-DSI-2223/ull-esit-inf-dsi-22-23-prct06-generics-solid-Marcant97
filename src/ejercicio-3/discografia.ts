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
   * getter año
   */
  get getAno(): number {
    return this.ano;
  }

  /**
   * setter año
   */
  set setAno(ano_: number) {
    this.ano = ano_;
  }

  /**
   * getter canciones
   */
  get getCanciones(): cancion[] {
    return this.canciones;
  }

  /**
   * setter canciones
   */
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
 * Clase single
 */
export class single {
  /**
   * Constructor por defecto
   * @param nombre Nombre del single
   * @param ano Año de lanzamiento.
   * @param canciones Conjunto de canciones.
   */
  constructor(
    private nombre: string,
    private ano: number,
    private canciones: cancion[],
    private numero_versiones: number
  ) {
    const nombre_aux = canciones[0].getNombre;
    for (let i = 0; i < this.canciones.length; i++) {
      if (nombre_aux !== canciones[i].getNombre) {
        canciones.splice(i,1); // en caso de ser el mismo nombre, lo elimino del single.
      }
    }
  }

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
   * getter año
   */
  get getAno(): number {
    return this.ano;
  }

  /**
   * setter año
   */
  set setAno(ano_: number) {
    this.ano = ano_;
  }

  /**
   * getter canciones
   */
  get getCanciones(): cancion[] {
    return this.canciones;
  }

  /**
   * setter canciones
   */
  set setCanciones(canciones_: cancion[]) {
    this.canciones = canciones_;
  }

  /**
   * getter numero versiones
   */
  get getNumeroVersiones(): number {
    return this.numero_versiones;
  }

  /**
   * setter numero versiones
   */
  set setNumeroVersiones(numero_versiones_: number) {
    this.numero_versiones = numero_versiones_;
  }


  /**
   * Función que calcula la duración de un disco en base a la suma de las duraciones de cada disco.
   * @returns duración del disco en minutos.
   */
  duracionSingle(): number {
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
  numeroReproduccionesSingle(): number {
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
export class discografia<T extends disco | single> {
  /**
   * Constructor por defecto
   * @param discos Conjunto de discos.
   */
  constructor(
    private discos: T[]
  ) {}

  /**
   * getter discos
   */
  get getDiscos(): T[] {
    return this.discos;
  }

  /**
   * setter discos
   */
  set setDiscos(discos_: T[]) {
    this.discos = discos_;
  }

}
