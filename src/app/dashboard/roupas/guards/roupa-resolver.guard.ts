import { RoupasService } from './../roupas.service';
import { Roupa } from './../roupa.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})

export class RoupaResolverGuard implements Resolve<Roupa> {

    constructor(private service: RoupasService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Roupa> {
       
        if(route.params && route.params['id']){
            return this.service.getById(route.params['id'])
        }

        return of({
            id: null,
            modelo: null, 
            tipo: null,
            tecido: null,
            ano: new Date().getFullYear(),
            estacao: null,
            lavagem: []
        });
    }
}