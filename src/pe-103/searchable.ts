// Implemente una interfaz genérica 'Searchable' con los siguientes métodos, los cuales deberá definir toda clase que 
// desee implementar dicha interfaz: search. Este método recibirá un término de búsqueda cuyo tipo no se conoce a priori.

/**
 * Interfaz genérica Searchable
 */
export interface Searchable<T> {
  /**
   * Método que busca un item
   * @param item item a buscar
   */
  search(item: T): T[];
}