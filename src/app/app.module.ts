//Según la guía de estilos de Angular, en el bloque de importaciones deben colocarse primero las del propio
//  marco de trabajo:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//En segundo lugar, si procede, irían las importaciones de terceros.

//Y en tercer y último lugar, las importaciones de módulos, clases o cualquier otro elemento de dentro de la
//  aplicación:
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    //ListadoComponent
    //Si se crean más componentes, se deben importar y añadir aquí. Sin embargo, dado que las aplicaciones pueden
    //  crecer hasta ser enormes, no se suele gestionar todo desde el app.module, sino que se tiene un módulo por
    //  cada grupo de módulos de temática relacionada. Así se atomiza la aplicación y se evita, en una aplicación
    //  de 100 componentes, tener 100 líneas para sus declaraciones y otras 100 para los imports...
  ],
  imports: [
    //Lo que se hace sencillamente en vez de declarar los 100 componentes en el array declarations, es importar aquí
    //  los módulos que contienen esos componentes.
    BrowserModule,
    ContadorModule,
    DbzModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
