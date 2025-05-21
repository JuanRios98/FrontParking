import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo.service';
import { ParqueoService } from '../../services/parqueo.service';
import { Celda } from '../../models/celda.module';
import { Parqueo } from '../../models/parqueo.module';
import { Vehiculo } from '../../models/vehiculo.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-parqueo',
  standalone: false,
  templateUrl: './crear-parqueo.component.html',
  styleUrl: './crear-parqueo.component.css'
})
export class CrearParqueoComponent {
  
  constructor(private fb: FormBuilder, private _vehiculoService: VehiculoService, private _parqueoService: ParqueoService) {}

  @Input() celda?: Celda;
  @Output() cerrar = new EventEmitter<void>();

  cancelar() {
    this.cerrar.emit();
  }

}

