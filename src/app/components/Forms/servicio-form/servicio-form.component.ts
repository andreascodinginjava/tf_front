import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Mercancia } from 'src/app/Models/Mercancia';
import { Servicio } from 'src/app/Models/Servicio';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-servicio-form',
  templateUrl: './servicio-form.component.html',
  styleUrls: ['./servicio-form.component.css']
})
export class ServicioFormComponent implements OnInit {
  servicioForm = this.fb.group({
    id: [null, Validators.required],
    nombreM: [null, Validators.required],
    peso: [null, Validators.required],
    tipo: [null, Validators.required],
    origen: [null, Validators.required],
    destino: [null, Validators.required],
    fecha: [null, Validators.required]
  });

  tipoMercancia = [
    {name: 'A granel', abbreviation: 1},
    {name: 'Solido', abbreviation: 5}
  ];

  constructor(private fb: FormBuilder, private service: ApiService) { }

  ngOnInit(): void {}

  mercancia: Mercancia = {
    idMercancia: 0,
    pesoMercancia: "",
    nombreMercancia: "",
    tipoMercanciaFk: 0,
    clienteFk: 0,
  }

  servicio: Servicio = {
    idServicio: 0,
    fechaServicio: new Date,
    valorServicio: 0,
    direccionOrigen: "",
    direccionDestino: "",
    mercanciaFk: 0,
    conductorFk: 0,
    ciudadFk: 0,
  }

  onSubmit(data:any): void {
    // Mercancia
    this.mercancia.idMercancia = data.id;
    this.mercancia.pesoMercancia = data.peso;
    this.mercancia.nombreMercancia = data.nombreM;
    this.mercancia.tipoMercanciaFk = data.tipo;
    this.mercancia.clienteFk = 1001329488;

    this.service.create("Mercancia", this.mercancia).subscribe((resp) => {
      console.log(resp);
    })

    // Servicio
    console.log(data.fecha);
    this.servicio.idServicio = data.id;
    this.servicio.fechaServicio = data.fecha;
    this.servicio.valorServicio = 0;
    this.servicio.direccionOrigen = data.origen;
    this.servicio.direccionDestino = data.destino;
    this.servicio.mercanciaFk = data.id;
    this.servicio.conductorFk = 23234;
    this.servicio.ciudadFk = 1;

    this.service.create("Servicio", this.servicio).subscribe((resp) => {
      console.log(resp);
    })

    console.log(data);
    this.servicioForm.reset();
  }
}
