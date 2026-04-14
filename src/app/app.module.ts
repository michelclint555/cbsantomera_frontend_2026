import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import Lara from '@primeuix/themes/lara';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { ButtonModule } from 'primeng/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { ThLargeIcon } from 'primeng/icons';
import { InvitadoModule } from './invitado/invitado.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContratoEmpresaService } from './servicios/ContratoEmpresaService';
import { JugadorService } from './servicios/JugadorService';
import { EquipoService } from './servicios/EquipoService';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { Ripple } from 'primeng/ripple';
import { StyleClass } from 'primeng/styleclass';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { JugadoresUsuarioComponent } from './usuarios/jugadores-usuario/jugadores-usuario.component';
import { EquiposUsuarioComponent } from './usuarios/equipos-usuario/equipos-usuario.component';
import { ChangeclaveComponent } from './usuarios/changeclave/changeclave.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ComponentesModule } from './invitado/shared/componentes/componentes.module';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    JugadoresUsuarioComponent,
    EquiposUsuarioComponent,
    ChangeclaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNGModule,
    ButtonModule,

    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    DrawerModule,
    AvatarModule,
    DrawerModule, ButtonModule, Ripple, AvatarModule,
    SidebarModule,
    InvitadoModule


  ],
  providers: [
    ContratoEmpresaService,
    JugadorService,
    EquipoService,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Lara

      },
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
