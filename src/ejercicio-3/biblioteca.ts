import { Artista } from "./artista";
import { cancion } from "./cancion";
import { disco, single} from "./discografia"

/**
 * Clase Biblioteca
 */
export class biblioteca {
  /**
   * Constructor por defecto.
   * @param array_artistas conjunto de artistas pertenecientes a la biblioteca.
   */
  constructor(public array_artistas: Artista[]) {}

  /**
   * Función que busca un artista en la biblioteca.
   * @param nombre_artista Nombre del artista a buscar.
   * @returns array de artistas con dicho nombre.
   */
  buscarArtista(nombre_artista: string): Artista[]{
    const array_aux: Artista[] = [];
    this.array_artistas.forEach((artista_) => {
      if (nombre_artista === artista_.nombre) {
        // console.table(artista_);
        array_aux.push(artista_);
      }
    });
    return array_aux;
  }


  /**
   * Función que busca un disco en la biblioteca.
   * @param nombre_disco Nombre del disco a buscar.
   * @returns array con los discos y singles con dicho nombre.
   */
  buscarDisco(nombre_disco: string): (disco|single)[] {
    const array_aux: (disco|single)[] = [];
    this.array_artistas.forEach((artista_) => {
      artista_.discografia.forEach((discografia_) => {
        discografia_.getDiscos.forEach(elemento => {
          if (nombre_disco === elemento.getNombre) {
            // console.table(elemento);
            array_aux.push(elemento);
          }          
        })
      });
    });
    return array_aux;
  }

  /**
   * Función que busca una canción en la biblioteca.
   * @param nombre_cancion Nombre de la canción a buscar.
   * @returns array con las canciones con dicho nombre.
   */
  buscarCancion(nombre_cancion: string): cancion[]{
    const array_aux: cancion[] = [];
    this.array_artistas.forEach((artista_) => {
      artista_.discografia.forEach((discografia_) => {
        discografia_.getDiscos.forEach((disco_) => {
          disco_.getCanciones.forEach(cancion_ => {
            if (nombre_cancion === cancion_.getNombre) {
              // console.table(cancion_);
              array_aux.push(cancion_);
            }
          })
        });
      });
    });
    return array_aux;
  }

  /**
   * Método print
   * @returns retorna array de artistas para las pruebas.
   */
  print(): Artista[]{
    console.table(this.array_artistas);
    return this.array_artistas;
  }
}