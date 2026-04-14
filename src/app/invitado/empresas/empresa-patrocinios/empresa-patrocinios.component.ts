import { Component } from '@angular/core';
import { Noticia } from '../../../interfaces/INoticia';
import { NoticiasService } from '../../../servicios/NoticiasService';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { EmpresaService } from '../../../servicios/EmpresaService';
import { ContratoEmpresaService } from '../../../servicios/ContratoEmpresaService';

@Component({
  selector: 'app-empresa-patrocinios',
  standalone: false,
  templateUrl: './empresa-patrocinios.component.html',
  styleUrl: './empresa-patrocinios.component.css'
})
export class EmpresaPatrociniosComponent {
empresaData: any = null;
  empresa: string = "";
  id: string | null | undefined;
  htmlContent: any;
  noticia: Noticia = {
    idNoticia: 0,
    titulo: '',
    subtitulo: '',
    tipoNoticia: '',
    fecha: '',
    portada: '',
    etiquetas: [],
    contenido: '',
    promocion: false,
    nuevo: false,
    ThumbnailImageSrc: ''
  }
  http: string = "";

  titulo: string = "";



constructor(
  private serviceEmpresa: ContratoEmpresaService,
  private sanitizer: DomSanitizer,
  private ruta: Router,
  private noticiaService: NoticiasService,
  private route: ActivatedRoute
) {

  this.route.paramMap.subscribe(param => {

    this.http = this.noticiaService.serverFile;
    const slug = param.get('id');

    if (!slug) return;

    console.log("SLUG:", slug);

    // 🔹 slug → nombre normal
    const nombreEmpresa = slug.replace(/-/g, ' ');

    console.log("Nombre convertido:", nombreEmpresa);

    // 🔹 llamada al backend
    this.serviceEmpresa.getEmpresaPorNombre(nombreEmpresa).subscribe({
      next: (data) => {
        if (data.status) {
          this.noticia = data.value;
            this.noticia.contenido = this.noticia.contenido.replace(/&nbsp;/g, ' ');
            this.noticia.contenido = this.noticia.contenido.replace(/\\n/g, '<br>');


        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.noticia.contenido);
          console.log("Empresa:", this.noticia);
        } else {
          console.log("No encontrada");
        }
      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  });
}



}
