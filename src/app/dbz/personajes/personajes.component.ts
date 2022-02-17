import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: []
})
export class PersonajesComponent
{
  //El decorador Input indica que esa propiedad vendrá del componente padre. Para ello, en el
  //  .html del componente padre hay que enviar esa propiedad como atributo del selector de la
  //  plantilla (ver main-page.component.html).
  //Si se quisiera cambiar utilizar otro nombre para esa propiedad en este componente, habría que
  //  indicarlo como argumento del decorador, y recordar utilizar ese nuevo nombre allá donde se
  //  requiera, en lugar del nombre de la propiedad en el componente padre, sería algo así:
  //    @Input('nuevoNombre') personajes: Personaje[] = [];
  //Otro apunte es que, aunque aquí se defina como un array vacío, en realidad tomará los valores
  //  que tenga la propiedad en el componente padre.
  //@Input() personajes: Personaje[] = [];

  //Se recuperan los personajes del servicio (recuerda que no es realmente el mismo array de personajes,
  //  sino que se trata de otro con otra referencia (en el get del servicio se usa el spread operator
  //  para romper esa referencia))
  get personajes(): Personaje[]
  {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}
}
