import { cancion } from "./cancion";

/**
 * Clase discografía
 */
export class discografia {
  /**
   * Constructor por defecto
   * @param nombre Nombre del disco.
   * @param ano Año de lanzamiento.
   * @param canciones Conjunto de canciones.
   */
  constructor(
    public nombre: string,
    public ano: number,
    public canciones: cancion[]
  ) {}

  /**
   * Función que calcula el número de canciones de un disco.
   * @returns Número de canciones.
   */
  numeroCanciones(): number {
    return this.canciones.length;
  }

  /**
   * Función que calcula la duración de un disco en base a la suma de las duraciones de cada disco.
   * @returns duración del disco en minutos.
   */
  duracionDisco(): number {
    let duracion = 0;
    this.canciones.forEach((element) => {
      duracion += element.duracion;
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
      numero_reproducciones_total += element.numero_reproducciones;
    });
    return numero_reproducciones_total;
  }
}
