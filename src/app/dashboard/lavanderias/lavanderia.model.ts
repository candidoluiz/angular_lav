import { Cidade } from './../../shared/models/cidade.model';
export interface Lavanderia{
    id: number
    nome: string
    cnpj: string
    telefone: string
    endereco: string
    numero: string
    cidade: Cidade
    cep: string
}