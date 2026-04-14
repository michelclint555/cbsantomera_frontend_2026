import { Component, Input } from '@angular/core';
import { JugadorEquipo } from '../../../interfaces/JugadorEquipo';

@Component({
  selector: 'app-jugador-view-invitado',
  
  templateUrl: './jugador-view-invitado.component.html',
  styleUrls: ['./jugador-view-invitado.component.css'],
  standalone: false,
})
export class JugadorViewInvitadoComponent {
  @Input() jugadores: number = 0;
  mintam: number = 100;
  maxtam: number = 400;
 // @Input() alto: string = '100px';
  @Input() jugador: JugadorEquipo = {
    jugador: {
        idJugador: 0,
        nombre: '',
        apellidos: '',
        fechaNac: '',
        sexo: '',
        dnie: '',
        telefono: '',
        foto: '',
        usuario: ''
    },
      dorsal: 0,
      id: 0,
      fotos: []
  }

 


  get estilos() {

    if (this.jugadores > 8) {
      this.mintam = 400;
      this.maxtam = 450;
    }
    if (this.jugadores == 8) {
      this.mintam = 250;
      this.maxtam = 450;
    }

    if (this.jugadores == 9) {
      this.mintam = 250;
      this.maxtam = 450;
    }

    if (this.jugadores == 10) {
      this.mintam = 250;
      this.maxtam = 450;
    }
    if (this.jugadores == 11) {
      this.mintam = 250;
      this.maxtam = 450;
    }
    if (this.jugadores == 12) {
      this.mintam = 250;
      this.maxtam = 450;
    }
    if (this.jugadores == 13) {
      this.mintam = 250;
      this.maxtam = 450;
    }
    if (this.jugadores == 14) {
      this.mintam = 250;
      this.maxtam = 450;
    }
    if (this.jugadores == 15) {
      this.mintam = 200;
      this.maxtam = 450;
    }
    if (this.jugadores == 16) {
      this.mintam = 250;
      this.maxtam = 150;
    }



    return {
      "min-width": this.mintam + 'px',
      "max-width": this.maxtam + 'px',


    };
  }

  /*get SeleccionaClase() {//Selecciona la clase del css
    console.log(`snip1527-${this.jugadores}`);
    console.log(`snip1527-${this.jugadores.toString()}`);
    return `snip1527-${this.jugadores}`;
  }*/

  constructor() {
    console.log(this.jugador);
  }
}
