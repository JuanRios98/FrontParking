import { Component,Output,EventEmitter } from '@angular/core';
import { CeldaService } from '../../services/celda.service';
import { Celda } from '../../models/celda.module';
import { Parqueo } from '../../models/parqueo.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-celda',
  standalone: false,
  templateUrl:'./celda.component.html',
  styleUrl: './celda.component.css'
})
export class CeldaComponent {

mostrarParqueo: boolean = false;
celdaseleccionada: Celda | undefined;


abrirModalParqueo(celda: Celda) {
    this.celdaseleccionada = celda;
    this.mostrarParqueo = true;
  }

  cerrarModalParqueo() {
    this.mostrarParqueo = false;
  }


constructor(private _celdaservice: CeldaService){} 

  celdas: Celda[] = [
    {id: 1,codigo: 'A01', estado: 'Libre', tipo: 'Automovil'},
    {id: 2,codigo: 'A02', estado: 'Ocupado', tipo: 'Automovil'},
    {id: 3,codigo: 'A03', estado: 'Reservado', tipo: 'Automovil'},
  ]
mostrarModal: boolean = false;

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


