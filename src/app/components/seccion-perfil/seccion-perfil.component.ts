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
  perfilCLiente = false;
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
      this.service.getById('Cliente', '51878701').subscribe((resp:any) => {
        console.log(resp);

        this.cliente.nombre = resp.nombreCliente;
        this.cliente.apellido = resp.apellidoCliente;
        this.cliente.dni = resp.idCliente;
        this.cliente.email = resp.emailCliente;

        if (resp.ciudadClienteFk == 1) {
          this.cliente.ciudad = 'Bogota DC'
        }

        if (resp.generoClienteFk == 1) {
          this.cliente.genero = 'Femenino'
        }

        if (resp.generoClienteFk == 2) {
          this.cliente.genero = 'Masculino'
        }

        if (resp.generoClienteFk == 3) {
          this.cliente.genero = 'Otro'
        }

        console.log(this.cliente);
      })

    } else {

      this.service.getById('Conductor', '123456789').subscribe((resp:any) => {
        console.log(resp);

        this.conductor.nombre = resp.nombreConductor;
        this.conductor.apellido = resp.apellidoConductor;
        this.conductor.dni = resp.idConductor;
        this.conductor.email = resp.emailConductor;
        this.conductor.vehiculo.placa = resp.vehiculoFk;

        if (resp.ciudadConductorFk == 1) {
          this.conductor.ciudad = 'Bogota DC'
        }

        if (resp.generoConductorFk == 1) {
          this.conductor.genero = 'Femenino'
        }

        if (resp.generoConductorFk == 2) {
          this.conductor.genero = 'Masculino'
        }

        if (resp.generoConductorFk == 3) {
          this.conductor.genero = 'Otro'
        }

        this.service.getById('Vehiculo', this.conductor.vehiculo.placa).subscribe((resp:any) => {
          console.log(resp);

          this.conductor.vehiculo.capacidad = resp.capacidad;
          this.conductor.vehiculo.color = resp.colorVehiculoFk;
          this.conductor.vehiculo.tipoVehiculo = resp.tipoVehiculoFk;

          this.service.getById('Color', this.conductor.vehiculo.color).subscribe((resp:any) => {
            console.log(resp);
            this.conductor.vehiculo.color = resp.color1;
          })

          this.service.getById('TipoVehiculo', this.conductor.vehiculo.tipoVehiculo).subscribe((resp:any) => {
            console.log(resp);
            this.conductor.vehiculo.tipoVehiculo = resp.tipoVehiculo1;
          })
        })

        console.log(this.conductor);
      })

    }
  }
}
