import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PerfilModel } from 'src/app/Models/PerfilModel';
import { LoginService } from 'src/app/services/login.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  usera = "";
  nombre = "";
  tipoUsuario = ""

  constructor(private breakpointObserver: BreakpointObserver, public service:ApiService) {
    this.usera = JSON.parse(localStorage.getItem("Usuario"));
    this.tipoUsuario = JSON.parse(localStorage.getItem("Tipo"));
  }

  ngOnInit(): void {
    
    if (this.tipoUsuario == 'cl') {
      this.service.getById('Cliente', this.usera).subscribe((resp:any) => {
        this.nombre = resp.nombreCliente + ' ' + resp.apellidoCliente;
      })
    } else if (this.tipoUsuario == 'co') {
      this.service.getById('Conductor', this.usera).subscribe((resp:any) => {
        this.nombre = resp.nombreConductor + ' ' + resp.apellidoConductor;
      })
    } else if (this.tipoUsuario == 'ad') {
      this.nombre = 'Administrador'
    }
  }

  cerrarSesion() {
    localStorage.removeItem('Usuario');
    localStorage.removeItem('Tipo');
    sessionStorage.removeItem('Session');
    window.location.reload();
  }
}
