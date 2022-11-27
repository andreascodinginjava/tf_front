import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivarUsuarioComponent } from './components/activar-usuario/activar-usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaConductoresComponent } from './components/lista-conductores/lista-conductores.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeccionCalificacionComponent } from './components/seccion-calificacion/seccion-calificacion.component';
import { SeccionHistorialComponent } from './components/seccion-historial/seccion-historial.component';
import { SeccionInicioComponent } from './components/seccion-inicio/seccion-inicio.component';
import { SeccionPerfilComponent } from './components/seccion-perfil/seccion-perfil.component';
import { SeccionServiciosComponent } from './components/seccion-servicios/seccion-servicios.component';
import { SignupClienteComponent } from './components/signup-cliente/signup-cliente.component';
import { SignupConductorComponent } from './components/signup-conductor/signup-conductor.component';
import { TableComponent } from './components/table/table.component';
import { TransflashComponent } from './components/transflash/transflash.component';

const routes: Routes = [
  { path: 'Inicio', component: SeccionInicioComponent },
  { path: 'Perfil', component: SeccionPerfilComponent },
  { path: 'Calificacion', component: SeccionCalificacionComponent},
  { path: 'Historial', component: SeccionHistorialComponent },
  { path: 'Servicios', component: SeccionServiciosComponent},
  { path: 'Tabla', component: TableComponent},
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Salir', component: TransflashComponent },
  { path: 'LogIn', component: LoginComponent },
  { path: 'SignupCliente', component: SignupClienteComponent },
  { path: 'SignupConductor', component: SignupConductorComponent },
  { path: 'Trasnflash', component: TransflashComponent },
  { path: 'ActivarUsuario', component: ActivarUsuarioComponent },
  { path: 'ListaCliente', component: ListaClientesComponent },
  { path: 'ListaConductor', component: ListaConductoresComponent },
  { path: 'Graficos', component: GraficosComponent },
  { path: '', component: MenuComponent },
  { path: '**', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
