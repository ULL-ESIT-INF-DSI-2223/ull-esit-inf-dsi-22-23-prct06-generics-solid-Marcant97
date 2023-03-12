import { cancion } from "./cancion";
import { discografia } from "./discografia";
import { Artista } from "./artista";

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
   */
  buscarArtista(nombre_artista: string): void {
    let bandera = false;
    this.array_artistas.forEach((artista_) => {
      if (nombre_artista === artista_.nombre) {
        console.table(artista_);
        bandera = true;
      }
    });
    if (bandera === false) {
      console.log("No encontrado!");
    }
  }


  /**
   * Función que busca un disco en la biblioteca.
   * @param nombre_disco Nombre del disco a buscar.
   */
  buscarDisco(nombre_disco: string): void {
    let bandera = false;
    this.array_artistas.forEach((artista_) => {
      artista_.discografia.forEach((discografia_) => {
        discografia_.discos.forEach(elemento => {
          if (nombre_disco === elemento.getNombre) {
            console.table(elemento);
            bandera = true;
          }          
        })
      });
    });
    if (bandera === false) {
      console.log("No encontrado!");
    }
  }

  /**
   * Función que busca una canción en la biblioteca.
   * @param nombre_cancion Nombre de la canción a buscar.
   */
  buscarCancion(nombre_cancion: string): void {
    let bandera = false;
    this.array_artistas.forEach((artista_) => {
      artista_.discografia.forEach((discografia_) => {
        discografia_.discos.forEach((disco_) => {
          disco_.getCanciones.forEach(cancion_ => {
            if (nombre_cancion === cancion_.getNombre) {
              console.table(cancion);
              bandera = true;
            }
          })
        });
      });
    });
    if (bandera === false) {
      console.log("No encontrado!");
    }
  }

  print(): void {
    console.table(this.array_artistas);
  }
}

// const cancion3 = {nombre: 'Canción 3', duracion: 180, generos: ['Pop'], single: true, numero_reproducciones: 1000};
// const cancion4 = {nombre: 'Canción 4',duracion: 210,generos: ['Jazz', 'Rock'],single: false,numero_reproducciones: 100};
// const cancion1 = {nombre: 'Canción 1',duracion: 180,generos: ['Pop'],single: true,numero_reproducciones: 1000}
// const cancion2 = {nombre: 'Canción 2',duracion: 210,generos: ['Pop', 'Rock'],single: false,numero_reproducciones: 100}

// const album1 = new discografia ('Mi primer disco',2022,[ cancion1, cancion2]);
// const album2 = new discografia('Mi segundo disco',2022,[cancion3, cancion4]);

// const ed_sheeran = new artista("Ed Sheeran", 2500, [album1]);
// const marron_5 = new artista("Marroon 5", 6000, [album2]);

// const mi_biblioteca = new biblioteca([ed_sheeran, marron_5]);
// mi_biblioteca.print();
// mi_biblioteca.buscarArtista("Ed Sheeran");
// mi_biblioteca.buscarArtista("Rosalia");

// mi_biblioteca.buscarDisco("Mi primer disco");
// mi_biblioteca.buscarDisco("no-album1");

// mi_biblioteca.buscarCancion("Canción 1");
// mi_biblioteca.buscarCancion("Canción 3");
// mi_biblioteca.buscarCancion("Soldadito Marinero");
