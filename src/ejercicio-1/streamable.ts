// Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los 
// que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. 
// Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener 
// listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.

/**
 * Interfaz genérica Streamable.
 */
export interface Streamable<T> {
  /**
   * Método que busca contenido por año.
   * @param ano Año del contenido.
   */
  buscarPorAno(ano: number): T[];

  /**
   * Método que busca contenido por nombre
   * @param nombre Nombre del contenido
   */
  buscarPorNombre(nombre: string): T[];

  /**
   * Método que busca contenido a partir de una puntuación.
   * @param puntuacion Puntuación del contenido
   */
  buscarPorPuntuacion(puntuacion: number): T[];

  /**
   * Método que devuelve el número total de elementos.
   */
  numeroTotalElementos(): number;

  /**
   * Método que añade un elemento.
   */
  anadirElemento(elemento: T): T[];

  /**
   * 
   */
  eliminarElemento(nombre_elemento: string): T[];
}

/**
 * Clase abstracta
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  /**
   * Constructor por defecto
   * @param elementos Array de elementos
   */
  constructor(protected elementos: T[]) {
  }
  /**
   * Método abstracto
   * @param ano Año de búsqueda
   */
  abstract buscarPorAno(ano: number): T[];

  /**
   * Método Abstracto
   * @param nombre Nombre de búsqueda.
   */
  abstract buscarPorNombre(nombre: string): T[];

  /**
   * Método abstracto
   * @param puntuacion Puntuación mínima
   */
  abstract buscarPorPuntuacion(puntuacion: number): T[];

  /**
   * Método que devuelve el número total de elementos.
   * @returns número total de elementos.
   */
  numeroTotalElementos(): number {
    return this.elementos.length;
  }

  /**
   * Método que añade un elemento a la colección de elementos.
   * @param elemento elemento de tipo genérico
   * @returns array actualizado con todos los elementos.
   */
  anadirElemento(elemento: T): T[] {
    this.elementos.push(elemento);
    return this.elementos;
  }

  /**
   * Método abstracto
   * @param nombre_elemento nombre del elemento a eliminar.
   */
  abstract eliminarElemento(nombre_elemento: string): T[];

}