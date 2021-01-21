import { TesteFormComponent } from './teste-form/teste-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TesteDetalheComponent } from './teste-detalhe/teste-detalhe.component';
import { TesteComponent } from './teste.component';


const routes: Routes = [    
        {path: '', component: TesteDetalheComponent},
        {path: 'novo', component: TesteFormComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TesteRoutingModule{}