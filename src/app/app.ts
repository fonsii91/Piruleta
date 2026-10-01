import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';

@Component({
  imports: [RouterOutlet, Semaforo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Piruleta');
}
