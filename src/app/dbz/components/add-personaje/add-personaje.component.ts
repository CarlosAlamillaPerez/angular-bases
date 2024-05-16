import { Personaje } from './../../interfaces/personaje.interface';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { v4 as _id} from 'uuid'

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

  public personaje: Personaje = {
    id: _id(),
    nombre: '',
    poder: 0
  }

  @Output()
  public set_AddPersonaje:EventEmitter<Personaje> = new EventEmitter();

  public emit_AddPersonaje():void{
    if ( this.personaje.nombre.length === 0) return;

    this.set_AddPersonaje.emit(this.personaje)

    this.personaje = {id: _id(),nombre: "", poder: 0}
  }
}
