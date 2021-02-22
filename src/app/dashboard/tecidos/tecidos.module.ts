import { GradeModule } from './../../shared/grade/grade.module';
import { TecidosRoutingModule } from './tecidos.routing';
import { TecidoDetalheComponent } from './tecido-detalhe/tecido-detalhe.component';
import { TecidoComponent } from './tecido/tecido.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TecidosService } from './tecidos.service';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        NgxDatatableModule,
        RouterModule,
        TecidosRoutingModule,
        GradeModule,
        NgxSpinnerModule
    ],
    exports: [],
    declarations: [
        TecidoComponent, 
        TecidoDetalheComponent,
    ],
    providers: [TecidosService],
})
export class TecidosModule { }
