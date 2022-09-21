import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-conductores',
  templateUrl: './lista-conductores.component.html',
  styleUrls: ['./lista-conductores.component.css']
})
export class ListaConductoresComponent implements OnInit {
  public conductores: Array<any> = [];
  public controller = 'Conductor';

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getAll(this.controller).subscribe((resp:any) => {
      console.log(resp);
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
