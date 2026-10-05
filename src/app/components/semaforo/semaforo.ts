import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {

  contador = signal(0);
  colorin = signal("red");
  repeticiones = [1, 1, 1, 1, 1,1, 1, 1, 1];



  incrementar(){
    this.contador.update(valor => valor + 1);
    this.revisarColor();
  }

  decrementar(){
    this.contador.update(valor => valor - 1);
    this.revisarColor();
  }

  resetear(){
    this.contador.set(0);
    this.revisarColor();
  }

  revisarColor(){
    if(this.contador()>=0){
      this.colorin.set("green");
    }else{
      this.colorin.set("red");
    }
  }



}
