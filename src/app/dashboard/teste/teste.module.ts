import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TesteDetalheComponent } from './teste-detalhe/teste-detalhe.component';
import { TesteComponent } from './teste.component';
import { NgModule } from '@angular/core';
import { TesteRoutingModule } from './teste.routing';


@NgModule({
    imports: [
        CommonModule,
        TesteRoutingModule,
        RouterModule
    ],
    exports: [],
    declarations: [TesteComponent,TesteDetalheComponent],
    providers: [],
})
export class TesteModule { }
