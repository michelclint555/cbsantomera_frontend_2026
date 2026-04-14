import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partido-view',
  standalone: false,
  templateUrl: './partido-view.component.html',
  styleUrls: ['./partido-view.component.css']
})
export class PartidoViewComponent {

  @Input() titulo: string = "";

}
