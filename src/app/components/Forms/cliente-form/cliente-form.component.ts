import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/Models/Cliente';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  clienteForm = this.fb.group({
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
    genero: [null, Validators.required]
  });

  hasUnitNumber = false;
  ciudades: any = [];
  generos: any = [];

  cliente: Cliente = {
    idCliente: 0,
    nombreCliente: "",
    apellidoCliente: "",
    emailCliente: "",
    pswCliente: "",
    estadoCliente: "",
    ciudadClienteFK: 0,
    generoClienteFk: 0
  }

  controller = "Cliente";

  constructor(private fb: FormBuilder, public service: ApiService, public modalService: ModalService) { }

  ngOnInit(): void {
    this.service.getAll("Ciudad").subscribe((resp: any) => {
      for (let ciudad in resp) {
        this.ciudades.push(resp[ciudad]);
      }
    });

    this.service.getAll("Genero").subscribe((resp: any) => {
      for (let genero in resp) {
        this.generos.push(resp[genero]);
      }
    })

    //this.modalService.accion.subscribe((res) => {
    if (this.modalService.accion.value == "editarCliente") {
      //console.log(this.modalService.cliente);

      this.clienteForm.controls["dni"].setValue(this.modalService.cliente.dni);
      this.clienteForm.controls["name"].setValue(this.modalService.cliente.nombre);
      this.clienteForm.controls["lastName"].setValue(this.modalService.cliente.apellido);
      this.clienteForm.controls["email"].setValue(this.modalService.cliente.email);
    }
    //})
  }

  onSubmit(data: any) {
    if (this.modalService.accion.value == "crearCliente") {
      this.cliente.idCliente = data.dni;
      this.cliente.nombreCliente = data.name;
      this.cliente.apellidoCliente = data.lastName;
      this.cliente.emailCliente = data.email;
      this.cliente.pswCliente = data.clave;
      this.cliente.estadoCliente = "ACTIVO";
      this.cliente.ciudadClienteFK = data.ciudad;
      this.cliente.generoClienteFk = data.genero;

      this.service.create(this.controller, this.cliente).subscribe((resp) => {
        console.log(resp);
      })
    } else {
      this.cliente.idCliente = data.dni;
      this.cliente.nombreCliente = data.name;
      this.cliente.apellidoCliente = data.lastName;
      this.cliente.emailCliente = data.email;
      this.cliente.pswCliente = data.clave;
      this.cliente.estadoCliente = "ACTIVO";
      this.cliente.ciudadClienteFK = data.ciudad;
      this.cliente.generoClienteFk = data.genero;

      //console.log(data);
      //console.log(this.cliente);
      this.service.update(this.controller, data.dni, this.cliente).subscribe((resp) => {
        console.log(resp);
      })
    }
  }
}
