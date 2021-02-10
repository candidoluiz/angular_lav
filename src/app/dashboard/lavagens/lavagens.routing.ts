import { LavagemComponent } from './lavagem/lavagem.component';
import { LavagemDetalheComponent } from './lavagem-detalhe/lavagem-detalhe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [    
    {path: '', component: LavagemDetalheComponent},
    {path: 'novo', component: LavagemComponent},
    {path: 'editar/:id', component: LavagemComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LavagensRoutingModule{}