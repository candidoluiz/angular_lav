import { RoupaDetalheComponent } from './roupa-detalhe/roupa-detalhe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoupaComponent } from './roupa/roupa.component';
import { RoupaResolverGuard } from './guards/roupa-resolver.guard';

const routes: Routes = [    
    {path: '', component: RoupaDetalheComponent},
    {path: 'novo', component: RoupaComponent,
    resolve: {
        roupa: RoupaResolverGuard 
    }},
    {path: 'editar/:id', component: RoupaComponent, 
    resolve: {
        roupa: RoupaResolverGuard 
    }},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoupasRoutingModule{}