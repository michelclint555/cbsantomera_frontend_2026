import { Jugador } from "./jugador";
import { Tecnico } from "./tecnico";

export interface JugadorEquipo {
  

  jugador: Jugador;
  dorsal: number;
  id: number; //ID del jugadorEquipo
  fotos: FotoJugadorEquipo[];
  //tecnico: Tecnico;
  

}
export interface FotoJugadorEquipo {
  id: string,
  idJugador: string,
  IdEquipo: number,
  fecha: string | Date,
  thumbnailImageSrc: string,
  foto: string | null;
  urlFoto: string | null;
  imagen: File | null;
  principal: boolean;
  secundaria: boolean;

}
