import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ClubComponent } from './club/club.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MultimediaComponent } from './multimedia/MultimediaComponent';
import { EquipoComponent } from './equipo/equipo.component';
import { CanteraComponent } from './cantera/cantera.component';
import { LoginComponent } from './login/login.component';
import { PrincipioComponent } from './principio/principio.component';

const routes: Routes = [
  
  /*{ path: 'Home', component: PrincipioComponent },
  { path: 'Club', component: ClubComponent },
  { path: 'Noticias', component: NoticiasComponent },
  { path: 'Multimedia', component: MultimediaComponent },
  { path: 'Equipo', component: EquipoComponent },
  { path: 'Cantera', component: CanteraComponent },

  { path: 'Login', component: LoginComponent }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitadoRoutingModule { }
