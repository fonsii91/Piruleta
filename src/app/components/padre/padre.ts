import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {


  textoRecibido:string="aun no se ha cominicado con nosotros ninguno de los hijos";
  patata=0;
  manejarEvento(texto:string){
    this.textoRecibido=texto;
  }



}
