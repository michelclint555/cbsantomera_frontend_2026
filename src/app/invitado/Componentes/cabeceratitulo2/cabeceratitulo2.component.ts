import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabeceratitulo2',
  standalone: false,
  templateUrl: './cabeceratitulo2.component.html',
  styleUrl: './cabeceratitulo2.component.css'
})
export class Cabeceratitulo2Component {
  @Input() titulo: string = "";
}
