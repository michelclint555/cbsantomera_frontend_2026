import { Component, Input } from '@angular/core';
import { NoticiasService } from '../../../../../servicios/NoticiasService';
import { Noticia } from '../../../../../interfaces/INoticia';

@Component({
 
  selector: 'app-una-noticia-tipo1',
  templateUrl: './una-noticia-tipo1.component.html',
  styleUrls: ['./una-noticia-tipo1.component.css'],
  standalone: false,
})
export class UnaNoticiaTipo1Component {
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
