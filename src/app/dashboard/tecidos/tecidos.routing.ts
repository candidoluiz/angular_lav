import { TecidoComponent } from './tecido/tecido.component';
import { TecidoDetalheComponent } from './tecido-detalhe/tecido-detalhe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [    
    {path: '', component: TecidoDetalheComponent},
    {path: 'novo', component: TecidoComponent},
    {path: 'editar', component: TecidoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TecidosRoutingModule{}