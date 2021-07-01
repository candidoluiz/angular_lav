import { Lavanderia } from './../lavanderia.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LavanderiaService } from '../lavanderia.service';

@Injectable({providedIn: 'root'})

export class LavanderiaResolverGuard implements Resolve<Lavanderia> {

    constructor(private service: LavanderiaService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lavanderia> {

        if(route.params && route.params['id']){
            return this.service.getById(route.params['id'])
        }
        return of({
            id: null,
            nome: null,
            cnpj: null,
            telefone: null,
            endereco: null,
            numero: null,
            uf: null,
            cidade: null,
            cep: null            
        });
    }
}