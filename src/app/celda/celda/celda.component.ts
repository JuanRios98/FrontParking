import { Component,Output,EventEmitter } from '@angular/core';
import { CeldaService } from '../../services/celda.service';
import { Celda } from '../../models/celda.module';

@Component({
  selector: 'app-celda',
  standalone: false,
  templateUrl: './celda.component.html',
  styleUrl: './celda.component.css'
})
export class CeldaComponent {

constructor(private _celdaservice: CeldaService){}  

mostrarModal: boolean = false;

abrirModalCrearCelda() {
  this.mostrarModal = true;
}

cerrarModalCrearCelda() {
  this.mostrarModal = false;
}

guardarNuevaCelda(celda: Celda) {
  // Aquí puedes llamar al servicio POST y refrescar el listado
  this._celdaservice.postCelda(celda).subscribe(() => {
    this._celdaservice.getCelda(); // Recargar la lista si es necesario
    this.mostrarModal = false;
  });
}

  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<Celda>();

  nuevaCelda: Celda = {
    id: 0,
    codigo: '',
    tipoCelda: 'Automovil',
    estadoCelda: 'Libre'
  };

  cerrarModal() {
    this.cerrar.emit();
  }

  guardarCelda() {
    this.guardar.emit(this.nuevaCelda);
  }

}


