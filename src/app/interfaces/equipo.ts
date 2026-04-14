import { JugadorEquipo } from "./JugadorEquipo"
import { Categoria } from "./categoria"
import { TecnicoEquipo } from "./tecnico"

export interface Equipo {
    idEquipo: number,
    nombre: string,
    idClub: number,
    idCategoriaJugador: number,
    categoria: Categoria,
    foto: string,

    tecnicos: TecnicoEquipo[],
  jugadores: JugadorEquipo[]


}


