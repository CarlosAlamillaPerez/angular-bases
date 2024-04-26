import { NgModule } from "@angular/core";
import { HeroeComponent } from "./components/heroes/heroe/heroe.component";
import { ListaComponent } from "./components/heroes/lista/lista.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroeComponent,
        ListaComponent
    ],
    exports: [
        HeroeComponent,
        ListaComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}