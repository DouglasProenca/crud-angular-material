import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component'
import { ConsultaComponent } from './consulta/consulta.component'
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
{ path: 'cadastro', component: CadastroComponent },
{ path: 'consulta', component: ConsultaComponent },
{ path: 'usuario', component: UsuarioComponent },
];
