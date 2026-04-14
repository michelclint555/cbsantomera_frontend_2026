import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitadoRoutingModule } from './invitado-routing.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ImageModule } from 'primeng/image';

import { HttpClientModule } from '@angular/common/http';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { EmpresasComponent } from './empresas/empresas.component';
//import { UneteComponent } from './unete/unete.component';
import { ContactaComponent } from './club/contacta/contacta.component';
import { HistoriaComponent } from './club/historia/historia.component';
import { PortadaComponent } from './club/portada/portada.component';
import { ValoresComponent } from './club/valores/valores.component';
import { ButtonModule } from 'primeng/button';
import { ToggleButton } from 'primeng/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrawerModule } from 'primeng/drawer';
import { AsideComponent } from './aside/aside.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AvatarModule } from 'primeng/avatar';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ServiceScriptService } from '../ServiceScript/service-script.service';

import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { CalendarioComponent } from './calendario/calendario.component';
import { CanteraComponent } from './cantera/cantera.component';
import { AlbumCarrouselViewComponent } from './Componentes/Album/album-carrousel-view/album-carrousel-view.component';

import { MultimediaComponent } from './multimedia/MultimediaComponent';
import { ToolbarModule } from 'primeng/toolbar';
import { SelectModule } from 'primeng/select';
import { DropdownModule } from 'primeng/dropdown';
import { NovedadesComponent } from './novedades/novedades.component';
import { PrincipioComponent } from './principio/principio.component';
import { EquipoComponent } from './equipo/equipo.component';
import { NoticiasComponent } from './noticias/noticias.component';

import { CarouselModule } from 'primeng/carousel';

import { Plantilla2Component } from './equipo/plantilla/plantilla2.component';
import { PlantillaComponent } from './cantera/plantilla/plantilla.component';
import { CardModule } from 'primeng/card';
import { JugadorViewInvitadoComponent } from './Componentes/jugador-view-invitado/jugador-view-invitado.component';
import { CuerpoTecnicoViewInvitadoComponent } from './Componentes/cuerpo-tecnico-view-invitado/cuerpo-tecnico-view-invitado.component';
import { AlbumViewComponent } from './Componentes/Album/album-view/album-view.component';

import { ClubComponent } from './club/club.component';
import { CalendarModule } from 'primeng/calendar';
import { GalleriaModule } from 'primeng/galleria';
import { FotosAlbumComponent } from './multimedia/fotos-album/fotos-album.component';
import { UneteComponent } from './unete/unete.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { CabeceraTituloComponent } from './Componentes/cabecera-titulo/cabecera-titulo.component';
import { EmpresaPatrociniosComponent } from './empresas/empresa-patrocinios/empresa-patrocinios.component';
import { ContratoEmpresaService } from '../servicios/ContratoEmpresaService';
import { NovedadService } from '../servicios/NovedadService';
import { TemporadaService } from '../servicios/TemporadaService';
import { AlbumService } from '../servicios/AlbumService';
import { NoticiasService } from '../servicios/NoticiasService';
import { AuthServiceService } from '../servicios/auth-service.service';
import { UsuarioService } from '../servicios/UsuarioService';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { Cabeceratitulo2Component } from './Componentes/cabeceratitulo2/cabeceratitulo2.component';


import { ResultadosCarouselComponent } from './Componentes/Partidos/resultados-carousel/resultados-carousel.component';
import { ResultadoViewComponent } from './Componentes/Partidos/resultado-view/resultado-view.component';
import { PartidoView2Component } from './Componentes/Partidos/partido-view2/partido-view2.component';
import { PartidoCarrouselComponent } from './Componentes/Partidos/partido-carrousel/partido-carrousel.component';
import { ComponentesModule } from './shared/componentes/componentes.module';
import { JugadorViewComponent } from './shared/componentes/jugador-view/jugador-view.component';
import { NoticiasCarrouselComponent } from './shared/componentes/Noticias/noticias-carrousel/noticias-carrousel.component';
import { UnaNoticiaComponent } from './noticias/una-noticia/una-noticia.component';

// 👇 Importar y registrar el locale español
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ClasificacionCortaComponent } from './Componentes/Clasificacion/Clasificacion-Corta/clasificacion-corta/clasificacion-corta.component';
import { TableModule } from 'primeng/table';
import { EmpresaService } from '../servicios/EmpresaService';
import { JugadorView2Component } from './Componentes/Jugador/jugador-view2/jugador-view2.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
    PatrocinadoresComponent,
    InicioComponent,
    EmpresasComponent,
    UneteComponent,
    ContactaComponent,
    HistoriaComponent,
    PortadaComponent,
    ValoresComponent,
    AsideComponent,
    ChatbotComponent,
    CanteraComponent,
    MultimediaComponent,
    AlbumCarrouselViewComponent,
   UnaNoticiaComponent,
    CalendarioComponent,
    NoticiasComponent,
    NovedadesComponent,
    PrincipioComponent,
    EquipoComponent,
  
    AlbumViewComponent,
   ClubComponent,
    Plantilla2Component,
    PlantillaComponent,
    JugadorViewInvitadoComponent,
    CuerpoTecnicoViewInvitadoComponent,
   FotosAlbumComponent,
    CabeceraTituloComponent,
    EmpresaPatrociniosComponent,
    LoginComponent,
    Cabeceratitulo2Component,
    
    ClasificacionCortaComponent,
    ResultadosCarouselComponent,
    ResultadoViewComponent,
    PartidoView2Component,
    PartidoCarrouselComponent,
    JugadorView2Component,
    JugadorView2Component
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    InvitadoRoutingModule, CalendarModule,
    HttpClientModule,
    //PrimeNGModule,
    ImageModule,
    ButtonModule,
    ToggleButton,
    FormsModule,
    DrawerModule,
    PanelMenuModule,
    ScrollPanelModule,
    AvatarModule,
    TabViewModule,
    PanelMenuModule,
    ToolbarModule,
    DropdownModule,
    SelectModule,
    CarouselModule,
    CardModule,
    TabViewModule,
    GalleriaModule,
    TabViewModule,
    PanelModule,
    TabMenuModule,
    ComponentesModule,
    ReactiveFormsModule,
    TableModule
    //RouterModule,W
   
  ],
  exports: [
    //InicioComponent
    CabeceraTituloComponent,

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, ContratoEmpresaService, EmpresaService, ServiceScriptService, NovedadService, NoticiasService, AlbumService, TemporadaService, UsuarioService, AuthServiceService]
})
export class InvitadoModule { }
