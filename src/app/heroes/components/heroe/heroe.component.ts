import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre: string = 'ironman'
  public edad: number = 45

  get capitalizado():string {
    return this.nombre.toUpperCase();
  }
  getdescripcion():string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiar_nombre(): void{
    this.nombre = 'Hulk'
  }

  cambiar_edad(): void{
    this.edad = 21
  }
}
