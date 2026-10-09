import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista-frutas',
  styleUrl: './lista-frutas.css',
  templateUrl: './lista-frutas.html',
})
export class ListaFrutas {


  // nombre_frutas:string[]=["naranja", "pera", "fresa", "melón", "manzana"];

  frutas:Fruta[]=[new Fruta("naranja", false, "/images/naranja.PNG"), new Fruta("uvas", true, "/images/uvas.PNG"), new Fruta("melón", false, "/images/melon.PNG"),new Fruta("pera", true, "/images/naranja.PNG"),new Fruta("fresas", false, "/images/naranja.PNG")];

  

}
class Fruta{

  nombre:string;
  like:boolean;
  imagen:string;


  constructor(n:string, l:boolean, s:string){
    this.nombre=n;
    this.like=l;
    this.imagen=s;
    }

}