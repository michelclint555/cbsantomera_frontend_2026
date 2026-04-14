import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Album } from '../interfaces/album';
import { environment } from '../../environments/environment';
import { Temporada } from '../interfaces/temporada';
import { ResponseApi } from '../interfaces/response-api';


@Injectable()
export class TemporadaService {
 
  serverURL = environment.serve +"Temporada/";
  temporada: Temporada | undefined;
  URLTemporada = ""; 
  serverFile = environment.serveFile + 'Albumes/';
  rsp: ResponseApi = {
    status: false,
    msg: '',
    value: false,
  }
  constructor(public httpClient: HttpClient) {
    
    this.URLTemporada = environment.serve + this.temporada + "/";
  }

 


  getTemporadas(): Observable<any> {
    return this.httpClient.get(this.serverURL +'Lista').pipe(
      catchError(this.errorHandler)

    );

  }

  Activar(id: number): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Activar/' + id).pipe(
      catchError(this.errorHandler)

    );

  }


  getTemporada(): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Ver').pipe(
      catchError(this.errorHandler)

    );

  }

  getTemporadaActiva(): Observable<any> {
    return this.httpClient.get(`${this.serverURL}Ver`).pipe(
      catchError(this.errorHandler)

    );

  }


  EliminarAlbum(id: number): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Eliminar/' + id).pipe(
      catchError(this.errorHandler)

    );

  }

  AddTemporada(formToPost: any): ResponseApi {

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


  EditarTemporada(formToPost: any): ResponseApi {

    var rsp2 = {
      status: false,
      msg: '',
      value: false,
    }

    this.httpClient.post<any>(`${this.serverURL}Editar`, formToPost).subscribe(response => {

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
