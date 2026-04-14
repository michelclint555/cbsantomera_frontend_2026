import { Component, Input } from '@angular/core';
import { JugadorEquipo } from '../../../../interfaces/JugadorEquipo';

@Component({
  selector: 'app-jugador-view2',
  standalone: false,
  templateUrl: './jugador-view2.component.html',
  styleUrl: './jugador-view2.component.css'
})
export class JugadorView2Component {
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

  constructor() {
    
  }
}
