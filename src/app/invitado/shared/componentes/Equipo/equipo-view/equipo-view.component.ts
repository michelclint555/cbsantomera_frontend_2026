import { Component, Input } from '@angular/core';
import { Equipo } from '../../../../../interfaces/equipo';



@Component({
  selector: 'app-equipo-view',
  templateUrl: './equipo-view.component.html',
  styleUrls: ['./equipo-view.component.css'],
  standalone: false,
})
export class EquipoViewComponent {

  @Input() equipo: Equipo = {
      idEquipo: 0,
      nombre: '',
      idClub: 0,
      idCategoriaJugador: 0,
      categoria: {
          id: 0,
          nombre: '',
          EsActivo: false,
          sexo: '',
          PrimerAnio: 0,
          SegundoAnio: 0
      },
      foto: '',
      jugadores: [],
      tecnicos: []
  }
}
