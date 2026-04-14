import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../../servicios/AlbumService';
import { NoticiasService } from '../../../servicios/NoticiasService';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent {

  constructor(private noticiasService: NoticiasService, private route: ActivatedRoute) {

  }
}
