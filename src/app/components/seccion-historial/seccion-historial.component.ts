import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-seccion-historial',
  templateUrl: './seccion-historial.component.html',
  styleUrls: ['./seccion-historial.component.css']
})
export class SeccionHistorialComponent implements OnInit {

  public cliente = false;
  public controllerConductor = "Servicio/Conductor/Historial";
  public historialConductor = [];
  public controllerCliente = "Servicio/Cliente/Historial";
  public historialCliente = [];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    if (this.cliente) {
      this.service.getById(this.controllerCliente, '1001329488').subscribe((resp:any) => {
        console.log(resp);
        this.historialCliente = resp;
      })
    } else {
      this.service.getById(this.controllerConductor, '123456789').subscribe((resp:any) => {
        console.log(resp);
        this.historialConductor = resp;
      })
    }
  }

}
