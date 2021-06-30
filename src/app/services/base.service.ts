// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';

import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Injectable } from '@angular/core';
import { Datatable } from 'app/shared/models/dataTable.model';
//import { LAVANDERIA_API } from '../../../../app.lavanderia-api';
import { tap, catchError, take, delay, map, retry } from 'rxjs/operators';
//import { ErrorHandler } from '../../../../error-handler';
//import { Observable } from 'rxjs';
import { LAVANDERIA_API } from '../../../app.lavanderia-api';
import { ErrorHandler } from '../../../error-handler';
import { EntidadeBase } from 'app/shared/models/entidade-base.model';


export class BaseService<T extends EntidadeBase> {

    url = LAVANDERIA_API;
    headers = new HttpHeaders();

  constructor(recurso: string, public http: HttpClient) {
    this.url = this.url  + recurso;
    //this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  getAll() {
    return this.http.get<T[]>(this.url)
    .pipe(
        map((res:any)=>{
            let data = JSON.parse(JSON.stringify(res));
            const dataTable = new Datatable();
            dataTable.dados = data
            return dataTable;
        }),catchError(ErrorHandler.handlerError),
    )      
  }
  getById(id: number){
    return this.http.get<T>(`${this.url}/${id}`)
    .pipe(
        catchError(ErrorHandler.handlerError)
    )
}

private create(obj: T){
    return this.http.post(this.url, obj).pipe(take(1));
}

private update(obj: T){
    return this.http.put(`${this.url}/${obj.id}`, obj).pipe(take(1));
}
save(obj: T) {
    if (obj.id) {
      return this.update(obj);
    }
    return this.create(obj);
}
remove(id) {
    console.log(`${this.url}/${id}`)        
    return this.http.delete(`${this.url}/${id}`).pipe(take(1));
}
/*
  consultarPorId(id: number): Observable<T> {
    return this.http.get(this.url + '/' + id)
      .map(res => res)
      .catch(erro => Observable.throw(erro));
  }

  salvar(objeto: T): Observable<T> {

    if (!objeto.id) {

      return this.http.post(this.url, JSON.stringify(objeto), {headers: this.headers})
        .map(res => res)
        .catch(erro => {
          return Observable.throw(erro)
        });
    } else {
      return this.http.put(this.url + '/' + objeto.id, JSON.stringify(objeto), {headers: this.headers})
        .map(res => res)
        .catch(erro => {
          return Observable.throw(erro)
        });
    }
  }

  excluir(id: number): Observable<any> {

    return this.http.delete(this.url + '/' + id, {responseType: 'text'});
  }
*/
}
