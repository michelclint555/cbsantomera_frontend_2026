import { Component, Input } from '@angular/core';
import { Noticia } from '../../../../../interfaces/INoticia';
import { NoticiasService } from '../../../../../servicios/NoticiasService';


@Component({
  
  selector: 'app-noticia-view2',
  templateUrl: './noticia-view2.component.html',
  styleUrls: ['./noticia-view2.component.css'],
  standalone: false,
})
export class NoticiaView2Component {
  http: string = "";
  baseUrl = "";
 
 @Input()  noticia: Noticia = {
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
