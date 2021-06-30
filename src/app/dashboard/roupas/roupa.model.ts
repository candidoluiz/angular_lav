import { Lavagem } from './../lavagens/lavagem.model';
import { TipoRoupa } from '../tipos_roupa/tipo-roupa';
import { Tecido } from './../tecidos/tecido.model';
export interface Roupa{
    id: number
    modelo: string 
    tipo: TipoRoupa
    tecido: Tecido
    ano: number
    estacao: string
    lavagem: Lavagem[]
}