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

Ejemplo: Mostrará la operación correspondiente cuando la variable 'operation' calse en uno de los case.
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



## Comandos Angular CLI

_Angular cuenta con una serie de comandos para facilitar el trabajo del desarrollador.El siguiente listado muestra los comandos más utilizados comúnente, para ver la definición completa de cada comando puedes ver la documentación en [AngularCLI](https://angular.io/cli) en la sección  **CLI COMMANDS** :_

* **ng new <name>** o **ng n <name>:** Crea un nuevo workspace (Carpeta) con el nombre que le indicas y una aplicación angular.
* **ng --version:** Indica que es lo que tu proyecto actualmente tiene, versión del angular, node y los paquetes utilizados.
* **ng serve:** Levanta el aplicativo en tu entorno local (ambiente desarrollo). Este comando tiene muchas opciones que puedes ver en la documentación.
* **ng build:** Compila el aplicativo para subir a un entorno productivo.




