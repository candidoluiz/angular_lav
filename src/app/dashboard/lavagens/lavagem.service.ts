import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lavagem } from './lavagem.model';
import { BaseService } from 'app/services/base.service';
import { Datatable } from 'app/shared/models/dataTable.model';
import { LAVANDERIA_API } from '../../../../app.lavanderia-api';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandler } from '../../../../error-handler';

@Injectable({providedIn: 'root'})
export class LavagensService extends BaseService<Lavagem>{
    
    constructor(http: HttpClient) {
        super('lavagens', http)
     }

     getAllDisponivel(){
        return this.http.get<Datatable>(this.url)
        .pipe(
            //delay(300),
            map((res: any)=>{
                let data = JSON.parse(JSON.stringify(res));
                const dataTable = new Datatable();
                dataTable.dados = data
                return dataTable;
            }),
                catchError(ErrorHandler.handlerError),
            //tap(console.log)
        );
    }

    
}