import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-seccion-historial',
  templateUrl: './seccion-historial.component.html',
  styleUrls: ['./seccion-historial.component.css']
})
export class SeccionHistorialComponent implements OnInit {

  public tipoUsuario = '';
  private usuario = 0;
  public controllerConductor = "Servicio/Conductor/Historial";
  public historialConductor = [];
  public controllerCliente = "Servicio/Cliente/Historial";
  public historialCliente = [];

  constructor(private service: ApiService) { 
    this.tipoUsuario = JSON.parse(localStorage.getItem("Tipo"));
    this.usuario = JSON.parse(localStorage.getItem("Usuario"));
  }

  ngOnInit(): void {
    if (this.tipoUsuario == 'cl') {
      this.service.getById(this.controllerCliente, this.usuario+'').subscribe((resp:any) => {
        console.log(resp);
        this.historialCliente = resp;
      })
    } else {
      this.service.getById(this.controllerConductor, this.usuario+'').subscribe((resp:any) => {
        console.log(resp);
        this.historialConductor = resp;
      })
    }
  }

}
