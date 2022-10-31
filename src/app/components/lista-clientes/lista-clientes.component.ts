import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';
import { ModalService } from 'src/app/services/modal.service';
import { Cliente } from 'src/app/Models/Cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  public conductores: Array<any> = [];
  public controller = 'Cliente/AllProfiles';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public modalservice: ModalService, private service: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog() {
    this.modalservice.accion.next("crearCliente")
    this.dialog.open(ModalTemplateComponent, {
      width: 'auto',
      height: 'auto'
    });
  }

  inactivarRegistro(value: any) {
    console.log(value);
    let cliente: Cliente = {
      idCliente: 0,
      nombreCliente: "",
      apellidoCliente: "",
      emailCliente: "",
      pswCliente: "",
      estadoCliente: "",
      ciudadClienteFK: 0,
      generoClienteFk: 0,
    }

    this.service.getById("Cliente", value).subscribe((resp: any) => {
      console.log(resp);
      cliente.idCliente = resp.idCliente;
      cliente.nombreCliente = resp.nombreCliente;
      cliente.apellidoCliente = resp.apellidoCliente;
      cliente.emailCliente = resp.emailCliente;
      cliente.pswCliente = resp.pswCliente;
      cliente.estadoCliente = "INACTIVO";
      cliente.ciudadClienteFK = resp.ciudadClienteFk;
      cliente.generoClienteFk = resp.generoClienteFk;
      console.log(cliente);

      this.service.update("Cliente", value, cliente).subscribe((resp) => {
        console.log(cliente);
        console.log(resp);
      })

      this.refresh();
    })
  }

  refresh(): void {
    window.location.reload();
  }

  editarRegistro(value: any) {
    this.modalservice.accion.next("editarCliente");
    this.modalservice.cliente = value;
    this.dialog.open(ModalTemplateComponent, {
      width: 'auto',
      height: 'auto'
    });
  }

  loadtable(data: any[]) {
    this.displayedColumns = [];

    for (let column in data[0]) {
      this.displayedColumns.push(column);
    }

    this.displayedColumns.push('Acciones');
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.service.getAll(this.controller).subscribe((resp: any) => {

      for (let index = 0; index < resp.length; index++) {
        this.loadtable([resp[index]]);
      }

      console.log(resp);
      this.dataSource.data = resp;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.conductores = resp;
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
