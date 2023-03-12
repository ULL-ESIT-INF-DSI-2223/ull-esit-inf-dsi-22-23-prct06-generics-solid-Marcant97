import { discografia } from "./discografia";
/**
 * Interfaz artista
 */
export interface Artista {
  nombre: string;
  numero_oyentes: number;
  discografia: discografia[];
}

export class Grupo implements Artista {
  constructor(
    public readonly nombre: string,
    public readonly numero_oyentes: number,
    public readonly discografia: discografia[],
    public readonly numero_miembros: number
  ) {}
}

export class Solista implements Artista {
  constructor(
    public readonly nombre: string,
    public readonly numero_oyentes: number,
    public readonly discografia: discografia[],
  ) {}
}

/**
 * Clase Artista
 */
// export class artista {
//   /**
//    * Constructor por defecto
//    * @param nombre Nombre del artista.
//    * @param numero_oyentes Número de oyentes del artista.
//    * @param discografia Conjunto de discos del artista.
//    */
//   constructor(
//     private nombre: string,
//     private numero_oyentes: number,
//     private discografia: discografia[]
//   ) {}

  // get getNombre(): string {
  //   return this.nombre;
  // }

  // set setNombre(nombre_: string) {
  //   this.nombre = nombre_;
  // }

  // get getNumeroOyentes(): number {
  //   return this.numero_oyentes;
  // }

  // set setNumeroOyentes(numero_: number) {
  //   this.numero_oyentes = numero_;
  // }

  // get getDiscografia(): discografia[] {
  //   return this.discografia;
  // }

  // set setDiscografia(discografia_: discografia[]) {
  //   this.discografia = discografia_;
  // }
// }

