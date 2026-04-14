import { Temporada } from "./temporada";

export interface Novedad {
  id: number,
  titulo: string,
  portada: string,
  subtitulo: string,
  tituloEnlace: string,
  enlace: string,
  orden: number,
  activo: boolean,
  file: File | string;
  //fijar No aparecera en la tabla para dar de alta, dato requerrente 
  fijar: boolean,
  temporada: Temporada,
  url: string;
  thumbnail: string,
  enlaceExterno: boolean,
  
}
export interface Promocion {
  id: number,
  titulo: string,
  portada: string,
  subtitulo: string,
  tituloEnlace: string,
  enlace: string,
  orden: number,
  thumbnail: string,
  enlaceExterno: boolean,

}


