import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainPageComponent } from './pages/main-page.components';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListaPersonajesComponent,
    AddPersonajeComponent
  ],
  exports: [DbzMainPageComponent],
  imports: [CommonModule, FormsModule]
})
export class DbzModule {}
