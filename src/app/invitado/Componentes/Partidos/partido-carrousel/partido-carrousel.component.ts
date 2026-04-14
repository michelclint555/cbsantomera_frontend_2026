import { Component } from '@angular/core';
import { Album } from '../../../../interfaces/album';
import { TemporadaService } from '../../../../servicios/TemporadaService';
import { Temporada } from '../../../../interfaces/temporada';
import { AlbumService } from '../../../../servicios/AlbumService';

@Component({
  selector: 'app-partido-carrousel',
  standalone: false,
  templateUrl: './partido-carrousel.component.html',
  styleUrl: './partido-carrousel.component.css'
})
export class PartidoCarrouselComponent {
  responsiveOptions: any;
  titulo1: string = "Próximos Partidos";
  titulo2: string = "Últimos Resultados";

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
  };

  change$: any;



  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1440px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '1300px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '1200px',
        numVisible: 1,
        numScroll: 1
      },

      {
        breakpoint: '840px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      }
    ];


  }


  getSliderClass(isFirst: any, isLast: any, isEven: any, isOdd: any) {
    return {
      active: isFirst,
      lastactive: isLast,
      even: isEven,
      odd: isOdd
    }
  }
  clasificacion =

    [
      {
        nombre: "ECONEX C.B. SANTOMERA",
        pj: 14,
        pg: 12,
        pp: 2,
        pf: 1122,
        pc: 872,
        puntos: 26,
        ultimos: ["V", "D", "V", "V", "V"]


      },
      {
        nombre: "C.B. LUMBRERAS",
        pj: 14,
        pg: 12,
        pp: 2,
        pf: 1206,
        pc: 1032,
        puntos: 26,
        ultimos: ["V", "D", "V", "V", "V"]


      },
      {
        nombre: "CLUB DEPORTIVO PUERTO DE MAZARRON FUTBOL SALA",
        pj: 14,
        pg: 12,
        pp: 2,
        pf: 1122,
        pc: 872,
        puntos: 24,
        ultimos: ["V", "D", "V", "V", "V"]


      },
      {
        nombre: "C.B. ÁGUILAS",
        pj: 14,
        pg: 12,
        pp: 2,
        pf: 1122,
        pc: 872,
        puntos: 22,
        ultimos: ["V", "D", "V", "V", "V"]


      },
      {
        nombre: "CIKY ORO EL ALGAR",
        pj: 14,
        pg: 12,
        pp: 2,
        pf: 1122,
        pc: 872,
        puntos: 19,
        ultimos: ["V", "D", "V", "V", "V"]


      },
      {
        nombre: "CIKY ORO C.B. SIERRAMAR",
        pj: 14,
        pg: 12,
        pp: 2,
        pf: 1122,
        pc: 872,
        puntos: 18,
        ultimos: ["V", "D", "V", "V", "V"]


      },
      {
        nombre: "GARGIL SUMINISTROS MB",
        pj: 14,
        pg: 12,
        pp: 2,
        pf: 1122,
        pc: 872,
        puntos: 18,
        ultimos: ["V", "D", "V", "V", "V"]


      },
      {
        nombre: "CB. MOLINA WOLVES",
        pj: 14,
        pg: 12,
        pp: 2,
        pf: 1122,
        pc: 872,
        puntos: 15,
        ultimos: ["V", "D", "V", "V", "V"]


      }


    ];
  currentIndex: number = 0;
  isReady: boolean = false;

  constructor(private AlbumService: AlbumService, private temporadaService: TemporadaService) {

    this.cargarAlbumes()


    for (let i = 0; i < 3; i++) {
      this.data.push(this.albumes[i]);
    }
    console.log(this.data);
  }


  cargarAlbumes() {
    console.log(this.temporadaSelected);
    this.AlbumService.getAlbumes(this.temporadaSelected.nombre).subscribe((data) => {
      //this.albumes = data;
      this.albumes = data.value as Album[];


    });

  }
  GetTemporadaActiva() {
    this.temporadaService.getTemporadaActiva().subscribe(data => {

      if (data.status == true) {
        this.temporadaSelected = data.value;
        this.isReady = true;
        console.log(this.temporadaSelected);
        this.cargarAlbumes();
      }
      else {
      }

    });
  }
}
