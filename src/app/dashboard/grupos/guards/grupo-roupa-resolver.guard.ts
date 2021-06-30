import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GrupoRoupa } from '../grupo-roupa.model';
import { GruposService } from '../grupo-roupa.service';

@Injectable({providedIn: 'root'})

export class GruposResolverGuard implements Resolve<GrupoRoupa> {

    constructor(private service: GruposService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GrupoRoupa> {

        if(route.params && route.params['id']){
            return this.service.getById(route.params['id'])
        }
        return of({
            id: null,
            nome: null,
        });
    }
}