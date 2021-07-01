import { Cidade } from './../shared/models/cidade.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';


@Injectable({providedIn: 'root'})
export class CidadeService extends BaseService<Cidade>{
    
    constructor(http: HttpClient) {
        super('cidades', http)
     }

     getCidade(uf){

     }
    
}