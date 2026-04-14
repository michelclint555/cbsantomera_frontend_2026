import { Component, OnInit } from '@angular/core';
import { ContratoEmpresaService } from '../../servicios/ContratoEmpresaService';
import { EmpresaDto } from '../../interfaces/empresa';

@Component({
  selector: 'app-empresas',
  standalone: false,
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent implements OnInit {

  modelos: EmpresaDto[] = [];
  colaboradores: EmpresaDto[] = [];
  patrocinadores: EmpresaDto[] = [];
  loading: boolean = true;
  http: string = "";
  titulo: string = "Patrocinadores oficiales";
  constructor(private service: ContratoEmpresaService) {
    this.http = this.service.serverFile;
    this.cargarDatos();

  }

  formatearNombre(nombre: string): string {
  return nombre
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}

  cargarDatos() {


    this.service.ObtenerEmpresas().subscribe(data => {

      if (data.status == true) {

        this.modelos = data.value;

        console.log(this.modelos);
        this.modelos.forEach(item => {
          item.nombre = item.nombre.trimEnd();
          item.nombreUrl = this.formatearNombre(item.nombre);
          console.log(item.nombreUrl);
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
