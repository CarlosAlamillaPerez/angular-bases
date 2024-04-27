import { Personaje } from './../../interfaces/personaje.interface';
import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

  public personaje: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output()
  public emit_NewPersonaje:EventEmitter<Personaje> = new EventEmitter();

  public emit_form():void{
    console.log(this.personaje)
    if ( this.personaje.nombre.length === 0) return;

    this.emit_NewPersonaje.emit(this.personaje)
    this.personaje = {nombre: "", poder: 0}
  }
}
