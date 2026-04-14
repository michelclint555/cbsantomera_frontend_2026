import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError , map} from 'rxjs';
import { environment } from '../../environments/environment';
import { Club } from '../interfaces/club';
import { ResponseApi } from '../interfaces/response-api';


@Injectable({
  providedIn: 'root'
})
export class ClubService {
  serverURL = environment.serve + 'Club/';
  serverFile = environment.serveFile + 'Clubes/';
  lista_clubes: Club[] = [];

  rsp: ResponseApi = {
    status: false,
    msg: '',
    value: {},
  }
  constructor(private httpClient: HttpClient) {
  
  }

  getClub(id: number): Observable<any> {
    return this.httpClient.get(this.serverURL+'Obtener/' + id).pipe(
      catchError(this.errorHandler)

    );

  }



  CrearClub(formToPost: any): ResponseApi {

    var rsp2 = {
      status: false,
      msg: '',
      value: false,
    }

    this.httpClient.post<any>(`${this.serverURL}Guardar`, formToPost).subscribe(response => {

      this.rsp.status = response.status;
      this.rsp.msg = response.msg;
      this.rsp.value = response.value;

      return this.rsp;
    });
    return this.rsp;
  }  


  getClubes(): Observable<ResponseApi> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Show-Global-Msgs': 'any' });
    return this.httpClient.get<ResponseApi>(this.serverURL + "Lista", { headers: headers });
   

}


  EliminarClub(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Show-Global-Msgs': 'any' });
    return this.httpClient.get('http://localhost:8000/api/auth/admin/deleteclub/' + id).pipe(
       map((result) => < Club[]> result)
  )

}

getMiClub(): Observable<any> {
  return this.httpClient.get('http://localhost:8000/api/auth/miclub') .pipe(
    catchError(this.errorHandler) 
  )

}




 
errorHandler(error: any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    //console.log(error);
  }
  return throwError(errorMessage);
}

actualizar_lista(){
 
    this.getClubes().subscribe((data)=>{
      //this.lista_clubes = data;
      for(let i= 0; i<this.lista_clubes.length; i++){

       
      }

      console.log(this.lista_clubes);

      
    })
}


buscarclub(id:number, lista_clubes: Club[]):Club | undefined{
  for(let i= 0; i<this.lista_clubes.length; i++){
      if(id==this.lista_clubes[i].idClub){
          return this.lista_clubes[i];
      }
  }

  return undefined;

  }


  EditarClub() {

        
  }

}
