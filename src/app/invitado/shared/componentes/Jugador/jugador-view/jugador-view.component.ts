import { Component, Input, OnInit } from '@angular/core';
import { JugadorEquipo } from '../../../../../interfaces/JugadorEquipo';



@Component({
  selector: 'app-jugador-view',
  templateUrl: './jugador-view.component.html',
  styleUrls: ['./jugador-view.component.css'],
  standalone: false,
})
export class JugadorViewComponent implements OnInit {
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

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

  


}
