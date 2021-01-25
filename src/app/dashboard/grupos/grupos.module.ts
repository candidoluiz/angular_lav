import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GruposRoutingModule } from './grupo.routing';
import { GrupoComponent } from './grupo/grupo.component';
import { GrupoDetalheComponent } from './grupo-detalhe/grupo-detalhe.component';

@NgModule({
    imports: [
        GruposRoutingModule,
        CommonModule,
        MatCardModule,
        NgxDatatableModule,
        RouterModule
    ],
    exports: [],
    declarations: [GrupoComponent, GrupoDetalheComponent],
    providers: [],
})
export class GruposModule { }
