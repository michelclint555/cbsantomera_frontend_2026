import { ImplicitReceiver } from '@angular/compiler';
import { AfterViewInit, Injectable } from '@angular/core';

declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ServiceScriptService implements AfterViewInit {

  constructor() { }
    ngAfterViewInit(): void {
        throw new Error('Method not implemented.');
    }

  public loadScript(archivos: string[]) {

    for (let archivo of archivos) {

      console.log('preparing to load...')
      let node = document.createElement('script');
      node.src = "assets/js/"+archivo+".js";
      node.type = 'text/javascript';
      node.async = true;
      document.getElementsByTagName('head')[0].appendChild(node);
}
  
  }
}
