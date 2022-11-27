import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-seccion-servicios',
  templateUrl: './seccion-servicios.component.html',
  styleUrls: ['./seccion-servicios.component.css']
})
export class SeccionServiciosComponent implements OnInit {
  public tipoUsuario = '';
  private usuario = '';
  public controllerConductor = "Servicio/Conductor";
  public serviciosConductor = [];
  public controllerCliente = "Servicio/Clientes";
  public serviciosCliente = [];

  constructor(private service: ApiService) {
    this.tipoUsuario = JSON.parse(localStorage.getItem("Tipo"));
    this.usuario = JSON.parse(localStorage.getItem("Usuario") );
  }

  ngOnInit(): void {
    if (this.tipoUsuario == 'cl') {
      this.service.getById(this.controllerCliente, this.usuario+'').subscribe((resp: any) => {
        console.log(resp);
        this.serviciosCliente = resp;
      })
    } else {
      this.service.getById(this.controllerConductor, this.usuario+'').subscribe((resp: any) => {
        console.log(resp);
        this.serviciosConductor = resp;
      })
    }
  }

}
