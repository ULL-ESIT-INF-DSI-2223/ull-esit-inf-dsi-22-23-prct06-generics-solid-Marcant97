import { discografia } from "./discografia";

/**
 * Clase Artista
 */
export class artista {
  /**
   * Constructor por defecto
   * @param nombre Nombre del artista.
   * @param numero_oyentes Número de oyentes del artista.
   * @param discografia Conjunto de discos del artista.
   */
  constructor(
    public nombre: string,
    public numero_oyentes: number,
    public discografia: discografia[]
  ) {}
}
