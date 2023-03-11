import { Streamable, BasicStreamableCollection } from "./streamable";


/**
 * Clase Documental
 */
export class Documental {

  /**
   * Constructor por defecto
   * @param ano Año del documental
   * @param nombre Nombre del Documental
   * @param puntuacion Puntuación del documental
   * @param duracion Duración del documental.
   */
  constructor(private ano: number, private nombre: string, private puntuacion: number, private duracion: number){
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
   * getter duracion
   */
  get getDuracion() {
    return this.duracion;
  }

  /**
   * setter duracion
   */
  set setDuracion(duracion_: number) {
    this.duracion = duracion_;
  }

}

/**
 * Clase Documentales
 */
export class DocumentalCollection extends BasicStreamableCollection<Documental> {

  /**
   * Constructor por defecto
   * @param elementos array de documentales
   */
  constructor(elementos: Documental[]) {
    super(elementos);
  }

  /**
   * Método que busca documentales por año
   * @param ano año de busqueda
   * @returns array con los documentales de dicho año
   */
  buscarPorAno(ano: number): Documental[] {
    const array_aux: Documental[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getAno === ano) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

  /**
   * Método que busca documentales por nombre
   * @param nombre Nombre del documental
   * @returns Array con los documentales con dicho nombre.
   */
  buscarPorNombre(nombre: string): Documental[] {
    const array_aux: Documental[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getNombre === nombre) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

  /**
   * Método que busca documentales a través de una puntuación mínima
   * @param puntuacion puntuación mínima
   * @returns array con los documentales cuya puntuación es superior o igual a la indicada.
   */
  buscarPorPuntuacion(puntuacion: number): Documental[] {
    const array_aux: Documental[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getPuntuacion >= puntuacion) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }

  /**
   * Método que elimina un documental
   * @param nombre_elemento nombre del documental a eliminar.
   * @returns Array con los documentales actualizado.
   */
  eliminarElemento(nombre_elemento: string): Documental[] {
    this.elementos.forEach((elemento, indice) => {
      if (elemento.getNombre === nombre_elemento) {
        this.elementos.splice(indice,1);
      }
    });
    return this.elementos;
  }

  /**
   * Método que busca un documental con una duración máxima
   * @param duracion_max duración máxima del docuemental
   * @returns array de documentales cuya duración es menor o igual que la indicada.
   */
  buscarPorDuracion(duracion_max: number): Documental[] {
    const array_aux: Documental[] = [];
    this.elementos.forEach((elemento) => {
      if (elemento.getDuracion <= duracion_max) {
        array_aux.push(elemento);
      }
    });
    return array_aux;
  }
}
