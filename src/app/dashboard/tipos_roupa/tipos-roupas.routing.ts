import { TipoRoupaDetalheComponent } from './tipo-roupa-detalhe/tipo-roupa-detalhe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TipoRoupaComponent } from './tipo-roupa-form/tipo-roupa.component';
import { TipoRoupaResolverGuard } from './guards/tipo-roupa-resolver.guard';


const routes: Routes = [    
    {path: '', component: TipoRoupaDetalheComponent},
    {path: 'novo', component: TipoRoupaComponent,
    resolve: {
        tipoRoupa: TipoRoupaResolverGuard 
    }},
    {path: 'editar/:id', component: TipoRoupaComponent,
    resolve: {
        tipoRoupa: TipoRoupaResolverGuard 
    }},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TiposRoupaRoutingModule{}