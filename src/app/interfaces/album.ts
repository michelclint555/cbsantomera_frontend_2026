import { Temporada } from "./temporada";

export interface Album {
  portada: string,
  nombre: string,
  idAlbum: number,
  fecha: string | Date,
  fotos: string[],
  fotosAlbum: FotoAlbum[],
  descripcion: string,
  temporada: Temporada
}

export interface FotoAlbum {
  idFoto: string,
  imagen: string,
  idAlbum: number,
  fecha: string | Date,
  thumbnailImageSrc: string
}
