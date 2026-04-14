import { Component } from '@angular/core';
import { NovedadesComponent } from '../novedades/novedades.component';

@Component({
  selector: 'app-principio',
 
  standalone: false,
  templateUrl: './principio.component.html',
  styleUrl: './principio.component.css'
})
export class PrincipioComponent {
  partidos: string = "Partidos";
  multimedia: string = "Multimedia";
  noticias: string = "Actualidad";
}
