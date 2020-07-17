import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { PersonajeModel } from '../model/personaje.model';

@Component({
  selector: 'app-rick-morty-detalle',
  templateUrl: './rick-morty-detalle.component.html',
  styleUrls: ['./rick-morty-detalle.component.scss']
})
export class RickMortyDetalleComponent implements OnInit {
  @ViewChild('personajeDetalle') public modal: ModalDirective;

  @Input()
  public personaje: PersonajeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
