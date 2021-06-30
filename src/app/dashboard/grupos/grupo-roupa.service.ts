import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { GrupoRoupa } from './grupo-roupa.model';

@Injectable({providedIn: 'root'})
export class GruposService extends BaseService<GrupoRoupa>{

    //private   API = `${LAVANDERIA_API}tecidos`;
    
    constructor(http: HttpClient) {
        super('grupos', http)
     }
}