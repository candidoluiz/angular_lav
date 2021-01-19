import { TesteModule } from './dashboard/teste/teste.module';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
// import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { SettingsService } from './services/settings.service';
import { CatalogoLinkComponent } from './dashboard/catalogo/catalogo-link/catalogo-link.component';
import { CatalogoNivelComponent } from './dashboard/catalogo/catalogo-nivel/catalogo-nivel.component';
import { FichaComponent } from './dashboard/fichas/ficha/ficha.component';
import { FichaDetalheComponent } from './dashboard/fichas/ficha-detalhe/ficha-detalhe.component';
import { TipoRoupaComponent } from './dashboard/tipos_roupa/tipo-roupa/tipo-roupa.component';
import { TipoRoupaDetalheComponent } from './dashboard/tipos_roupa/tipo-roupa-detalhe/tipo-roupa-detalhe.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TecidoComponent } from './dashboard/tecidos/tecido/tecido.component';
import { TecidoDetalheComponent } from './dashboard/tecidos/tecido-detalhe/tecido-detalhe.component';
import { GradeComponent } from './shared/grade/grade.component';
import { RelacaoComponent } from './shared/relacao/relacao.component';
import { RoupasModule } from './dashboard/roupas/roupas.molule';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    CatalogoLinkComponent,
    CatalogoNivelComponent,
    FichaComponent,
    FichaDetalheComponent,
    TipoRoupaComponent,
    TipoRoupaDetalheComponent,
    TecidoComponent,
    TecidoDetalheComponent,
    // RoupaComponent,
    // RoupaDetalheComponent,
    GradeComponent,
    RelacaoComponent

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    NgxDatatableModule,
    RoupasModule,
    TesteModule
    // RoupasRoutingModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
