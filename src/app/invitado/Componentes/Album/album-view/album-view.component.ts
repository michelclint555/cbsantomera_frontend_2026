import { Component, Input } from '@angular/core';
import { Album } from '../../../../interfaces/album';
import { AlbumService } from '../../../../servicios/AlbumService';
import { RouterLink } from '@angular/router';
import { TemporadaService } from '../../../../servicios/TemporadaService';
import { platformBrowser } from '@angular/platform-browser';
import { Temporada } from '../../../../interfaces/temporada';

@Component({

  selector: 'app-album-view',
 
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css'],
  standalone: false
  
})
export class AlbumViewComponent {
  modelo: string = "Albumes";

  
  @Input() album: Album = {
      portada: '',
      nombre: '',
      idAlbum: 0,
      fecha: '',
      fotos: [],
      fotosAlbum: [],
      descripcion: '',
    temporada: {
        id: 0,
        nombre: '',
        inicio: '',
        fin: '',
        activo: false,
        fechaRegistro: '',
        source: ''
    }
  }

  http: string = "";

  constructor(private albumService: AlbumService, private temporadaService: TemporadaService) {
    

    
  }

 

}
