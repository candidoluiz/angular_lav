import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandler } from '../../../../error-handler';
import { TipoRoupa } from './tipo-roupa.model';


@Injectable({providedIn: 'root'})
export class TipoRoupaService extends BaseService<TipoRoupa>{
    
    constructor(http: HttpClient) {
        super('tipoRoupa', http)
     }

     listarParaSelecionar() {
        return this.http.get<TipoRoupa[]>(this.url)
        .pipe(
            map((res:any) => {
      
              const objetos: Array<TipoRoupa> = JSON.parse(JSON.stringify(res));
      
              for (let i = 0; i < objetos.length; i++) {
                objetos[i].text = String(objetos[i].nome);
              }      
              return objetos;
            }),catchError(ErrorHandler.handlerError)
    
        )    
      }

}