import { Component } from "@angular/core";

@Component({
    selector: "app-listado",
    templateUrl: "listado.component.html",
    styleUrls: []
})

export class ListadoComponent
{
    heroes: string[];
    heroeExtraido: string | undefined;

    constructor()
    {
        this.heroes = ["Hulk", "Capitana Marvel", "Iron Man", "Ant Man"];
        this.heroeExtraido = "";
    }

    borrarHeroe(): string | undefined
    {
        return this.heroes.shift();

        //Para evitar que los tipos de retorno sean string o undefined (lo cual no es muy apropiado), se puede 
        //  recurrir al cortocircuito de operadores:
        //return this.heroes.shift() || "";  //Así, si la primera sección devuelve un valor falso, salta a la siguiente
    }

    recuperaElemento(): void
    {
        this.heroeExtraido = this.borrarHeroe();
    }
}