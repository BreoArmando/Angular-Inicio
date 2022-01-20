import { Component, OnInit } from "@angular/core";

//El decorador Component espera como argumento un objeto al que habitualmente se le definirán
//  las siguientes propiedades:
//    selector -> Será el nombre o identificador para este componente.
//
//    templateUrl -> La ruta al HTML de este componente.
//
//    Opcionalmente a lo anterior, la plantilla HTML se puede escribir en este mismo fichero
//      usando la propiedad 'template' y las comillas `` (para escribir literales de varias
//      líneas), por ejemplo:
//        template: ` 
//          <h1>Hola, Bdeo</h1>
//        `, 
//
//   styleUrls -> Un array con la ruta o rutas a los arhivos CSS del componente.

//Sobre si es mejor definir el HTML fuera de este archivo o en éste mismo, depende de cada 
//  desarrollador.

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: []
})

export class ContadorComponent implements OnInit 
{
  //Las propiedades de la clase de un componente son accesibles directamente desde la plantilla
  //  con la notación de la doble llave propia de Angular {{ miPropiedad }}.
  public title: string = 'Hola, Bdeo!';
  public numb1: number = 10;
  public numb2: number = 6;

  //Si no se indica el nivel de acceso, por defecto es público:
  base: number = 5;


  //El constructor se ejecuta antes que el método OnInit(), aunque a ambos métodos se les llama en el 
  //  momento en que se lanza la aplicación. Es por esto que el constructor es un buen lugar para
  //  colocar código que se necesite ejecutar antes de que la aplicación se lance (como llamadas a
  //  servicios para obtener cierta info, etc)
  constructor() 
  { 
    console.log("Constructor");
  }

  ngOnInit(): void 
  {
    console.log("OnInit");
  }

  //La lógica del componente debe colocarse en el fichero .ts para que la plantilla sea clara e 
  //  intuitiva:
  acumular(valor: number): void
  {
    this.numb2 += valor;
  }
}
