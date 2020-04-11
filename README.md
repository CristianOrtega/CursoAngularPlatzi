# Curso de Angular

_Apuntes relacionados al curso_

## Comenzando 🚀

_Estas instrucciones te permitirán desarrollar un aplicativo en Angular._

### Pre-requisitos 📋

_Herramientas para el curso._

* [NodeJS](https://nodejs.org/es/download/) - Utilizar versión 12 o superior.
* [Angular](https://cli.angular.io/) - Utilizar la versión 8.
* [Visual Studio Code](https://code.visualstudio.com/Download) - IDE de desarrollo recomendado.

_Recuerda instalar plugins en Visual Studio para que te faciliten o ayuden el desarrollo del código._

* Angular Languague Service
* TSLint

## Estructuras de Control 📖

### String Interpolation

_Es la forma de renderizar las variables de JavaScript en el template. Cuando Angular ve en un template algo escrito entre dobles llaves {{}} lo evalúa y lo trata de convertir en una cadena, para luego volcarlo en el template._

```
<p>Esta es una prueba de {{ message }}</p>
```

_Eso quiere decir a Angular que debe sustituir una propiedad del componente llamada "algunaCadena" y colocar su valor tal cual en el template_

_La interpolación es dinámica. Quiere decir que, si cambia el valor de la propiedad del componente, Angular se dará el trabajo de cambiar todos los lugares donde se está haciendo uso de esa propiedad, lo que cambiaría el texto que hay escrito del párrafo anterior. Cabe destacar que la interpolación también puede ser utilizada como valor de propiedades en otros elementos HTML._

### Data Binding

_El enlace de datos en aplicaciones (Data-Binding) en Angular es la sincronización automática de datos entre el modelo y los componentes de la vista. La forma en que Angular implementa el enlace de datos le permite tratar el modelo como la única fuente de verdad en su aplicación. La vista es una proyección del modelo en todo momento. Cuando el modelo cambia, la vista refleja el cambio, y viceversa._

### Directivas

* **ngIf:** Es un atributo que podemos agregar en los elementos HTML que nos permite condicionar dicho elemento.

Ejemplo:
```
<p>Nombre:{{nombre}}</p>
<p>Edad:{{edad}}</p>  
<p *ngIf="edad>=18">Es mayor de edad.</p>
```

* **ngFor:** Nos permite generar muchos elementos HTML repetidos a partir del recorrido de un arreglo de datos.

Ejemplo:
```
item = ['Cristian', 'Francisco', 'Carlos'];

<ul>
<li *ngFor="let name of items">
{{ name }}
</li>
</ul>
```

_En el navegador esto mostraría lo siguiente:_
```
Cristian
Francisco
Carlos
```

* **ngSwitch:** _Es similar a ng-if y como nos podemos imaginar es como el switch de la programación. Es decir que permite que entre varios conjuntos de tags solo esté uno de ellos, borrando los que no cumplen la condición._

Ejemplo: Mostrará la operación correspondiente cuando la variable 'operation' calce en uno de los case.
```
<div [ngSwitch]="operation"> 
    <p *ngSwitchCase="1"> La operación encontrada 1</p>
    <p *ngSwitchCase="2"> La operación encontrada 2</p>
    <p *ngSwitchCase="3"> La operación encontrada 3</p>
    <p *ngSwitchDefault="3"> Operación no encontrada</p>
</div>
```

### Componentes

**¿Qué son los decoradores?**

_Un decorador Angular es una clase especial de declaración que puede acoplarse a una clase, método, propiedad o parámetro. Los decoradores se declaran de la siguiente manera @expression. Gracias al parámetro @ podemos reconocer fácilmente que estamos hablando de un decorador. Generalmente usamos los decoradores para extender servicios de terceros, de esta manera evitamos modificar el código original del módulo y en tiempo de ejecución agregamos el funcionamiento que necesitamos._

**¿Qué son Inputs?**

_Dinámicamente un componente puede enviarle información al componente donde reside el @Input_

**¿Qué son los Output?**

_Sirve para comunicar eventos a otros componentes._


### Ciclo de vida de los componentes

_Angular tiene unos eventos que ejecuta en un orden en especifico haciendo el ciclo de vida en un componente._

* **1. Constructor:** Es utilizado para crear nuestro componente y ponerlo en interfaz.
* **2. NgOnChanges:** Su función es detectar el cambio cada vez que tenemos un Input. Esta es la forma de que cada vez que cambiamos la data podemos detectar los cambios y ver el estado anterior y el nuevo.
* **3. NgOnInit:** Se ejecuta solo una vez y cuando el componente ya está listo en la interfaz gráfica. (Por lo general se utiliza para hacer el llamado a un REST API u otro componente).
* **4. NgDoCheck:** Detecta cuando los elementos hijos de ese componente también son creados y puestos en interfaz. Este posee varios subelementos que será detallados más adelante. No se puede utilizar NgOnChanges con NgDoCheck a la vez porque tienen un error de colisión, ya que ambos se encargan de detectar cambios. NgOnChanges es la forma nativa de Angular y NgDoCheck puedes hacer la detección de cambios pero a tu manera.
* **5. NgOnDestroy:** Simplemente detecta cuando el elemento es quitado de la interfaz.

### Pipes y Directivas

_Los **Pipes** funcionando como una "tuberia", donde entran datos de un tipo y los transforma en otro tipo de valor. Se pueden utilizar de forma concatenada o se puede hacer uso de uno solo. Angular ya tiene por defecto sus propios pipes y estos los puedes encontrar en su documentación oficial. Además tu puedes crear tu propio **pipe** en caso de que necesites uno personlizado. Recuerda que esto lo podrías hacer con una función en tu componente pero los pipes son de alto rendimiento por lo que son más utiles._

_Las **Directivas** también son un artefacto importante dentro de Angular que nos sirve para modificar el DOM de un elemento en especifico dinamicamente, hay que tener mucho cuidado en donde y como utilizar, ya que no es buena practica manipular el DOM dinamicamente porque para hace esta el Data Binding de Angular. Sin embargo podría ser muy funcional por ejemplo para hacer un componente del tipo autocompletar donde por cada tecla que va escribiendo en el input vamos modificando el DOM y añadiendo nuevos elementos._

### Modulos y Rutas

_Nos sirven para poder abstraer y poder dividir por dominio nuestra aplicación, esto quiere decir que, los componentes que hacen parte de una página se pueden encapsular en un mismo módulo. Existen módulos especiales estos son **shared** y **core**._

* **Core:** Guarda todos los servicios y componentes que usaremos a lo largo de todos los otros módulos.
* **Shared:** Podemos almacenar componentes y servicios compartidos.

### RouterLink y RouterActive (RouterLinkActive)

_En Angular existe una directiva llamada **routerLink**, con ella se evita que se recargue la página cada vez que navegamos entre las rutas, manteniendo nuestro proyecto como una "Single Page Application". La forma de aplicarlo es cambiar las referencias href en HTML por routerLink._

```
<div> 
    <a href="/home">Home</a>

</div>
```

```
<div> 
    <a routerLink="/home">Home</a>

</div>
```

_También existe **routerActiveLink**, esta directiva le asigna a una clase determinada a la etiqueta HTML si y solo si esta parado en la ruta definida con routerLink, por lo general es "active". Con esto podemos asignar estilos para esta clase en particular._

### Vistas Anidadas
_A veces existen componentes que se utilizan en varios otros componentes, para esto existe la técnica de vistas anidadas, la cual consiste en crear un componente que albergue los elementos que se repiten y los otros componentes que los utilizan serán hijas del componente creado anteriormente._

### Lazy Loading

_Es una técnica en Angular que ayuda a reducir el peso de tus aplicaciones, o al menos a fragmentarlo, para reducir el tiempo de carga inicial y hacer que tus aplicaciones carguen más rápido. Esta técnica se encargar de fragmentar el archivo generado **main.js** para que cargue más rápido la aplicación, basada en la técnica divide y vencerás, cargando siempre el código Javascript necesario para que la vista funcione de manera adecuada. Con ésto claro, un pre-requisito fundamental es modularizar la aplicación. Un módulo encapsula varios elementos de la aplicación (Components, directivas, servicios, etc)._

_La clave para separar los módulos es:_
* Crear una carpeta que contendrá el módulo.
* Crear un módulo que llame a todos los componentes que utilizará.
* Crear un módulo para sus rutas.
* Cambiar la importación dentro del routing principal.
* Eliminar referencias o errores que surjan por el movimiento.

_Existe un pequeño problema en las redes 3G o redes lentas haciendo que el tiempo de carga sea más lento. Este problema se puede resolver haciendo un cambio en nuestra aplicación para que realice una precarga de los otros módulos cuando la vista que estamos consultando termine de cargar sus elementos. Para esto se debe modificar el archivo **app-routing** y cambiar la estrategia de carga, precargando los archivos con **PreloadAllModules**._

### Shared y Core Modules

### Guardianes

_Angular provee seguridad a traves se **"Guardianes"** para poder saber quien puede entrar o no a una ruta en especifico. Existen distintos tipos, entre ellos:_

* **CanActive:** Mira si el usuario puede acceder a una página determinada.
* **CanActiveChild:** Mira si el usuario puede acceder a las páginas de una determinada ruta.
* **CanLoad:** Sirve para evitar que la aplicación cargue los módulos perezosamente si el usuario no está autorizado.

### Formularios Reactivos

_La diferencia entre los **ReactiveForms** con el  **FormModule** es sustancial y es que en un NgModel normal si tienen un enlace de datos pero no tenemos el control total en el, como la validación de datos. En cambio con los formularios reactivos tenemos Observables para mirar que datos estan mutando, colocar validaciones, agregar pruebas unitarias y toda la logica va a estar dentro de nuestro controlador, por ende hacer pruebas será mucho más sencillo que hacer en el template._

## Comandos Angular CLI

_Angular cuenta con una serie de comandos para facilitar el trabajo del desarrollador.El siguiente listado muestra los comandos más utilizados comúnente, para ver la definición completa de cada comando puedes ver la documentación en [AngularCLI](https://angular.io/cli) en la sección  **CLI COMMANDS** :_

* **ng new <name>** o **ng n <name>:** Crea un nuevo workspace (Carpeta) con el nombre que le indicas y una aplicación angular.
* **ng --version:** Indica que es lo que tu proyecto actualmente tiene, versión del angular, node y los paquetes utilizados.
* **ng serve** o **ng s:** Levanta el aplicativo en tu entorno local (ambiente desarrollo). Este comando tiene muchas opciones que puedes ver en la documentación.
* **ng build:** Compila el aplicativo para subir a un entorno productivo.
* **ng lint:** Nos ayuda a detectar errores que tenemos en el código.
* **ng generate component <name>** o **ng g c <name>:** Crea un nuevo componente en nuestro aplicativo. Generando 4 clases nuevas de TypeScript, HTML, CSS y un archivo para pruebas unitarias. Además generando clases con este comando se agregan automáticamente en nuestro archivo **app.module.ts**.
* **ng generate pipe <name>** o **ng g p <name>:** Crea un pipe, con esto podrás hacer tu propia transformación de datos.
* **ng generate directive <name>** o **ng g d <name>:** Crea una directiva, en este archivo podrás modificar como se comporta un elemento y modificarlo en el DOM.
* **ng generate guardian <name>** o **ng g g <name>:** Crea un guardian, en este archivo podrás implementar distintos tipos de permisos a tu aplicativo.

## Buenas Prácticas

* _Una buena medida que puedes antes de subir algo a un repositorio o al terminar tu desarrollo un nuevo componente o módulo, es ejecutar el comando **ng build --prod**, lo que hará es compilar tu proyecto pero de una forma menos "flexible" indicando si existe o no algún problema en tu proyecto._





