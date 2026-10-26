import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo {

   mensaje = input('');

   notificar = output<string>();




   hablarPadre(){
    this.notificar.emit('Mensaje desde el hijo');
   }


}
