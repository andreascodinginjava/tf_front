import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-lista-conductores',
  templateUrl: './lista-conductores.component.html',
  styleUrls: ['./lista-conductores.component.css']
})
export class ListaConductoresComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  public conductores: Array<any> = [];
  public controller = 'Conductor/AllProfiles';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public modalservice: ModalService, private service: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog() {
    this.modalservice.titulo = "Conductor"
    this.modalservice.Accion = "Agregar nuevo"
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
