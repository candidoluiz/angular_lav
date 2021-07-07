import { Datatable } from './../../shared/models/dataTable.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Roupa } from './roupa.model';
import { tap, catchError, take, delay, map, retry } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { LAVANDERIA_API } from '../../../../app.lavanderia-api';
import { ErrorHandler } from '../../../../error-handler';

@Injectable({providedIn: 'root'})
export class RoupasService {

    private   API = `${LAVANDERIA_API}roupas`;

    constructor(private http: HttpClient) { }

    getAll(){
        let params = new HttpParams();

        return this.http.get<Datatable>(this.API)
        .pipe(
            map((res: any) => {
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
        return this.http.get<Roupa>(`${this.API}/${id}`)
        .pipe(
            catchError(ErrorHandler.handlerError)
        )
      }

      save(roupa: Roupa){
        
      }

      insert(){

      }

      update(){

      }

    //   handleError(error) {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {
    //         // client-side error
    //         errorMessage = `Error: ${error.error.message}`;
    //     } else {
    //         // server-side error
    //         errorMessage = `Erro Codigo: ${error.status}\nMessage: ${error.message}`;
    //     }
    //     console.log(errorMessage);
    //     return throwError(errorMessage);
    // }
    
}