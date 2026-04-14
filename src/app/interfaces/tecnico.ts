export interface Tecnico {
  apellidos: string,
  nombre: string,
  id: number,
  fechaNac: string | Date,
  funcion: string,

}



export interface TecnicoEquipo {
  idEquipo: string,
  id: string,
  tecnico: Tecnico,
  funcion: string,
  FuncionView: FuncionView,
  listaFotos: FotoTecnicoEquipo[],
}


export interface FotoTecnicoEquipo {

  id: string,
  thumbnailImageSrc: string,
  idEquipo: string,
  idTecnico: string,
  tecnico: string,
  imagen: File | string,
  url: string,
}
export interface FuncionView {

  label: string,
  name: string,
  id: 1,
}
