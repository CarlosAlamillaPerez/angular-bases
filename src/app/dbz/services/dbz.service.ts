import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as _id} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
    
    obj_personaje: Personaje[] = [
        {
            id: _id(),
            nombre: 'Krillin',
            poder: 1500
        },
        {
            id: _id(),
            nombre: 'Goku',
            poder: 9500
        }
    ]

    get_AddPersonaje(personaje: Personaje):void{
        this.obj_personaje.push(personaje)
    }
    get_DeletePersonaje(id_personaje: string){
        this.obj_personaje = this.obj_personaje.filter( obj_personaje => obj_personaje.id !== id_personaje)
    }
    
}