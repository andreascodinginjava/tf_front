import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-seccion-servicios',
  templateUrl: './seccion-servicios.component.html',
  styleUrls: ['./seccion-servicios.component.css']
})
export class SeccionServiciosComponent implements OnInit {
  public cliente = false;
  public controllerConductor = "Servicio/Conductor";
  public serviciosConductor = [];
  public controllerCliente = "Servicio/Clientes";
  public serviciosCliente = [];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    if (this.cliente) {
      this.service.getById(this.controllerCliente, '1001329488').subscribe((resp:any) => {
        console.log(resp);
        this.serviciosCliente = resp;
      })
    } else {
      this.service.getById(this.controllerConductor, '123456789').subscribe((resp:any) => {
        console.log(resp);
        this.serviciosConductor = resp;
      })
    }
  }

}
