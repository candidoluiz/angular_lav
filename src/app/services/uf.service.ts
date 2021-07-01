import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { Uf } from 'app/shared/models/uf.model';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandler } from '../../../error-handler';


@Injectable({providedIn: 'root'})
export class UfService extends BaseService<Uf>{
    
    constructor(http: HttpClient) {
        super('uf', http)
     }

     listarParaSelecionar() {
        return this.http.get<Uf[]>(this.url)
        .pipe(
            map((res:any) => {
      
              const objetos: Array<Uf> = JSON.parse(JSON.stringify(res));
      
              for (let i = 0; i < objetos.length; i++) {
                objetos[i].text = String(objetos[i].uf);
              }      
              return objetos;
            }),catchError(ErrorHandler.handlerError)
    
        )    
      }
}