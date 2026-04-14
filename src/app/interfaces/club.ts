import { Equipo } from "./equipo"

export interface Club {
    idClub: number,
    foto: string,
    nombre: string,
    alias: string,
  telefono: string
  listaEquipos: Equipo[];
}
