import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-inicio',
  templateUrl: './seccion-inicio.component.html',
  styleUrls: ['./seccion-inicio.component.css']
})
export class SeccionInicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titulo = 'Inicio'
}
