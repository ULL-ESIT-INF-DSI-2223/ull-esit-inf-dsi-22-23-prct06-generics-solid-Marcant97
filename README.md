# Práctica 4 - Arrays, Tuplas y Enumerados.

#### Desarrollo de Sistemas Informáticos

## Índice

1. [Configuración inicial del proyecto](#configuración-del-proyecto)
2. [Ejercicios propuestos](#ejercicios-propuestos)  
   2.1 [Ejercicio-1](#ejercicio-1)  
   2.2 [Ejercicio-2](#ejercicio-2)  
   2.3 [Ejercicio-3](#ejercicio-3)
   2.4 [Ejercicio-1 PE-103](#ejercicio-1-pe-103)  
3. [Conclusión](#conclusión)

## Configuración del proyecto

### Estructura del proyecto y NPM

Para esta parte, me fijé en la anterior práctica ya que se repiten los pasos.
En primer lugar, para gener nuestro _package.json_ ejecutaremos: `npm init --yes`. A continuación crearemos la estructura de directorios correspondiente: `mkdir dist; mkdir src`.

### .gitignore

Generaremos un .gitignore para evitar que se nos almacene en github contenido que no queremos:

```
  node_modules
  dist
  package-lock.json
```

### tsc-watch

Para mayor comodidad, vamos a instalar _tsc-watch_ en este proyecto, que nos permitirá utilizar la comprobación contínua. Utilizaremos `npm install --save-dev tsc-watch`. Añadiremos en el fichero _package.json_ el siguiente apartado a los scripts:

```json
  "scripts": {
    "start": "tsc-watch --onSuccess \"node dist/ejercicio-1.js\"",
    "doc": "typedoc",
    "test": "mocha"
  },
```

### Compilador TypeScript.

Dentro de nuestro proyecto generaremos un fichero _tsconfig.json_ con el siguiente contenido:

```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "rootDir": "./src",
    "declaration": true,
    "outDir": "./dist",
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "strictPropertyInitialization": true,
    "strictNullChecks": true
  }
}
```

Finalmente, cuando deseemos utilizarlo, ejecutaremos el comando: `npm start` ó `npm run start`.

### ESLint

A continuación, para configurar el linter en este proyecto, crearemos el fichero `.eslintignore` e introduciremos lo siguiente: `/dist`.
Finalmente, pasaremos a la configuración inicial utilizando el script del propio linter, para ejecutarlo: `eslint --init`. Como resultado se nos creará un `.eslintrc.json` en la raíz de nuestro proyecto. Deberemos contestar a las siguientes preguntas:

```bash
    ✔ How would you like to use ESLint? · problems
    ✔ What type of modules does your project use? · none
    ✔ Which framework does your project use? · none
    ✔ Does your project use TypeScript? · No / Yes
    ✔ Where does your code run? · node
    ✔ What format do you want your config file to be in? · JSON
    Local ESLint installation not found.
    The config that you've selected requires the following dependencies:

    @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
    ✔ Would you like to install them now? · No / Yes
    ✔ Which package manager do you want to use? · npm
    Installing @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest, eslint@latest

    added 132 packages, and audited 133 packages in 14s

    34 packages are looking for funding
    run `npm fund` for details

    found 0 vulnerabilities
    Successfully created .eslintrc.json file in /home/usuario/ull-esit-inf-dsi-22-23-prct03-types-functions-Marcant97

```

### Prettier

Ahora pasaremos a configurar nuestro formateador de código. Primero procederemos a instalarlo con el comando: `npm i --save-dev prettier eslint-config-prettier`. Modificaremos el fichero creado en el apartado anterior _eslintrc.json_, y en el apartado "extends", añadiremos "prettier" al final. Crearemos un _.prettierrc.json_ de la siguiente forma: `echo {} > .prettierrc.json`. Para terminar, generaremos un _.prettierignore_ con el siguiente contenido:

```json
    dist
    .eslintrc.json
    .pretterignore
    .prettierrc.json
    package-lock.json
    package.json
    tsconfig.json
```

### TypeDoc

Para terminar la configuración, pasaremos a instalar y configurar TypeDoc. Para instalarlo ejecutaremos el siguiente comando: `npm install --save-dev typedoc`. Además, crearremos un fichero _typedoc.json_ con el siguiente contenido:

```json
{
  "entryPoints": [
    "./src/ejercicio-1/artista.ts",
    "./src/ejercicio-1/biblioteca.ts",
    "./src/ejercicio-1/cancion.ts",
    "./src/ejercicio-1/discografia.ts",
    "./src/ejercicio-2/conecta4.ts",
    "./src/modificacion/ej-1.ts",
    "./src/modificacion/ej-2.ts"
  ],
  "out": "./docs"
}
```

Es necesario añadir un "entryPoint" por cada ejercicio.

### Mocha y Chai

Para instalar las herramientas que se encargarán de los tests ejecutaremos lo siguiente: `npm install --save-dev mocha chai @types/mocha @types/chai ts-node`, además de crear un fichero _.mocharc.json_ con lo siguiente:

```json
{
  "extension": ["ts"],
  "spec": "tests/**/*.spec.ts",
  "require": "ts-node/register"
}
```

También será necesario crear un directorio _tests/_ en la raíz del proyecto, donde tendremos los ficheros con los tests oportunos, por ejemplo: `touch /tests/ej-1.spec.ts`.
Será necesario añadir la palabra _export_ delante de las funciones que vamos a utilizar en los tests.
Ahora podremos ejecutar nuestros tests con `npm run test` ó `npm test`, también tenemos la posibilidad de hacerlo mediante `npx mocha`.
Por último, modificaremos el `tsconfig.json`.

```json
  "exclude": [
    "./tests",
    "./node_modules",
    "./dist"
  ],
```

### Prompt

Para leer desde la entrada estándar (teclado), tenemos que utilizar el paquete prompt-sync. Lo instalamos con `npm i prompt-sync` (dependencia de ejecución), junto a sus tipos con `npm i --save-dev @types/prompt-sync` (dependencia de desarrollo). Cuando deseemos utilizarlo incluiremos las sigueintes líneas en el fichero correspondiente:

```ts
import * as Prompt from "prompt-sync";
const prompt = Prompt();
```

### Istanbul y Coveralls.

npm install --save-dev nyc coveralls

añadir en package.json:
"coverage": "nyc npm test",

npm run coverage


## Ejercicios Propuestos
### Ejercicio-1
En este ejercicio se pide realizar una interfaz genérica, una clase abstracta, y un conjunto de subclases que implementen los métodos necesarios, respetando los principios Solid. En primer lugar he creado la interfaz genérica y la clase abstracta:
```ts
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
```
Como podemos observar, algunos métodos cuentan con su implementación y otros son abstractos, que se definirán posteriormente en las subclases.
A continuación, tenemos la clase serie, documental y pelicula. Además de las subclases serieCollection, DocumentalCollection y PeliculaCollection. La principal diferencia es cada una tiene un atributo extra diferente.
Clase serie y serieCollection:
```ts
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

```
Clase documental y documentalCollection:
```ts
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

```

Clase Pelicula y PeliculaCollection:
```ts
  /**
   * Clase Pelicula
   */
  export class Pelicula {
    /**
     * Constructor por defecto
     * @param ano Año de la pelicula
     * @param nombre Nombre de la pelicula
     * @param puntuacion Punuacion de la pelicula
     * @param director Director de la pelicula
     */
    constructor(private ano: number, private nombre: string, private puntuacion: number, private director: string) {
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
     * getter director
     */
    get getDirector() {
      return this.director;
    }

    /**
     * setter director
     */
    set setDirector(director_: string) {
      this.director = director_;
    }

  }

  /**
   * Clase PeliculaCollection
   */
  export class PeliculaCollection extends BasicStreamableCollection<Pelicula> {

    /**
     * Constructor por defecto
     * @param elementos array de peliculas
     */
    constructor(elementos: Pelicula[]) {
      super(elementos);
    }

    /**
     * Método que busca peliculaes por año
     * @param ano año de busqueda
     * @returns array con los peliculaes de dicho año
     */
    buscarPorAno(ano: number): Pelicula[] {
      const array_aux: Pelicula[] = [];
      this.elementos.forEach((elemento) => {
        if (elemento.getAno === ano) {
          array_aux.push(elemento);
        }
      });
      return array_aux;
    }

    /**
     * Método que busca peliculaes por nombre
     * @param nombre Nombre del pelicula
     * @returns Array con los peliculaes con dicho nombre.
     */
    buscarPorNombre(nombre: string): Pelicula[] {
      const array_aux: Pelicula[] = [];
      this.elementos.forEach((elemento) => {
        if (elemento.getNombre === nombre) {
          array_aux.push(elemento);
        }
      });
      return array_aux;
    }

    /**
     * Método que busca peliculaes a través de una puntuación mínima
     * @param puntuacion puntuación mínima
     * @returns array con los peliculaes cuya puntuación es superior o igual a la indicada.
     */
    buscarPorPuntuacion(puntuacion: number): Pelicula[] {
      const array_aux: Pelicula[] = [];
      this.elementos.forEach((elemento) => {
        if (elemento.getPuntuacion >= puntuacion) {
          array_aux.push(elemento);
        }
      });
      return array_aux;
    }

    /**
     * Método que elimina un pelicula
     * @param nombre_elemento nombre del pelicula a eliminar.
     * @returns Array con los peliculaes actualizado.
     */
    eliminarElemento(nombre_elemento: string): Pelicula[] {
      this.elementos.forEach((elemento, indice) => {
        if (elemento.getNombre === nombre_elemento) {
          this.elementos.splice(indice,1);
        }
      });
      return this.elementos;
    }

    buscarPorDirector(director_: string): Pelicula[] {
      const array_aux: Pelicula[] = [];
      this.elementos.forEach((elemento) => {
        if (elemento.getDirector === director_) {
          array_aux.push(elemento);
        }
      });
      return array_aux;
    }
  }

```

Las pruebas realizadas son las siguientes:
```ts
  import "mocha";
  import { expect } from "chai";
  import { Serie, SeriesCollection } from "../../src/ejercicio-1/serie";

  describe("Tests Series", () => {
    it("Pruebas getters y setters", () => {
      serie1.setAno = 2025;
      serie1.setNombre = "nueva serie";
      serie1.setNumeroEpisodios = 35;
      serie1.setPuntuacion = 6.5;
      expect(serie1.getAno).to.eq(2025);
      expect(serie1.getNombre).to.eq("nueva serie");
      expect(serie1.getNumeroEpisodios).to.eq(35);
      expect(serie1.getPuntuacion).to.eq(6.5);

    });

    it("Pruebas SeriesCollection métodos", () => {
      expect(my_collection_series.buscarPorAno(2015)).to.eql([RickyMorty]);
      expect(my_collection_series.buscarPorAno(2010)).to.eql([]);
      expect(my_collection_series.buscarPorNombre("Los Serrano")).to.eql([Serrano]);
      expect(my_collection_series.buscarPorNombre("Dora")).to.eql([]);
      expect(my_collection_series.buscarPorPuntuacion(8.5)).to.eql([RickyMorty, CasaPapel]);
      expect(my_collection_series.buscarPorPuntuacion(9.5)).to.eql([]);
      expect(my_collection_series.eliminarElemento("Los Serrano")).to.eql([RickyMorty,CasaPapel]);
      expect(my_collection_series.buscarPorNumeroEpisodios(40)).to.eql([CasaPapel]);
      expect(my_collection_series.numeroTotalElementos()).to.eq(2);
      expect(my_collection_series.anadirElemento(StrangerThings)).to.eql([RickyMorty, CasaPapel, StrangerThings]);
    });



  });

  const serie1 = new Serie(2000, "prueba", 10, 100);
  const RickyMorty = new Serie(2015, "Rick y Morty", 8.5,52);
  const CasaPapel = new Serie(2017, "La Casa de Papel", 9,37);
  const Serrano = new Serie(2003, "Los Serrano",7.5,60);
  const StrangerThings = new Serie(2020, "Stranger Things",7.75, 75)
  const my_collection_series = new SeriesCollection([RickyMorty,CasaPapel,Serrano]);
```

```ts
  import "mocha";
  import { expect } from "chai";
  import { Documental, DocumentalCollection} from "../../src/ejercicio-1/documental";

  describe("Tests Peliculas", () => {


    it("Pruebas Documental getters y setters", () => {
      documental1.setAno = 2007;
      documental1.setNombre = "cataratas";
      documental1.setDuracion = 135;
      documental1.setPuntuacion = 6.5;
      expect(documental1.getAno).to.eq(2007);
      expect(documental1.getNombre).to.eq("cataratas");
      expect(documental1.getDuracion).to.eq(135);
      expect(documental1.getPuntuacion).to.eq(6.5);
    });

    it("Pruebas DocumentalCollection métodos", () => {
      expect(my_collection_documental.buscarPorAno(2007)).to.eql([documental1]);
      expect(my_collection_documental.buscarPorAno(2010)).to.eql([]);
      expect(my_collection_documental.buscarPorNombre("insectos")).to.eql([documental2]);
      expect(my_collection_documental.buscarPorNombre("polo norte")).to.eql([]);
      expect(my_collection_documental.buscarPorPuntuacion(8.5)).to.eql([documental2]);
      expect(my_collection_documental.buscarPorPuntuacion(9.5)).to.eql([]);
      expect(my_collection_documental.eliminarElemento("cataratas")).to.eql([documental2]);
      expect(my_collection_documental.eliminarElemento("reptiles")).to.eql([documental2]);
      expect(my_collection_documental.buscarPorDuracion(180)).to.eql([documental2]);
      expect(my_collection_documental.buscarPorDuracion(120)).to.eql([]);
      expect(my_collection_documental.anadirElemento(documental3)).to.eql([documental2,documental3]);
      expect(my_collection_documental.numeroTotalElementos()).to.eq(2);
    });



  });
  const documental1 = new Documental(2002, "rios", 8, 150);
  const documental2 = new Documental(2012, "insectos", 8.75, 175);
  const documental3 = new Documental(2017, "aves", 7.75, 140);
  const my_collection_documental = new DocumentalCollection([documental1, documental2]);
```

```ts
  import "mocha";
  import { expect } from "chai";
  import { Pelicula, PeliculaCollection } from "../../src/ejercicio-1/pelicula";

  describe("Tests peliculas", () => {

    it("Pruebas pelicula getters y setters", () => {
      pelicula1.setAno = 2022;
      pelicula1.setNombre = "Avatar 2";
      pelicula1.setDirector = "James Cameron";
      pelicula1.setPuntuacion = 9.1;
      expect(pelicula1.getAno).to.eq(2022);
      expect(pelicula1.getNombre).to.eq("Avatar 2");
      expect(pelicula1.getDirector).to.eq("James Cameron");
      expect(pelicula1.getPuntuacion).to.eq(9.1);
    });

    it("Pruebas peliculaCollection métodos", () => {
      expect(my_collection_pelicula.buscarPorAno(2023)).to.eql([pelicula2]);
      expect(my_collection_pelicula.buscarPorAno(2011)).to.eql([]);
      expect(my_collection_pelicula.buscarPorNombre("Creed 3")).to.eql([pelicula2]);
      expect(my_collection_pelicula.buscarPorNombre("polo norte")).to.eql([]);
      expect(my_collection_pelicula.buscarPorPuntuacion(8)).to.eql([pelicula1, pelicula3]);
      expect(my_collection_pelicula.buscarPorPuntuacion(9.5)).to.eql([]);
      expect(my_collection_pelicula.eliminarElemento("singapur")).to.eql([pelicula1,pelicula2]);
      expect(my_collection_pelicula.eliminarElemento("reptiles")).to.eql([pelicula1,pelicula2]);
      expect(my_collection_pelicula.buscarPorDirector("James Cameron")).to.eql([pelicula1]);
      expect(my_collection_pelicula.buscarPorDirector("roberto")).to.eql([]);
      expect(my_collection_pelicula.anadirElemento(pelicula3)).to.eql([pelicula1,pelicula2,pelicula3]);
      expect(my_collection_pelicula.numeroTotalElementos()).to.eq(3);
    });


  });
  const pelicula1 = new Pelicula(2012, "Avatar", 8.5, "Luis");
  const pelicula2 = new Pelicula(2023, "Creed 3", 7.85, "fernando");
  const pelicula3 = new Pelicula(2010, "singapur", 8, "alberto");
  const my_collection_pelicula = new PeliculaCollection([pelicula1,pelicula2,pelicula3]);
```

### Ejercicio-2
En este ejercicio se solicita realizar una interfaz genérica y una clase que implemente los métodos de dicha interfaz. Se pide realizar nuestra propia clase lista, sin usar ningún metodo de array a excepción de [].
```ts
  /**
   * Interfaz genérica mi_lista
   */
  interface mi_lista<T> {
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
```
He conseguido realizar todos los métodos utilizando en su mayoría bucles, arrays auxiliares y el operador de acceso. No he necesitado usar el *push* en ningún momento ya que en *typescript* los arrays son dinámicos, es decir, no son fijos respecto al tamaño pero si respecto al tipo.

Las pruebas realizadas son las siguientes:
```ts
  import "mocha";
  import { expect } from "chai";
  import { lista } from "../../src/ejercicio-2/lista";

  describe("Tests lista", () => {

    it("getter y setter de lista", () => {
      expect(mi_lista1.getList).to.be.eql([1,2,3,4]);
      expect(mi_lista2.getList).to.be.eql(["a","b","c","d"]);
      mi_lista1.setlist = [0,1,2,3];
      mi_lista2.setlist = ["w","x","y","z"];
      expect(mi_lista1.getList).to.be.eql([0,1,2,3]);
      expect(mi_lista2.getList).to.be.eql(["w","x","y","z"]);
    });

    it("Método append", () => {
      expect(mi_lista1.append([4,5,6])).to.be.eql([0,1,2,3,4,5,6]);
      expect(mi_lista2.append(["A","B","AB"])).to.be.eql(["w","x","y","z","A","B","AB"]);
    });

    it("Método concatenate", () => {
      expect(mi_lista1.concatenate([7],[8],[9])).to.be.eql([0,1,2,3,4,5,6,7,8,9]);
      expect(mi_lista2.concatenate(["C","D"],["c","d"])).to.be.eql(["w","x","y","z","A","B","AB","C","D","c","d"]);
    });

    it("Método filter", () => {
      expect(mi_lista1.filter((num) => {
          if (num > 5) {return true;}
          else {return false;}
        })).to.be.eql([6,7,8,9]);
      expect(mi_lista2.filter((cadena) => {
        if(cadena[0] === "w" || cadena[0] === "A") {
          return true
        }
        else {return false;}
      })).to.be.eql(["w", "A", "AB"]);
    });

    it("Método length", () => {
      expect(mi_lista1.length()).to.eq(10);
      expect(mi_lista2.length()).to.eq(11);
    }); 
    
    it("Método reverse", () => {
      expect(mi_lista1.reverse()).to.be.eql([9,8,7,6,5,4,3,2,1,0]);
      expect(mi_lista2.reverse()).to.be.eql(["d","c","D","C","AB","B","A","z","y","x","w"]);
    });

    it("Método reduce", () => {
      expect(mi_lista1.reduce(0,(acumulador: number, elementoActual: number) => acumulador + elementoActual)).to.be.eq(45);
      expect(mi_lista2.reduce("hola:",(acumulador: string, elementoActual: string) => acumulador + elementoActual)).to.be.eq("hola:wxyzABABCDcd");
    });

    it("Método map", () => {
      expect(mi_lista1.map((num) => {
        return 2*num ;
      })).to.be.eql([0,2,4,6,8,10,12,14,16,18]);
      expect(mi_lista2.map((cadena) => {
        return cadena+"Q";
      })).to.be.eql(["wQ","xQ","yQ","zQ","AQ","BQ","ABQ","CQ","DQ","cQ","dQ"]);
    });

    it("Método forEach", () => {
      let numero_aux = 0;
      mi_lista1.forEach((elemento) => {
        numero_aux += elemento;
      });
      expect(numero_aux).to.eq(45); 

      let cadena_aux = "";
      mi_lista2.forEach((elemento) => {
        cadena_aux += elemento;
      });
      expect(cadena_aux).to.eq("wxyzABABCDcd"); 
    });
  });


  const mi_lista1 = new lista<number>([1,2,3,4]);
  const mi_lista2 = new lista<string>(["a","b","c","d"]);
```
### Ejercicio-3
En este ejercicio se solicita coger un ejercicio de la práctica anterior, hacer que se cumplan los principios solid y además hacer 2 cambios:
Ahora, la discografía de un artista podrá estar formada por una colección de discos o de singles. Por lo tanto, tendrá que contemplar la nueva entidad single. Generalmente, un single se diferencia de un disco en que el single contiene una única canción o varias versiones de la misma canción.
Además, ahora deberá hacer que la discografía sea una clase genérica. En algún punto de su código deberá concretar esta clase genérica indicando que la discografía puede ser una colección de discos, una colección de singles o una colección de discos y singles. A continuación en primer lugar la clase cancion, que ha pasado de interfaz a ser una clase con sus getters y setters correspondientes.
```ts
  /**
   * clase canción con sus atributos correspondientes.
   */
  export class cancion {
    constructor(
      private nombre: string,
      private duracion: number,
      private generos: string[],
      private single: boolean,
      private numero_reproducciones: number
    ) {}

    /**
     * getter nombre
     */
    get getNombre(): string {
      return this.nombre;
    }

    /**
     * setter nombre
     */
    set setNombre(nombre_: string) {
      this.nombre = nombre_;
    }

    /**
     * getter duracion
     */
    get getDuracion(): number {
      return this.duracion;
    }

    /**
     * setter duracion
     */
    set setDuracion(duracion_: number) {
      this.duracion = duracion_;
    }

    /**
     * getter generos
     */
    get getGeneros(): string[] {
      return this.generos;
    }

    /**
     * setter generos
     */
    set setgeneros(generos_: string[]) {
      this.generos = generos_;
    }

    /**
     * getter single
     */
    get getSingle(): boolean{
      return this.single;
    }

    /**
     * setter single
     */
    set setSingle(single_: boolean) {
      this.single = single_;
    }

    /**
     * getter numero reproducciones
     */
    get getNumeroReproducciones(): number {
      return this.numero_reproducciones;
    }

    /**
     * setter numero reproducciones
     */
    set setNumeroReproducciones(numeroReproducciones_: number) {
      this.numero_reproducciones = numeroReproducciones_;
    }
  }
```
Luego tenemos disco,single y discografia, las 2 primeras son nuevas creaciones ya que en la anterior práctica no contaba con ninguna de estas entidades. Discografía pasar a ser un array genérico de una mezcla de discos y singles, con sus correspondientes getters y setters. Tanto disco como single tienen sus correspondientes getters y setters, además de un método que devuelve la duración del disco, otro que devuelve el número de canciones y otro que devuelve el número de reproducciones. Como extra, single tiene un número de versiones con su correspondiente getter y setter y además en el constructor de single, en caso de que se pasen varias canciones con nombres diferentes, se eliminarán.

```ts
  import { cancion } from "./cancion";

  /**
   * Clase disco
   */
  export class disco {
    /**
     * Constructor por defecto
     * @param nombre Nombre del disco.
     * @param ano Año de lanzamiento.
     * @param canciones Conjunto de canciones.
     */
    constructor(
      private nombre: string,
      private ano: number,
      private canciones: cancion[]
    ) {}

    /**
     * getter nombre
     */
    get getNombre(): string {
      return this.nombre;
    }

    /**
     * setter nombre
     */
    set setNombre(nombre_: string) {
      this.nombre = nombre_;
    }

    /**
     * getter año
     */
    get getAno(): number {
      return this.ano;
    }

    /**
     * setter año
     */
    set setAno(ano_: number) {
      this.ano = ano_;
    }

    /**
     * getter canciones
     */
    get getCanciones(): cancion[] {
      return this.canciones;
    }

    /**
     * setter canciones
     */
    set setCanciones(canciones_: cancion[]) {
      this.canciones = canciones_;
    }


    /**
     * Función que calcula la duración de un disco en base a la suma de las duraciones de cada disco.
     * @returns duración del disco en minutos.
     */
    duracionDisco(): number {
      let duracion = 0;
      this.canciones.forEach((element) => {
        duracion += element.getDuracion;
      });
      return duracion;
    }

    /**
     * Función que calcula el número de reproducciones del disco en base a la suma del número de reproducciones de cada canción.
     * @returns número de reproducciones total
     */
    numeroReproduccionesDisco(): number {
      let numero_reproducciones_total = 0;
      this.canciones.forEach((element) => {
        numero_reproducciones_total += element.getNumeroReproducciones;
      });
      return numero_reproducciones_total;
    }

    /**
     * Función que calcula el número de discos de un disco.
     * @returns Número de discos.
     */
      numerocanciones(): number {
        return this.canciones.length;
      }
  }


  /**
   * Clase single
   */
  export class single {
    /**
     * Constructor por defecto
     * @param nombre Nombre del single
     * @param ano Año de lanzamiento.
     * @param canciones Conjunto de canciones.
     */
    constructor(
      private nombre: string,
      private ano: number,
      private canciones: cancion[],
      private numero_versiones: number
    ) {
      const nombre_aux = canciones[0].getNombre;
      for (let i = 0; i < this.canciones.length; i++) {
        if (nombre_aux !== canciones[i].getNombre) {
          canciones.splice(i,1); // en caso de ser el mismo nombre, lo elimino del single.
        }
      }
    }

    /**
     * getter nombre
     */
    get getNombre(): string {
      return this.nombre;
    }

    /**
     * setter nombre
     */
    set setNombre(nombre_: string) {
      this.nombre = nombre_;
    }

    /**
     * getter año
     */
    get getAno(): number {
      return this.ano;
    }

    /**
     * setter año
     */
    set setAno(ano_: number) {
      this.ano = ano_;
    }

    /**
     * getter canciones
     */
    get getCanciones(): cancion[] {
      return this.canciones;
    }

    /**
     * setter canciones
     */
    set setCanciones(canciones_: cancion[]) {
      this.canciones = canciones_;
    }

    /**
     * getter numero versiones
     */
    get getNumeroVersiones(): number {
      return this.numero_versiones;
    }

    /**
     * setter numero versiones
     */
    set setNumeroVersiones(numero_versiones_: number) {
      this.numero_versiones = numero_versiones_;
    }


    /**
     * Función que calcula la duración de un disco en base a la suma de las duraciones de cada disco.
     * @returns duración del disco en minutos.
     */
    duracionSingle(): number {
      let duracion = 0;
      this.canciones.forEach((element) => {
        duracion += element.getDuracion;
      });
      return duracion;
    }

    /**
     * Función que calcula el número de reproducciones del disco en base a la suma del número de reproducciones de cada canción.
     * @returns número de reproducciones total
     */
    numeroReproduccionesSingle(): number {
      let numero_reproducciones_total = 0;
      this.canciones.forEach((element) => {
        numero_reproducciones_total += element.getNumeroReproducciones;
      });
      return numero_reproducciones_total;
    }

    /**
     * Función que calcula el número de discos de un disco.
     * @returns Número de discos.
     */
    numerocanciones(): number {
      return this.canciones.length;
    }
  }



  /**
   * Clase discografía
   */
  export class discografia<T extends disco | single> {
    /**
     * Constructor por defecto
     * @param discos Conjunto de discos.
     */
    constructor(
      private discos: T[]
    ) {}

    /**
     * getter discos
     */
    get getDiscos(): T[] {
      return this.discos;
    }

    /**
     * setter discos
     */
    set setDiscos(discos_: T[]) {
      this.discos = discos_;
    }

  }

```

Para continuar tenemos artista, que ha pasado de ser una clase a una interfaz y además tenemos 2 subclases que la implementan como son grupo y solista. A parte de todos los atributos con sus getters y setters en ambas clases, la clase grupo tiene un atributo número de miembros. La discografía del artista es un array de singles y/o discos, como se comentó previamente.

```ts
  import { discografia,disco,single } from "./discografia";

  /**
   * Interfaz artista
   */
  export interface Artista {
    nombre: string;
    numero_oyentes: number;
    discografia: discografia<disco|single>[];
  }

  /**
   * Clase grupo que implementa la interfaz artista
   */
  export class Grupo implements Artista {
    constructor(
      public readonly nombre: string,
      public readonly numero_oyentes: number,
      public readonly discografia: discografia<disco|single>[],
      public readonly numero_miembros: number
    ) {}
  }

  /**
   * Clase solista que implementa la interfaz artista
   */

  export class Solista implements Artista {
    constructor(
      public readonly nombre: string,
      public readonly numero_oyentes: number,
      public readonly discografia: discografia<disco|single>[],
    ) {}
  }
```
 
Para terminar, tenemos la biblioteca, cuyo atributo es un array de artistas. Tenemos 3 métodos, uno que busca por nombre de artista, otro por nombre de canción y otro por nombre de disco o single, todos devuelven un array con las coincidencias. Además tenemeos un método print para imprimir la biblioteca.

```ts
  import { Artista } from "./artista";
  import { cancion } from "./cancion";
  import { disco, single} from "./discografia"

  /**
   * Clase Biblioteca
   */
  export class biblioteca {
    /**
     * Constructor por defecto.
     * @param array_artistas conjunto de artistas pertenecientes a la biblioteca.
     */
    constructor(public array_artistas: Artista[]) {}

    /**
     * Función que busca un artista en la biblioteca.
     * @param nombre_artista Nombre del artista a buscar.
     * @returns array de artistas con dicho nombre.
     */
    buscarArtista(nombre_artista: string): Artista[]{
      const array_aux: Artista[] = [];
      this.array_artistas.forEach((artista_) => {
        if (nombre_artista === artista_.nombre) {
          // console.table(artista_);
          array_aux.push(artista_);
        }
      });
      return array_aux;
    }


    /**
     * Función que busca un disco en la biblioteca.
     * @param nombre_disco Nombre del disco a buscar.
     * @returns array con los discos y singles con dicho nombre.
     */
    buscarDisco(nombre_disco: string): (disco|single)[] {
      const array_aux: (disco|single)[] = [];
      this.array_artistas.forEach((artista_) => {
        artista_.discografia.forEach((discografia_) => {
          discografia_.getDiscos.forEach(elemento => {
            if (nombre_disco === elemento.getNombre) {
              // console.table(elemento);
              array_aux.push(elemento);
            }          
          })
        });
      });
      return array_aux;
    }

    /**
     * Función que busca una canción en la biblioteca.
     * @param nombre_cancion Nombre de la canción a buscar.
     * @returns array con las canciones con dicho nombre.
     */
    buscarCancion(nombre_cancion: string): cancion[]{
      const array_aux: cancion[] = [];
      this.array_artistas.forEach((artista_) => {
        artista_.discografia.forEach((discografia_) => {
          discografia_.getDiscos.forEach((disco_) => {
            disco_.getCanciones.forEach(cancion_ => {
              if (nombre_cancion === cancion_.getNombre) {
                // console.table(cancion_);
                array_aux.push(cancion_);
              }
            })
          });
        });
      });
      return array_aux;
    }

    /**
     * Método print
     * @returns retorna array de artistas para las pruebas.
     */
    print(): Artista[]{
      console.table(this.array_artistas);
      return this.array_artistas;
    }
  }
```


Las pruebas realizadas son las siguientes:
```ts
  import "mocha";
  import { expect } from "chai";
  import { cancion } from "../../src/ejercicio-3/cancion";

  describe("Tests cancion", () => {
    it("getter y setter de cancion", () => {
      expect(paradise.getNombre).to.eq("paradise");
      expect(paradise.getDuracion).to.eq(4);
      expect(paradise.getGeneros).to.eql(["Pop"]);
      expect(paradise.getSingle).to.eq(false);
      expect(paradise.getNumeroReproducciones).to.eq(1500);

      paradise.setNombre = "paradise 2";
      paradise.setDuracion = 4.5;
      paradise.setgeneros = ["POP"];
      paradise.setSingle = false;
      paradise.setNumeroReproducciones = 80000;

      expect(paradise.getNombre).to.eq("paradise 2");
      expect(paradise.getDuracion).to.eq(4.5);
      expect(paradise.getGeneros).to.eql(["POP"]);
      expect(paradise.getSingle).to.eq(false);
      expect(paradise.getNumeroReproducciones).to.eq(80000);
    });
  });
  const paradise = new cancion("paradise",4,["Pop"],false, 1500);
```

```ts
  import "mocha";
  import { expect } from "chai";
  import { cancion } from "../../src/ejercicio-3/cancion";
  import { disco,single,discografia } from "../../src/ejercicio-3/discografia";

  describe("Disco", () => {
    it("getter y setter de grupo", () => {
      expect(disco1.getNombre).to.eq("disco1");
      expect(disco1.getAno).to.eq(2008);
      expect(disco1.getCanciones).to.eql([paradise]);
      disco1.setNombre = "mi disco";
      disco1.setAno = 2015;
      disco1.setCanciones = [paradise, heaven];
      expect(disco1.getNombre).to.eq("mi disco");
      expect(disco1.getAno).to.eq(2015);
      expect(disco1.getCanciones).to.eql([paradise, heaven]);
    });
    it("métodos disco", () => {
      expect(disco1.duracionDisco()).to.eq(8);
      expect(disco1.numeroReproduccionesDisco()).to.eq(2500);
      expect(disco1.numerocanciones()).to.eq(2);
    });
  });

  const paradise = new cancion("paradise",4,["Pop"],false, 1500);
  const heaven = new cancion("heaven",4,["jazz"],false, 1000);
  const disco1 = new disco("disco1",2008,[paradise]);

  describe("Single", () => {
    it("fallo constructor single", () => {
      const single2 = new single("single2",2010,[heaven,paradise],1);
      expect(single2.getCanciones).to.eql([heaven]);
    });
    it("getter y setter de grupo", () => {
      expect(single1.getNombre).to.eq("single1");
      expect(single1.getAno).to.eq(2008);
      expect(single1.getCanciones).to.eql([heaven]);
      expect(single1.getNumeroVersiones).to.eq(1);
      single1.setNombre = "mi single";
      single1.setAno = 2015;
      single1.setCanciones = [paradise];
      single1.setNumeroVersiones = 2;
      expect(single1.getNumeroVersiones).to.eq(2);
      expect(single1.getNombre).to.eq("mi single");
      expect(single1.getAno).to.eq(2015);
      expect(single1.getCanciones).to.eql([paradise]);
      expect(single1.getNumeroVersiones).to.eq(2);
    });
    it("métodos single", () => {
      expect(single1.duracionSingle()).to.eq(4);
      expect(single1.numeroReproduccionesSingle()).to.eq(1500);
      expect(single1.numerocanciones()).to.eq(1);
    });
  });
  const single1 = new single("single1",2008,[heaven],1);


  describe("Discografia", () => {
    it("prueba getter y setter discografia", () => {
      const discografia1 = new discografia([disco1,single1]);
      expect(discografia1.getDiscos).to.eql([disco1,single1]);
      discografia1.setDiscos = [single1,disco1];
      expect(discografia1.getDiscos).to.eql([single1,disco1]);
    });
  });
```

```ts
  import "mocha";
  import { expect } from "chai";
  import { Grupo, Solista } from "../../src/ejercicio-3/artista";
  import { discografia,disco,single } from "../../src/ejercicio-3/discografia";
  import { cancion } from "../../src/ejercicio-3/cancion";

  describe("Tests Grupo", () => {
    it("getters de grupo", () => {
      expect(grupo1.nombre).to.eq("Beatles");
      expect(grupo1.numero_oyentes).to.eq(1000);
      expect(grupo1.discografia).to.eql([discografia1]);
      expect(grupo1.numero_miembros).to.eq(4);
    });
  });



  describe("Tests Solista", () => {
    it("getter de solista", () => {
      expect(solista1.nombre).to.eq("Juan");
      expect(solista1.numero_oyentes).to.eq(3500);
      expect(solista1.discografia).to.eql([discografia2]);
    });
  });

  const paradise = new cancion("paradise",4,["Pop"],false, 1500);
  const heaven = new cancion("heaven",4,["jazz"],false, 1000);
  const disco1 = new disco("disco1",2008,[paradise]);
  const single1 = new single("single1",2008,[heaven],1);
  const discografia1 = new discografia([disco1,single1]);
  const discografia2 = new discografia([single1,disco1]);
  const grupo1 = new Grupo("Beatles", 1000,[discografia1],4);
  const solista1 = new Solista("Juan", 3500, [discografia2]);
```

```ts
  import "mocha";
  import { expect } from "chai";
  import { Grupo, Solista } from "../../src/ejercicio-3/artista";
  import { discografia,disco,single } from "../../src/ejercicio-3/discografia";
  import { cancion } from "../../src/ejercicio-3/cancion";
  import { biblioteca} from "../../src/ejercicio-3/biblioteca"

  describe("Tests Biblioteca", () => {
    it("tests buscar artista", () => {
      expect(biblioteca1.buscarArtista("Julián")).to.eql([]);
      expect(biblioteca1.buscarArtista("Beatles")).to.eql([grupo1]);
    });
    it("tests buscar disco", () => {
      expect(biblioteca1.buscarDisco("disco1")).to.eql([disco1,disco1]);
      expect(biblioteca1.buscarDisco("single1")).to.eql([single1,single1]);
    });
    it("tests buscar cancion", () => {
      expect(biblioteca1.buscarCancion("paradise")).to.eql([paradise, paradise]);
      expect(biblioteca1.buscarArtista("fun")).to.eql([]);
    });

    it("tests print", () => {
      expect(biblioteca1.print()).to.eql([grupo1,solista1]);
    });

  });

  const paradise = new cancion("paradise",4,["Pop"],false, 1500);
  const heaven = new cancion("heaven",4,["jazz"],false, 1000);
  const disco1 = new disco("disco1",2008,[paradise]);
  const single1 = new single("single1",2008,[heaven],1);
  const discografia1 = new discografia([disco1,single1]);
  const discografia2 = new discografia([single1,disco1]);
  const grupo1 = new Grupo("Beatles", 1000,[discografia1],4);
  const solista1 = new Solista("Juan", 3500, [discografia2]);

  const biblioteca1 = new biblioteca([grupo1, solista1]);
```


### Ejercicio-1 PE-103
En este ejercicio se solicita lo siguiente:
Implemente una interfaz genérica 'Collectable' con los siguientes métodos, los cuales deberá definir toda clase que quiera implementar dicha interfaz: addItem, getItem, removeItem, getNumberOfItems.
Implemente una interfaz genérica 'Searchable' con los siguientes métodos, los cuales deberá definir toda clase que desee implementar dicha interfaz: search. Este método recibirá un término de búsqueda cuyo tipo no se conoce a priori.
Implemente una clase abstracta genérica 'SearchableCollection' que implemente las interfaces genéricas 'Collectable' y 'Searchable'. Tenga en cuenta que en este punto deberá implementar todos los metodos de la interfaz 'Collectable', mientras que el método search de 'Searchable' será abstracto, de modo que aquellas clases que extiendan a 'SearchableCollection' tengan que implementarlo obligatoriamente.
Extienda la clase abstracta genérica 'SearchableCollection' escribiendo dos subclases: 'NumericSearchableCollection' y 'StringSearchableCollection'. La primera deberá modelar una colección de elementos numéricos en la que el método search deberá poder buscar un número concreto y devolverá un array con todas las ocurrencias de dicho número en la colección. La segunda deberá modelar una colección de cadenas de caracteres en la que el método search deberá poder buscar una subcadena y devolverá un array con todas las cadenas de la colección que contengan dicha subcadena.
El código desarrollado es el siguiente:
```ts
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

```
Las pruebas realizadas son las siguientes:
```ts
  import "mocha";
  import { expect } from "chai";
  import { NumericSearchableCollection } from "../../src/pe-103/numericSearchableCollection";

  describe("Tests NumericSearchableCollection", () => {
    it("Pruebas search numeric", () => {
      expect(mi_numericSearchableCollection.search(2)).to.eql([2,2]);
      expect(mi_numericSearchableCollection.search(6)).to.eql([]);
    });
    it("Pruebas addItem numeric", () => {
      expect(mi_numericSearchableCollection.addItem(4)).to.eql([2,7,8,10,2,4]);
    });
    it("Pruebas getItem numeric", () => {
      expect(mi_numericSearchableCollection.getItem(2)).to.eq(8);
      expect(mi_numericSearchableCollection.getItem(8)).to.eq(undefined);
      expect(mi_numericSearchableCollection.getItem(-2)).to.eq(undefined);
    });
    it("Pruebas removeItem numeric", () => {
      expect(mi_numericSearchableCollection.removeItem(1)).to.eq(7);
      expect(mi_numericSearchableCollection.removeItem(8)).to.eq(undefined);
      expect(mi_numericSearchableCollection.removeItem(-2)).to.eq(undefined);
    });
    it("Pruebas getNumberOfItems numeric", () => {
      expect(mi_numericSearchableCollection.getNumberOfItems()).to.eq(5);
    });
  });


  const mi_numericSearchableCollection = new NumericSearchableCollection([2,7,8,10,2]);
```

```ts
  import "mocha";
  import { expect } from "chai";
  import { StringSearchableCollection } from "../../src/pe-103/stringSearchableCollection";

  describe("Tests StringSearchableCollection", () => {
    it("Pruebas search String", () => {
      expect(mi_stringSearchableCollection.search("juan")).to.eql(["juan"]);
      expect(mi_stringSearchableCollection.search("maria")).to.eql([]);
    });
    it("Pruebas addItem String", () => {
      expect(mi_stringSearchableCollection.addItem("manuel")).to.eql(["hola","adios","juan", "ana", "manuel"]);
    });
    it("Pruebas getItem String", () => {
      expect(mi_stringSearchableCollection.getItem(2)).to.eq("juan");
      expect(mi_stringSearchableCollection.getItem(8)).to.eq(undefined);
      expect(mi_stringSearchableCollection.getItem(-3)).to.eq(undefined);
    });
    it("Pruebas removeItem String", () => {
      expect(mi_stringSearchableCollection.removeItem(1)).to.eq("adios");
      expect(mi_stringSearchableCollection.removeItem(8)).to.eq(undefined);
      expect(mi_stringSearchableCollection.removeItem(-3)).to.eq(undefined);

    });
    it("Pruebas getNumberOfItems String", () => {
      expect(mi_stringSearchableCollection.getNumberOfItems()).to.eq(4);
    });
  });


  const mi_stringSearchableCollection = new StringSearchableCollection(["hola","adios","juan", "ana"]);
```


## Conclusión
Esta práctica me ha servido para trabajar con clases e interfaces genéricas, además de utilizar clases abstractas y herencia de clases. También he hecho uso de *extends* y *implements*, así como he intentado cumplir lo más que he podido los principios SOLID.
Para terminar, en el ejercicio de la práctica anterior, había cometido varios errores de diseño que he podido corregir.