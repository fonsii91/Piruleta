import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { Saludo } from '../../services/saludo';


@Component({
  imports: [MatToolbarModule, RouterLink],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html',
})
export class NavBar {
  
private router = inject(Router);
servicioSaludo = inject(Saludo);


  lista(){
   
    this.router.navigate(['/lista-frutas']);
  }


}
