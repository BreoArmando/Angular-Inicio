import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        //SE DECLARAN LOS COMPONENTES QUE CONCIERNEN A ESTE MÓDULO:
        //HeroeComponent,
        ListadoComponent
    ],
    exports:[
        //SE EXPORTAN LOS MÓDULOS QUE HAN DE UTILIZARSE EN OTROS COMPONENTES:
        ListadoComponent
    ],
    imports:[
        //Permite el uso de directivas como *ngIf o *ngFor
        CommonModule
    ]
})
export class HeroesModule {}