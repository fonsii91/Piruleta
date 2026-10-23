import { Routes } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { ListaFrutas } from './components/lista-frutas/lista-frutas';
import { FormularioHalloween } from './components/formulario-halloween/formulario-halloween';
import { Padre } from './components/padre/padre';

export const routes: Routes = [
    
{ path: '', component: Semaforo },
{ path: 'formulario-halloween', component: FormularioHalloween },
{ path: 'lista-frutas', component: ListaFrutas },
{ path: 'semaforo', component: Semaforo},
{ path: 'padre', component: Padre},
{ path: '**', component: ListaFrutas}, 

];
