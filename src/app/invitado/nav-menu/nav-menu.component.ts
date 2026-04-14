//import { Component } from '../../../assets/imagenes/';
import { Component, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-nav-menu',
  //imports: [],
  standalone: false,
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  isExpanded = false;
  icono:string ="pi-bars"
  checked: boolean = false;
  src: string = environment.myVarForImageURLS;

  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }



  visible: boolean = false;


  toggleClass() {
    this.visible = !this.visible;
  }

  collapse() {
    this.isExpanded = false;
  }

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
