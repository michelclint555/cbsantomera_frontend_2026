import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../../interfaces/equipo';

import { Temporada } from '../../interfaces/temporada';
import { TemporadaService } from '../../servicios/TemporadaService';
import { EquipoService } from '../../servicios/EquipoService';


@Component({
  selector: 'app-cantera',
  templateUrl: './cantera.component.html',
  styleUrls: ['./cantera.component.css'],
  standalone: false,
  
})
export class CanteraComponent {

  titulo: string = "Cantera";
  temporadaSelected: Temporada = {
    id: 0,
    nombre: '',
    inicio: '',
    fin: '',
    activo: false,
    fechaRegistro: '',
    source: ''
  }
  equipos: Equipo[] = [];
  URLFiles: string = "";
  constructor(private EquiposService: EquipoService, private route: ActivatedRoute, private temporadaService: TemporadaService) {
    this.URLFiles = this.EquiposService.serverFile;
    this.GetTemporadaActiva();
    console.log(this.temporadaSelected);
    

  }




  GetTemporadaActiva() {
    this.temporadaService.getTemporadaActiva().subscribe(data => {

      if (data.status == true) {
        this.temporadaSelected = data.value;
        this.getEquipos()
        console.log(this.temporadaSelected);
       
      }
      else {

      }

    });
  }
  over() {

    //console.log("Mouseover triggered");
  }

  out() {
    //this.image = 'assets/images/4.jpg';
    console.log("Mouseout triggered");
  }

  cambiar() {

  }

  getEquipos() {
    this.EquiposService.getMisEquipos(this.temporadaSelected.id).subscribe({

      next: (data) => {
        if (data.status) {
          this.equipos = data.value;

          this.equipos.forEach(equipo => {

            if (equipo.foto != '') {
              equipo.foto = this.URLFiles + this.temporadaSelected.nombre + '/' + this.EquiposService.localFile + equipo.idEquipo + '/' + equipo.foto;
            }



          })

        
          console.log(this.equipos)

        }
      }
    });
      
  }


}
