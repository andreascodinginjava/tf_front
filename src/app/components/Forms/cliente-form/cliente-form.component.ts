import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/Models/Cliente';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
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

  ciudades = [
    {name: 'Bogota', abbreviation: 1}
  ];

  generos = [
    {name: 'Femenino', abbreviation: 1},
    {name: 'Masculino', abbreviation: 2},
    {name: 'Otro', abbreviation: 3}
  ];

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
  
  constructor(private fb: FormBuilder, public service:ApiService) {}

  //Crear
    /*this.service.create("Color", color).subscribe((resp) => {
      console.log(resp);
    })*/

  onSubmit(data:any) {
    this.cliente.idCliente = data.dni;
    this.cliente.nombreCliente = data.name;
    this.cliente.apellidoCliente = data.lastName;
    this.cliente.emailCliente = data.email;
    this.cliente.pswCliente = data.clave;
    this.cliente.estadoCliente = "ACTIVO";
    this.cliente.ciudadClienteFK = data.ciudad;
    this.cliente.generoClienteFk = data.genero;

    console.log(data);
    console.log(this.cliente);
    this.service.create(this.controller, this.cliente).subscribe((resp) => {
      console.log(resp);
    })
  }
}
