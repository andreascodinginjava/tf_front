import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Conductor } from 'src/app/Models/Conductor';
import { Documento } from 'src/app/Models/Documento';
import { Vehiculo } from 'src/app/Models/Vehiculo';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-conductor-form',
  templateUrl: './conductor-form.component.html',
  styleUrls: ['./conductor-form.component.css']
})
export class ConductorFormComponent implements OnInit {

  conductorForm = this.fb.group({
    dni: [null, Validators.required],
    name: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    clave: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.nullValidator
    ])],
    clave2: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(15)
    ])],
    ciudad: [null, Validators.required],
    genero: [null, Validators.required],
    placa: [null, Validators.compose([
      Validators.required, Validators.minLength(6), Validators.maxLength(6)
    ])],
    capacidad: [null, Validators.required],
    modelo: [null, Validators.required],
    color: [null, Validators.required],
    tipoVehiculo: [null, Validators.required],
    nTarjeta: [null, Validators.required],
    fechaVencimiento: [null, Validators.required],
    codigoSeguridad: [null, Validators.required]
  });

  hasUnitNumber = false;

  ciudades:any = [];

  generos:any = [];

  colores:any = [];

  tipoVehiculos:any = [];

  conductor: Conductor = {
    idConductor: 0,
    nombreConductor: "",
    apellidoConductor: "",
    emailConductor: "",
    fotoConductor: "",
    pswConductor: "",
    estadoConductor: "",
    ciudadConductorFk: 0,
    generoConductorFk: 0,
    vehiculoFk: "",
    medioPagoFk: 0
  }

  vehiculo: Vehiculo = {
    idVehiculo: "",
    capacidad: "",
    fotoVehiculo: "",
    colorVehiculoFk: 0,
    tipoVehiculoFk: 0,
    docVehiculoFk: "",
  }

  documento: Documento = {
    idDocumento: "",
    soat: "",
    tarjetaProp: "",
    licenciaConduc: "",
  }

  constructor(private fb: FormBuilder, public service:ApiService, public modalService:ModalService) { }
  ngOnInit(): void {
    this.service.getAll("Ciudad").subscribe((resp:any) => {
      for (let ciudad in resp) {
        this.ciudades.push(resp[ciudad]);
      } 
    });

    this.service.getAll("Genero").subscribe((resp:any) => {
      for (let genero in resp) {
        this.generos.push(resp[genero]);
      }
    })

    this.service.getAll("TipoVehiculo").subscribe((resp:any) => {
      for (let tipo in resp) {
        this.tipoVehiculos.push(resp[tipo]);
      }
    })

    this.service.getAll("Color").subscribe((resp:any) => {
      for (let color in resp) {
        this.colores.push(resp[color]);
      }
    })

    if (this.modalService.accion.value == "editarConductor") {
      this.conductorForm.controls["dni"].setValue(this.modalService.conductor.dni);
      this.conductorForm.controls["name"].setValue(this.modalService.conductor.nombre);
      this.conductorForm.controls["lastName"].setValue(this.modalService.conductor.apellido);
      this.conductorForm.controls["email"].setValue(this.modalService.conductor.email);
      this.conductorForm.controls["placa"].setValue(this.modalService.conductor.placa);
      this.conductorForm.controls["capacidad"].setValue(this.modalService.conductor.capacidadVehiculo);
    }
  }

  onSubmit(data: any) {
    // Documento
    this.documento.idDocumento = data.placa;
    this.documento.soat = "";
    this.documento.tarjetaProp = "";
    this.documento.licenciaConduc = "";

    this.service.create("Documento", this.documento).subscribe((resp) => {
      console.log(resp);
    })

    // Vehiculo
    this.vehiculo.idVehiculo = data.placa;
    this.vehiculo.capacidad = data.capacidad;
    this.vehiculo.fotoVehiculo = "";
    this.vehiculo.colorVehiculoFk = data.color;
    this.vehiculo.tipoVehiculoFk = data.tipoVehiculo;
    this.vehiculo.docVehiculoFk = data.placa;

    this.service.create("Vehiculo", this.vehiculo).subscribe((resp) => {
      console.log(resp);
    })

    // Conductor
    this.conductor.idConductor = data.dni;
    this.conductor.nombreConductor = data.name;
    this.conductor.apellidoConductor = data.lastName;
    this.conductor.emailConductor = data.email;
    this.conductor.fotoConductor = "";
    this.conductor.pswConductor = data.clave;
    this.conductor.estadoConductor = "ACTIVO";
    this.conductor.ciudadConductorFk = data.ciudad;
    this.conductor.generoConductorFk = data.genero;
    this.conductor.vehiculoFk = data.placa;
    this.conductor.medioPagoFk = 1;

    this.service.create("Conductor", this.conductor).subscribe((resp) => {
      console.log(resp);
    })

    console.log(data);
  }
}
