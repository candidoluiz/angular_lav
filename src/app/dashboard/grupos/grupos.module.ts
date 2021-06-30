import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GruposRoutingModule } from './grupo.routing';
import { GrupoComponent } from './grupo-form/grupo.component';
import { GrupoDetalheComponent } from './grupo-detalhe/grupo-detalhe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GruposService } from './grupo-roupa.service';

@NgModule({
    imports: [
        GruposRoutingModule,
        CommonModule,
        MatCardModule,
        NgxDatatableModule,
        RouterModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        FormsModule
    ],
    exports: [],
    declarations: [GrupoComponent, GrupoDetalheComponent],
    providers: [GruposService],
})
export class GruposModule { }
