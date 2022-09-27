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
  
  constructor(private service: ApiService) {

  }

  ngOnInit(): void {

    const color = {
      idColor: 11,
      color1: "plateadibirips jijijijijij"
    }

    this.service.getAll(this.controller).subscribe((resp:any) => {
      console.log(resp);
      this.clientes = resp;
    })

    //Crear
    /*this.service.create("Color", color).subscribe((resp) => {
      console.log(resp);
    })*/

    //Actualizar
    /*this.service.update("Color", '11', color).subscribe((resp) => {
      console.log('----------------- Actualizar');
      console.log(resp);
    })*/

    //Eliminar
    /*this.service.delete("Color", '11').subscribe((resp) => {
      console.log('----------------- Eliminar');
      console.log(resp);
    })*/

    //Select by id
    /*this.service.getById("Color", '11').subscribe((resp) => {
      console.log('----------------- Get by id');
      console.log(resp);
    })*/
  }
}
