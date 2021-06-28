import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { TipoRoupaComponent } from './tipo-roupa/tipo-roupa.component';
import { TipoRoupaDetalheComponent } from './tipo-roupa-detalhe/tipo-roupa-detalhe.component';
import { TiposRoupaRoutingModule } from './tipos-roupas.routing';


@NgModule({
    imports: [
        CommonModule,
        TiposRoupaRoutingModule,
        MatCardModule,
        NgxDatatableModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        TipoRoupaComponent,
        TipoRoupaDetalheComponent],
    providers: [],
})
export class TiposRoupaModule { }
