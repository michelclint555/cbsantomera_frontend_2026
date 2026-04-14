import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PatrocinadoresComponent } from '../patrocinadores/patrocinadores.component';
import { FooterComponent } from '../footer/footer.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ])
    ])
  ],

  //imports: [RouterOutlet, PatrocinadoresComponent, FooterComponent],
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
  visible: boolean = false;
  isExpanded = false;
  icono: string = "pi-bars"
  toggle() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded)
    if (this.isExpanded) {
      this.icono = "pi-times"
    }
    else {
      this.icono = "pi-bars"
    }
  }
}
