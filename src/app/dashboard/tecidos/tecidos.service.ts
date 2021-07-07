import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tecido } from './tecido.model';
import { BaseService } from 'app/services/base.service';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandler } from '../../../../error-handler';

@Injectable({providedIn: 'root'})
export class TecidosService extends BaseService<Tecido>{

    //private   API = `${LAVANDERIA_API}tecidos`;
    
    constructor(http: HttpClient) {
        super('tecido', http)
     }

     listarParaSelecionar() {
        return this.http.get<Tecido[]>(this.url)
        .pipe(
            map((res:any) => {
      
              const objetos: Array<Tecido> = JSON.parse(JSON.stringify(res));
      
              for (let i = 0; i < objetos.length; i++) {
                objetos[i].text = String(objetos[i].nome) + ' - ' +String(objetos[i].composicao);
              }      
              return objetos;
            }),catchError(ErrorHandler.handlerError)
    
        )    
      }

}