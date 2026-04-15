import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  //imports: [],
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
 constructor(private router: Router) { }
    items: MenuItem[]= [];
ngOnInit() {
    this.items = [

      {
        label: 'Inicio',
        //icon: 'pi pi-link',
        route:'/'
      },

      {


        label: 'Club',

        items: [
          {
            label: 'Portada',
            //icon: 'pi pi-eraser',
            route: '/Club/Portada'
          },
          {
            label: 'Historia',
            //icon: 'pi pi-heart',
            route: '/Club/Historia'
          },
          {
            label: 'Valores',
            //icon: 'pi pi-eraser',
            route: '/Club/Valores'
          },
         /* {
            label: 'Patrocinadores',
           // icon: 'pi pi-heart',
            route: '/Club/Empresas'
          },*/
          {
            label: 'Contacto',
            //icon: 'pi pi-eraser',
            route: '/Club/Contacto'
          },

        ]
      },
      {
        label: 'Noticias',
        //icon: 'pi pi-link',
        route: '/Noticias'
      },

      {
        label: 'Equipo',
        // icon: 'pi pi-link',
        route:'/Equipo'
      },
      {
        label: 'Cantera',
        // icon: 'pi pi-link',
        route: '/Cantera'
      },

     /* {
        label: 'Calendario',
        // icon: 'pi pi-link',
        route: '/Calendario'
      },*/
      {
        label: 'Galería',
        // icon: 'pi pi-link',
        route: '/Galeria'
      },
      {
        label: 'Empresas',
        // icon: 'pi pi-link',
        route: '/Empresas'
      },
     /* {
        label: 'Únete',
        // icon: 'pi pi-link',
        route: '/Unete'
      },

      {
        label: 'Iniciar Sesión',
        // icon: 'pi pi-link',
        route: '/Login'
      },
      {
        label: 'Tienda',
        // icon: 'pi pi-link',
        url: 'https://angular.io/'
      },
      {
        label: 'Redes Sociales',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-star',
            url: 'https://angular.io/'
          },
          {
            label: 'Vite.js',
            icon: 'pi pi-bookmark',
            url: 'https://vitejs.dev/'
          }
        ]
      }*/
    ];
  }
}
