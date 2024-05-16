import { Personaje } from './../interfaces/personaje.interface';
import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dbz-main-page',
    templateUrl: './main-page.components.html',
})
export class DbzMainPageComponent {

    constructor(private _DbzService: DbzService){}

    get ObjPersonaje(): Personaje[]{
        return [...this._DbzService.obj_personaje];
    }

    get_DeletePersonaje(id_personaje:string):void{
        this._DbzService.get_DeletePersonaje(id_personaje)
    }
    get_AddPersonaje(personaje: Personaje):void{
        this._DbzService.get_AddPersonaje(personaje)
    }
}
