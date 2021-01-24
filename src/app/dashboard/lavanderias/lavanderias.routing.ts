import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LavanderiaComponent } from './lavanderia/lavanderia.component';
import { LavanderiaDetalheComponent } from './lavanderia-detalhe/lavanderia-detalhe.component';

const routes: Routes = [    
    {path: '', component: LavanderiaDetalheComponent},
    {path: 'novo', component: LavanderiaComponent},
    {path: 'editar/:id', component: LavanderiaComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LavanderiasRoutingModule{}