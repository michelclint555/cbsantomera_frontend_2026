import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../../../../interfaces/INoticia';
import { NoticiasService } from '../../../../../servicios/NoticiasService';
//import * as moment from 'moment';


@Component({
 
  selector: 'app-noticia-view',
  templateUrl: './noticia-view.component.html',
  styleUrls: ['./noticia-view.component.css'],
  standalone: false,
})
export class NoticiaViewComponent  {

  http: string = "";
  baseUrl = "";

  @Input() noticia: Noticia = {
    idNoticia: 0,
    nuevo: false,
    titulo: '',
    subtitulo: '',
    tipoNoticia: '',
    fecha: '',
    portada: '',
    etiquetas: [],
    contenido: '',
    promocion: false,
    ThumbnailImageSrc: ''
  }

  constructor(private noticiasService: NoticiasService) {
    this.baseUrl = this.noticiasService.serverURL;
    this.http = this.noticiasService.serverFile;
  }

}


