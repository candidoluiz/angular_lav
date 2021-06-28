import { TecidoComponent } from './tecido-form/tecido.component';
import { TecidoDetalheComponent } from './tecido-detalhe/tecido-detalhe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TecidoResolverGuard } from './guards/tecido-resolver.guard';

const routes: Routes = [    
    {path: '', component: TecidoDetalheComponent},
    {path: 'novo', component: TecidoComponent,
    resolve: {
        tecido: TecidoResolverGuard 
    }},
    {path: 'editar/:id', component: TecidoComponent,
    resolve: {
        tecido: TecidoResolverGuard 
    }},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TecidosRoutingModule{}