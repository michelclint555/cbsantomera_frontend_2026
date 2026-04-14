import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseApi } from '../interfaces/response-api';

@Injectable()
export class EquipoService {
  serverURL = environment.serve + 'Equipo/';
  serverUREquipoJugador = environment.serve + 'EquipoJugador/';
  serverUREquipoTecnico = environment.serve + 'Tecnico/';
  serverFile = environment.serveFile + 'Temporadas/';
  localFile= 'Equipos/';

  rsp: ResponseApi = {
    status: false,
    msg: '',
    value: false,
  }
  constructor(private http: HttpClient) { }
  getDataEquipo() {
    /*var equipos=  [
      {
        idEquipo: 1,
        nombre: 'ECONEX C.B. SANTOMERA',
        idClub: 1,
        idCategoriaJugador: 2,
        foto: "",
        jugadores: [],

      },

      {
        idEquipo: 2,
        nombre: 'DE BARRO C.B. SANTOMERA',
        idClub: 1,
        jugadores: [],
        idCategoriaJugador: 3,
        foto: "",
      },

      {
        idEquipo: 3,
        nombre: 'PPS C.B. SANTOMERA',
        idClub: 1,
        jugadores: [],
        idCategoriaJugador: 4,
        foto: "",
      },

      {
        idEquipo: 4,
        nombre: 'POLITEC C.B. SANTOMERA',
        idClub: 1,
        jugadores: [],
        idCategoriaJugador: 5,
        foto: "",
      },

      {
        idEquipo: 5,
        nombre: 'PPS C.B. SANTOMERA',
        idClub: 1,
        jugadores: [],
        idCategoriaJugador: 6,
        foto: "",
      },
      {
        idEquipo: 6,
        nombre: 'PPS C.B. SANTOMERA',
        idClub: 1,
        idCategoriaJugador: 7,
        foto: "",
        jugadores:[],
      },
      {
        idEquipo: 7,
        nombre: 'C.B. SANTOMERA',
        jugadores: [],
        idClub: 1,
        idCategoriaJugador: 8,
        foto: "",
      },
      {
        idEquipo: 8,
        nombre: 'C.B. SANTOMERA',
        idClub: 1,
        idCategoriaJugador: 9,
        jugadores: [],
        foto: "",
      },
                                                                                                                                                                                                          

      
    ];

    

    return equipos;
  }
  getDataCategoria() {
    return [
      {
        idCategoria: 1,
        nombre: 'PRIMERA DIVISION MASCULINA',
        
      },
      {
        idCategoria: 2,
        nombre: 'PRIMERA AUTONOMICA MASCULINA',
      },
      {
        idCategoria: 3,
        nombre: 'SEGUNDA AUTONOMICA MASCULINA',
        
      },
      {
        idCategoria: 4,
        nombre: 'JUNIOR MASCULINO',
        
      },
      {
        idCategoria: 5,
        nombre: 'CADETE MASCULINO',
        
      },
      {
        idCategoria: 6,
        nombre: 'INFANTIL MASCULINO',
       
      },
      {
        idCategoria: 7,
        nombre: 'PRE-INFANTIL',
        
      },
      {
        idCategoria: 8,
        nombre: 'ALEVÍN MIXTO',
        
      },
      {
        idCategoria: 9,
        nombre: 'BENJAMÍN MIXTO',
       

      },
    ];*/


  }
  EliminarEquipo(id: number): Observable<any> {
    return this.http.get(this.serverURL+'Eliminar/' + id).pipe(
      catchError(this.errorHandler)

    );

  }

  getEquiposClub(id: number): Observable<any> {
    return this.http.get(this.serverURL +'club/' + id).pipe(
      catchError(this.errorHandler)

    );

  }

  getMisEquipos(id: number): Observable<any> {
    return this.http.get(`${this.serverURL }MisEquipos?Temporada=${id}`).pipe(
      catchError(this.errorHandler)

    );

  }



  BuscarEquipo(id: number) {
  
    return this.http.get<ResponseApi>(this.serverURL+'Buscar/' + id);
      

  }

  BuscarPrimerEquipo(): Observable<any> {

    return this.http.get<ResponseApi>(this.serverURL + 'BuscarPrimerEquipo').pipe(
      catchError(this.errorHandler)
    );


  }



  EditarEquipo() {


  }

  getImages() {
    return Promise.resolve(this.getDataEquipo());
  }

  cambiarDatos(element: Equipo, equipo: Equipo) {

    
      equipo.idEquipo = element.idClub;
      equipo.nombre = element.nombre;
      equipo.idClub = element.idClub;
      equipo.idCategoriaJugador = element.idCategoriaJugador;
      equipo.foto = element.foto;


  }

  getCategorias(): Observable<ResponseApi> {
    //const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Show-Global-Msgs': 'any' });
    return this.http.get<ResponseApi>("https://localhost:7024/api/CategoriaJugador/Lista");


  }



  AddJugadoresEquipo(formToPost: any): ResponseApi {

    var rsp2 = {
      status: false,
      msg: '',
      value: false,
    }

    this.http.post<any>(`${this.serverUREquipoJugador}Guardar`, formToPost).subscribe(response => {

      this.rsp.status = response.status;
      this.rsp.msg = response.msg;
      this.rsp.value = response.vale;

      return this.rsp;
    });
    return this.rsp;
  }



  AddTecnicosEquipo(formToPost: any): ResponseApi {

    var rsp2 = {
      status: false,
      msg: '',
      value: false,
    }

    this.http.post<any>(`${this.serverUREquipoTecnico}GuardarTecncicoEquipo`, formToPost).subscribe(response => {

      this.rsp.status = response.status;
      this.rsp.msg = response.msg;
      this.rsp.value = response.vale;

      return this.rsp;
    });
    return this.rsp;
  }




 CrearFotoEquipo(formToPost: any): ResponseApi {

    var rsp2 = {
      status: false,
      msg: '',
      value: false,
    }

   this.http.post<any>(`${this.serverURL}GuardarFotoEquipo`, formToPost).subscribe(response => {

      this.rsp.status = response.status;
      this.rsp.msg = response.msg;
      this.rsp.value = response.vale;

      return this.rsp;
    });
    return this.rsp;
  } 




  
  getTodosJugadores(id: number): Observable<any> {
    return this.http.get<ResponseApi>('https://localhost:7024/api/EquipoJugador/ListaJugadores/' + id).pipe(
      catchError(this.errorHandler)

    );

  }


  getTodosJugadoresEquipo(id: number): Observable<any> {
    return this.http.get<any>(environment.serve + 'EquipoJugador/ListaEquipoJugadores/' + id).pipe(
      catchError(this.errorHandler)

    );

  }



  getTodosTecnicos(id: number): Observable<any> {
    return this.http.get<ResponseApi>('https://localhost:7024/api/Tecnico/ListaTecnicos/' + id).pipe(
      catchError(this.errorHandler)

    );

  }


  getTodosTecnicosEquipo(id: number): Observable<any> {
    return this.http.get<any>(environment.serve + 'Tecnico/ListaEquipoTecnicos/' + id).pipe(
      catchError(this.errorHandler)

    );

  }



  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      //console.log(error);
    }
    return throwError(errorMessage);
  }


    
 
}
