import { discografia,disco,single } from "./discografia";

/**
 * Interfaz artista
 */
export interface Artista {
  nombre: string;
  numero_oyentes: number;
  discografia: discografia<disco|single>[];
}

/**
 * Clase grupo que implementa la interfaz artista
 */
export class Grupo implements Artista {
  constructor(
    public readonly nombre: string,
    public readonly numero_oyentes: number,
    public readonly discografia: discografia<disco|single>[],
    public readonly numero_miembros: number
  ) {}
}

/**
 * Clase solista que implementa la interfaz artista
 */

export class Solista implements Artista {
  constructor(
    public readonly nombre: string,
    public readonly numero_oyentes: number,
    public readonly discografia: discografia<disco|single>[],
  ) {}
}

