import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from '../../../interfaces/equipo';
import { EquipoService } from '../../../servicios/EquipoService';
import { JugadorService } from '../../../servicios/JugadorService';
import { Jugador } from '../../../interfaces/jugador';
import { FotoJugadorEquipo, JugadorEquipo } from '../../../interfaces/JugadorEquipo';
import { Temporada } from '../../../interfaces/temporada';
import { TemporadaService } from '../../../servicios/TemporadaService';
import { EmpresaService } from '../../../servicios/EmpresaService';



@Component({
  standalone: false,
  selector: 'app-plantilla2',

  templateUrl: './plantilla2.component.html',
  styleUrls: ['./plantilla2.component.css'],

})
export class Plantilla2Component {
  tam: number = 10;
  titulo: string = "";
  URLFiles: string = "";
  id: string | null = '';
  equipo: Equipo = {
    idEquipo: 0,
    nombre: '',
    idClub: 0,
    jugadores: [],
    idCategoriaJugador: 0,
    foto: '',
    categoria: {
      id: 0,
      nombre: '',
      EsActivo: false,
      sexo: '',
      PrimerAnio: 0,
      SegundoAnio: 0
    },
    tecnicos: []
  };

  fotoJugador: FotoJugadorEquipo = {
    id: '',
    idJugador: '',
    IdEquipo: 0,
    fecha: '',
    thumbnailImageSrc: '',
    urlFoto: null,
    foto: null,
    imagen: null,
    principal: false,
    secundaria: false
  }
  http: string = "";
  fotoEmpresa: string = "";
  nombreEmpresa: string = "";
  dontCallNgOnIt: boolean = true;

  activeIndex: number = 0;

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: "Jornada " + i + 1, content: "Content" }));
  temporadaSelected: Temporada = {
    id: 0,
    nombre: '',
    inicio: '',
    fin: '',
    activo: false,
    fechaRegistro: '',
    source: ''
  }
  constructor(private EquiposService: EquipoService, private ruta: Router, private route: ActivatedRoute, private jugadorService: JugadorService, private temporadaService: TemporadaService, private empresaService: EmpresaService) {
    this.URLFiles = this.EquiposService.serverFile;
    this.http = this.empresaService.serverFile;
    this.GetTemporadaActiva();   
   

    this.EquiposService.BuscarPrimerEquipo().subscribe(data => {
     
        //this.albumes = data;
      this.equipo = data.value;
      this.nombreEmpresa = data.value.patrocinador.empresa.nombre;
      this.fotoEmpresa = this.http + data.value.patrocinador.empresa.logo;
      this.titulo = this.equipo.nombre;
      this.equipo.foto = this.URLFiles + this.temporadaSelected.nombre + '/' + this.EquiposService.localFile + this.equipo.idEquipo + '/' + this.equipo.foto;
      this.ObtenerJugadores();
         console.log(this.equipo)

      });

      this.cargarTecnicosEquipo();

   

    

  }

  GetTemporadaActiva() {
    this.temporadaService.getTemporadaActiva().subscribe(data => {

      if (data.status == true) {
        this.temporadaSelected = data.value;
        //        console.log(this.temporadaSelected);
       
      }
      else {

      }

    });
  }

  cargarTecnicosEquipo() {
    this.EquiposService.getTodosTecnicosEquipo(Number(this.id)).subscribe(data => {

      if (data.status == true) {
       
        this.equipo.tecnicos = data.value;
        this.equipo.tecnicos.forEach((item) => {

          item.listaFotos[0].url = this.URLFiles + this.temporadaSelected.nombre + '/' + this.EquiposService.localFile + item.idEquipo + '/' + item.listaFotos[0].url;
          item.listaFotos[0].thumbnailImageSrc = this.URLFiles + item.idEquipo + '/' + item.listaFotos[0].thumbnailImageSrc;



          //console.log(this.equipo.tecnicos);//this.URLFiles = this.equipoService.serverFile;


        });
        console.log(data);//this.URLFiles = this.equipoService.serverFile;
      }




    });

  }
  ngOnInit(): void {

    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.style.display = 'none';
    }
   

  }

  ObtenerJugadores() {
    this.EquiposService.getTodosJugadoresEquipo(this.equipo.idEquipo).subscribe(data => {

      if (data.status == true) {
        this.equipo.jugadores = data.value;
        console.log(this.equipo.jugadores);
        console.log(this.equipo);
        this.equipo.jugadores.forEach((jugador) => {

          if (jugador.fotos[0] == undefined) {

            this.fotoJugador.urlFoto = this.URLFiles + 'ImageLocked.png';
            this.fotoJugador.thumbnailImageSrc = this.URLFiles + 'ImageLocked.png';
            this.fotoJugador.IdEquipo = this.equipo.idEquipo;
            jugador.fotos.push(this.fotoJugador);
          }
          else {

            jugador.fotos[0].urlFoto = this.URLFiles + this.temporadaSelected.nombre + '/' + this.EquiposService.localFile + this.equipo.idEquipo + '/' + jugador.fotos[0].foto;;
            jugador.fotos[0].thumbnailImageSrc = this.URLFiles + this.equipo.idEquipo + '/' + jugador.fotos[0].thumbnailImageSrc;

            jugador.fotos[0].IdEquipo = this.equipo.idEquipo;
          }

          if (jugador.fotos[1] == undefined) {

            this.fotoJugador.urlFoto = this.URLFiles + 'ImageLocked.png';
            this.fotoJugador.thumbnailImageSrc = this.URLFiles + 'ImageLocked.png';
            this.fotoJugador.IdEquipo = this.equipo.idEquipo;
            jugador.fotos.push(this.fotoJugador);
          }
          else {

            jugador.fotos[1].urlFoto = this.URLFiles + this.equipo.idEquipo + '/' + jugador.fotos[1].foto;
            jugador.fotos[1].thumbnailImageSrc = this.URLFiles + this.equipo.idEquipo + '/' + jugador.fotos[1].thumbnailImageSrc

            jugador.fotos[1].IdEquipo = this.equipo.idEquipo;
          }


        })


      }

      /* this.selectedJugadores.forEach((jugador) => {
 
         jugador.fotos.push("https://localhost:7024/archivos/Jugadores/898174175.png")
 
       })*/


    });
  }

  /* readFromParams() {
     if (this.route.snapshot.paramMap.get('id')?.toString() != null) {
 
       this.equipo.idEquipo = this.route.snapshot.paramMap.get('id')?.toString();
     }
   }*/
}
