import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Album } from '../interfaces/album';

import { Temporada } from '../interfaces/temporada';
import { ResponseApi } from '../interfaces/response-api';
import { TemporadaService } from './TemporadaService';
import { environment } from '../../environments/environment';
//import { environment } from 'src/environments/environment';


@Injectable()
export class ContratoEmpresaService {

  serverURL = environment.serve + "ContratoEmpresa/";
  temporada: Temporada | undefined;
  URLTemporada = "";
  serverFile = environment.serveFile + 'Empresas/';
  rsp: ResponseApi = {
    status: false,
    msg: '',
    value: false,
  }
  constructor(public httpClient: HttpClient) {

    this.URLTemporada = environment.serve;

  }




  ObtenerEmpresas(): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Lista').pipe(
      catchError(this.errorHandler)

    );

  }


  getEmpresas(): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Lista_Full').pipe(
      catchError(this.errorHandler)

    );

  }






  getEmpresa(id: number): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Ver-Empresa/' + id).pipe(
      catchError(this.errorHandler)

    );

  }




  ObtenerEmpresa(id: number): Observable<any> {
    return this.httpClient.get(this.serverURL + 'Ver/' + id).pipe(
      catchError(this.errorHandler)

    );

  }





getEmpresaPorNombre(nombre: string): Observable<any> {
  return this.httpClient.get(
    `${this.serverURL}Buscar?nombre=${encodeURIComponent(nombre)}`
  ).pipe(
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
}
