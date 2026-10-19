import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario-halloween',
  styleUrl: './formulario-halloween.css',
  templateUrl: './formulario-halloween.html',
})
export class FormularioHalloween {

formularioHalloween = new FormGroup({
  nombre: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  edad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(200)])
})


  enviar(){

    console.log(this.formularioHalloween.value);
    console.log(this.formularioHalloween.get('email')?.value);
  }


}
