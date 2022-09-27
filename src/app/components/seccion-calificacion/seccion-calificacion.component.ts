import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface Calificacion {
  recomendaciones: number,
  total: number,
  servicios: number,
  estrellas: number,
  comentario: string
}

@Component({
  selector: 'app-seccion-calificacion',
  templateUrl: './seccion-calificacion.component.html',
  styleUrls: ['./seccion-calificacion.component.css']
})
export class SeccionCalificacionComponent implements OnInit {

  calificacion:Calificacion = {
    recomendaciones: 0,
    total: 0,
    servicios: 0,
    estrellas: 0,
    comentario: ''
  }

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getById('Calificacion', '369147258').subscribe((resp:any) => {
      console.log(resp);
      
      this.calificacion.recomendaciones = (resp.recoPositiva * 100) / (resp.recoPositiva + resp.recoNegativa);
      this.calificacion.estrellas = resp.canEstrellas;
      this.calificacion.comentario = resp.comentario;
      
    })
  }

}
