import { cancion } from "./cancion";
import { discografia } from "./discografia";
import { artista } from "./artista";

/**
 * Clase Biblioteca
 */
export class biblioteca {
  /**
   * Constructor por defecto.
   * @param array_artistas conjunto de artistas pertenecientes a la biblioteca.
   */
  constructor(public array_artistas: artista[]) {}

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
   * Función test que busca un artista en la biblioteca.
   * @param nombre_artista Nombre del artista a buscar.
   * @returns Devuelve una string con las características principales del artista o "No encontrado!".
   */
  buscarArtistaTest(nombre_artista: string): string {
    let bandera = false;
    let string_final = "";
    this.array_artistas.forEach((artista_) => {
      if (nombre_artista === artista_.nombre && bandera === false) {
        bandera = true;
        string_final = `Nombre: ${artista_.nombre}, Nº oyentes: ${artista_.numero_oyentes}, Discos: ${artista_.discografia}`;
      }
    });
    if (bandera === false) {
      return "No encontrado!";
    } else {
      return string_final;
    }
  }

  /**
   * Función que busca un disco en la biblioteca.
   * @param nombre_disco Nombre del disco a buscar.
   */
  buscarDisco(nombre_disco: string): void {
    let bandera = false;
    this.array_artistas.forEach((artista_) => {
      artista_.discografia.forEach((disco) => {
        if (nombre_disco === disco.nombre) {
          console.table(disco);
          bandera = true;
        }
      });
    });
    if (bandera === false) {
      console.log("No encontrado!");
    }
  }

  /**
   * FUnción test que busca un disco en la biblioteca.
   * @param nombre_disco Nombre del disco a buscar.
   * @returns Devuelve una string con las características principales del disco o "No encontrado!".
   */
  buscarDiscoTest(nombre_disco: string): string {
    let bandera = false;
    let string_final = "";
    this.array_artistas.forEach((artista_) => {
      artista_.discografia.forEach((disco) => {
        if (nombre_disco === disco.nombre && bandera === false) {
          bandera = true;
          string_final = `Nombre del disco: ${disco.nombre}, Año: ${disco.ano}, Canciones: ${disco.canciones}`;
        }
      });
    });
    if (bandera === false) {
      return "No encontrado!";
    } else {
      return string_final;
    }
  }

  /**
   * Función que busca una canción en la biblioteca.
   * @param nombre_cancion Nombre de la canción a buscar.
   */
  buscarCancion(nombre_cancion: string): void {
    let bandera = false;
    this.array_artistas.forEach((artista_) => {
      artista_.discografia.forEach((disco) => {
        disco.canciones.forEach((cancion) => {
          if (nombre_cancion === cancion.nombre) {
            console.table(cancion);
            bandera = true;
          }
        });
      });
    });
    if (bandera === false) {
      console.log("No encontrado!");
    }
  }

  /**
   * Función test que busca una canción en la biblioteca.
   * @param nombre_cancion Nombre de la canción a buscar.
   * @returns Devuelve una string con las características principales de la canción o "No encontrado!".
   */
  buscarCancionTest(nombre_cancion: string): string {
    let bandera = false;
    let string_final = "";
    this.array_artistas.forEach((artista_) => {
      artista_.discografia.forEach((disco) => {
        disco.canciones.forEach((cancion) => {
          if (nombre_cancion === cancion.nombre && bandera === false) {
            bandera = true;
            string_final = `Nombre: ${cancion.nombre}, Duración:${cancion.duracion}, Géneros: ${cancion.generos}, Single ?: ${cancion.single}, Número_reproducciones: ${cancion.numero_reproducciones}`;
          }
        });
      });
    });
    if (bandera === false) {
      return "No encontrado!";
    } else {
      return string_final;
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
