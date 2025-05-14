import { Component, Output,EventEmitter } from '@angular/core';
import { CeldaService } from '../../services/celda.service';
import { Celda } from '../../models/celda.module';

@Component({
  selector: 'app-crear-celda',
  standalone: false,
  templateUrl: './crear-celda.component.html',
  styleUrl: './crear-celda.component.css'
})
export class CrearCeldaComponent {

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

  cerrarModal() {
    this.cerrar.emit();
  }
}
  











