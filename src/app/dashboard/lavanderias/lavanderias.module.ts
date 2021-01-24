import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LavanderiasRoutingModule } from './lavanderias.routing';
import { LavanderiaDetalheComponent } from './lavanderia-detalhe/lavanderia-detalhe.component';
import { LavanderiaComponent } from './lavanderia/lavanderia.component';



@NgModule({
    imports: [
        LavanderiasRoutingModule,
        CommonModule,
        MatCardModule,
        NgxDatatableModule,
        RouterModule
    ],
    exports: [],
    declarations: [LavanderiaDetalheComponent, LavanderiaComponent],
    providers: [],
})
export class LavanderiasModule { }
