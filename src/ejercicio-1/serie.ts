import { Streamable, BasicStreamableCollection } from "./streamable";


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

