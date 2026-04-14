import { Component, OnInit } from '@angular/core';
import { Album } from '../../../../interfaces/album';
import { AlbumService } from '../../../../servicios/AlbumService';
import { CarouselModule } from 'primeng/carousel';
import { AlbumViewComponent } from '../album-view/album-view.component';
import { RouterLink } from '@angular/router';
import { Temporada } from '../../../../interfaces/temporada';
import { TemporadaService } from '../../../../servicios/TemporadaService';

@Component({
  standalone: false,
  selector: 'app-album-carrousel-view',
  templateUrl: './album-carrousel-view.component.html',
  styleUrls: ['./album-carrousel-view.component.css']
})
export class AlbumCarrouselViewComponent implements OnInit {
  responsiveOptions: any;
  modelo: string = "Albumes";
  data: Album[] = [];
  albumes: Album[] = [];
  http: string = "https://localhost:7024/archivos/Albumes/";
  temporadaSelected: Temporada = {
    id: 0,
    nombre: '',
    inicio: '',
    fin: '',
    activo: false,
    fechaRegistro: '',
    source: ''
  }
  constructor(private AlbumService: AlbumService, private temporadaService: TemporadaService) {
    this.http = this.AlbumService.serverFile;
    this.GetTemporadaActiva();


  }
  ngOnInit(): void {
    

    this.responsiveOptions = [
      {
        breakpoint: '1800px',
        numVisible: 4,
        numScroll: 1
      },
        {
          breakpoint: '1500px',
          numVisible: 4,
          numScroll: 1
      },
      {
        breakpoint: '1200px',
        numVisible: 3,
        numScroll: 1
      },
      
      {
        breakpoint: '1000px',
        numVisible: 2,
        numScroll: 1
      },
        



        {
          breakpoint: '900px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '800px',
          numVisible: 2,
          numScroll: 1
      },

      {
        breakpoint: '700px',
        numVisible: 1,
        numScroll: 1
      },
        {
          breakpoint: '500px',
          numVisible: 1,
          numScroll: 1
      },
      {
        breakpoint: '250px',
        numVisible: 1,
        numScroll: 1
      },
     
      ];
    

    this.AlbumService.getAlbumesInicio().subscribe((data) => {
        //this.albumes = data;
      this.albumes = data.value as Album[];
      this.albumes.forEach(item => {

        item.portada = this.http + '/' + this.temporadaSelected.nombre + '/' + this.modelo + '/' + item.idAlbum + '/' + item.portada;
      })
        

      });

    for (let i = 0; i < 3; i++) {
      this.data.push(this.albumes[i]);
    }
  }

  GetTemporadaActiva() {
    this.temporadaService.getTemporadaActiva().subscribe(data => {

      if (data.status == true) {
        this.temporadaSelected = data.value;

        console.log(this.temporadaSelected);

      }
      else {

      }

    });
  }

  


}
