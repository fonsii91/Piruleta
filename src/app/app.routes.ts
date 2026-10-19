import { Routes } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { ListaFrutas } from './components/lista-frutas/lista-frutas';

export const routes: Routes = [
{ path: '', component: Semaforo },
{ path: 'lista-frutas', component: ListaFrutas },
{ path: 'semaforo', component: Semaforo}
];
