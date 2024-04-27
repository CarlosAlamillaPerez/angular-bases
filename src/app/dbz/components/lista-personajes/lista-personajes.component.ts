import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css',
})
export class ListaPersonajesComponent {

  @Input()
  public ListaPersonajes: Personaje[] = [
    {
      nombre: '',
      poder: 0,
    },
  ];
}
