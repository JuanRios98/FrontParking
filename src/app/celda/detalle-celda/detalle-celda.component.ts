import { Component, EventEmitter, input } from '@angular/core';
import { Celda } from '../../models/celda.module';
import { Input,Output } from '@angular/core';

@Component({
  selector: 'app-detalle-celda',
  standalone: false,
  templateUrl: './detalle-celda.component.html',
  styleUrl: './detalle-celda.component.css'
})
export class DetalleCeldaComponent {

  @Input() celda?: Celda;
  @Output() cerrar = new EventEmitter<void>();


  cancelar(){
    this.cerrar.emit();
  }

}
