import { GrupoComponent } from './grupo/grupo.component';
import { GrupoDetalheComponent } from './grupo-detalhe/grupo-detalhe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [    
    {path: '', component: GrupoDetalheComponent},
    {path: 'novo', component: GrupoComponent},
    {path: 'editar/:id', component: GrupoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GruposRoutingModule{}