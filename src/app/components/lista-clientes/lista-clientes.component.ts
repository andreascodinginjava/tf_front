import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  public clientes: Array<any> = [];
  public controller = 'Cliente';

  /*constructor(private clienteService: ClienteService) {

  }

  ngOnInit(): void {
    this.clienteService.getClientes();
  }*/

  constructor(private service: ApiService) {

  }

  ngOnInit(): void {

    this.service.getAll(this.controller).subscribe((resp:any) => {
      console.log(resp);
      this.clientes = resp;
    })

    /*this.service.getById(this.controller, '1001329488').subscribe((resp) => {
      console.log(resp);
    })

    this.service.create(this.controller, {nombre:'hola'}).subscribe((resp) => {
      console.log(resp);
    })

    this.service.update(this.controller, '1001329488', {nombre:'hola'}).subscribe((resp) => {
      console.log(resp);
    })

    this.service.delete(this.controller, '1001329488').subscribe((resp) => {
      console.log(resp);
    })*/
  }
}
