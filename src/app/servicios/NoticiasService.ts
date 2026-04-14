import { Injectable } from '@angular/core';
import { Noticia } from '../interfaces/INoticia';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoticiasService {
  listaNoticias: Noticia[] = [];
  serverURL = environment.serve + 'Noticias/';
  serverFile = environment.serveFile + 'Noticias/';
  constructor(public httpClient: HttpClient) {

  }

  getNoticias(): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Lista').pipe(
      catchError(this.errorHandler)

    );

  }
  getNoticiaEmpresa(nombre: string): Observable<any> {
    return this.httpClient.get(`${this.serverURL}Empresa?empresa=${nombre}`).pipe(
      catchError(this.errorHandler)

    );

  }


  getNoticiasInicio(): Observable<any> {
    return this.httpClient.get(`${this.serverURL}Lista-Inicio`).pipe(
      catchError(this.errorHandler)

    );

  }
  getNoticia(id: number): Observable<any> {
    return this.httpClient.get(this.serverURL + 'VerNoticia/' + id).pipe(
      catchError(this.errorHandler)

    );

  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      console.log(error);
    }
    return throwError(errorMessage);
  }
  getData() {
    return [
      {
        id: 1,
        titulo: "El Real Madrid continúa preparando el partido contra Las Palmas",
        tipo: "string",
        fecha: "25/01/2024",
        portada: "assets/noticias/1/portada.webp",
        etiquetas: [],
        detalle: "El Barcelona emitió un comunicado médico por el cual Alejandro Balde será operado en los próximos días después de la lesión que sufrió el pasado miércoles en Bilbao. Tal y como adelantó MARCA, en la jornada del jueves el futbolista se sometió a diversas pruebas para dejar claro qué zona tenía afectada y tomar una decisión sobre si tenía que pasar por el quirófano. Este viernes se ha producido la reunión definitiva en la que se ha acordado que el jugador sea operado de un desgarro en el tendón. El tiempo estimado de baja, aunque el parte médico no lo especifica, es de cuatro meses por lo que dice adiós a la temporada y también a la Eurocopa en la que tenía puestas muchas esperanzas de participar. En los próximos días se someterá a tratamiento quirúrgico a cargo del doctor Lasse Lempainen, bajo la supervisión de los servicios médicos del club, en Turku (Finlandia) Para Xavi es una baja muy importante ya que deja al equipo sin un lateral izquierdo específico para el corto plazo. Marcos Alonso fue operado hace unas semanas y se confía en que esté recuperado antes de final de mes. Mientras tanto, el técnico azulgrana tendrá que ir buscando alternativas dentro de la plantilla y el filial. Joao Cancelo, que precisamente en Bilbao volvió a una convocatoria con el equipo después de su lesión, ya ha actuado en varias ocasiones esta temporada en el lateral izquierdo.Es una de las alternativas al igual que la de jugar con Héctor Fort, el chaval del filial que ha dado un buen rendimiento actuando en esa banda aunque su posición natural es la de lateral derecho.",
        promocion: true,
        album: null,
      }
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
};
