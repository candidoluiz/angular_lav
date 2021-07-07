import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { TipoRoupa } from '../tipo-roupa.model';
import { TipoRoupaService } from '../tipo-roupa.service';

@Injectable({providedIn: 'root'})

export class TipoRoupaResolverGuard implements Resolve<TipoRoupa> {

    constructor(private service: TipoRoupaService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TipoRoupa> {

        if(route.params && route.params['id']){
            return this.service.getById(route.params['id'])
        }
        return of({
            id: null,
            nome: null,
            text:null
        });
    }
}