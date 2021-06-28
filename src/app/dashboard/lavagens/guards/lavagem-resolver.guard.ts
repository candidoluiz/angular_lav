import { LavagensService } from '../lavagem.service';
import { Lavagem } from '../lavagem.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})

export class LavagemResolverGuard implements Resolve<Lavagem> {

    constructor(private service: LavagensService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lavagem> {
       
        if(route.params && route.params['id']){
            return this.service.getById(route.params['id'])
        }

        return of({
            id: null,
            nome: null 
        });
    }
}