import { Component, OnInit } from '@angular/core';
import { NovedadService } from '../../servicios/NovedadService';
import { Promocion } from '../../interfaces/novedad';

@Component({
  selector: 'app-novedades',
  
  standalone: false,
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent implements OnInit {

  http: string = "";
  loading: boolean = true;
  promociones: Promocion[] = []
  value: number = 50;
  checked: boolean = true;
  //binary: boolean = true;


  constructor(private novedadService: NovedadService) {
    this.http = this.novedadService.serverFile;

  }
  ngOnInit(): void {
    this.cargar();
  }


  cargar() {
    this.novedadService.ObtenerNovedades().subscribe(data => {

      if (data.status == true) {
        this.promociones = data.value;
        console.log(this.promociones);
        this.loading = false;
        console.log(this.http + this.promociones[1].portada);
      }
      else {

      }

    });
  }
  

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}


