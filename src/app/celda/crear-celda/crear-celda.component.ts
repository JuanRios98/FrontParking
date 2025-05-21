import { Component, Output,EventEmitter } from '@angular/core';
import { CeldaService } from '../../services/celda.service';
import { Celda } from '../../models/celda.module';
import { Vehiculo } from '../../models/vehiculo.module';
import { VehiculoService } from '../../services/vehiculo.service';
import { ParqueoService } from '../../services/parqueo.service';

@Component({
  selector: 'app-crear-celda',
  standalone: false,
  templateUrl: './crear-celda.component.html',
  styleUrl: './crear-celda.component.css'
})
export class CrearCeldaComponent {

  constructor(private _vehiculoService: VehiculoService, private _parqueoService: ParqueoService){}

  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<Celda>();
  
  nuevaCelda: Celda = {
    id: 0,
    codigo: '',
    tipo: 'Automovil',
    estado: 'Libre'
  };

  guardarCelda() {
    this.guardar.emit(this.nuevaCelda);
  }

  cerrarModalCrearCelda() {
    this.cerrar.emit();
  }

}

















