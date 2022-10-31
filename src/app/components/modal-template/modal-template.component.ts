import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent implements OnInit {

  constructor(public modalservice: ModalService) { }
  titulo: string = "";

  ngOnInit(): void {
    this.titulo = this.modalservice.accion.value
  }
}
