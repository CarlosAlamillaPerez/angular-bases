import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
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
