import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera-titulo',
  standalone: false,
  templateUrl: './cabecera-titulo.component.html',
  styleUrl: './cabecera-titulo.component.css'
})
export class CabeceraTituloComponent {
  @Input() titulo: string = "";
}
