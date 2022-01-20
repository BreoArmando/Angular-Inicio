import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    //ListadoComponent
    //Si se crean más componentes, se deben importar y añadir aquí. Sin embargo, dado que las aplicaciones pueden
    //  crecer hasta ser enormes, no se suele gestionar todo desde el app.module, sino que se tiene un módulo por
    //  cada grupo de módulos de temática relacionada. Así se atomiza la aplicación y se evita, en una aplicación
    //  de 100 componentes, tener 100 líneas para sus declaraciones y otras 100 para los imports...
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    //Lo que se hace sencillamente en vez de declarar los 100 componentes en el array declarations, es importar aquí
    //  los módulos que contienen esos componentes.
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
