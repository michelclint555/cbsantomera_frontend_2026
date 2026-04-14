import { Component, OnInit } from '@angular/core';
import { ContratoEmpresa, EmpresaDto } from '../../interfaces/empresa';
import { EmpresaService } from '../../servicios/EmpresaService';
import { ContratoEmpresaService } from '../../servicios/ContratoEmpresaService';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-patrocinadores',
  standalone: false,
  templateUrl: './patrocinadores.component.html',
  styleUrls: ['./patrocinadores.component.css']
})
export class PatrocinadoresComponent implements OnInit {

  modelos: EmpresaDto[] = [];
  colaboradores: EmpresaDto[] = [];
  patrocinadores: EmpresaDto[] = [];
  loading: boolean = true;
  http: string = "";
  constructor(private service: ContratoEmpresaService) {
    this.http = this.service.serverFile;
    this.cargarDatos();

  }

  cargarDatos() {


    this.service.ObtenerEmpresas().subscribe(data => {

      if (data.status == true) {

        this.modelos = data.value;
        console.log(this.modelos);
        this.modelos.forEach(item => {
          item.logo = this.http + item.logo;
          if (item.tipo == 'Colaborador') {
            this.colaboradores.push(item);
          }

          if (item.tipo == 'Patrocinador') {
            this.patrocinadores.push(item);
          }
        })
        this.loading = false;
      }
      else {

      }

    });

    //console.log(this.empresastoP);

  }

  ngOnInit(): void {
    
  }

}
