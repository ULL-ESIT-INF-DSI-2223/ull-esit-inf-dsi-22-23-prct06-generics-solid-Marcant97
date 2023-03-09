// Implemente una interfaz genérica 'Collectable' con los siguientes métodos, los cuales deberá definir 
// toda clase que quiera implementar dicha interfaz: addItem, getItem, removeItem, getNumberOfItems.

/**
 * Interfaz genérica Collectable
 */
export interface Collectable<T> {
  /**
   * Método que añade un item de tipo genérico
   * @param item item a añadir.
   */
  addItem(item: T): T[];

  /**
   * Método que devuelve un item
   * @param indice índice del item solicitado.
   */
  getItem(indice: number): T | undefined;

  /**
   * Método que elimina un ítem
   * @param indice índice del item a eliminar.
   */
  removeItem(indice: number): T | undefined;

  /**
   * Método que devuelve el número de items
   */
  getNumberOfItems(): number;
}