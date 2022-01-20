import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        
    ],
    imports: [
        //En este módulo no haría falta importar CommonModule porque no se utilizan directivas de Angular
        //  que requieran esta importación (como *ngIf o *ngFor):
        //CommonModule
    ]
})
export class ContadorModule {}