import { TecidosService } from './../tecidos.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Tecido } from '../tecido.model';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})

export class TecidoResolverGuard implements Resolve<Tecido> {

    constructor(private service: TecidosService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tecido> {

        if(route.params && route.params['id']){
            return this.service.getById(route.params['id'])
        }
        return of({
            id: null,
            nome: null,
            composicao: null,
            text: null
        });
    }
}