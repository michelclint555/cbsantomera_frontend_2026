import { Component } from '@angular/core';
import { Noticia } from '../../../../../interfaces/INoticia';
import { NoticiasService } from '../../../../../servicios/NoticiasService';


@Component({
  
  selector: 'app-noticias-carrousel',
  templateUrl: './noticias-carrousel.component.html',
  styleUrls: ['./noticias-carrousel.component.css'],
  standalone: false,
})
export class NoticiasCarrouselComponent {
   responsiveOptions: any;
  http: string = "";
  baseUrl = "";
  
 noticias: Noticia[] = [];
  

  constructor(private noticiasService: NoticiasService) {
    this.baseUrl = this.noticiasService.serverURL;
    this.http = this.noticiasService.serverFile;
  }


  ngOnInit(): void {


    this.responsiveOptions = [
      {
        breakpoint: '1800px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '1500px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1200px',
        numVisible: 3,
        numScroll: 1
      },


      {
        breakpoint: '1000px',
        numVisible: 3,
        numScroll: 1
      },

      {
        breakpoint: '999px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '765px',
        numVisible: 1,
        numScroll: 1
      },

      {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '500px',
        numVisible: 1,
        numScroll: 1
      },

    ];

    
    this.noticiasService.getNoticiasInicio().subscribe(
      (res: any) => {



        this.noticias = res.value;
        

      }

    );

    
  }
}
