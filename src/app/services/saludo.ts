import { Service, signal } from '@angular/core';

@Service()
export class Saludo {

    nombre = signal("nombreBasico"); 

    setNombre(n:any){
        this.nombre.set(n);
    }

    getNombre(){
        return this.nombre();
    }

    saludar():string{
        return "Hola, que tal estás!";
    }

}
