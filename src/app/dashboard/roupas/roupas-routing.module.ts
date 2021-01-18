import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoupaComponent } from './roupa/roupa.component';

const routes: Routes = [    
    // {path: 'roupas/roupa', component: RoupaComponent},
    {path: 'editar/:id', component: RoupaComponent},
    {path: 'roupas', component: RoupaComponent},
    // {path: 'dashboard/roupas/roupa-detalhe', component: RoupaComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoupasRoutingModule{}