import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Equipo } from '../../../interfaces/equipo';
import { EquipoService } from '../../../servicios/EquipoService';
import { JugadorService } from '../../../servicios/JugadorService';
import { FotoJugadorEquipo } from '../../../interfaces/JugadorEquipo';
import { Temporada } from '../../../interfaces/temporada';
import { TemporadaService } from '../../../servicios/TemporadaService';
import { EmpresaService } from '../../../servicios/EmpresaService';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css'],
  standalone: false
})
export class PlantillaComponent {
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

  temporadaSelected: Temporada = {
    id: 0,
    nombre: '',
    inicio: '',
    fin: '',
    activo: false,
    fechaRegistro: '',
    source: ''
  }

  dontCallNgOnIt: boolean = true;
  fotoEmpresa: string = "";
  nombreEmpresa: string = "";
  activeIndex: number = 0;
  http: string = "";

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: "Jornada " + i + 1, content: "Content" }));


  constructor(private EquiposService: EquipoService, private ruta: Router, private empresaService: EmpresaService, private route: ActivatedRoute, private jugadorService: JugadorService, private temporadaService: TemporadaService) {
    this.URLFiles = this.EquiposService.serverFile;
    this.http = this.empresaService.serverFile;
    this.GetTemporadaActiva();
    

  }



  cargarTecnicosEquipo() {
    this.EquiposService.getTodosTecnicosEquipo(Number(this.id)).subscribe(data => {

      if (data.status == true) {
        this.equipo.tecnicos = data.value;
        this.equipo.tecnicos.forEach((item) => {

          item.listaFotos[0].url = this.URLFiles + this.temporadaSelected.nombre + '/' + this.EquiposService.localFile + this.equipo.idEquipo + '/' + item.listaFotos[0].url;
          item.listaFotos[0].thumbnailImageSrc = this.URLFiles + this.temporadaSelected.nombre + '/' + this.EquiposService.localFile + this.equipo.idEquipo + '/' +item.listaFotos[0].thumbnailImageSrc;



          //console.log(this.equipo.tecnicos);//this.URLFiles = this.equipoService.serverFile;


        });
        console.log(this.equipo.tecnicos);//this.URLFiles = this.equipoService.serverFile;
      }




    });

  }
  ngOnInit(): void {
    

      const loader = document.getElementById('app-loader');
      if(loader) {
        loader.style.display = 'none';
      }


    

    this.route.queryParams.subscribe(params => {


      if (this.ruta.getCurrentNavigation()?.trigger == "popstate") {

        if (Object.keys(params).length !== 0) {
          this.initialise();
          this.dontCallNgOnIt = true;
        }
        else {

          this.ruta.navigate(['/']);
        }
      }


    });

    if (!this.dontCallNgOnIt) {

      this.initialise();

    }







  }

  GetTemporadaActiva() {
    this.temporadaService.getTemporadaActiva().subscribe(data => {

      if (data.status == true) {
        this.temporadaSelected = data.value;
      //  this.isReady = true;
        console.log(this.temporadaSelected);
        // this.cargarAlbumes();

        const id = this.route.paramMap.subscribe(param => {
          this.id = param.get('id');
          this.equipo.idEquipo = Number(this.id);
        });
        if (id) {


          this.EquiposService.BuscarEquipo(Number(this.id)).subscribe(data => {
            //this.albumes = data;
            
            this.equipo = data.value;
            
            if (data.value.patrocinador != null) {
              this.nombreEmpresa = data.value.patrocinador.empresa.nombre;
              this.fotoEmpresa = this.http + data.value.patrocinador.empresa.logo;
              console.log(this.equipo)
              
            }
            this.equipo.foto = this.URLFiles + this.temporadaSelected.nombre + '/' + this.EquiposService.localFile + this.equipo.idEquipo + '/' + this.equipo.foto;
            console.log(this.URLFiles + this.temporadaSelected.nombre + '/' + this.EquiposService.localFile + this.equipo.idEquipo + '/' + this.equipo.foto)

          });

          

          this.EquiposService.getTodosJugadoresEquipo(Number(this.id)).subscribe(data => {
            this.cargarTecnicosEquipo();
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
                  jugador.fotos[0].thumbnailImageSrc = this.URLFiles + this.temporadaSelected.nombre + '/' + this.EquiposService.localFile + this.equipo.idEquipo + '/' + jugador.fotos[0].thumbnailImageSrc;

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


      }
      else {

      }

    });
  }
  initialise() {
    console.log(this.route.snapshot.paramMap.get('id')?.toString());

    this.equipo.jugadores = this.jugadorService.getJugadoresEquipo(Number(this.id));

    //var am = this.EquiposService.cambiarDatos(this.EquiposService.getEquipoID(Number(this.id)), this.equipo)
    // console.log(am)
  }

  /* readFromParams() {
     if (this.route.snapshot.paramMap.get('id')?.toString() != null) {
 
       this.equipo.idEquipo = this.route.snapshot.paramMap.get('id')?.toString();
     }
   }*/
}
