import { GrupoComponent } from './grupo-form/grupo.component';
import { GrupoDetalheComponent } from './grupo-detalhe/grupo-detalhe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GruposResolverGuard } from './guards/grupo-roupa-resolver.guard';

const routes: Routes = [    
    {path: '', component: GrupoDetalheComponent},
    {path: 'novo', component: GrupoComponent,
    resolve: {
        grupoRoupa: GruposResolverGuard 
    }},
    {path: 'editar/:id', component: GrupoComponent,
    resolve: {
        grupoRoupa: GruposResolverGuard 
    }},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GruposRoutingModule{}