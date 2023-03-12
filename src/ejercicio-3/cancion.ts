/**
 * Interfaz canción con los atributos correspondientes.
 */
export interface cancion {
  nombre: string;
  duracion: number;
  generos: string[];
  single: boolean;
  numero_reproducciones: number;
}
