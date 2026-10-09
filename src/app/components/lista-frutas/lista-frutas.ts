import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista-frutas',
  styleUrl: './lista-frutas.css',
  templateUrl: './lista-frutas.html',
})
export class ListaFrutas {


  // nombre_frutas:string[]=["naranja", "pera", "fresa", "melón", "manzana"];

  frutas:Fruta[]=[new Fruta("naranja", false), new Fruta("uvas", true), new Fruta("melón", false),new Fruta("pera", true),new Fruta("fresas", false)];

  

}
class Fruta{

  nombre:string;
  like:boolean;

  constructor(n:string, l:boolean){
    this.nombre=n;
    this.like=l;
  }

}