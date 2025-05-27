import { Component,Output,EventEmitter } from '@angular/core';
import { CeldaService } from '../../services/celda.service';
import { Celda } from '../../models/celda.module';
import { Parqueo } from '../../models/parqueo.module';
import Swal from 'sweetalert2';
import { vistaParqueo } from '../../models/vista.models';
import { ParqueoService } from '../../services/parqueo.service';
import { VehiculoService } from '../../services/vehiculo.service';
import { TarifaService } from '../../services/tarifa.service';
import { DetalleParqueo } from '../../models/detalleParqueo.module';

@Component({
  selector: 'app-celda',
  standalone: false,
  templateUrl:'./celda.component.html',
  styleUrl: './celda.component.css'
})
export class CeldaComponent {

constructor(private _celdaservice: CeldaService, private _parqueoService: ParqueoService, private _vehiculoService: VehiculoService, private _tarifaService: TarifaService){} 

// mostrarParqueo: boolean = false;

  vistaParqueoDatos: vistaParqueo | null = null;
  mostrarModalParqueo = false;

  
  parqueoIdSeleccionaado!: Number;
  detalleParqueo!: DetalleParqueo;

  mostarDetalleCelda: boolean = false;
  celdaSeleccionada!: Celda;
  
//Metodo para abrir modal de detalle celda
abrirModalDetalleCelda(celdaId: number): void {
  this._parqueoService.getDetalleParqueo(celdaId).subscribe({
    next: (detalle) => {
      // Asignamos el detalle recibido a la variable que usará la vista
      this.detalleParqueo = detalle;

      // Mostramos el modal o componente de detalle
      this.mostarDetalleCelda = true;
    },
    error: (error) => {
      console.error('Error al cargar el detalle de la celda:', error);

      // Mostramos una alerta con SweetAlert
      Swal.fire({
        title: 'Error',
        text: 'No se pudo cargar el detalle del parqueo.',
        icon: 'error',
        timer: 2000,
        showConfirmButton: false
      });
    }
  });
}

cerrarModalDetalleCelda() {
  this.mostarDetalleCelda = false
}

// Metodos para mostrar y ocultar el modal de crear celda  
mostrarModal: boolean = false;

celdas: Celda[] = [
    {id: 1,codigo: 'A01', estado: 'Libre', tipo: 'Automovil'},
    {id: 2,codigo: 'A02', estado: 'Ocupado', tipo: 'Automovil'},
    {id: 3,codigo: 'A03', estado: 'Reservado', tipo: 'Automovil'},
  ]

ngOnInit() {
  this.cargarCeldas();
}

cargarCeldas() {
  this._celdaservice.getCelda().subscribe({
    next: (rs) => {
      console.log('La lisra de celda cargo correctamente', rs);
      this.celdas = rs;
    }, error: (e) => {
      console.log('Error al cargar el listado de celdas',e);
      Swal.fire({
        title: 'Error al cargar el listado de celdas',
        icon: 'error',
        timer: 1000
      });
    }
  })
}


abrirModalCrearCelda() {
  this.mostrarModal = true;
}

cerrarModalCrearCelda() {
  this.mostrarModal = false;
}

guardarNuevaCelda(celda: Celda) {
  // Aquí puedes llamar al servicio POST y refrescar el listado
  this._celdaservice.postCelda(celda).subscribe({
    next: (rs)=>{
      console.log('Celda creada correctamente',rs);

      Swal.fire({
        title: 'Celda creada correctamente',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      });

      this._celdaservice.getCelda().subscribe((data)=>{
        this.celdas = data;
        console.log('La lista de celdas se recargo correctamente',data);
      }) // Recargar la lista si es necesario
      this.mostrarModal = false;
    }, error: (e)=>{
      console.log('Error al crear la celda',e);
      Swal.fire({
        title: 'Error al crear la celda',
        icon: 'error',
        timer: 1000
      });
    }
  });
}

}


