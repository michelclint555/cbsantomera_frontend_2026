import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Album } from '../interfaces/album';
import { environment } from '../../environments/environment';


@Injectable()
export class AlbumService {
  lista_albumes: Album[] = [];
  serverURL = environment.serve + 'Album/';
  serverFile = environment.serveFile + 'Temporadas/';
  constructor(public httpClient: HttpClient) {

  }

  
  


  getAlbumes(temporada: string): Observable<any> {
    return this.httpClient.get(`${this.serverURL}Lista?temporada=${temporada}`).pipe(
      catchError(this.errorHandler)

    );

  }


  getAlbumesInicio(): Observable<any> {
    return this.httpClient.get(`${this.serverURL}Lista-Inicio`).pipe(
      catchError(this.errorHandler)

    );

  }



  getAlbum(id: number): Observable<any> {
    return this.httpClient.get(this.serverURL + 'VerAlbum/' + id).pipe(
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
