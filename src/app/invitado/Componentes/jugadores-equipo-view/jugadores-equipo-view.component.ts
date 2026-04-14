import { Component, Input, OnInit } from '@angular/core';
import { FotoJugadorEquipo, JugadorEquipo } from '../../../interfaces/JugadorEquipo';
import { EquipoService } from '../../../servicios/EquipoService';
import { ResponseApi } from '../../../interfaces/response-api';

@Component({
  selector: 'app-jugadores-equipo-view',
  templateUrl: './jugadores-equipo-view.component.html',
  styleUrls: ['./jugadores-equipo-view.component.css']
})
export class JugadoresEquipoViewComponent implements OnInit {

  @Input() id: number = -1;

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

  jugadores: JugadorEquipo[] = [];
  rsp: ResponseApi = {
      status: false,
      msg: '',
      value: []
  }
  URLFiles: string = this.equiposService.serverFile;;

  constructor(private equiposService: EquipoService) {

    if (this.id != -1) {

      this.equiposService.getTodosJugadoresEquipo(Number(this.id)).subscribe(data => {

        if (data.status == true) {
          this.jugadores = data.value;

          console.log(this.jugadores);
          this.jugadores.forEach((jugador) => {

            if (jugador.fotos[0] == undefined) {

              this.fotoJugador.urlFoto = this.URLFiles + 'ImageLocked.png';
              this.fotoJugador.thumbnailImageSrc = this.URLFiles + 'ImageLocked.png';
              this.fotoJugador.IdEquipo = this.id;
              jugador.fotos.push(this.fotoJugador);
            }
            else {

              jugador.fotos[0].urlFoto = this.URLFiles + this.id+ '/' + jugador.fotos[0].foto;
              jugador.fotos[0].thumbnailImageSrc = this.URLFiles + this.id + '/' + jugador.fotos[0].thumbnailImageSrc;

              jugador.fotos[0].IdEquipo = this.id;
            }

            if (jugador.fotos[1] == undefined) {

              this.fotoJugador.urlFoto = this.URLFiles + 'ImageLocked.png';
              this.fotoJugador.thumbnailImageSrc = this.URLFiles + 'ImageLocked.png';
              this.fotoJugador.IdEquipo = this.id;
              jugador.fotos.push(this.fotoJugador);
            }
            else {

              jugador.fotos[1].urlFoto = this.URLFiles + this.id + '/' + jugador.fotos[1].foto;
              jugador.fotos[1].thumbnailImageSrc = this.URLFiles + this.id + '/' + jugador.fotos[1].thumbnailImageSrc

              jugador.fotos[1].IdEquipo = this.id;
            }


          })


        }

        /* this.selectedJugadores.forEach((jugador) => {
   
           jugador.fotos.push("https://localhost:7024/archivos/Jugadores/898174175.png")
   
         })*/


      });
     
    }
   
  }
    ngOnInit(): void {
     // console.log(this.jugadores);
    }

}
