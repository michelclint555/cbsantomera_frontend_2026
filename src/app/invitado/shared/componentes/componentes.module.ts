import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AlbumViewComponent } from './album-view/album-view.component';
//import { NoticiaViewComponent } from './noticia-view/noticia-view.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { UnaNoticiaTipo1Component } from './Noticias/una-noticia-tipo1/una-noticia-tipo1.component';
import { UnaNoticiaTipo2Component } from './Noticias/una-noticia-tipo2/una-noticia-tipo2.component';
import { UnaNoticiaTipo3Component } from './Noticias/una-noticia-tipo3/una-noticia-tipo3.component';
import { JugadorViewComponent } from './Jugador/jugador-view/jugador-view.component';
import { EquipoViewComponent } from './Equipo/equipo-view/equipo-view.component';
import { NoticiaViewComponent } from './Noticias/noticia-view/noticia-view.component';
import { NoticiasCarrouselComponent } from './Noticias/noticias-carrousel/noticias-carrousel.component';
import { CarouselModule } from 'primeng/carousel';
import { NoticiaView2Component } from './Noticias/noticia-view2/noticia-view2.component';
import { RouterModule } from '@angular/router';
import { UnaNoticiaComponent } from '../../noticias/una-noticia/una-noticia.component';


@NgModule({
  declarations: [
   // AlbumViewComponent,
    NoticiaViewComponent,
    //JugadorViewComponent,
    
   // EquipoViewComponent,
    UnaNoticiaTipo1Component,
    UnaNoticiaTipo2Component,
    UnaNoticiaTipo3Component,
    NoticiaViewComponent,
    NoticiasCarrouselComponent,
    NoticiaView2Component
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ImageModule,
    CarouselModule,
    RouterModule

  ],
  
  exports: [
    //AlbumViewComponent,
    NoticiasCarrouselComponent,
    UnaNoticiaTipo1Component,
    UnaNoticiaTipo2Component

   
  ]
})
export class ComponentesModule { }
