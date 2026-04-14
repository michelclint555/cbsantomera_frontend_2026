import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club',
  standalone: false,
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit{
  items: MenuItem[] = [];
  titulo: string = "CLUB"
  constructor(private router: Router) {
    this.items = [
      {
        label: 'Portada',
        //icon: 'pi pi-eraser',
        routerLink: ['/Club/Portada']
      },
      {
        label: 'Historia',
        //icon: 'pi pi-heart',
        routerLink: ['/Club/Historia']
      },
      {
        label: 'Valores',
        //icon: 'pi pi-eraser',
        routerLink: ['/Club/Valores']
      },
     
      {
        label: 'Contacto',
        //icon: 'pi pi-eraser',
        routerLink: ['/Club/Contacto']
      },

    ]
  }
    ngOnInit(): void {
      
    }

}
