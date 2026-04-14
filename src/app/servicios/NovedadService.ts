import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Album } from '../interfaces/album';
import { environment } from '../../environments/environment';
import { Temporada } from '../interfaces/temporada';
import { ResponseApi } from '../interfaces/response-api';
import { TemporadaService } from './TemporadaService';


@Injectable()
export class NovedadService {
 
  serverURL = environment.serve + "Promocion/";
  temporada: Temporada | undefined;
  URLTemporada = "";
  serverFile = environment.serveFile + 'Novedades/';
  rsp: ResponseApi = {
    status: false,
    msg: '',
    value: false,
  }
  constructor(public httpClient: HttpClient) {

    this.URLTemporada = environment.serve + this.temporada?.source + "/";
  }

 


  ObtenerNovedades(): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Lista').pipe(
      catchError(this.errorHandler)

    );

  }

  getNovedades(): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Lista_Full').pipe(
      catchError(this.errorHandler)

    );

  }

  

  


  getTemporada(id: number): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Ver/' + id).pipe(
      catchError(this.errorHandler)

    );

  }

  getTemporadaActiva(): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Temporada-Activa').pipe(
      catchError(this.errorHandler)

    );

  }


  Eliminar(id: number): Observable<any> {
    return this.httpClient.delete(this.serverURL + 'Eliminar/' + id).pipe(
      catchError(this.errorHandler)

    );

  }

  AddNovedad(formToPost: any): ResponseApi {

    var rsp2 = {
      status: false,
      msg: '',
      value: false,
    }

    this.httpClient.post<any>(`${this.serverURL}Guardar`, formToPost).subscribe(response => {

      this.rsp.status = response.status;
      this.rsp.msg = response.msg;
      this.rsp.value = response.vale;

      //return this.rsp;
    });
    return this.rsp;
  }


  EditarNovedad(formToPost: any): ResponseApi {

    var rsp2 = {
      status: false,
      msg: '',
      value: false,
    }

    this.httpClient.post<any>(`${this.serverURL}Update`, formToPost).subscribe(response => {

      this.rsp.status = response.status;
      this.rsp.msg = response.msg;
      this.rsp.value = response.vale;

      //return this.rsp;
    });
    return this.rsp;
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
}
