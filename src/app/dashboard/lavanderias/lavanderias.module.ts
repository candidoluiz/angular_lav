import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LavanderiasRoutingModule } from './lavanderias.routing';
import { LavanderiaDetalheComponent } from './lavanderia-detalhe/lavanderia-detalhe.component';
import { LavanderiaComponent } from './lavanderia-form/lavanderia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LavanderiaService } from './lavanderia.service';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
    imports: [
        LavanderiasRoutingModule,
        CommonModule,
        MatCardModule,
        NgxDatatableModule,
        RouterModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        FormsModule,
        MatSelectModule
    ],
    exports: [],
    declarations: [LavanderiaDetalheComponent, LavanderiaComponent],
    providers: [LavanderiaService],
})
export class LavanderiasModule { }
