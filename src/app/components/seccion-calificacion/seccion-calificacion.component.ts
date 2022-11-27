import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface Calificacion {
  recomendaciones: number,
  total: number,
  servicios: number,
  estrellas: number
}

@Component({
  selector: 'app-seccion-calificacion',
  templateUrl: './seccion-calificacion.component.html',
  styleUrls: ['./seccion-calificacion.component.css']
})
export class SeccionCalificacionComponent implements OnInit {

  usuario = 0;

  calificacion:Calificacion = {
    recomendaciones: 0,
    total: 0,
    servicios: 0,
    estrellas: 0
  }

  public comentarios = [];

  constructor(private service: ApiService) { 
    this.usuario = JSON.parse(localStorage.getItem("Usuario") );
  }

  ngOnInit(): void {
    this.service.getById('Calificacion/Conductor', this.usuario+'').subscribe((resp:any) => {
      console.log(resp);
      
      let recoPositiva = 0;
      let recoNegativa = 0;
      let estrellas = 0;

      for (let i = 0; i < resp.length; i++) {
        recoPositiva += resp[i].recoPositiva;
        recoNegativa += resp[i].recoNegativa;
        estrellas += resp[i].canEstrellas;
      }

      this.calificacion.recomendaciones = (recoPositiva * 100) / (recoPositiva + recoNegativa);
      this.calificacion.estrellas = estrellas / resp.length;
      this.comentarios = resp;
      console.log(this.calificacion);
    })

    this.service.getById('Servicio/ValorTotal', this.usuario+'').subscribe((resp:any) => {
      console.log(resp);

      let valores = 0;

      for (let i = 0; i < resp.length; i++) {
        valores += resp[i].valorServicio;
      }

      this.calificacion.total = valores;
      this.calificacion.servicios = resp.length;
      console.log(this.calificacion);
    })
  }

}
