import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tecido } from './tecido.model';
import { BaseService } from 'app/services/base.service';

@Injectable({providedIn: 'root'})
export class TecidosService extends BaseService<Tecido>{

    //private   API = `${LAVANDERIA_API}tecidos`;
    
    constructor(http: HttpClient) {
        super('tecidos', http)
     }
/*
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

    getById(id: number){
        return this.http.get<Tecido>(`${this.API}/${id}`)
        .pipe(
            catchError(ErrorHandler.handlerError)
        )
    }

    private create(tecido: Tecido){
        return this.http.post(this.API, tecido).pipe(take(1));
    }

    private update(tecido: Tecido){
        return this.http.put(`${this.API}/${tecido.id}`, tecido).pipe(take(1));
    }
    save(tecido: Tecido) {
        if (tecido.id) {
          return this.update(tecido);
        }
        return this.create(tecido);
    }
    remove(id) {
        console.log(`${this.API}/${id}`)        
        return this.http.delete(`${this.API}/${id}`).pipe(take(1));
    }
    */
}