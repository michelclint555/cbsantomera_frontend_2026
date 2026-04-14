import { FuncionView } from "./tecnico";
import { Temporada } from "./temporada";

export interface Empresa{
  id: number,
  nombre: string,
  tipo: string,
  logo: string,
  src: string,
  url: string,
  FuncionView: FuncionView,
  fechaRegistro: Date | string,
  esActivo: boolean
  imagen:  File | string,
}



export interface ContratoEmpresa {
  id: number,
  empresa: Empresa,
  logo: string,
  tipo: string,
  temporada: Temporada
  condiciones: string,
  contribucion: number,
  url: string,
  tipoView: FuncionView,
  empresaView: FuncionView,
  temporadaView: FuncionView,
  fechaCreacion: Date | string,


}
export interface EmpresaDto {

  nombre: string,
  tipo: string,
  logo: string,
  nombreUrl: string,
  url: string,
}
export interface EmpresaDTO1 {
  Id: number,
  nombre: string,
  tipo: string,
  logo: string,
  url: string,
  fechaRegistro: Date | string,


}
