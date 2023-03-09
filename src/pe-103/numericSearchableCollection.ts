
// Extienda la clase abstracta genérica 'SearchableCollection' escribiendo dos subclases: 'NumericSearchableCollection' y 
// 'StringSearchableCollection'. La primera deberá modelar una colección de elementos numéricos en la que el método search 
// deberá poder buscar un número concreto y devolverá un array con todas las ocurrencias de dicho número en la colección. 
// La segunda deberá modelar una colección de cadenas de caracteres en la que el método search deberá poder buscar una 
// subcadena y devolverá un array con todas las cadenas de la colección que contengan dicha subcadena.


import {SearchableCollection} from "./searchableCollection"

/**
 * Clase NumericSearchableCollection que extiende la clase abstracta SearchableCollection.
 */
export class NumericSearchableCollection extends SearchableCollection<number> {

  /**
   * Constructor por defecto
   * @param items array de números.
   */
  constructor(items: number[]) {
    super(items);
  }


  /**
   * Método que busca un cierto número en el array de elementos.
   * @param item Número a buscar
   * @returns array con las coincidencias
   */
  search(item: number): number[] {
    const array_aux: number[] = [];
    this.items.forEach((elemento) => {
      if (item === elemento) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

}
