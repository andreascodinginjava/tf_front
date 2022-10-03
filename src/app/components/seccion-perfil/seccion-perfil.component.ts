import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

export interface Conductor {
  nombre: string,
  apellido: string,
  dni: string,
  email: string,
  ciudad: string,
  genero: string,
  vehiculo: {
    placa: string,
    capacidad: string,
    color: string,
    tipoVehiculo: string
  }
}

export interface Cliente {
  nombre: string,
  apellido: string,
  dni: string,
  email: string,
  ciudad: string,
  genero: string
}

@Component({
  selector: 'app-seccion-perfil',
  templateUrl: './seccion-perfil.component.html',
  styleUrls: ['./seccion-perfil.component.css']
})
export class SeccionPerfilComponent implements OnInit {
  perfilCLiente = true;
  conductor:Conductor = {
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    vehiculo: {
      placa: '',
      capacidad: '',
      color: '',
      tipoVehiculo: ''
    },
    ciudad: '',
    genero: ''
  }

  cliente:Cliente = {
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    ciudad: '',
    genero: ''
  }

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    if (this.perfilCLiente) {
      this.service.getById('Cliente/Profile', '1001329488').subscribe((resp:any) => {
        console.log(resp);

        this.cliente.nombre = resp[0].nombreCliente;
        this.cliente.apellido = resp[0].apellidoCliente;
        this.cliente.dni = resp[0].idCliente;
        this.cliente.email = resp[0].emailCliente;
        this.cliente.ciudad = resp[0].ciudadCliente;
        this.cliente.genero = resp[0].generoCliente;
        
        console.log(this.cliente);
      })

    } else {
      this.service.getById('Conductor/Profile', '123456789').subscribe((resp:any) => {
        console.log(resp);

        this.conductor.nombre = resp[0].nombreConductor;
        this.conductor.apellido = resp[0].apellidoConductor;
        this.conductor.dni = resp[0].idConductor;
        this.conductor.email = resp[0].emailConductor;
        this.conductor.ciudad = resp[0].ciudadConductor;
        this.conductor.genero = resp[0].generoConductor;
        this.conductor.vehiculo.capacidad = resp[0].capacidadVehiculo;
        this.conductor.vehiculo.color = resp[0].colorVehiculo;
        this.conductor.vehiculo.placa = resp[0].placaVehiculo;
        this.conductor.vehiculo.tipoVehiculo = resp[0].tipoVehiculo1;

        console.log(this.conductor);
      })

    }
  }
}
