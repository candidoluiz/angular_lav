import { RoupasRoutingModule } from './roupas.routing';
import { RoupaComponent } from './roupa/roupa.component';
import { RoupaDetalheComponent } from './roupa-detalhe/roupa-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoupasService } from './roupas.service';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RoupasRoutingModule,
        CommonModule,
        MatCardModule,
        NgxDatatableModule,
        RouterModule,
        NgxSpinnerModule
        ],
    exports: [],
    declarations: [
        RoupaDetalheComponent,
        RoupaComponent],
    providers: [RoupasService],
})
export class RoupasModule { }
