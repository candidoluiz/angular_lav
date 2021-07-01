import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LavanderiaComponent } from './lavanderia-form/lavanderia.component';
import { LavanderiaDetalheComponent } from './lavanderia-detalhe/lavanderia-detalhe.component';
import { LavanderiaResolverGuard } from './guards/lavanderia-resolver.guard';

const routes: Routes = [    
    {path: '', component: LavanderiaDetalheComponent},
    {path: 'novo', component: LavanderiaComponent,
    resolve: {
        lavanderia: LavanderiaResolverGuard 
    }},
    {path: 'editar/:id', component: LavanderiaComponent,
    resolve: {
        lavanderia: LavanderiaResolverGuard 
    }},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LavanderiasRoutingModule{}