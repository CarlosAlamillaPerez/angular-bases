import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  
  public nombre_heroe: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América']
  public _deleteHeroe?: string

  deleteHeroe(): void {
    this._deleteHeroe = this.nombre_heroe.pop();
  }
}
