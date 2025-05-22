import { Component,Output,EventEmitter } from '@angular/core';
import { CeldaService } from '../../services/celda.service';
import { Celda } from '../../models/celda.module';
import { Parqueo } from '../../models/parqueo.module';
import Swal from 'sweetalert2';
import { vistaParqueo } from '../../models/vista.models';
import { ParqueoService } from '../../services/parqueo.service';

@Component({
  selector: 'app-celda',
  standalone: false,
  templateUrl:'./celda.component.html',
  styleUrl: './celda.component.css'
})
export class CeldaComponent {

constructor(private _celdaservice: CeldaService, private _parqueoService: ParqueoService){} 

celdaseleccionada: Celda | undefined;
mostrarParqueo: boolean = false;
mostarDetalleCelda: boolean = false;
vistaParqueoSeleccionado: vistaParqueo | undefined;



//Metodo para abrir modal de detalle celda
abrirModalDetalleCelda(celda: Celda) {
  this.mostarDetalleCelda = true;
  this.celdaseleccionada = celda;
}

cerrarModalDetalleCelda(){
  this.mostarDetalleCelda = false
}







//Metodo para abrir modal de registrar parqueo


abrirModalParqueo(celda: Celda) {
    this.celdaseleccionada = celda;
    this.mostrarParqueo = true;
  }

  cerrarModalParqueo() {
    this.mostrarParqueo = false;
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


