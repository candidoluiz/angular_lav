import { LavagemComponent } from './lavagem/lavagem.component';
import { LavagemDetalheComponent } from './lavagem-detalhe/lavagem-detalhe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LavagemResolverGuard } from './guards/lavagem-resolver.guard';


const routes: Routes = [    
    {path: '', component: LavagemDetalheComponent},
    {path: 'novo', component: LavagemComponent, 
    resolve:{
        lavagem: LavagemResolverGuard
    }},
    {path: 'editar/:id', component: LavagemComponent,
    resolve:{
        lavagem: LavagemResolverGuard
    }},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LavagensRoutingModule{}