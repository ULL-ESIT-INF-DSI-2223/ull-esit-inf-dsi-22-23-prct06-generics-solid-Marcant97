import { Streamable, BasicStreamableCollection } from "./streamable";


/**
 * Clase Pelicula
 */
export class Pelicula {
  /**
   * Constructor por defecto
   * @param ano Año de la pelicula
   * @param nombre Nombre de la pelicula
   * @param puntuacion Punuacion de la pelicula
   * @param director Director de la pelicula
   */
  constructor(private ano: number, private nombre: string, private puntuacion: number, private director: string) {
  }

  /**
   * getter año
   */
  get getAno() {
    return this.ano;
  }

  /**
   * setter año
   */
  set setAno(ano_: number) {
    this.ano = ano_;
  }

  /**
   * getter nombre
   */
  get getNombre() {
    return this.nombre;
  }

  /**
   * setter nombre
   */
  set setNombre(nombre_: string) {
    this.nombre = nombre_;
  }

  /**
   * getter puntuacion
   */
  get getPuntuacion() {
    return this.puntuacion;
  }

  /**
   * setter puntuacion
   */
  set setPuntuacion(puntuacion_: number) {
    this.puntuacion = puntuacion_;
  }

  /**
   * getter director
   */
  get getDirector() {
    return this.director;
  }

  /**
   * setter director
   */
  set setDirector(director_: string) {
    this.director = director_;
  }

}

/**
 * Clase PeliculaCollection
 */
export class PeliculaCollection extends BasicStreamableCollection<Pelicula> {

  /**
   * Constructor por defecto
   * @param elementos array de peliculas
   */
  constructor(elementos: Pelicula[]) {
    super(elementos);
  }

   /**
   * Método que busca peliculaes por año
   * @param ano año de busqueda
   * @returns array con los peliculaes de dicho año
   */
   buscarPorAno(ano: number): Pelicula[] {
    const array_aux: Pelicula[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getAno === ano) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

  /**
   * Método que busca peliculaes por nombre
   * @param nombre Nombre del pelicula
   * @returns Array con los peliculaes con dicho nombre.
   */
  buscarPorNombre(nombre: string): Pelicula[] {
    const array_aux: Pelicula[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getNombre === nombre) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

  /**
   * Método que busca peliculaes a través de una puntuación mínima
   * @param puntuacion puntuación mínima
   * @returns array con los peliculaes cuya puntuación es superior o igual a la indicada.
   */
  buscarPorPuntuacion(puntuacion: number): Pelicula[] {
    const array_aux: Pelicula[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getPuntuacion >= puntuacion) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

  /**
   * Método que elimina un pelicula
   * @param nombre_elemento nombre del pelicula a eliminar.
   * @returns Array con los peliculaes actualizado.
   */
  eliminarElemento(nombre_elemento: string): Pelicula[] {
    this.elementos.forEach((elemento, indice) => {
      if (elemento.getNombre === nombre_elemento) {
        this.elementos.splice(indice,1);
      }
    });
    return this.elementos;
  }

  /**
   * Método que busca por director
   * @param director_ 
   * @returns devuelve un array con las peliculas.
   */
  buscarPorDirector(director_: string): Pelicula[] {
    const array_aux: Pelicula[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getDirector === director_) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }


}
