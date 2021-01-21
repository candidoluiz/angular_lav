import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
import { TipoRoupaDetalheComponent } from './dashboard/tipos_roupa/tipo-roupa-detalhe/tipo-roupa-detalhe.component';
import { TecidoDetalheComponent } from './dashboard/tecidos/tecido-detalhe/tecido-detalhe.component';
import {RoupaDetalheComponent} from './dashboard/roupas/roupa-detalhe/roupa-detalhe.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'profile', component: ProfileComponent},
    //{path: 'tipos-roupas', loadChildren: './dashboard/tipos_roupa/tipos_roupa.module#TesteModule'},
    {path: 'tecidos', loadChildren: './dashboard/tecidos/tecidos.module#TecidosModule'},
    {path: 'teste',  loadChildren: './dashboard/teste/teste.module#TesteModule'},
    {path: 'roupas', loadChildren: './dashboard/roupas/roupas.module#RoupasModule'}

  ]}

];

export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });

