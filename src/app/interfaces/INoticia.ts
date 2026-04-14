import { Album } from "./album";

export interface Noticia {
  idNoticia: number,
  titulo: string,
  subtitulo: string,
  tipoNoticia: string,
  fecha: string | Date,
  portada: string,
  etiquetas: string[],
  contenido: string
  promocion: boolean;
  nuevo: boolean;
  album?: Album;
  ThumbnailImageSrc: string;
}
