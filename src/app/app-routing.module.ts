import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './invitado/inicio/inicio.component';
import { PrincipioComponent } from './invitado/principio/principio.component';
import { NoticiasComponent } from './invitado/noticias/noticias.component';
import { ClubComponent } from './invitado/club/club.component';
import { MultimediaComponent } from './invitado/multimedia/MultimediaComponent';
import { EquipoComponent } from './invitado/equipo/equipo.component';
import { CanteraComponent } from './invitado/cantera/cantera.component';
import { LoginComponent } from './invitado/login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CalendarioComponent } from './invitado/calendario/calendario.component';

import { EmpresasComponent } from './invitado/empresas/empresas.component';
//import { UneteComponent } from './invitado/unete/unete.component';
import { ContactaComponent } from './invitado/club/contacta/contacta.component';
import { PortadaComponent } from './invitado/club/portada/portada.component';
import { PatrocinadoresComponent } from './invitado/club/patrocinadores/patrocinadores.component';
import { ValoresComponent } from './invitado/club/valores/valores.component';
import { HistoriaComponent } from './invitado/club/historia/historia.component';

import { UnaNoticiaComponent } from './invitado/noticias/una-noticia/una-noticia.component';
import { PlantillaComponent } from './invitado/cantera/plantilla/plantilla.component';
import { FotosAlbumComponent } from './invitado/multimedia/fotos-album/fotos-album.component';
import { UneteComponent } from './invitado/unete/unete.component';
import { EmpresaPatrociniosComponent } from './invitado/empresas/empresa-patrocinios/empresa-patrocinios.component';
import { JugadoresUsuarioComponent } from './usuarios/jugadores-usuario/jugadores-usuario.component';
import { EquiposUsuarioComponent } from './usuarios/equipos-usuario/equipos-usuario.component';
import { ChangeclaveComponent } from './usuarios/changeclave/changeclave.component';

const routes: Routes = [
  {
    path: 'App',
    component: UsuariosComponent,
    children: [
      { path: 'mis-jugadores', component: JugadoresUsuarioComponent },
      { path: 'mis-equipos', component: EquiposUsuarioComponent },
       { path: 'cambiar-clave', component: ChangeclaveComponent }
    ]
  },
     /* { path: 'mis-jugadores', component: JugadoresUsuarioComponent },

      { path: 'mis-equipos', component: EquiposUsuarioComponent },*/






  {
    path:'', redirectTo:'Inicio', pathMatch:'full'
  },
  {
    path: '', component: InicioComponent, children: [
      { path: 'Inicio', component: PrincipioComponent },
      {
        path: 'Club', component: ClubComponent
      },
      {
        path: 'Club', component: ClubComponent, children: [


          { path: 'Contacto', component: ContactaComponent },

          { path: 'Historia', component: HistoriaComponent },
          { path: 'Portada', component: PortadaComponent },
          { path: 'Patrocinadores', component: PatrocinadoresComponent },
          { path: 'Valores', component: ValoresComponent },
          { path: '', redirectTo: 'Portada', pathMatch: 'full' }


        ]
      },
      { path: 'Noticias', component: NoticiasComponent },



          { path: 'Noticias/:id', component: UnaNoticiaComponent },






      { path: 'Galeria', component: MultimediaComponent },
      {
        path: 'Galeria/:id', component: FotosAlbumComponent      },
      { path: 'Equipo', component: EquipoComponent },
      { path: 'Cantera', component: CanteraComponent },

      {
        path: 'Cantera/:id', component: PlantillaComponent
      },


      { path: 'Login', component: LoginComponent },
    //  { path: 'Calendario', component: CalendarioComponent },
      { path: 'Empresas', component: EmpresasComponent },
      { path: 'Empresas/:id', component: EmpresaPatrociniosComponent },

      //{ path: 'Unete', component: UneteComponent },


    ]
  },




      /*{ path: 'Club', component: ClubComponent },
      { path: 'Noticias', component: NoticiasComponent },
      { path: 'Multimedia', component: MultimediaComponent },
      { path: 'Equipo', component: EquipoComponent },
      { path: 'Cantera', component: CanteraComponent },

      { path: 'Login', component: LoginComponent },*/



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
