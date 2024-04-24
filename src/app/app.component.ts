import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string= 'Ejercicios';
  contador: number = 10;

  incrementar(N: number): void {
    this.contador += N;
  }
  decrementar(N: number): void {
    this.contador -= N;
  }
  reset(): void {
    this.contador = 10;
  }
}
