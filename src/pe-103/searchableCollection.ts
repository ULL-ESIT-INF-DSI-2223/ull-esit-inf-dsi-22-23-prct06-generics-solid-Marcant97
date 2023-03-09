// Implemente una clase abstracta genérica 'SearchableCollection' que implemente las interfaces genéricas 'Collectable' y
// 'Searchable'. Tenga en cuenta que en este punto deberá implementar todos los metodos de la interfaz 'Collectable', 
// mientras que el método search de 'Searchable' será abstracto, de modo que aquellas clases que extiendan a 'SearchableCollection' 
// tengan que implementarlo obligatoriamente.

import {Searchable} from "./searchable";
import {Collectable} from "./collectable";

/**
 * Clase abstracta SearchableCollection
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  
  /**
   * Constructor por defecto
   * @param items elementos de tipo genérico.
   */
  constructor(protected items: T[]) {
  }

  /**
   * Método abstracto search
   * @param item elemento a buscar
   */
  abstract search(item: T): T[];

  /**
   * Método que añade un elemento a la colección de items.
   * @param item 
   * @returns 
   */
  addItem(item: T): T[] {
    this.items.push(item);
    return this.items;
  }

  /**
   * Método que nos devuelve un item deseado.
   * @param indice índice del item que queremos.
   * @returns item que queremos.
   */
  getItem(indice: number): T | undefined {
    if ((indice >= this.items.length) || (indice < 0)) {
      return undefined;
    }
    else {
      return this.items[indice];
    }
  }

  /**
   * Método que elimina un item
   * @param indice índice del item a eliminar
   * @returns item eliminado o undefined en caso de no encontrarse.
   */
  removeItem(indice: number): T | undefined {
    if ((indice >= this.items.length) || (indice < 0)) {
      return undefined;
    }
    else {
      const aux: T = this.items[indice];
      this.items.splice(indice,1);
      return aux;
    }
  }

  /**
   * Método que devuelve el número total de items.
   * @returns Número de items.
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

}