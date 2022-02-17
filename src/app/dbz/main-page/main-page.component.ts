import { Component, OnInit } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit 
{
  heroe: Personaje =
  {
    nombre: "Trunks",
    poder: 14000,
    edad: 35
  }

  get personajes(): Personaje[]
  {
    return this.dbzService.personajes;
  }


  //Se inyecta el servicio en este componente (si no hay una instancia creada en la aplicación, se crea, pero si
  //  ya la hay, se utilizará esa en vez de crear otra, ya que los servicios en Angular imitan al patrón Singleton
  //  haciendo uso de una sola instancia del servicio en la aplicación):
  constructor(private dbzService: DbzService) { }

  ngOnInit(): void { }

  // agregaPersonaje(heroe: Personaje)
  // {
  //   if (!heroe.nombre.trim().length)
  //   {
  //     return;
  //   }

  //   this.personajes.push(heroe);
  // }

  cambiaPoder(event: any)
  {
    console.log(event.target.value);

  }

  enviaForm(event: any)
  {
    console.log(event);

    console.log("Con la librería FormsModule de Angular es posible evitar que al enviar un formulario se" +
    " recarge toda la página, lo cual no es atractivo para el usuario.");

    console.log("Todos los eventos en el lado del cliente reciben un parámetro llamado $event (el dólar " +
    "indica notación estricta) que contiene toda la información del evento que lo disparó (coordenadas " +
    "en las que se hizo click, elemento que se pulsó, etc). Ese $event es un objeto con acceso a diversos" +
    " métodos y propiedades.");
  }
}
