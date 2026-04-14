import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../../interfaces/INoticia';
import { NoticiasService } from '../../../servicios/NoticiasService';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ImageModule } from 'primeng/image';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AlbumService } from '../../../servicios/AlbumService';

@Component({
  selector: 'app-una-noticia',
  standalone: false,
  templateUrl: './una-noticia.component.html',
  styleUrls: ['./una-noticia.component.css']
})
export class UnaNoticiaComponent implements OnInit {
  dontCallNgOnIt: boolean = true;
  http: string = "";
  baseUrl = "";
  noticia: Noticia = {
      idNoticia: 0,
    titulo: '',
    nuevo: false,
      subtitulo: '',
      tipoNoticia: '',
      fecha: '',
      portada: '',
      etiquetas: [],
      contenido: '',
      promocion: false,
      ThumbnailImageSrc: ''
  }

  id: string | null | undefined;
  htmlContent: any;
  constructor(private sanitizer: DomSanitizer,  private noticiaService: NoticiasService, private ruta: Router, private route: ActivatedRoute, private albumService: AlbumService) {
    this.baseUrl = this.noticiaService.serverURL;
    console.log(this.id);
    this.http = this.noticiaService.serverFile;
    const id = this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.noticia.idNoticia = Number(this.id);
     
    });
    if (id) {


      this.noticiaService.getNoticia(Number(this.id)).subscribe(data => {
        //this.albumes = data;
        this.noticia = data.value;
        this.noticia.contenido = this.noticia.contenido.replace(/&nbsp;/g, ' ');
        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.noticia.contenido);
        // console.log(this.categorias)

      });

      

    }

  }

  getSafeHTML(content: string): SafeHtml {

      return this.sanitizer.bypassSecurityTrustHtml(content)
  }


  ngOnInit(): void {

    const id = this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
    });

    if (id) {


      this.noticiaService.getNoticia(Number(this.id)).subscribe(data => {
        //this.albumes = data;
        this.noticia = data.value;

        // console.log(this.categorias)

      });



    }
      /*this.route.queryParams.subscribe(params => {


        if (this.ruta.getCurrentNavigation()?.trigger == "popstate") {

          if (Object.keys(params).length !== 0) {
            this.initialise();
            this.dontCallNgOnIt = true;
            
          }
          else {

            this.ruta.navigate(['/']);
          }
        }


      });*/
    }

  initialise() {
    console.log(this.route.snapshot.paramMap.get('id')?.toString());

   // this.noticia.album = this.albumService.getAlbum(Number(this.noticia.album));

    //var am = this.EquiposService.cambiarDatos(this.EquiposService.getEquipoID(Number(this.id)), this.equipo)
    // console.log(am)
  }


}
