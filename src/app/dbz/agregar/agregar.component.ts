import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: []
})
export class AgregarComponent
{
  @Input() heroe: Personaje = 
  {
    nombre: "",
    poder: 0
  };

  // @Output() onNuevoHeroe: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  // @Input() personajes: Personaje[] = [];


  constructor(private dbzService: DbzService) {}

  agregaPersonaje()
  {
    if (!this.heroe.nombre.trim().length)
    {
      return;
    }

    console.log(this.dbzService.personajes);

    // this.onNuevoHeroe.emit(this.heroe);
    this.dbzService.agregarPersonaje(this.heroe);    

    console.log(this.dbzService.personajes);

    this.heroe = 
    {
      nombre: "",
      poder: 0
    }
  }

  enviaForm(event: any) {}
}
