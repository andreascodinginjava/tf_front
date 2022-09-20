import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seccion-titulo',
  templateUrl: './seccion-titulo.component.html',
  styleUrls: ['./seccion-titulo.component.css']
})
export class SeccionTituloComponent implements OnInit {
  @Input() titulo:any;
  constructor() { }

  ngOnInit(): void {
  }
}
