import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionInicioComponent } from './components/seccion-inicio/seccion-inicio.component';
import { SeccionPerfilComponent } from './components/seccion-perfil/seccion-perfil.component';
import { SeccionCalificacionComponent } from './components/seccion-calificacion/seccion-calificacion.component';
import { SeccionHistorialComponent } from './components/seccion-historial/seccion-historial.component';
import { SeccionServiciosComponent } from './components/seccion-servicios/seccion-servicios.component';
import { TransflashComponent } from './components/transflash/transflash.component';
import { SignupClienteComponent } from './components/signup-cliente/signup-cliente.component';
import { SignupConductorComponent } from './components/signup-conductor/signup-conductor.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SeccionTituloComponent } from './components/seccion-titulo/seccion-titulo.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './components/Forms/cliente-form/cliente-form.component';
import { ActivarUsuarioComponent } from './components/activar-usuario/activar-usuario.component';
import { NgChartsModule } from 'ng2-charts';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaConductoresComponent } from './components/lista-conductores/lista-conductores.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TableComponent } from './components/table/table.component';
import { ModalTemplateComponent } from './components/modal-template/modal-template.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConductorFormComponent } from './components/Forms/conductor-form/conductor-form.component';
import { ServicioFormComponent } from './components/Forms/servicio-form/servicio-form.component';
import { LoginFormComponentt } from './components/Forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionInicioComponent,
    SeccionPerfilComponent,
    SeccionCalificacionComponent,
    SeccionHistorialComponent,
    SeccionServiciosComponent,
    TransflashComponent,
    SignupClienteComponent,
    SignupConductorComponent,
    LoginComponent,
    MenuComponent,
    DashboardComponent,
    TableComponent,
    SeccionTituloComponent,
    CarruselComponent,
    ClienteFormComponent,
    ActivarUsuarioComponent,
    ListaClientesComponent,
    ListaConductoresComponent,
    ModalTemplateComponent,
    ConductorFormComponent,
    ServicioFormComponent,
    LoginFormComponentt,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule,
    ScrollingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
