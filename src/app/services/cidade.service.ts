import { Cidade } from './../shared/models/cidade.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandler } from '../../../error-handler';


@Injectable({providedIn: 'root'})
export class CidadeService extends BaseService<Cidade>{
    
    constructor(http: HttpClient) {
        super('cidade', http)
     }

     getCidade(uf){
        return this.http.get<Cidade[]>(this.url)
        .pipe(
            map((cidades:Cidade[])=> cidades.filter(c => c.uf === uf)),
            map((res:any) => {
      
              const objetos: Array<Cidade> = JSON.parse(JSON.stringify(res));                
              for (let i = 0; i < objetos.length; i++) {
                  if(objetos[i]['uf'] == uf){                     
                      objetos[i].text = String(objetos[i].nome);
                  }
              }   
              return objetos;
            }),catchError(ErrorHandler.handlerError)
    
        ) 
     }
    
}