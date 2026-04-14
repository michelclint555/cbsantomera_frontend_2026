import { Component } from '@angular/core';
import { NoticiasService } from '../../servicios/NoticiasService';
import { ImageModule } from 'primeng/image';
import { Noticia } from '../../interfaces/INoticia';

@Component({
  selector: 'app-noticias',
 
  
  standalone: false,
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css',
  providers: [NoticiasService],
})
export class NoticiasComponent {
  layout: string = 'list';
  titulo: string = "ACTUALIDAD"
  http: string = "";
  baseUrl = "";
  noticias: Array<any> = [];
  can: Array<any> = [];
  constructor(private noticiasService: NoticiasService) {
    this.baseUrl = this.noticiasService.serverURL;
    this.http = this.noticiasService.serverFile;
  }
  ngOnInit() {
    this.noticiasService.getNoticias().subscribe(
      (res: any) => {



        this.noticias = res.value;
        console.log(this.noticias)

      }

    );





  }

  getTimeAgo(fecha: string | Date): string {
    const now = new Date();
    const date = new Date(fecha);
    const diff = now.getTime() - date.getTime(); // diferencia en milisegundos

    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 1) {
      const minutes = Math.floor(diff / (1000 * 60));
      return `⏱ Hace ${minutes} min`;
    } else if (hours < 24) {
      return `⏱ Hace ${hours} h`;
    } else {
      const days = Math.floor(hours / 24);
      return `⏱ Hace ${days} d`;
    }
  }
  getSeverity(noticia: Noticia) {
    var fechaFin = new Date().getTime();

    var fechaInicio = new Date(noticia.fecha).getTime();

    var diff = fechaFin - fechaInicio;
    let res = diff / (1000 * 60 * 60 * 24); //diferencia de dias entre la fecha actual y la fecha de la noticia
    console.log(noticia);
    switch (res) {
      case 5:
        return 'success';

      case 4:
        return 'warining';
      case 3:
        return 'warining';
      case 2:

        return 'success';
      case 1:
        return 'success';

      case 0:
        return 'success';




      default:
        return null;
    }
  }

  counterArray(n: number): any[] {
    return Array(n);
  }
}
