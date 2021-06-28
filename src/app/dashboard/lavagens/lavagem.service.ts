import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datatable } from 'app/shared/models/dataTable.model';
import { LAVANDERIA_API } from '../../../../app.lavanderia-api';
import { tap, catchError, take, delay, map, retry } from 'rxjs/operators';
import { ErrorHandler } from '../../../../error-handler';
import { Lavagem } from './lavagem.model';

@Injectable({providedIn: 'root'})
export class LavagensService {

    private   API = `${LAVANDERIA_API}lavagens`;
    
    constructor(private http: HttpClient) { }

    getAll(){
        return this.http.get<Datatable>(this.API)
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
    getAllDisponivel(){
        return this.http.get<Datatable>(this.API)
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

    getById(id: number){
        return this.http.get<Lavagem>(`${this.API}/${id}`)
        .pipe(
            catchError(ErrorHandler.handlerError)
        )
      }
    
}