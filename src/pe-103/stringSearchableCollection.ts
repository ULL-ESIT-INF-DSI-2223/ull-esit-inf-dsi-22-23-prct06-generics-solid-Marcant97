
// Extienda la clase abstracta genérica 'SearchableCollection' escribiendo dos subclases: 'StringSearchableCollection' y 
// 'StringSearchableCollection'. La primera deberá modelar una colección de elementos numéricos en la que el método search 
// deberá poder buscar un número concreto y devolverá un array con todas las ocurrencias de dicho número en la colección. 
// La segunda deberá modelar una colección de cadenas de caracteres en la que el método search deberá poder buscar una 
// subcadena y devolverá un array con todas las cadenas de la colección que contengan dicha subcadena.


import {SearchableCollection} from "./searchableCollection"

/**
 * Clase StringSearchableCollection que extiende la clase abstracta SearchableCollection.
 */
export class StringSearchableCollection extends SearchableCollection<string> {

  /**
   * Constructor por defecto
   * @param items array de números.
   */
  constructor(items: string[]) {
    super(items);
  }

  /**
   * Método que busca strings determinadas.
   * @param item elemento de tipo string a buscar
   * @returns array con todas las coincidencias.
   */
  search(item: string): string[] {
    const array_aux: string[] = [];
    this.items.forEach((elemento) => {
      if (item === elemento) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }


}