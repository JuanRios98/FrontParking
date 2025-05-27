import { Component, EventEmitter, input } from '@angular/core';
import { Celda } from '../../models/celda.module';
import { Input,Output } from '@angular/core';
import { vistaParqueo } from '../../models/vista.models';
import { DetalleParqueo } from '../../models/detalleParqueo.module';

@Component({
  selector: 'app-detalle-celda',
  standalone: false,
  templateUrl: './detalle-celda.component.html',
  styleUrl: './detalle-celda.component.css'
})
export class DetalleCeldaComponent {

  @Input() detalleParqueo!: DetalleParqueo;
  @Output() cerrar = new EventEmitter<void>();

  vistaParqueo: vistaParqueo = {}; 
  
  cancelar(){
    this.cerrar.emit();
  }

}
