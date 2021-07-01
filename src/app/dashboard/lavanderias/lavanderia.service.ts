import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { Datatable } from 'app/shared/models/dataTable.model';
import { LAVANDERIA_API } from '../../../../app.lavanderia-api';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandler } from '../../../../error-handler';
import { Lavanderia } from './lavanderia.model';

@Injectable({providedIn: 'root'})
export class LavanderiaService extends BaseService<Lavanderia>{
    
    constructor(http: HttpClient) {
        super('lavanderias', http)
     }    
}