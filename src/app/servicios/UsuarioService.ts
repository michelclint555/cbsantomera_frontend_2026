import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { environment } from '../../environments/environment';

@Injectable()
export class UsuarioService {
  lista_usuarios: Usuario[] = [];

  private baseUrl = environment.serve+ "Usuario/";
  constructor(public httpClient: HttpClient) {

  }

  getData() {

   
  }


  getAlbumes(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'Lista').pipe(
      catchError(this.errorHandler)

    );

  }



  getAlbum(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'VerAlbum/' + id).pipe(
      catchError(this.errorHandler)

    );

  }

  getImages() {
    return Promise.resolve(this.getData());
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
};
