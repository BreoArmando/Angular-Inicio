import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

//Los servicios inicializan una sola instancia que se utilizará en la aplicación al estilo de 
//  un patrón Singleton.
//Este servicio se puede inyectar en el constructor de cualquier componente, pero eso no quiere
//  decir que se inicializa en cada uno de ellos, sino que se utiliza el primero que se cree en
//  el resto.
//Los servicios se pueden inyectar en otros servicios (esto requiere cuidado, ya que se pueden 
//  producir dependencias cíclicas).

//Normalmente, el orden es el siguiente:
//  1. Propiedades.
//  2. Getters y setters.
//  3. Constructor.
//  4. Métodos.

@Injectable()
export class DbzService
{
    private _personajes: Personaje[] = 
    [
        {
            nombre: "Goku",
            poder: 15000
        },
        {
            nombre: "Vegeta",
            poder: 8500
        }
    ];

    //Se utiliza el spread operator para romper la referencia del array privado _personajes, de forma
    //  forma que el que se recupera realmente al llamar al get es uno nuevo.
    get personajes(): Personaje[] 
    {
        //El spread operator (...) divide el array en sus elementos, y con las llaves [] se crea un nuevo
        //  array con esos elementos, el cual es el que se devuelve. Así se rompe la referencia al array
        //  que es la propiedad de la clase
        return [...this._personajes];
    }

    
    constructor()
    {
        console.log("Servicio inicializado.");
    }

    //Cuando se añade un nuevo personaje al array, el getter se actualiza con él mostrando actualizado el
    //  arreglo allá donde se utilice:
    agregarPersonaje(nuevoPersonaje: Personaje): void
    {
        this._personajes.push(nuevoPersonaje);
    }
}