import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { v4 as _id} from 'uuid'

@Component({
  selector: 'dbz-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css',
})
export class ListaPersonajesComponent {

  @Input()
  public List_Personajes: Personaje[] = [
    {
      id: _id(),
      nombre: '',
      poder: 0,
    },
  ];

  @Output()
  public set_DeletePersonaje:EventEmitter<string> = new EventEmitter();

  emit_DeletePersonaje(id_personaje: string):void{
    this.set_DeletePersonaje.emit(id_personaje)
  }
}
