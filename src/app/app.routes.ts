import { TesteDetalheComponent } from './dashboard/teste/teste-detalhe/teste-detalhe.component';
import { TesteFormComponent } from './dashboard/teste/teste-form/teste-form.component';
import { TesteComponent } from './dashboard/teste/teste.component';
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
import { CatalogoLinkComponent } from './dashboard/catalogo/catalogo-link/catalogo-link.component';
import { CatalogoNivelComponent } from './dashboard/catalogo/catalogo-nivel/catalogo-nivel.component';
import { TipoRoupaComponent } from './dashboard/tipos_roupa/tipo-roupa/tipo-roupa.component';
import { TipoRoupaDetalheComponent } from './dashboard/tipos_roupa/tipo-roupa-detalhe/tipo-roupa-detalhe.component';
import { TecidoDetalheComponent } from './dashboard/tecidos/tecido-detalhe/tecido-detalhe.component';
import {RoupaDetalheComponent} from './dashboard/roupas/roupa-detalhe/roupa-detalhe.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    // {path: 'tipos_roupa/tipo-roupa', component: TipoRoupaComponent},
    {path: 'tipos_roupa/tipo-roupa-detalhe', component: TipoRoupaDetalheComponent},
    {path: 'tecidos/tecido-detalhe', component: TecidoDetalheComponent},
    {path: 'roupas/roupa-detalhe', component: RoupaDetalheComponent},
    // {path: 'notification', component: NotificationComponent},
    // {path: 'alert', component: SweetAlertComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'teste', component: TesteComponent,}
    //{path: 'grade', component: GradeComponent},
    // {path: 'components/price-table', component: PriceTableComponent},
    // {path: 'components/panels', component: PanelsComponent},
    // {path: 'components/wizard', component: WizardComponent},
    // {path: 'catalogo/catalogo-link', component: CatalogoLinkComponent},
    // {path: 'catalogo/catalogo-nivel', component: CatalogoNivelComponent},
    // {path: 'venda/venda', component: VendaComponent},
    // {path: 'venda/venda-detalhe', component: VendaDetalheComponent}
  ]}

];

export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });

