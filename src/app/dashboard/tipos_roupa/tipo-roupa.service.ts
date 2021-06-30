import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { TipoRoupa } from './tipo-roupa';

@Injectable({providedIn: 'root'})
export class TipoRoupaService extends BaseService<TipoRoupa>{
    
    constructor(http: HttpClient) {
        super('tiposRoupa', http)
     }

}