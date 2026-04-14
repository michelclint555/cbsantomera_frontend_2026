import { Component, Input } from '@angular/core';
import { TecnicoEquipo } from '../../../interfaces/tecnico';

@Component({
  selector: 'app-cuerpo-tecnico-view-invitado',
  standalone: false,
  templateUrl: './cuerpo-tecnico-view-invitado.component.html',
  styleUrls: ['./cuerpo-tecnico-view-invitado.component.css']
})
export class CuerpoTecnicoViewInvitadoComponent {
  @Input() tecnico: TecnicoEquipo= {
      idEquipo: '',
      id: '',
    tecnico: {
        apellidos: '',
        nombre: '',
        id: 0,
        fechaNac: '',
        funcion: ''
    },
      funcion: '',
    FuncionView: {
        label: '',
        name: '',
        id: 1
    },
      listaFotos: []
  }

  constructor() {
      
  }
}
