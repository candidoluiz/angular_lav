import { TecidosRoutingModule } from './tecidos.routing';
import { TecidoDetalheComponent } from './tecido-detalhe/tecido-detalhe.component';
import { TecidoComponent } from './tecido/tecido.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
    imports: [
        CommonModule,        
        MatCardModule,
        NgxDatatableModule,
        RouterModule,
        TecidosRoutingModule],
    exports: [],
    declarations: [
        TecidoComponent, 
        TecidoDetalheComponent
    ],
    providers: [],
})
export class TecidosModule { }
