// Método append, el cual, dadas dos listas, permite añadir al final de la primera los elementos de la segunda.
// Método concatenate, que dado un número variable de listas, combina todos sus elementos en una única lista que retorna.
// Método filter, que dada una lista y un predicado lógico retorna una lista con todos los elementos de la lista inicial 
// para los cuales el predicado lógico es verdadero.
// Método length, que devuelve el número de elementos de la lista.
// Método map, que dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial 
// la función.
// Método reduce, que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando 
// la función.
// Método reverse, el cual dada una lista, retorna una lista con los elementos originales pero en orden inverso.
// Método forEach, que dada una lista y una función, permite iterar en los elementos de la lista e invocar la función 
// con cada uno de ellos.


/**
 * Interfaz genérica mi_lista
 */
export interface mi_lista<T> {
  /**
   * Método que añade al final de una lista la otra.
   * @param elemento2 lista secundaria
   */
  append(elemento2: T[]): T[];

  /**
   * Método que concatena una o más listas al final de otra.
   * @param elementos listas a concatenar
   */
  concatenate(...elementos: T[][]): T[];

  /**
   * Método que hace un filtrado a partir de una función.
   * @param myFunction 
   */
  filter(myFunction: (elemento: T) => boolean): T[];

  /**
   * Método que devuelve la longitud de la lista.
   */
  length(): number;

  /**
   * Método que aplica una función a cada elemento y devuelve la lista modificada.
   * @param myFunction 
   */
  map(myFunction: (a: T) => T): T[];

  /**
   * Método que a partir de una función, unifica la lista a un sólo elemento.
   * @param acc acumulador
   * @param myFunction funcion
   */
  reduce(acc: T, myFunction: (acc_: T, elemento: T) => T): T;

  /**
   * Método que devuelve la lista en orden inverso.
   */
  reverse(): T[];

  /**
   * Método que recorre cada elemento de la lista y le aplica una función, pero no retorna una lista modificada.
   * @param myFunction función a aplicar.
   */
  forEach(myFunction: (a: T) => void): void;
}


/**
 * Clase lista que implementa la interfaz genérica mi_lista.
 */
export class lista<T> implements mi_lista<T> {

  /**
   * Constructor por defecto
   * @param list lista de elementos.
   */
  constructor(private list: T[]) {
  }

  /**
   * getter lista
   */
  get getList() {
    return this.list;
  }

  /**
   * setter lista
   */
  set setlist(list_: T[]) {
    this.list = list_;
  }

  /**
   * Método que añade una lista al final de la otra.
   * @param elemento2 lista a añadir
   * @returns lista modificada
   */
  append(elemento2: T[]): T[]{
    let indice = this.length();
    let i = 0;
    while(elemento2[i] !== undefined) {
      this.list[indice] = elemento2[i]; 
      indice++; 
      i++;
    }
    return this.list;
  }

  /**
   * Método que concatena una o más listas detrás de una lista.
   * @param elementos una o varias listas.
   * @returns lista modificada.
   */
  concatenate(...elementos: T[][]): T[] {
    let indice = this.length();
    for (const elemento of elementos) {
      for (const interno of elemento) {
        this.list[indice] = interno;
        indice++;
      }
    }
    return this.list;
  }

  /**
   * Método que a partir de una función filtra los elementos de la lista
   * @param myFunction funcion
   * @returns lista filtrada
   */
  filter(myFunction: (elemento: T) => boolean): T[] {
    const array_aux: T[] = [];
    let indice = 0;
    for (let i = 0; i < this.length(); i++) {
      if(myFunction(this.list[i]) === true) {
        array_aux[indice] = this.list[i];
        indice++;
      }
    }
    return array_aux;
  }

  /**
   * Método que devuelve la longitud de la lista.
   * @returns 
   */
  length(): number {
    let index = 0;
    while (this.list[index] !== undefined) {
      index++;
    }
    return index;
  }

  /**
   * Método que aplica una función a cada elemento de la lista y devuelve una lista nueva modificada.
   * @param myFunction función a aplicar.
   */
  map(myFunction: (a: T) => T): T[] {
    const array_aux = [];
    for (let i = 0; i < this.length(); i++) {
      array_aux[i] = myFunction(this.list[i]);
    }
    return array_aux;
  }

  /**
   * Método que a partir de una función, reduce todos los elementos de la lista a uno solo.
   * @param acc acumulador
   * @param myFunction función a aplicar.
   * @returns elemento final
   */
  reduce(acc: T, myFunction: (acc_: T, elemento: T) => T): T {
    for (let i = 0; i < this.length(); i++) {
      acc = myFunction(acc, this.list[i]);
    }
    return acc;
  }

  /**
   * Método que devuelve una lista al revés.
   * @returns lista al revés
   */
  reverse(): T[] {
    const array_aux: T[] = [];
    let array_index = 0;
    for(let i = this.length()-1; i >= 0 ; i--) {
      array_aux[array_index] = this.list[i];
      array_index++;
    }
    return array_aux;
  }

  /**
   * Método que recorre todos los elementos de una lista y aplica una función, pero no retorna la lista modificada.
   * @param myFunction función a aplicar
   */
  forEach(myFunction: (a: T) => void): void {
    for (const element of this.list) {
      myFunction(element);
    }
  }

}