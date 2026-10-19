import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { ListaFrutas } from './components/lista-frutas/lista-frutas';
import { NavBar } from './components/nav-bar/nav-bar';

@Component({
  imports: [RouterOutlet, Semaforo, ListaFrutas, NavBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Piruleta');
}
