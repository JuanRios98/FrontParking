import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo.service';
import { ParqueoService } from '../../services/parqueo.service';
import { Celda } from '../../models/celda.module';
import { Parqueo } from '../../models/parqueo.module';
import { Vehiculo } from '../../models/vehiculo.module';
import Swal from 'sweetalert2';
import { vistaParqueo } from '../../models/vista.models';
import { Cliente } from '../../models/cliente.module';
import { Tarifa } from '../../models/tarifa.module';
import { TarifaService } from '../../services/tarifa.service';

@Component({
  selector: 'app-crear-parqueo',
  standalone: false,
  templateUrl: './crear-parqueo.component.html',
  styleUrl: './crear-parqueo.component.css'
})
export class CrearParqueoComponent {
  
  // constructor(private _vehiculoService: VehiculoService, private _parqueoService: ParqueoService, private _tarifaService: TarifaService) {}

//   @Input() celda!: Celda;
//   @Output() cerrar = new EventEmitter<void>();
//   @Output() guardar= new EventEmitter<void>();

// vehiculo: any = { placa: '' };
// tarifa: any = { monto: 2000 };
// parqueo: any = { fechaIngreso: new Date().toISOString(), estado: 'Activo' };

// registrar() {
//   this._vehiculoService.postVehiculo(this.vehiculo).subscribe(vehiculoCreado => {
//     this._tarifaService.postTarifa(this.tarifa).subscribe(tarifaCreada => {
//       const nuevoParqueo = {
//         vehiculoId: vehiculoCreado.id,
//         tarifaId: tarifaCreada.id,
//         celdaId: this.celda.id,
//         fechaIngreso: this.parqueo.fechaIngreso,
//         estado: 'Activo'
//       };
      
//       this._parqueoService.postParqueo(nuevoParqueo).subscribe(() => {
//         alert('✅ Parqueo registrado');
//         this.cerrar.emit(); // 🔔 Avisar al padre
//       });
//     });
//   });
// }

//   cancelar() {
//     this.cerrar.emit();
//   }

@Input() celdaSeleccionada!: Celda;
@Output() cerrado = new EventEmitter<void>();

vehiculoNuevo: Vehiculo = { placa: '' };
tarifaSeleccionada?: Tarifa;
tarifasDisponibles: Tarifa[] = [];

constructor(
  private vehiculoService: VehiculoService,
  private tarifaService: TarifaService,
  private parqueoService: ParqueoService
) {}

ngOnInit(): void {
  this.obtenerTarifaPorTipo('hora');
}

obtenerTarifaPorTipo(tipo: string) {
  this.tarifaService.getTarifaByTipo(tipo).subscribe(tarifas => {
    this.tarifasDisponibles = tarifas;
    // Selecciona la primera tarifa automáticamente si hay disponibles
    if (tarifas.length > 0) {
      this.tarifaSeleccionada = tarifas[0];
    }
  });
}

registrarParqueo() {
  if (!this.vehiculoNuevo.placa || !this.tarifaSeleccionada || !this.celdaSeleccionada?.id) {
    alert('Por favor completa todos los campos necesarios.');
    return;
  }

  if (!this.celdaSeleccionada.id) {
  alert('Celda inválida');
  return;
}
  this.vehiculoService.postVehiculo(this.vehiculoNuevo).subscribe(vehiculoCreado => {
    const nuevoParqueo: Omit<Parqueo, 'id'> = {
      fechaEntrada: new Date(),
      estado: 'Activo',
      celdaId: this.celdaSeleccionada.id!,
      vehiculoId: vehiculoCreado.id!,
      tarifaId: this.tarifaSeleccionada!.id!
    };

    this.parqueoService.postParqueo(nuevoParqueo).subscribe(() => {
      alert('✅ Parqueo registrado con éxito');
      this.cerrado.emit();
    }, error => {
      alert('❌ Error al registrar parqueo');
      console.error(error);
    });

  }, error => {
    alert('❌ Error al registrar vehículo');
    console.error(error);
  });
}

 

  
  
  


}

