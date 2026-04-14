import { Injectable } from '@angular/core';
import { Jugador } from '../interfaces/jugador';
import { JugadorEquipo } from '../interfaces/JugadorEquipo';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ResponseApi } from '../interfaces/response-api';
import { environment } from '../../environments/environment';

@Injectable()
export class JugadorService {

  baseURL: string = environment.serve + 'Jugador/'
  baseFiles: string = environment.serveFile + "Jugadores/";
  baseURLTecnico: string = environment.serve + 'Tecnico/'
  rsp: ResponseApi = {
    status: false,
    msg: '',
    value: {},
  }
  constructor(private http: HttpClient) {



  }


  getTodosJugadores(): Observable<any> {
    return this.http.get<ResponseApi>('https://localhost:7024/api/Jugador/Lista').pipe(
      catchError(this.errorHandler)

    );

  }


  getJugador(id: number): Observable<any> {
    return this.http.get(this.baseURL+'Buscar/' + id).pipe(
      catchError(this.errorHandler)

    );

  }


  CrearJugador(formToPost: any): ResponseApi {

    var rsp2 = {
      status: false,
      msg: '',
      value: false,
    }

    this.http.post<any>(`${this.baseURL}Guardar`, formToPost).subscribe(response => {
     
      this.rsp.status = response.status;
      this.rsp.msg = response.msg;
      this.rsp.value = response.value;

      return this.rsp;
    });
    return this.rsp;
}  



  ListTecnicos(): Observable<any> {

  
      return this.http.get<ResponseApi>('https://localhost:7024/api/Tecnico/Lista').pipe(
        catchError(this.errorHandler)

      );

    

  }


  CrearTecnico(formToPost: any): ResponseApi {

    var rsp2 = {
      status: false,
      msg: '',
      value: false,
    }

    this.http.post<any>(`${this.baseURL}Editar`, formToPost).subscribe(response => {

      this.rsp.status = response.status;
      this.rsp.msg = response.msg;
      this.rsp.value = response.value;

      return this.rsp;
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




  getData() {
    let jugadores = [
      {
        id: 1,
        nombre: "GUILLERMO ",
        apellidos: "GONZALEZ ALCARAZ",
        fechaNacimiento: "17/01/1996",
        equipos:[1],
        fotos: ["assets/Equipos/1/jugadores/1.jpg"],

      },

      {
        id: 2,
        nombre: "ALBERTO",
        apellidos: "BONACHE MARTÍNEZ",
        equipos: [1],
        fechaNacimiento: "22/03/2006",
        fotos: ["assets/Equipos/1/jugadores/2.jpg"]
      },

      {
        id: 3,
        nombre: "PABLO",
        apellidos: "CATALÁN PÉREZ",
        equipos: [1],
        fechaNacimiento: "16/01/2004",
        fotos: ["assets/Equipos/1/jugadores/8.jpg"]
      },

      {
        id: 4,
        nombre: "ALVARO",
        apellidos: "CEREZO OGALLA",
        equipos: [1],
        fechaNacimiento: "08/04/1996",
        fotos: ["assets/Equipos/1/jugadores/5.jpg"]
      },
      {
        id: 5,
        nombre: "LEURY ARISMENDY ",
        apellidos: "DIAZ VILLAMAN",
        fechaNacimiento: "09/06/1997",
        equipos: [1],
        fotos: ["assets/Equipos/1/jugadores/6.jpg"]
      },

      {
        id: 6,
        nombre: "LUIS ALONSO ",
        apellidos: "GUTIÉRREZ MUÑOZ",
        fechaNacimiento: "07/05/1981",
        equipos: [1],
        fotos: ["assets/Equipos/1/jugadores/4.jpg"]
      },
      
      {
        id: 7,
        nombre: "MANUEL ",
        apellidos: "SANCHEZ FRESNEDA,",
        fechaNacimiento: "18/04/1995",
        equipos: [1],
        fotos: ["assets/Equipos/1/jugadores/9.jpg"]
      },

      {
        id: 8,
        nombre: "CLEUDY ESTIEL",
        apellidos: "SANTANA MINYETTY",
        fechaNacimiento: "01/12/1998",
        equipos: [1],
        fotos: ["assets/Equipos/1/jugadores/1.jpg"]
      },
      {
        id: 9,
        nombre: "ESTEBAN ",
        apellidos: "ALEMAN SAEZ",
        fechaNacimiento: "16/02/2005",
        equipos: [1,2],
        fotos: ["assets/Equipos/1/jugadores/3.jpg"]
      },

      {
        id: 10,
        nombre: "ALVARO",
        apellidos: "CEREZO GARCIA",
        fechaNacimiento: "22/03/2006",
        equipos: [1, 2],
        fotos: ["assets/Equipos/1/jugadores/1.jpg"]
      },
      {
        id: 11,
        nombre: " JOSE LUIS",
        apellidos: "FERNANDEZ ALIAS",
        fechaNacimiento: "10/11/2003",
        equipos: [2],
        fotos: ["assets/Equipos/2/jugadores/11.jpg"]
      },

      {
        id: 12,
        nombre: " NICOLÁS",
        apellidos: "FIGUEREDO MARTÍN",
        fechaNacimiento: "08/03/2000",
        equipos: [1, 2],
        fotos: ["assets/Equipos/1/jugadores/1.jpg"]
      },

      {
        id: 13,
        nombre: "JOSE ANTONIO",
        apellidos: "GARCIA ORTEGA",
        fechaNacimiento: "16/01/2004",
        equipos: [2],
        fotos: ["assets/Equipos/1/jugadores/1.jpg"]
      },

      {
        id: 14,
        nombre: "DANIEL",
        apellidos: "MOMPEAN SANCHEZ",
        fechaNacimiento: "15/06/2001",
        equipos: [2],
        fotos: ["assets/Equipos/1/jugadores/1.jpg"]
      },
      {
        id: 15,
        nombre: "GUILLERMO",
        apellidos: "ORENES MIÑANA",
        fechaNacimiento: "03/04/2004",
        equipos: [2],
        fotos: ["assets/Equipos/2/jugadores/15.jpg"]
      },

      {
        id: 84,
        nombre: "DAVID",
        apellidos: "GRANADOS TRILLO BOHAJAR",
        fechaNacimiento: "22/06/2004",
        equipos: [2],
        fotos: ["assets/Equipos/2/jugadores/84.jpg"]
      },

      {
        id: 85,
        nombre: "MANUEL PEDRO",
        apellidos: "SALA ARENAS",
        fechaNacimiento: "04/01/1973",
        equipos: [2],
        fotos: ["assets/Equipos/2/jugadores/85.jpg"]
      },

      {
        id: 16,
        nombre: "DOMINGO ALFREDO",
        apellidos: "RAMIREZ RECHE",
        fechaNacimiento: "12/01/1972",
        equipos: [2],
        fotos: ["assets/Equipos/2/jugadores/16.jpg"]
      },

      {
        id: 17,
        nombre: "LÁZARO",
        apellidos: "SALAR MOLINA",
        fechaNacimiento: "24/12/1998",
        equipos: [2],
        fotos: ["assets/Equipos/2/jugadores/17.jpg"]
      },

      {
        id: 18,
        nombre: "PEDRO",
        apellidos: "VALERA LAFUENTE",
        fechaNacimiento: "01/12/2004",
        equipos: [1, 2],
        fotos: ["assets/Equipos/2/jugadores/18.jpg"]
      },
      {
        id:19,
        nombre: "SANTIAGO",
        apellidos: "ALCANTARA MARTINEZ",
        fechaNacimiento: "22/06/2006",
        equipos: [1,2,3],
        fotos: ["assets/Equipos/3/jugadores/19.jpg"]
      },

      {
        id: 20,
        nombre: "CARLOS",
        apellidos: "CANO CANOVAS",
        fechaNacimiento: "06/02/2007",
        equipos: [3],
        fotos: ["assets/Equipos/3/jugadores/20.jpg"]
      },

      {
        id: 21,
        nombre: "CRISTIAN",
        apellidos: "FENOLL GARCIA",
        fechaNacimiento: "05/10/2006",
        equipos: [3],
        fotos: ["assets/Equipos/3/jugadores/21.jpg"]
      },

      {
        id: 22,
        nombre: "HAITHAM",
        apellidos: "HAOUID SETTI",
        fechaNacimiento: "28/08/2006",
        equipos: [3],
        fotos: ["assets/Equipos/3/jugadores/22.jpg"]
      },

      {
        id: 23,
        nombre: "JESUS",
        apellidos: "LORCA GUIRAO",
        fechaNacimiento: "12/06/2006",
        equipos: [2,3],
        fotos: ["assets/Equipos/3/jugadores/23.jpg"]
      },

      {
        id: 24,
        nombre: "LUCAS",
        apellidos: "LORCA GUIRAO",
        fechaNacimiento: "14/08/2008",
        equipos: [2, 3],
        fotos: ["assets/Equipos/3/jugadores/24.jpg"]
      },
      {
        id: 25,
        nombre: "MIGUEL",
        apellidos: "PEREZ GRAO",
        fechaNacimiento: "22/03/2006",
        equipos: [3],
        fotos: ["assets/Equipos/3/jugadores/25.jpg"]
      },

     

      {
        id: 27,
        nombre: "DOMINGO",
        apellidos: "ROCA CASANOVA",
        fechaNacimiento: "26/04/2006",
        equipos: [3],
        fotos: ["assets/Equipos/3/jugadores/27.jpg"]
      },

      {
        id: 28,
        nombre: "MIGUEL",
        apellidos: "VELA GARCÍA",
        fechaNacimiento: "19/12/2006",
        equipos: [2,3],
        fotos: ["assets/Equipos/3/jugadores/28.jpg"]
      },
      {
        id: 29,
        nombre: "DAVID",
        apellidos: "ANDUGAR PIQUERAS",
        fechaNacimiento: "29/05/2009",
        equipos: [4],
        fotos: ["assets/Equipos/4/jugadores/29.jpg"]
      },

      {
        id: 30,
        nombre: " KEVIN SAUL",
        apellidos: "ASTURAY VITELLA",
        fechaNacimiento: "13/08/2009",
        equipos: [4],
        fotos: ["assets/Equipos/4/jugadores/30.jpg"]
      },
      {
        id: 31,
        nombre: "DAVID",
        apellidos: "CUTILLAS PACHECO",
        fechaNacimiento: "28/09/2009",
        equipos: [4],
        fotos: ["assets/Equipos/4/jugadores/31.jpg"]
      },
      {
        id: 83,
        nombre: "MARTIN",
        apellidos: "BOJ ACSOVA",
        fechaNacimiento: "07/03/2009",
        equipos: [3,4],
        fotos: ["assets/Equipos/4/jugadores/83.jpg"]
      },

      {
        id: 32,
        nombre: "ALI",
        apellidos: "EZZANNAD",
        fechaNacimiento: "19/05/2009",
        equipos: [4],
        fotos: ["assets/Equipos/4/jugadores/32.jpg"]
      },

      {
        id: 33,
        nombre: "ALEJANDRO",
        apellidos: "HONRADO AYLLON",
        fechaNacimiento: "15/10/2009",
        equipos: [4],
        fotos: ["assets/Equipos/4/jugadores/33.jpg"]
      },

      {
        id: 34,
        nombre: "ISMAIL",
        apellidos: "KECHADI",
        fechaNacimiento: "24/05/2009",
        equipos: [4],
        fotos: ["assets/Equipos/4/jugadores/34.jpg"]
      },
      {
        id: 35,
        nombre: "MARCELO DE LA CRUZ",
        apellidos: "NAVARRO ALMARCHA",
        fechaNacimiento: "02/05/2009",
        equipos: [3,4],
        fotos: ["assets/Equipos/4/jugadores/35.jpg"]
      },

      {
        id: 36,
        nombre: "LAUTARO",
        apellidos: "QUERIO LAURIA",
        fechaNacimiento: "29/08/2009",
        equipos: [4],
        fotos: ["assets/Equipos/4/jugadores/36.jpg"]
      },

      {
        id: 37,
        nombre: "YAGO",
        apellidos: "RICÓN GIERA",
        fechaNacimiento: "01/02/2008",
        equipos: [3, 4],
        fotos: ["assets/Equipos/4/jugadores/37.jpg"]
      },

      {
        id: 38,
        nombre: " JUAN FRANCISCO",
        apellidos: "VALDÉS CLEMENTE",
        fechaNacimiento: "25/04/2008",
        equipos: [3, 4],
        fotos: ["assets/Equipos/4/jugadores/38.jpg"]
      },
      {
        id: 39,
        nombre: "ALVARO",
        apellidos: "VELA MIRA",
        fechaNacimiento: "28/07/2008",
        equipos: [3, 4],
        fotos: ["assets/Equipos/4/jugadores/39.jpg"]
      },

      {
        id: 40,
        nombre: "SERGIO",
        apellidos: "BARBA SINDE",
        fechaNacimiento: "06/08/2010",
        equipos: [4,5],
        fotos: ["assets/Equipos/5/jugadores/40.jpg"]
      },

      {
        id: 41,
        nombre: "HUGO",
        apellidos: "BOHAJAR ROMERO",
        fechaNacimiento: "03/05/2010",
        equipos: [5],
        fotos: ["assets/Equipos/5/jugadores/41.jpg"]
      },
      {
        id: 42,
        nombre: "RODRIGO",
        apellidos: "CORTES GARCIA",
        fechaNacimiento: "24/02/2010",
        equipos: [5],
        fotos: ["assets/Equipos/5/jugadores/41.jpg"]
      },

      {
        id: 43,
        nombre: "DARIO",
        apellidos: "FERRE GALVEZ",
        fechaNacimiento: "21/12/2010",
        equipos: [5],
        fotos: ["assets/Equipos/5/jugadores/43.jpg"]
      },

      {
        id: 44,
        nombre: "MIGUEL",
        apellidos: "HORTELANO PEREZ",
        fechaNacimiento: "03/05/2010",
        equipos: [5],
        fotos: ["assets/Equipos/5/jugadores/44.jpg"]
      },
      {
        id: 45,
        nombre: "GONZALO",
        apellidos: "ILLAN ORTEGA",
        fechaNacimiento: "03/07/2010",
        equipos: [4,5],
        fotos: ["assets/Equipos/5/jugadores/45.jpg"]
      },

      {
        id: 46,
        nombre: "IGNACIO",
        apellidos: "MARTINEZ BALLESTER",
        fechaNacimiento: "28/02/2010",
        equipos: [5],
        fotos: ["assets/Equipos/5/jugadores/46.jpg"]
      },

      {
        id: 47,
        nombre: "CARLOS",
        apellidos: "RIQUELME BALUMBAR",
        fechaNacimiento: "06/07/2010",
        equipos: [4,5],
        fotos: ["assets/Equipos/5/jugadores/47.jpg"]
      },
      {
        id: 48,
        nombre: "DAVID",
        apellidos: "SERRANO CAMARA",
        fechaNacimiento: "02/08/2010",
        equipos: [5],
        fotos: ["assets/Equipos/5/jugadores/48.jpg"]
      },

      {
        id: 49,
        nombre: "ROBERTO",
        apellidos: "ARIAS GONZALEZ",
        fechaNacimiento: "28/05/2011",
        equipos: [6],
        fotos: ["assets/Equipos/6/jugadores/49.jpg"]
      },

      {
        id: 50,
        nombre: "KHALID",
        apellidos: "EL KHOUAKHI BATOUTE",
        fechaNacimiento: "18/12/2011",
        equipos: [6],
        fotos: ["assets/Equipos/6/jugadores/50.jpg"]
      },
      {
        id: 51,
        nombre: "ÁLVARO",
        apellidos: "GALLEGO GARCÍA",
        fechaNacimiento: "22/05/2011",
        equipos: [6],
        fotos: ["assets/Equipos/6/jugadores/51.jpg"]
      },

      {
        id: 52,
        nombre: "DANIEL",
        apellidos: "HERNANDEZ ALEGRIA",
        fechaNacimiento: "04/02/2011",
        equipos: [6],
        fotos: ["assets/Equipos/6/jugadores/52.jpg"]
      },

      {
        id: 53,
        nombre: "LUIS",
        apellidos: "JIMENO GARCIA",
        fechaNacimiento: "24/11/2011",
        equipos: [6],
        fotos: ["assets/Equipos/6/jugadores/53.jpg"]
      },
      {
        id: 54,
        nombre: "ANDRES",
        apellidos: "LOPEZ BLAZQUEZ",
        fechaNacimiento: "02/05/2011",
        equipos: [6],
        fotos: ["assets/Equipos/6/jugadores/54.jpg"]
      },

      {
        id: 55,
        nombre: "FRANCISCO JAVIER",
        apellidos: "MESEGUER ANDRADA",
        fechaNacimiento: "13/03/2011",
        equipos: [6],
        fotos: ["assets/Equipos/6/jugadores/55.jpg"]
      },
      {
        id: 56,
        nombre: "MANUEL PEDRO",
        apellidos: "SALA ROSA",
        fechaNacimiento: "14/08/2011",
        equipos: [6],
        fotos: ["assets/Equipos/6/jugadores/56.jpg"]
      },
      {
        id: 57,
        nombre: "ROBERTO",
        apellidos: "SANCHEZ SPIN",
        fechaNacimiento: "14/04/2011",
        equipos: [6],
        fotos: ["assets/Equipos/6/jugadores/57.jpg"]
      },

      {
        id: 58,
        nombre: "FRANCESC",
        apellidos: "SUBIRATS BOJ",
        fechaNacimiento: "03/12/2011",
        equipos: [6],
        fotos: ["assets/Equipos/6/jugadores/58.jpg"]
      },
      {
        id: 87,
        nombre: "MERCEDES",
        apellidos: "SUBIRATS BOJ",
        fechaNacimiento: "03/12/2011",
        equipos: [6],
        fotos: ["assets/Equipos/7/jugadores/87.jpg"]
      },
      {
        id: 59,
        nombre: "ÁFRICA",
        apellidos: "ALEMÁN ARACIL",
        fechaNacimiento: "25/04/2012",
        equipos: [7],
        fotos: ["assets/Equipos/7/jugadores/59.jpg"]
      },
      {
        id: 60,
        nombre: "RODRIGO",
        apellidos: "ANDREU GIL",
        fechaNacimiento: "24/12/2013",
        equipos: [7],
        fotos: ["assets/Equipos/7/jugadores/60.jpg"]
      },
      {
        id: 61,
        nombre: "SAMSON",
        apellidos: "ANTHONY ORUMWENSODIA",
        fechaNacimiento: "04/06/2013",
        equipos: [7],
        fotos: ["assets/Equipos/7/jugadores/61.jpg"]
      },
      {
        id: 62,
        nombre: "ALEJANDRO",
        apellidos: "CAMPILLO MEIRE",
        fechaNacimiento: "02/11/2012",
        equipos: [7],
        fotos: ["assets/Equipos/7/jugadores/62.jpg"]
      },
      {
        id: 63,
        nombre: "ANGEL",
        apellidos: "CASES VERDU",
        fechaNacimiento: "02/02/2012",
        equipos: [7],
        fotos: ["assets/Equipos/7/jugadores/63.jpg"]
      },

      {
        id: 64,
        nombre: "AARON",
        apellidos: "GRAU VIVES",
        fechaNacimiento: "25/09/2013",
        equipos: [7],
        fotos: ["assets/Equipos/7/jugadores/64.jpg"]
      },
      {
        id: 65,
        nombre: "MARCOS",
        apellidos: "MARTINEZ BALLESTER",
        fechaNacimiento: "04/04/2012",
        equipos: [6,7],
        fotos: ["assets/Equipos/7/jugadores/65.jpg"]
      },
      {
        id: 66,
        nombre: "ADRIAN",
        apellidos: "MARTÍNEZ GONZALEZ",
        fechaNacimiento: "19/12/2013",
        equipos: [7],
        fotos: ["assets/Equipos/7/jugadores/66.jpg"]
      },
      {
        id: 67,
        nombre: "NICOLÁS",
        apellidos: "MIRETE BOJ",
        fechaNacimiento: "25/12/2013",
        equipos: [7],
        fotos: ["assets/Equipos/7/jugadores/67.jpg"]
      },

      {
        id: 68,
        nombre: "PEDRO",
        apellidos: "MOLINA ORTEGA",
        fechaNacimiento: "24/01/2012",
        equipos: [6, 7],
        fotos: ["assets/Equipos/7/jugadores/68.jpg"]
      },
      {
        id: 69,
        nombre: "JOSÉ FRANCISCO",
        apellidos: "NAVARRO MONTAÑO",
        fechaNacimiento: "19/01/2013",
        equipos: [7],
        fotos: ["assets/Equipos/7/jugadores/69.jpg"]
      },
      {
        id: 70,
        nombre: "DARIO",
        apellidos: "SANCHEZ RODRIGUEZ",
        fechaNacimiento: "14/05/2012",
        equipos: [6,7],
        fotos: ["assets/Equipos/7/jugadores/70.jpg"]
      },

      {
        id: 71,
        nombre: "JORGE",
        apellidos: "CAPEL ROBLES",
        fechaNacimiento: "30/10/2014",
        equipos: [ 8],
        fotos: ["assets/Equipos/8/jugadores/71.jpg"]
      },
      {
        id: 72,
        nombre: "JORGE",
        apellidos: "CASES VERDÚ",
        fechaNacimiento: "22/12/2015",
        equipos: [8],
        fotos: ["assets/Equipos/8/jugadores/72.jpg"]
      },
      {
        id: 73,
        nombre: "JOSÉ IRENO",
        apellidos: "GONZÁLEZ FERNÁNDEZ",
        fechaNacimiento: "18/02/2014",
        equipos: [8],
        fotos: ["assets/Equipos/8/jugadores/73.jpg"]
      },

      {
        id: 74,
        nombre: "LUCAS",
        apellidos: "PISTÓN ALCARAZ",
        fechaNacimiento: "22/04/2015",
        equipos: [8],
        fotos: ["assets/Equipos/8/jugadores/74.jpg"]
      },
      {
        id: 75,
        nombre: "CRISTIAN",
        apellidos: "LOPEZ BLAZQUEZ",
        fechaNacimiento: "23/01/2016",
        equipos: [8],
        fotos: ["assets/Equipos/8/jugadores/75.jpg"]
      },
      {
        id: 76,
        nombre: "DANIEL",
        apellidos: "MUÑOZ MUÑOZ",
        fechaNacimiento: "07/11/2014",
        equipos: [8],
        fotos: ["assets/Equipos/8/jugadores/76.jpg"]
      },

      {
        id: 77,
        nombre: "IVÁN",
        apellidos: "SÁNCHEZ ACOSTA",
        fechaNacimiento: "05/12/2014",
        equipos: [7,8],
        fotos: ["assets/Equipos/8/jugadores/77.jpg"]
      },
      {
        id: 78,
        nombre: "ÓSCAR",
        apellidos: "SÁNCHEZ NAVARRO",
        fechaNacimiento: "24/07/2014",
        equipos: [8],
        fotos: ["assets/Equipos/8/jugadores/78.jpg"]
      },
      {
        id: 79,
        nombre: "CESAR",
        apellidos: "SANCHEZ RODRIGUEZ",
        fechaNacimiento: "26/10/2016",
        equipos: [8],
        fotos: ["assets/Equipos/8/jugadores/79.jpg"]
      },

      {
        id: 80,
        nombre: "PABLO",
        apellidos: "SERRANO MARTÍNEZ",
        fechaNacimiento: "21/02/2014",
        equipos: [8],
        fotos: ["assets/Equipos/8/jugadores/80.jpg"]
      },
      {
        id: 81,
        nombre: "NACHO",
        apellidos: "VILLAESCUSA FUENTES",
        fechaNacimiento: "21/08/2016",
        equipos: [8],
        fotos: ["assets/Equipos/8/jugadores/81.jpg"]
      },
      {
        id: 82,
        nombre: "ROQUE",
        apellidos: "VILLAESCUSA FUENTES",
        fechaNacimiento: "13/02/2014",
        equipos: [7,8],
        fotos: ["assets/Equipos/8/jugadores/82.jpg"]
      },

      


    ];

    return jugadores;
  }

  getJugadores() {
    return Promise.resolve(this.getData());
  }


 getJugadoresEquipo(idEquipo: number) {

   let jugadores: JugadorEquipo[] = [];
   let cont:number = 0;

    /*this.getData().forEach(
      function (element) {
       
        for (let i = 0; i < element.equipos.length; i++) {
         
          if (element.equipos[i] == idEquipo) {
            let jugadorEquipo: JugadorEquipo = {
              jugador: element,
              dorsal: cont.toString(),
              fotos:[]
            };
            jugadorEquipo.fotos.push(element.fotos[0]);
            jugadores.push(jugadorEquipo);
            cont++;
            
            


          }
        }
       

      }


    );*/

    return jugadores;
  }
};
