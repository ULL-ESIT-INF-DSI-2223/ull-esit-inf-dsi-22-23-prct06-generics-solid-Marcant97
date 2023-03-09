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

/**
 * Clase Serie
 */
export class Serie {
  /**
   * Constructor por defecto.
   * @param ano Año de la serie.
   * @param nombre Nombre de la serie.
   * @param puntuacion Puntuación de la serie.
   * @param numero_episodios Número de episodios de la serie.
   */
  constructor(private ano: number, private nombre: string, private puntuacion: number, private numero_episodios: number) {
  }

  /**
   * getter año
   */
  get getAno(): number {
    return this.ano;
  }

  /**
   * Setter año
   */
  set setAno(ano_: number) {
    this.ano = ano_;
  }

  /**
   * Getter nombre
   */
  get getNombre(): string {
    return this.nombre;
  }

  /**
   * Setter nombre
   */
  set setNombre(nombre_: string) {
    this.nombre = nombre_;
  }

  /**
   * Getter puntuacion
   */
  get getPuntuacion(): number {
    return this.puntuacion;
  }

  /**
   * Setter puntuación
   */
  set setPuntuacion(puntuacion_: number) {
    this.puntuacion = puntuacion_;
  }

  /**
   * Getter número de episodios.
   */
  get getNumeroEpisodios(): number {
    return this.numero_episodios;
  }

  /**
   * Setter número de episodios.
   */
  set setNumeroEpisodios(numero_: number) {
    this.numero_episodios = numero_;
  }
}

/**
 * Clase colección de series.
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  /**
   * Constructor por defecto
   * @param elementos colección de series.
   */
  constructor(elementos: Serie[]) {
    super(elementos);
  }

  /**
   * Método que busca por año
   * @param ano 
   * @returns 
   */
  buscarPorAno(ano: number): Serie[] {
    const array_aux: Serie[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getAno === ano) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

  /**
   * Método que busca por nombre
   * @param nombre Nombre de la serie a buscar
   * @returns Conjunto de series con dicho nombre.
   */
  buscarPorNombre(nombre: string): Serie[] {
    const array_aux: Serie[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getNombre === nombre) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

  /**
   * Método que busca todos los eleemntos con una puntuación mayor o igual.
   * @param puntuacion puntuación mínima
   * @returns 
   */
  buscarPorPuntuacion(puntuacion: number): Serie[] {
    const array_aux: Serie[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getPuntuacion >= puntuacion) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

  /**
   * Método que elimina un elemento.
   * @param nombre_elemento Nombre del elemento a buscar.
   * @returns array de los elementos actualizados.
   */
  eliminarElemento(nombre_elemento: string): Serie[] {
    this.elementos.forEach((elemento, indice) => {
      if (elemento.getNombre === nombre_elemento) {
        this.elementos.splice(indice,1);
      }
    });
    return this.elementos;
  }

  /**
   * Método que buscar por un número máximo de episodios
   * @param numero_maximo Número máximo de episodios posible.
   * @returns Colección de elementos que tienen un núumero de episodios menor o igual.
   */
  buscarPorNumeroEpisodios(numero_maximo: number): Serie[] {
    const array_aux: Serie[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getNumeroEpisodios <= numero_maximo) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

}


// export class Documental {
//   constructor(private ano: number){

//   }
// }

// class Peliculas extends BasicStreamableCollection<T> {
//   constructor(elementos: T[]) {
//     super(elementos);
//   }
// }

// class Documentales extends BasicStreamableCollection<T> {
//   constructor(elementos: T[]) {
//     super(elementos);
//   }
// }