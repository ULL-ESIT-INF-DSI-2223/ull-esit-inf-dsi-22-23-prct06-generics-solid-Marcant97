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
### Ejercicio-2
### Ejercicio-3

### Ejercicio-1 PE-103






pendiente:
1. corregir el apartado de instalación/configuracion de instanbul y coveralls
2. ejercicio 2
3. ejercicio 3
4. informe de todo