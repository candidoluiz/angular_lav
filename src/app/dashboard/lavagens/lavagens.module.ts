import { LavagensRoutingModule } from './lavagens.routing';
import { NgModule } from '@angular/core';
import { LavagemComponent } from './lavagem/lavagem.component';
import { LavagemDetalheComponent } from './lavagem-detalhe/lavagem-detalhe.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
    imports: [
        LavagensRoutingModule,
        CommonModule,
        MatCardModule,
        NgxDatatableModule,
        RouterModule
    ],
    exports: [],
    declarations: [LavagemComponent, LavagemDetalheComponent],
    providers: [],
})
export class LavagensModule { }
