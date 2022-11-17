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

  fileUpload: File | null = null;

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

        this.cliente.nombre = resp[0].nombre;
        this.cliente.apellido = resp[0].apellido;
        this.cliente.dni = resp[0].dni;
        this.cliente.email = resp[0].email;
        this.cliente.ciudad = resp[0].ciudad;
        this.cliente.genero = resp[0].genero;
        
        console.log(this.cliente);
      })

    } else {
      this.service.getById('Conductor/Profile', '123456789').subscribe((resp:any) => {
        console.log(resp);

        this.conductor.nombre = resp[0].nombre;
        this.conductor.apellido = resp[0].apellido;
        this.conductor.dni = resp[0].dni;
        this.conductor.email = resp[0].email;
        this.conductor.ciudad = resp[0].ciudad;
        this.conductor.genero = resp[0].genero;
        this.conductor.vehiculo.capacidad = resp[0].capacidadVehiculo;
        this.conductor.vehiculo.color = resp[0].colorVehiculo;
        this.conductor.vehiculo.placa = resp[0].placa;
        this.conductor.vehiculo.tipoVehiculo = resp[0].tipoVeviculo;

        console.log(this.conductor);
      })

    }
  }

  onFileSelected(e:any) {
    const files: FileList = e.target.files;
    const fileList = new Array<File>();
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append(files.item(i).name, files.item(i));
      fileList.push(files.item(i));
    }

    this.service.createFile("Files", "ABC123", [fileList, formData]).subscribe((resp:any) => {
      console.log(resp);
    })
  }
}
