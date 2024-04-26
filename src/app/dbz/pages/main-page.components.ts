import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
    selector: 'dbz-main-page',
    templateUrl: './main-page.components.html'
})

export class DbzMainPageComponent  {
    
    personaje: Personaje[] = [
        {
            nombre: 'Krillin',
            poder: 1500
        },
        {
            nombre: 'Goku',
            poder: 9500
        }
    ]
}