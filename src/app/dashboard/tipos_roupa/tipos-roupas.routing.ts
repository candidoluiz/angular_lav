import { TipoRoupaDetalheComponent } from './tipo-roupa-detalhe/tipo-roupa-detalhe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TipoRoupaComponent } from './tipo-roupa/tipo-roupa.component';


const routes: Routes = [    
    {path: '', component: TipoRoupaDetalheComponent},
    {path: 'novo', component: TipoRoupaComponent},
    {path: 'editar/:id', component: TipoRoupaComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TiposRoupaRoutingModule{}