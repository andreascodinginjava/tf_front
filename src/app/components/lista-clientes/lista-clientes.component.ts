import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {
  public clientes: Array<any> = [];

  constructor(
    private clienteService: ClienteService
  ) {
    //this.clienteService.getClientes().subscribe((resp: any) => {
    interface client {
      nombre: String,
      apellido: String,
      dni: String,
      estado: String,
      email: String,
      ciudad: Number,
      genero: Number
    }

    const client1: client = {
      nombre: "Liliana",
      apellido: "Agudelo",
      dni: '1234',
      estado: 'Activo',
      email: "lili@correo.com",
      ciudad: 1,
      genero: 1
    }

    const client2: client = {
      nombre: "Camila",
      apellido: "Cabello",
      dni: '5678',
      estado: 'Activo',
      email: "camila@correo.com",
      ciudad: 1,
      genero: 1
    }

    const client3: client = {
      nombre: "Andres",
      apellido: "Calamardo",
      dni: '9123',
      estado: 'Inactivo',
      email: "andres@correo.com",
      ciudad: 1,
      genero: 2
    }

    this.clientes.push(client1);
    this.clientes.push(client2);
    this.clientes.push(client3);

    console.log(this.clientes);

    //this.clientes = resp
  }
}
