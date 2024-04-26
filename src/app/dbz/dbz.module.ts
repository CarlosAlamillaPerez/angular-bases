import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainPageComponent } from './pages/main-page.components';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';



@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListaPersonajesComponent,
    AddPersonajeComponent
  ],
  exports: [
    DbzMainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
